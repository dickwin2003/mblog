import sqlite3 from 'sqlite3';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a new database
const db = new sqlite3.Database('./mblog.db');

// Read schema and data files
const schema = readFileSync('./schema.sql', 'utf8');
const data = readFileSync('./data.sql', 'utf8');

// Create tables
db.serialize(() => {
  // Execute schema
  db.exec(schema, (err) => {
    if (err) {
      console.error('Error creating schema:', err);
      return;
    }
    console.log('Schema created successfully');

    // Execute data
    db.exec(data, (err) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted successfully');
      
      // Close the database
      db.close((err) => {
        if (err) {
          console.error('Error closing database:', err);
          return;
        }
        console.log('Database closed successfully');
      });
    });
  });
});
