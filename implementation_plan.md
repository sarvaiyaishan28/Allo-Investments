# Goal: Implement NestJS Backend with Supabase (Module-Wise)

The goal is to build a robust, scalable backend using **NestJS** and **Supabase (PostgreSQL)** for the Allo Investment platform. To ensure better understanding and manageable implementation, this will be executed in a **module-by-module** approach. 

I will only start working on a specific module when you explicitly instruct me to do so (e.g., "start working on Deals module").

## Architecture Decisions
- **Project Structure:** Monorepo style. The existing Next.js app will be moved into a `frontend` folder, and the NestJS app will be created in a `backend` folder within `c:\Ishan Project\AlloInvestment`.
- **ORM:** Prisma
- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase JWT Authentication

---

## Proposed Module-Wise Implementation

### Phase 0: Core Setup (Ready to start)
*This phase must be completed before any modules can be built.*
- Restructure repository: Move existing Next.js files into a `frontend` directory.
- Initialize the NestJS application (`@nestjs/cli`) in a `backend` directory.
- Setup Supabase project (Database connection strings).
- Install and configure Prisma in the backend.
- Create the initial database schema and run the first migration.
- Setup global configuration, exception filters, and base API structure.

### Phase 1: Deals Module (Pending your command to start)
*You will say: "Start working on Deals module"*
- **Database:** Map the `Deal` interface to the `deals` database table.
- **NestJS:** Generate `DealsModule`, `DealsController`, `DealsService`.
- **Features:** 
  - CRUD operations for Deals.
  - Endpoints to fetch active marketplace deals.
- **Integration:** Update the Next.js frontend to fetch Deals from the new API instead of `mock-data.ts`.

### Phase 2: Investments Module (Pending your command to start)
*You will say: "Start working on Investment module"*
- **Database:** Map the `Investment` interface to the `investments` database table (with foreign keys to deals).
- **NestJS:** Generate `InvestmentsModule`, `InvestmentsController`, `InvestmentsService`.
- **Features:** 
  - Create investment commitments.
  - Track investment status (invited, signed, committed) and KYC status.
- **Integration:** Update the frontend to handle investment flows via the backend.

### Phase 3: Users & Auth Module (Pending your command to start)
- **Database:** Map the `User` and `Identity` interfaces.
- **NestJS:** Generate `AuthModule` and `UsersModule`.
- **Features:** Supabase JWT validation, user profiles, role management (investor vs fund_manager).
- **Integration:** Hook up the frontend `AuthProvider` and `WalletProvider` to the backend.

### Phase 4: Financials Module (Pending your command to start)
- **Database:** Map `LedgerEntry` and `Fee` interfaces.
- **NestJS:** Generate `LedgerModule` and `FeesModule`.
- **Features:** Record capital calls, distributions, and fee tracking.
- **Integration:** Update frontend financial dashboards.

### Phase 5: Assets & Entities Module (Pending your command to start)
- **Database:** Map `Asset` and `Entity` interfaces.
- **NestJS:** Generate `AssetsModule` and `EntitiesModule`.
- **Features:** Manage SPV/Fund structures and underlying assets.

## Verification Plan

For each module:
1. **Automated Verification:** Run Prisma migrations and ensure NestJS builds successfully.
2. **Manual Verification:** Test the newly created REST endpoints using curl or Postman.
3. **Frontend Integration Check:** Verify that the corresponding UI component in the Next.js app correctly displays data fetched from the new backend module.
