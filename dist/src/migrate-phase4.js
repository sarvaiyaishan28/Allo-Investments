"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
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
    const client = new pg_1.Client({
        connectionString,
    });
    try {
        await client.connect();
        console.log('Connected to database, running migration...');
        await client.query(sql);
        console.log('Migration completed successfully!');
    }
    catch (err) {
        console.error('Error executing migration:', err);
    }
    finally {
        await client.end();
    }
}
run();
//# sourceMappingURL=migrate-phase4.js.map