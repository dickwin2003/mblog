import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

// 模拟签文数据库
const FORTUNE_MEANINGS = {
  VERY_GOOD: "上上签",
  GOOD: "上签",
  FAIR: "中签",
  POOR: "下签",
  VERY_POOR: "下下签"
};

interface FortuneContent {
  level: keyof typeof FORTUNE_MEANINGS;
  title: string;
  poem: string[];
  explanation: string;
  suggestion: string;
}

// 模拟一个签文内容
function getFortuneContent(number: number): FortuneContent {
  // 这里可以根据签号返回不同的内容
  return {
    level: "FAIR",
    title: "观音灵签 第" + number + "签",
    poem: [
      "宿莺枝上啼，",
      "春色渐渐归。",
      "劝君休烦恼，",
      "万事有生机。"
    ],
    explanation: "此签暗示着虽然目前可能遇到一些困难或烦恼，但情况正在逐渐好转。就像春天即将到来，万物复苏一般，您的处境也会随之改善。保持耐心和积极的心态很重要。",
    suggestion: "建议保持冷静，不要因一时的困扰而乱了方寸。春天将至，万物复苏，您的困境也将随之化解。此时不宜急躁，应当耐心等待时机。同时，也要积极寻找新的机会和可能性。"
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  // 从 URL 或 session 中获取签号
  const fortuneNumber = Number(url.searchParams.get("number")) || 1;
  const content = getFortuneContent(fortuneNumber);
  return json({ fortuneNumber, content });
}

export default function FortuneResult() {
  const { fortuneNumber, content } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-red-100">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-red-800 mb-2">
                {content.title}
              </h1>
              <span className="inline-block px-4 py-1 rounded-full text-white bg-red-700">
                {FORTUNE_MEANINGS[content.level]}
              </span>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-red-900 mb-4">签诗</h2>
              <div className="space-y-2">
                {content.poem.map((line, index) => (
                  <p key={index} className="text-lg text-red-800">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-left">
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">解签</h2>
                <p className="text-gray-700 leading-relaxed">
                  {content.explanation}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">建议</h2>
                <p className="text-gray-700 leading-relaxed">
                  {content.suggestion}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/fortune"
                className="inline-flex items-center justify-center px-6 py-2.5 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300"
              >
                重新求签
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
