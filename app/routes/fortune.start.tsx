import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function FortuneStart() {
  return (
    <Layout>
      <div className="min-h-screen bg-[url('/images/temple-bg.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-amber-200">
            <div className="text-center space-y-8">
              {/* 标题区域 */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-amber-800 font-serif">
                  求籤
                </h1>
                <p className="text-xl text-gray-700">
                  請選擇您要進行的操作
                </p>
              </div>

              {/* 提示区域 */}
              <div className="bg-amber-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  您可以選擇直接擲聖杯求籤，或是立即解籤。
                  <br />
                  建議先行擲聖杯以示對神明的敬意。
                </p>
              </div>

              {/* 按钮区域 */}
              <div className="flex justify-center gap-8 pt-6">
                <Link
                  to="/fortune/grail"
                  className="inline-flex items-center justify-center px-8 py-4 text-xl font-medium text-white bg-gradient-to-r from-amber-700 to-red-700 rounded-lg shadow-lg hover:from-amber-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300"
                >
                  擲聖杯
                </Link>
                <Link
                  to="/fortune/result"
                  className="inline-flex items-center justify-center px-8 py-4 text-xl font-medium text-gray-700 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg shadow-lg hover:from-gray-300 hover:to-gray-400 transform hover:scale-105 transition-all duration-300"
                >
                  立即解籤
                </Link>
              </div>

              {/* 返回按钮 */}
              <div className="pt-8">
                <Link
                  to="/fortune"
                  className="text-amber-700 hover:text-amber-600 underline"
                >
                  返回首頁
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
