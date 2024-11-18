import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

// 定义签文数据类型
type Fortune = {
  id: number;
  title: string;
  poem: string;
  explanation: string;
  divination: {
    general: string;
    love: string;
    business: string;
    study: string;
    health: string;
  };
};

// 加载签文数据
export async function loader({ params }: LoaderFunctionArgs) {
  const fortuneNumber = parseInt(params.number || "1");
  
  // TODO: 从Cloudflare D1数据库获取数据
  // 这里暂时使用模拟数据
  const fortune: Fortune = {
    id: fortuneNumber,
    title: `第${fortuneNumber}籤 - 吉`,
    poem: "青鸾振羽入凤池，五色祥云映碧溪。\n金榜题名开盛世，玉堂联璧显荣归。",
    explanation: "此籤表示前程光明，事事顺遂。如同青鸾振翅飞向凤池，祥云环绕，寓意功名显达，前途无量。",
    divination: {
      general: "整体运势大吉，诸事皆宜。当前形势虽有波折，但终将柳暗花明。",
      love: "姻缘和美，有情人终成眷属。已有伴侣者感情稳定，互相扶持。",
      business: "事业蒸蒸日上，投资有望获利。合作谈判皆顺，可大胆进取。",
      study: "学业进步显著，考试必有佳绩。求学深造皆宜，终有所成。",
      health: "身体康健，无须担忧。若有小恙，很快痊愈。注意作息规律。"
    }
  };

  return json({ fortune });
}

export default function FortuneDetail() {
  const { fortune } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-red-100">
          {/* 签文标题 */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-red-900 mb-2">{fortune.title}</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-800 to-red-700 mx-auto"></div>
          </div>

          {/* 签诗 */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-red-900 mb-4 flex items-center">
              <i className="fas fa-feather-alt mr-2"></i>
              籤詩
            </h2>
            <div className="bg-amber-50/50 rounded-lg p-4 border border-amber-100">
              <pre className="text-gray-800 whitespace-pre-line text-center font-serif">
                {fortune.poem}
              </pre>
            </div>
          </section>

          {/* 解签 */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-red-900 mb-4 flex items-center">
              <i className="fas fa-scroll mr-2"></i>
              解籤
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>{fortune.explanation}</p>
            </div>
          </section>

          {/* 各方面解释 */}
          <section>
            <h2 className="text-lg font-medium text-red-900 mb-4 flex items-center">
              <i className="fas fa-compass mr-2"></i>
              運勢解析
            </h2>
            <div className="space-y-4">
              {/* 总运 */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-circle text-yellow-600 mr-2"></i>
                  總運
                </h3>
                <p className="text-gray-700">{fortune.divination.general}</p>
              </div>

              {/* 姻缘 */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-heart text-red-600 mr-2"></i>
                  姻緣
                </h3>
                <p className="text-gray-700">{fortune.divination.love}</p>
              </div>

              {/* 事业 */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-briefcase text-blue-600 mr-2"></i>
                  事業
                </h3>
                <p className="text-gray-700">{fortune.divination.business}</p>
              </div>

              {/* 学业 */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-book text-green-600 mr-2"></i>
                  學業
                </h3>
                <p className="text-gray-700">{fortune.divination.study}</p>
              </div>

              {/* 健康 */}
              <div className="bg-white rounded-lg p-4 border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                  <i className="fas fa-heartbeat text-pink-600 mr-2"></i>
                  健康
                </h3>
                <p className="text-gray-700">{fortune.divination.health}</p>
              </div>
            </div>
          </section>

          {/* 注意事项 */}
          <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-sm text-red-800 flex items-start">
              <i className="fas fa-exclamation-circle mr-2 mt-0.5"></i>
              籤文僅供參考，凡事應以正面積極的態度面對，若遇重大決定，請審慎評估，切勿盲目依從。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
