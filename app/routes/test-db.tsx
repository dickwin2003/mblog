import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { testDatabase } from '../test-db';

export const loader: LoaderFunction = async ({ context }) => {
  const { env } = context;
  if (!env?.DB) {
    throw new Error('Database is not available in context');
  }

  try {
    await testDatabase(env.DB);
    return json({ success: true, message: '数据库测试完成，请查看服务器日志' });
  } catch (error) {
    console.error('Database test failed:', error);
    return json({ 
      success: false, 
      message: '数据库测试失败',
      error: error instanceof Error ? error.message : String(error)
    });
  }
};

export default function TestDB() {
  const data = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">数据库连接测试</h1>
      <div className={`p-4 rounded ${data.success ? 'bg-green-100' : 'bg-red-100'}`}>
        <p className="text-lg">{data.message}</p>
        {data.error && (
          <p className="text-red-600 mt-2">错误信息: {data.error}</p>
        )}
      </div>
    </div>
  );
}
