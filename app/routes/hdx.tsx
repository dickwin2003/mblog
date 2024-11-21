import { json } from "@remix-run/cloudflare";
import { Form, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import hdxData from '../data/hdx.json';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const no = url.searchParams.get("no");
  
  if (!no) {
    return json({ record: null });
  }

  const record = hdxData.records.find(r => r.no === parseInt(no));
  if (record) {
    // 处理签诗格式，将其分为两联
    const cleanText = record.qs.replace(/[，。]/g, '').trim();
    const verses = [];
    
    // 每7个字为一句，每14个字为一联
    for (let i = 0; i < cleanText.length; i += 7) {
      const verse = cleanText.slice(i, i + 7);
      if (verse.length === 7) {
        verses.push(verse);
      }
    }

    // 将诗句分组为上下联
    record.formattedQs = [];
    for (let i = 0; i < verses.length; i += 2) {
      if (verses[i + 1]) {
        record.formattedQs.push({
          first: verses[i],
          second: verses[i + 1]
        });
      }
    }
  }
  return json({ record });
};

export default function Hdx() {
  const data = useLoaderData<typeof loader>();
  const record = data.record;

  // 处理签诗格式
  const formatPoem = (poem: string) => {
    // 移除所有标点符号和多余的空格
    const cleanPoem = poem.replace(/[，。？！、；：""'']/g, '').replace(/\s+/g, '');
    
    // 按照7个字一句分割
    const verses: string[] = [];
    for (let i = 0; i < cleanPoem.length; i += 7) {
      const verse = cleanPoem.slice(i, i + 7);
      if (verse.length === 7) {  // 确保每句都是7个字
        verses.push(verse);
      }
    }
    
    // 按照两句一组分组
    const couplets = [];
    for (let i = 0; i < verses.length; i += 2) {
      if (i + 1 < verses.length) {
        couplets.push([verses[i], verses[i + 1]]);
      } else if (verses[i]) {
        // 如果最后剩一句，也要显示
        couplets.push([verses[i]]);
      }
    }
    return couplets;
  };

  // 处理仙机内容
  const formatXianJi = (xianji: string) => {
    // 移除多余的空格和换行
    const cleanXianji = xianji.replace(/\s+/g, '');
    // 按分号分割不同事项
    const parts = cleanXianji.split(/[;；]/);
    
    // 解析每个部分为标题和内容
    return parts.map(part => {
      const [title, content] = part.split(/[：:]/);
      return {
        title: title?.trim() || '',
        content: content?.trim() || ''
      };
    }).filter(item => item.title && item.content);
  };

  const [inputNo, setInputNo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (parseInt(inputNo) < 1 || parseInt(inputNo) > 100) {
      e.preventDefault();
      alert("请输入1-100之间的数字");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Form method="get" onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <label htmlFor="no" className="block text-sm font-medium text-gray-700 mb-1">
              请输入签号 (1-100):
            </label>
            <input
              type="number"
              name="no"
              id="no"
              min="1"
              max="100"
              value={inputNo}
              onChange={(e) => setInputNo(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            查询
          </button>
        </div>
      </Form>

      {record && (
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">第{record.no}签</h1>
            <p className="mt-2 text-xl font-medium">{record.qt}</p>
            <p className={`mt-2 text-lg font-medium ${
              record.jx.includes("上") ? "text-green-600" :
              record.jx.includes("中") ? "text-blue-600" : "text-red-600"
            }`}>{record.jx}</p>
          </div>

          <div className="font-poetry space-y-4">
            {formatPoem(record.qs).map((couplet, index) => (
              <div key={index} className="text-lg leading-loose whitespace-pre">
                {couplet[0]}{couplet[1] ? ` ${couplet[1]}` : ''}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium mb-2">解曰：</h2>
              <p className="text-gray-700">{record.jy}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-2">仙机：</h2>
              <div className="space-y-2">
                {formatXianJi(record.xj).map((item, index) => (
                  <div key={index} className="text-gray-700">
                    <span className="font-medium">{item.title}：</span>
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
            {record.dg && (
              <div>
                <h2 className="text-lg font-medium mb-2">典故：</h2>
                <p className="text-gray-700">{record.dg}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
