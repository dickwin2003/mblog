/// <reference lib="WebWorker" />

import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createEventHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => ({
    env: context.env,
  }),
});

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});
