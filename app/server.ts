import { createPagesFunctionHandler } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    env: context.env,
  }),
});

export function onRequest(context: any) {
  return handleRequest(context);
}
