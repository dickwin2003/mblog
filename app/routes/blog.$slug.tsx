import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import Layout from "~/components/Layout";
import { getPost, type Post } from "~/models/post.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "Expected params.slug");
  
  const post = getPost(params.slug);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  
  return json({ post });
};

export default function BlogPost() {
  const { post } = useLoaderData<{ post: Post }>();

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4 w-full">
            <div className="bg-white flex flex-col justify-start p-6">
              <h1 className="text-3xl font-bold pb-4">{post.title}</h1>
              <p className="text-sm pb-8">
                发布于 {new Date(post.created_at).toLocaleDateString()}
                {post.updated_at !== post.created_at && 
                  ` • 更新于 ${new Date(post.updated_at).toLocaleDateString()}`}
              </p>
              <div className="prose max-w-none pb-8">
                {post.content}
              </div>
            </div>
          </article>
        </section>

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
            <h3 className="text-xl font-semibold mb-3">分享文章</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="social-link text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link text-2xl">
                <i className="fab fa-weibo"></i>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
