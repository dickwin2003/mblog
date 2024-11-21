import { createClient } from '@libsql/client';

declare global {
  var db: ReturnType<typeof createClient> | undefined;
}

if (!global.db) {
  global.db = createClient({
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
}

export { db };
