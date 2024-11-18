import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { getPosts, type Post } from "~/models/post.server";

export const meta: MetaFunction = () => {
  return [
    { title: "博客 - 線上靈籤" },
    { name: "description", content: "Read our latest blog posts about fortune telling and spiritual guidance" },
  ];
};

export async function loader() {
  const posts = await getPosts();
  return json({ posts });
}

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Main Content */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <h1 className="text-4xl font-bold mb-8">博客文章</h1>
          
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col shadow my-4 w-full">
              <div className="bg-white flex flex-col justify-start p-6">
                <a href={`/blog/${post.slug}`} className="text-3xl font-bold hover:text-blue-700 pb-4">
                  {post.title}
                </a>
                <p className="text-sm pb-3">
                  发布于 {new Date(post.created_at).toLocaleDateString()}
                </p>
                <p className="pb-6">
                  {post.content.substring(0, 200)}...
                </p>
                <a href={`/blog/${post.slug}`} className="text-blue-700 hover:text-blue-900">
                  继续阅读 →
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <h3 className="text-xl font-semibold mb-3">分类</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  抽签解读
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  灵性指导
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  每日运势
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <h3 className="text-xl font-semibold mb-3">订阅更新</h3>
            <p className="mb-4">
              订阅我们的博客更新，获取最新的文章和运势指导。
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="您的邮箱地址"
                className="bg-gray-100 text-gray-900 mb-4 px-4 py-2 rounded"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3"
              >
                订阅
              </button>
            </form>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
