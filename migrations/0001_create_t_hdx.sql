-- Migration: Create t_hdx table
CREATE TABLE IF NOT EXISTS t_hdx (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status INTEGER DEFAULT 1,
    category TEXT,
    tags TEXT,
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0
);
