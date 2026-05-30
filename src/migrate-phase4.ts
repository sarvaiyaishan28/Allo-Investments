import { Client } from 'pg';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const connectionString = process.env.DIRECT_URL;

const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  CREATE TABLE IF NOT EXISTS "LedgerEntry" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "dealId" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    amount NUMERIC NOT NULL,
    status TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS "Fee" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "dealId" TEXT NOT NULL,
    "dealName" TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    amount NUMERIC NOT NULL,
    status TEXT NOT NULL,
    "dueDate" TIMESTAMP WITH TIME ZONE,
    "paidDate" TIMESTAMP WITH TIME ZONE,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS "FileItem" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    size NUMERIC NOT NULL,
    url TEXT NOT NULL,
    "uploadedAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "uploadedBy" TEXT NOT NULL
  );
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
    console.log('Connected to database, running migration...');
    await client.query(sql);
    console.log('Migration completed successfully!');
  } catch (err) {
    console.error('Error executing migration:', err);
  } finally {
    await client.end();
  }
}

run();
