# Allo Investments

A full-stack web application designed for private market investing, deal syndication, and portfolio management.

## Architecture

This project is organized as a monorepo containing:
- **`frontend/`**: Next.js (React) application for the user interface, styled with Tailwind CSS and shadcn/ui.
- **`backend/`**: NestJS application providing a robust REST API, backed by Prisma ORM and PostgreSQL.

## Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL (Hosted on **Supabase**, or run locally)
- npm or yarn

## Getting Started

Follow these steps to run the project locally.

### 1. Database Setup

1. Create a project in [Supabase](https://supabase.com/).
2. In the `backend` directory, copy the `.env.example` file to create your own `.env` file, and add your Supabase database connection string (which can be found in your Supabase project under Project Settings -> Database -> Connection string):
   ```env
   # Connect to Supabase via connection pooling with Supavisor.
   DATABASE_URL="postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
   
   # Direct connection to the database. Used for migrations.
   DIRECT_URL="postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
   ```
   *(Note: Prisma recommends setting both a connection pool URL and a direct URL when using Supabase).*

### 2. Backend Setup (NestJS + Prisma)

Open a terminal and navigate to the backend directory:

```bash
cd backend
npm install
```

Push the Prisma schema to your database to create the tables:
```bash
npx prisma db push
```


Start the backend development server:
```bash
npm run start:dev
```
The API will run on `http://localhost:3001`.

### 3. Frontend Setup (Next.js)

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Copy the `.env.example` file to create your own `.env` file to ensure the API URL is configured correctly (it defaults to `http://localhost:3001/api`):
```bash
cp .env.example .env
```

Start the frontend development server:
```bash
npm run dev
```
The web application will be available at `http://localhost:3000`.

## Features

- **Dashboard**: High-level overview of active investments and portfolio performance.
- **Deals**: Browse, filter, and manage private market syndication deals.
- **Investments**: Track committed capital, wired funds, and document signatures.
- **Ledger & Fees**: Financial transaction tracking for all your entities.
- **Documents**: Centralized repository for agreements, reports, and notices.

## Tech Stack

**Frontend**:
- [Next.js](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [shadcn/ui](https://ui.shadcn.com/) (UI Components)
- [Framer Motion](https://www.framer.com/motion/) (Animations)

**Backend**:
- [NestJS](https://nestjs.com/) (Node.js Framework)
- [Prisma ORM](https://www.prisma.io/) (Database Access)
- [PostgreSQL](https://www.postgresql.org/) (Database)
