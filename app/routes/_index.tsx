import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "黃大仙靈簽殿堂 - 虔誠求籤" },
    { name: "description", content: "黃大仙靈簽殿堂，承蒙黃大仙師恩准，傳承古法，指引迷津" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="h-[calc(100vh-6rem)] flex flex-col justify-start">
        {/* 殿堂標題 */}
        <div className="bg-gradient-to-b from-amber-50 to-amber-100/80 rounded-lg border-2 border-amber-900/20 p-4 mx-2 mb-2 text-center">
          <div className="mb-2">
            <i className="fas fa-dharmachakra text-amber-900/80 text-3xl"></i>
          </div>
          <h1 className="text-xl font-bold mb-1 text-amber-900">黃大仙靈簽殿堂</h1>
          <p className="text-amber-900/80 text-sm">承蒙黃大仙師恩准 • 傳承古法 • 指引迷津</p>
        </div>

        {/* 求籤按鈕 */}
        <div className="text-center py-2">
          <Link
            to="/fortune"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300"
          >
            <i className="fas fa-pray mr-2"></i>
            開始求籤
          </Link>
        </div>

        {/* 求籤步驟和須知 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
          {/* 求籤步驟 */}
          <section className="bg-white/80 rounded-lg shadow-sm p-3 border border-red-100">
            <h2 className="text-base font-medium text-red-900 mb-2 flex items-center">
              <i className="fas fa-list-ol mr-2 text-red-700"></i>
              求籤步驟
            </h2>
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-medium shrink-0 text-xs">
                  1
                </div>
                <div className="ml-2">
                  <p className="text-gray-900 text-xs leading-4">
                    <span className="font-medium">虔誠參拜：</span>
                    默念姓名、年齡，祈求指點
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-medium shrink-0 text-xs">
                  2
                </div>
                <div className="ml-2">
                  <p className="text-gray-900 text-xs leading-4">
                    <span className="font-medium">專心祈願：</span>
                    默想所求事項，保持專注
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-medium shrink-0 text-xs">
                  3
                </div>
                <div className="ml-2">
                  <p className="text-gray-900 text-xs leading-4">
                    <span className="font-medium">求取靈籤：</span>
                    點擊按鈕，虔心等待指示
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 求籤須知 */}
          <section className="bg-white/80 rounded-lg shadow-sm p-3 border border-red-100">
            <h2 className="text-base font-medium text-red-900 mb-2 flex items-center">
              <i className="fas fa-exclamation-circle mr-2 text-red-700"></i>
              求籤須知
            </h2>
            <div className="space-y-1.5 text-xs">
              <p className="flex items-start text-gray-900">
                <i className="fas fa-circle text-[3px] mt-1.5 mr-2 text-red-700"></i>
                每日限求一次，切勿重複
              </p>
              <p className="flex items-start text-gray-900">
                <i className="fas fa-circle text-[3px] mt-1.5 mr-2 text-red-700"></i>
                需懷虔誠、恭敬之心
              </p>
              <p className="flex items-start text-gray-900">
                <i className="fas fa-circle text-[3px] mt-1.5 mr-2 text-red-700"></i>
                所求事項須明確具體
              </p>
              <p className="flex items-start text-gray-900">
                <i className="fas fa-circle text-[3px] mt-1.5 mr-2 text-red-700"></i>
                籤詩僅供參考指引
              </p>
            </div>
          </section>
        </div>

        {/* 殿堂介紹 */}
        <section className="bg-white/80 rounded-lg shadow-sm p-3 border border-red-100 mt-3 mx-2">
          <p className="text-xs text-gray-900 leading-4 text-center">
            黃大仙靈簽殿堂秉承慈悲精神，為眾生指引迷津。傳承傳統文化，以現代科技傳遞千年智慧。
          </p>
        </section>
      </div>
    </Layout>
  );
}
