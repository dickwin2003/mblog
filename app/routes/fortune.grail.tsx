import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const fortuneNumber = Number(url.searchParams.get("fortune")) || 1;
  // 随机判定是圣杯还是阴杯 (50% 概率是圣杯)
  const isHolyGrail = Math.random() < 0.5;
  return json({ isHolyGrail, fortuneNumber });
}

export default function FortuneGrail() {
  const { isHolyGrail, fortuneNumber } = useLoaderData<typeof loader>();

  // 将数字转换为中文数字
  const fortuneNumberText = fortuneNumber.toString();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-red-100">
          <div className="text-center space-y-6">            
            <div className="py-8 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-red-800">
                  擲聖杯
                </h1>
              </div>

              <div className="bg-red-50 p-8 rounded-lg space-y-6">
                {isHolyGrail ? (
                  <>
                    <p className="text-xl text-red-700">
                      恭喜您！您為「第{fortuneNumberText}籤」擲出了「聖杯」，神明表示這枝是靈籤！讓我來為您解說此籤吧。
                    </p>
                    <div className="flex justify-center">
                      <Link
                        to={`/fortune/result?fortune=${fortuneNumber}`}
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300"
                      >
                        解籤
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xl text-gray-700">
                      您為「第{fortuneNumberText}籤」擲出了陰杯，神明表示此籤不靈！請誠心祈禱後重新求籤。
                    </p>
                    <div className="flex justify-center">
                      <Link
                        to="/fortune"
                        className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300"
                      >
                        重新求籤
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
