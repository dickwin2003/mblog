import { exec } from 'child_process';
import { promisify } from 'util';
import { readFileSync } from 'fs';

const execAsync = promisify(exec);

async function migrateDatabase() {
  try {
    // Execute schema
    console.log('Applying schema...');
    await execAsync('npx wrangler d1 execute mblog-db --file=./schema.sql');
    console.log('Schema applied successfully');

    // Execute data
    console.log('Importing data...');
    await execAsync('npx wrangler d1 execute mblog-db --file=./data.sql');
    console.log('Data imported successfully');

    console.log('Database migration completed successfully');
  } catch (error) {
    console.error('Error during migration:', error);
  }
}

migrateDatabase();
