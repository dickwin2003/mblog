import { createCookieSessionStorage } from "@remix-run/cloudflare";

// 使用环境变量中的 SESSION_SECRET，如果没有则使用默认值
const SESSION_SECRET = "your-session-secret-key-at-least-32-chars-long";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__fortune",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const FORTUNE_KEY = "last_fortune_time";

export async function getLastFortuneTime(
  request: Request,
  context: { env: Env }
): Promise<string | null> {
  const session = await getSession(request, context);
  return session.get(FORTUNE_KEY);
}

export async function setLastFortuneTime(
  request: Request,
  context: { env: Env },
  time: string
): Promise<string> {
  const session = await getSession(request, context);
  session.set(FORTUNE_KEY, time);
  return sessionStorage.commitSession(session);
}

export async function canDrawFortune(
  request: Request,
  context: { env: Env }
): Promise<boolean> {
  const lastTime = await getLastFortuneTime(request, context);
  if (!lastTime) return true;

  const lastDate = new Date(lastTime).toDateString();
  const today = new Date().toDateString();
  return lastDate !== today;
}

export async function getSession(
  request: Request,
  context: { env: Env }
): Promise<Session> {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie, context);
}
