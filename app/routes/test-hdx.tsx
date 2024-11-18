import { json } from '@remix-run/node';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { useLoaderData, Form } from '@remix-run/react';
import { createHDX, listHDX, type HDX } from '../models/hdx.server';

export const loader: LoaderFunction = async ({ request, context }) => {
    const { env } = context;
    if (!env?.DB) {
        throw new Error('Database is not available in context');
    }

    try {
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '1');
        const result = await listHDX(env.DB, { page, limit: 10 });
        return json(result);
    } catch (error) {
        console.error('Failed to load HDX items:', error);
        return json({ 
            items: [], 
            total: 0,
            error: error instanceof Error ? error.message : String(error)
        });
    }
};

export const action: ActionFunction = async ({ request, context }) => {
    const { env } = context;
    if (!env?.DB) {
        throw new Error('Database is not available in context');
    }

    try {
        const formData = await request.formData();
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const author = formData.get('author') as string;
        const category = formData.get('category') as string;
        const tags = formData.get('tags') as string;

        if (!title || !content) {
            throw new Error('Title and content are required');
        }

        const success = await createHDX(env.DB, {
            title,
            content,
            author,
            status: 1,
            category,
            tags
        });

        return json({ success });
    } catch (error) {
        console.error('Failed to create HDX:', error);
        return json({ 
            success: false,
            error: error instanceof Error ? error.message : String(error)
        });
    }
};

export default function TestHDX() {
    const { items, total, error } = useLoaderData<{ items: HDX[]; total: number; error?: string }>();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">测试 HDX 数据库操作</h1>
            
            {error && (
                <div className="bg-red-100 p-4 rounded mb-4">
                    <p className="text-red-600">{error}</p>
                </div>
            )}

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">添加新条目</h2>
                <Form method="post" className="space-y-4">
                    <div>
                        <label className="block mb-2">标题：</label>
                        <input
                            type="text"
                            name="title"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">内容：</label>
                        <textarea
                            name="content"
                            className="w-full p-2 border rounded"
                            rows={4}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">作者：</label>
                        <input
                            type="text"
                            name="author"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">分类：</label>
                        <input
                            type="text"
                            name="category"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-2">标签：</label>
                        <input
                            type="text"
                            name="tags"
                            className="w-full p-2 border rounded"
                            placeholder="用逗号分隔多个标签"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        提交
                    </button>
                </Form>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">现有条目 (总计: {total})</h2>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="border p-4 rounded">
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.content}</p>
                            <div className="mt-2 text-sm text-gray-500">
                                <span>作者: {item.author || '匿名'}</span>
                                {item.category && <span className="ml-4">分类: {item.category}</span>}
                                {item.tags && <span className="ml-4">标签: {item.tags}</span>}
                            </div>
                            <div className="mt-2 text-sm text-gray-500">
                                <span>浏览: {item.views}</span>
                                <span className="ml-4">点赞: {item.likes}</span>
                                <span className="ml-4">创建时间: {new Date(item.created_at).toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
