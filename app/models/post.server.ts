import Database from "better-sqlite3";
import { join } from "path";

const db = new Database(join(process.cwd(), "posts.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export function getPosts() {
  return db.prepare("SELECT * FROM posts ORDER BY created_at DESC").all() as Post[];
}

export function getPost(slug: string) {
  return db.prepare("SELECT * FROM posts WHERE slug = ?").get(slug) as Post | undefined;
}

export function createPost({ title, slug, content }: Pick<Post, "title" | "slug" | "content">) {
  const stmt = db.prepare(`
    INSERT INTO posts (title, slug, content)
    VALUES (?, ?, ?)
  `);
  
  const result = stmt.run(title, slug, content);
  return result.lastInsertRowid;
}

export function updatePost(
  id: number,
  { title, slug, content }: Partial<Pick<Post, "title" | "slug" | "content">>
) {
  const updates: string[] = [];
  const values: any[] = [];

  if (title) {
    updates.push("title = ?");
    values.push(title);
  }
  if (slug) {
    updates.push("slug = ?");
    values.push(slug);
  }
  if (content) {
    updates.push("content = ?");
    values.push(content);
  }
  
  updates.push("updated_at = CURRENT_TIMESTAMP");
  values.push(id);

  const stmt = db.prepare(`
    UPDATE posts
    SET ${updates.join(", ")}
    WHERE id = ?
  `);
  
  return stmt.run(...values);
}

export function deletePost(id: number) {
  const stmt = db.prepare("DELETE FROM posts WHERE id = ?");
  return stmt.run(id);
}
