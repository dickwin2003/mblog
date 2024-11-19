import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Fortune() {
  return (
    <Layout>
      <div className="min-h-screen bg-[url('/images/temple-bg.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-amber-200">
            <div className="text-center space-y-8">
              {/* 标题区域 */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-amber-800 font-serif">
                  黃大仙靈簽
                </h1>
                <p className="text-xl text-gray-700">
                  求神問卜，明燈指引
                </p>
              </div>

              {/* 介绍区域 */}
              <div className="bg-amber-50 p-8 rounded-lg space-y-6 text-left">
                <h2 className="text-2xl font-bold text-amber-800 text-center mb-6">
                  關於黃大仙
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  黃大仙，又稱赤松黃大仙，本名黃初平，為道教神仙。據傳他生於東晉，得道成仙後常顯靈助世人，
                  被尊稱為「黃大仙」。香港黃大仙祠是香港最著名的廟宇之一，香火鼎盛，每天都有大量信眾前來參拜求籤。
                </p>
              </div>

              {/* 求签步骤说明 */}
              <div className="bg-red-50 p-8 rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-red-800 text-center mb-6">
                  求籤步驟
                </h2>
                <ol className="list-decimal list-inside space-y-4 text-left">
                  <li className="text-gray-700">
                    虔誠祈禱，心中默念姓名、年齡及所求事項
                  </li>
                  <li className="text-gray-700">
                    擲聖杯請示神明是否允許求籤
                  </li>
                  <li className="text-gray-700">
                    若得聖杯，方可解籤；若為陰杯，需重新祈求
                  </li>
                  <li className="text-gray-700">
                    虔誠參詳籤文，明白神明指引
                  </li>
                </ol>
              </div>

              {/* 注意事项 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 text-left">
                <h3 className="font-bold text-yellow-800 mb-2">求籤須知：</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-yellow-700">
                    求籤前應先行沐浴淨身，心存虔誠
                  </li>
                  <li className="text-yellow-700">
                    每日限求一次，切勿反覆求問同一事項
                  </li>
                  <li className="text-yellow-700">
                    籤文僅供參考，最重要的是明白其中道理
                  </li>
                </ul>
              </div>

              {/* 开始求签按钮 */}
              <div className="pt-6">
                <Link
                  to="/fortune/start"
                  className="inline-flex items-center justify-center px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-amber-700 to-red-700 rounded-lg shadow-lg hover:from-amber-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
                >
                  開始求籤
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
