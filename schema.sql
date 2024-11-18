DROP TABLE IF EXISTS t_hdx;
CREATE TABLE t_hdx (
    no INTEGER PRIMARY KEY,
	qt TEXT NOT NULL,
    jx TEXT NOT NULL,
    qs TEXT NOT NULL,
    jy TEXT NOT NULL,
    xj TEXT NOT NULL,
    dg TEXT NOT NULL
);

DROP TABLE IF EXISTS fortunes;
CREATE TABLE fortunes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    poem TEXT NOT NULL,
    explanation TEXT NOT NULL,
    general TEXT NOT NULL,
    love TEXT NOT NULL,
    business TEXT NOT NULL,
    study TEXT NOT NULL,
    health TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 触发器：更新updated_at字段
CREATE TRIGGER IF NOT EXISTS fortunes_updated_at
AFTER UPDATE ON fortunes
BEGIN
    UPDATE fortunes 
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = NEW.id;
END;
