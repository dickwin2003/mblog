import type { D1Database } from '@cloudflare/workers-types';

export type HDX = {
    id: number;
    title: string;
    content: string;
    author?: string;
    created_at: string;
    updated_at: string;
    status: number;
    category?: string;
    tags?: string;
    views: number;
    likes: number;
};

// 添加重试机制
async function withRetry<T>(
    operation: () => Promise<T>,
    maxRetries = 3,
    delay = 1000
): Promise<T> {
    let lastError: any;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await operation();
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error);
            lastError = error;
            if (i < maxRetries - 1) {
                console.log(`Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
            }
        }
    }
    
    throw lastError;
}

export async function createHDX(db: D1Database, hdx: Omit<HDX, 'id' | 'created_at' | 'updated_at' | 'views' | 'likes'>) {
    return withRetry(async () => {
        const { title, content, author, status, category, tags } = hdx;
        const stmt = db.prepare(
            `INSERT INTO t_hdx (title, content, author, status, category, tags)
             VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(title, content, author, status, category, tags);
        
        const result = await stmt.run();
        return result.success;
    });
}

export async function getHDX(db: D1Database, id: number): Promise<HDX | null> {
    return withRetry(async () => {
        const stmt = db.prepare('SELECT * FROM t_hdx WHERE id = ?').bind(id);
        const result = await stmt.first<HDX>();
        return result || null;
    });
}

export async function updateHDX(db: D1Database, id: number, updates: Partial<HDX>) {
    return withRetry(async () => {
        const sets: string[] = [];
        const values: any[] = [];
        
        Object.entries(updates).forEach(([key, value]) => {
            if (value !== undefined && !['id', 'created_at'].includes(key)) {
                sets.push(`${key} = ?`);
                values.push(value);
            }
        });
        
        if (sets.length === 0) return false;
        
        sets.push('updated_at = CURRENT_TIMESTAMP');
        values.push(id);
        
        const stmt = db.prepare(
            `UPDATE t_hdx SET ${sets.join(', ')} WHERE id = ?`
        ).bind(...values);
        
        const result = await stmt.run();
        return result.success;
    });
}

export async function deleteHDX(db: D1Database, id: number) {
    return withRetry(async () => {
        const stmt = db.prepare('DELETE FROM t_hdx WHERE id = ?').bind(id);
        const result = await stmt.run();
        return result.success;
    });
}

export async function listHDX(
    db: D1Database,
    {
        page = 1,
        limit = 10,
        category,
        status
    }: {
        page?: number;
        limit?: number;
        category?: string;
        status?: number;
    }
): Promise<{ items: HDX[]; total: number }> {
    return withRetry(async () => {
        const conditions: string[] = ['1 = 1'];
        const values: any[] = [];
        
        if (category) {
            conditions.push('category = ?');
            values.push(category);
        }
        
        if (status !== undefined) {
            conditions.push('status = ?');
            values.push(status);
        }
        
        const whereClause = conditions.join(' AND ');
        const offset = (page - 1) * limit;
        
        // Get total count
        const countStmt = db.prepare(
            `SELECT COUNT(*) as total FROM t_hdx WHERE ${whereClause}`
        ).bind(...values);
        const countResult = await countStmt.first<{ total: number }>();
        const total = countResult?.total || 0;
        
        // Get items
        const stmt = db.prepare(
            `SELECT * FROM t_hdx 
             WHERE ${whereClause} 
             ORDER BY created_at DESC 
             LIMIT ? OFFSET ?`
        ).bind(...values, limit, offset);
        
        const items = await stmt.all<HDX>();
        return {
            items: items.results as HDX[],
            total
        };
    });
}

// 增加浏览量
export async function incrementViews(db: D1Database, id: number) {
    return withRetry(async () => {
        const stmt = db.prepare(
            'UPDATE t_hdx SET views = views + 1 WHERE id = ?'
        ).bind(id);
        const result = await stmt.run();
        return result.success;
    });
}

// 增加点赞数
export async function incrementLikes(db: D1Database, id: number) {
    return withRetry(async () => {
        const stmt = db.prepare(
            'UPDATE t_hdx SET likes = likes + 1 WHERE id = ?'
        ).bind(id);
        const result = await stmt.run();
        return result.success;
    });
}
