import { Client } from 'pg';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const connectionString = process.env.DIRECT_URL;

const sql = `
  ALTER TABLE "Investment" ADD COLUMN IF NOT EXISTS "txHash" TEXT;
  ALTER TABLE "Investment" ADD COLUMN IF NOT EXISTS "chain" TEXT;
`;

async function run() {
  if (!connectionString) {
    console.error('No DIRECT_URL found in .env');
    process.exit(1);
  }

  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();
    console.log('Connected to database, running migration 4.1...');
    await client.query(sql);
    console.log('Migration 4.1 completed successfully!');
  } catch (err) {
    console.error('Error executing migration:', err);
  } finally {
    await client.end();
  }
}

run();
