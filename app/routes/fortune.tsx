import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/cloudflare";
import { Link, Form, useActionData, useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
  // 生成随机签号 (1-100)
  const fortuneNumber = Math.floor(Math.random() * 100) + 1;
  return json({ fortuneNumber });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("action");
  const fortuneNumber = formData.get("fortuneNumber");

  if (action === "interpret") {
    return redirect(`/fortune/result?fortune=${fortuneNumber}`);
  }

  return null;
}

export default function Fortune() {
  const { fortuneNumber } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-red-100">
          <div className="text-center space-y-6">            
            <div className="py-8 space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600">
                  求籤之前，請先默念自己的姓名、出生年月日時辰、住址，
                  <br />
                  並誠心祈求神明指點迷津。
                </p>
              </div>
              <div className="bg-red-50 p-8 rounded-lg space-y-4">
                <h2 className="text-2xl font-bold text-red-800">
                  您求得了「第{fortuneNumber}籤」
                </h2>
                <p className="text-lg text-gray-700">
                  您可以選擇擲聖杯來判定此籤是否為靈籤，或者直接查看解籤。
                </p>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-700">
                  提醒：若選擇擲聖杯，必須擲出聖杯才能解籤，若為陰杯則需重新求籤。
                  <br />
                  向神明求籤是莊嚴的事，請勿因抽中下籤而敷衍了事。
                </p>
              </div>
              
              <div className="flex justify-center gap-6 pt-4">
                <Link
                  to={`/fortune/grail?fortune=${fortuneNumber}`}
                  prefetch="intent"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300"
                >
                  擲聖杯
                </Link>

                <Form method="post" className="contents">
                  <input type="hidden" name="action" value="interpret" />
                  <input type="hidden" name="fortune" value={fortuneNumber} />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border-2 border-red-800 text-red-800 hover:bg-red-50 rounded-lg shadow-lg transition-colors duration-300"
                  >
                    直接解籤
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
