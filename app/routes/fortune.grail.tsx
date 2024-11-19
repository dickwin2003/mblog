import { redirect, type ActionFunctionArgs } from "@remix-run/cloudflare";
import { Form, useNavigation } from "@remix-run/react";
import Layout from "~/components/Layout";

/**
 * Loader function to handle the request and return the fortune number.
 * @param {LoaderFunctionArgs} args - The loader function arguments.
 * @returns {Promise<json>} - A JSON response with the fortune number.
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const fortuneNumber = Number(url.searchParams.get("number")) || 1;
  const isBlessed = Math.random() < 0.5;  // 50% 概率为圣杯
  
  // 直接重定向到结果页面或重新求签
  if (isBlessed) {
    return redirect(`/fortune/result?number=${fortuneNumber}`);
  } else {
    return redirect('/fortune');
  }
}

/**
 * Action function to handle the form submission.
 * @param {ActionFunctionArgs} args - The action function arguments.
 * @returns {Promise<redirect>} - A redirect response.
 */
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = formData.get("result");
  const number = formData.get("number");

  if (!number || Number(number) < 1 || Number(number) > 100) {
    return redirect('/fortune');
  }

  if (result === "success") {
    return redirect(`/fortune/result?number=${number}`);
  }
  return redirect('/fortune');
}

/**
 * The FortuneGrail component.
 * @returns {JSX.Element} - The JSX element representing the component.
 */
export default function FortuneGrail() {
  const navigation = useNavigation();
  const isRolling = navigation.state === "submitting";

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-red-100">
          <div className="text-center space-y-6">
            <div className="py-8 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-red-800">擲聖杯</h1>
              </div>

              <div className="bg-red-50 p-8 rounded-lg space-y-6">
                <p className="text-xl text-gray-700">
                  請虔誠祈禱後選擇結果
                </p>
                <div className="flex justify-center gap-4">
                  <Form method="post" className="contents">
                    <input type="hidden" name="result" value="success" />
                    <button
                      type="submit"
                      disabled={isRolling}
                      className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-800 to-red-700 rounded-lg shadow-lg hover:from-red-700 hover:to-red-600 transition-colors duration-300 disabled:opacity-50"
                    >
                      {isRolling ? "擲杯中..." : "聖杯"}
                    </button>
                  </Form>
                  <Form method="post" className="contents">
                    <input type="hidden" name="result" value="fail" />
                    <button
                      type="submit"
                      disabled={isRolling}
                      className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-600 transition-colors duration-300 disabled:opacity-50"
                    >
                      {isRolling ? "擲杯中..." : "陰杯"}
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
