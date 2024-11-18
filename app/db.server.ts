import type { D1Database } from '@cloudflare/workers-types';

declare global {
  interface Env {
    DB: D1Database;
  }
}

let db: D1Database | null = null;

export function getDb(context: { env: Env }) {
  if (!context.env?.DB) {
    throw new Error('Database is not configured in environment');
  }
  if (!db) {
    db = context.env.DB;
  }
  return db;
}

export type Fortune = {
  id: number;
  title: string;
  poem: string;
  explanation: string;
  general: string;
  love: string;
  business: string;
  study: string;
  health: string;
  created_at: string;
  updated_at: string;
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
      lastError = error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }
  
  throw lastError;
}

export async function getFortune(id: number, context: { env: Env }): Promise<Fortune | null> {
  const db = getDb(context);
  return withRetry(async () => {
    try {
      const stmt = db.prepare('SELECT * FROM fortunes WHERE id = ?').bind(id);
      const result = await stmt.first<Fortune>();
      return result || null;
    } catch (error) {
      console.error('Error getting fortune:', error);
      throw error;
    }
  });
}

export async function getRandomFortune(context: { env: Env }): Promise<Fortune | null> {
  const db = getDb(context);
  return withRetry(async () => {
    try {
      const stmt = db.prepare('SELECT * FROM fortunes ORDER BY RANDOM() LIMIT 1');
      const result = await stmt.first<Fortune>();
      return result || null;
    } catch (error) {
      console.error('Error getting random fortune:', error);
      throw error;
    }
  });
}

// 添加数据库健康检查
export async function checkDatabaseHealth(context: { env: Env }): Promise<boolean> {
  const db = getDb(context);
  try {
    const result = await db.prepare('SELECT 1').first();
    return result !== null;
  } catch (error) {
    console.error('Database health check failed:', error);
    return false;
  }
}

export async function getFortuneByNo(no: number, context: { env: Env }) {
  const db = getDb(context);
  return withRetry(async () => {
    try {
      const fortune = await db
        .prepare("SELECT no, qt, jx, qs, jy, xj, dg FROM t_hdx WHERE no = ?")
        .bind(no)
        .first();
      return fortune || null;
    } catch (error) {
      console.error('Error getting fortune by number:', error);
      throw error;
    }
  });
}
