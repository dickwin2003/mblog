-- Migration: Create fortunes table
CREATE TABLE IF NOT EXISTS fortunes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    poem TEXT NOT NULL,
    explanation TEXT NOT NULL,
    general TEXT NOT NULL,
    love TEXT NOT NULL,
    business TEXT NOT NULL,
    study TEXT NOT NULL,
    health TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
