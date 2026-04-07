## 1. Create Supabase Project

- [x] 1.1 Create new Supabase project (Tokyo region, Free tier)
- [x] 1.2 Get connection string from Settings → Database → Connection string → Session pooler (port 5432)
- [x] 1.3 Add `DATABASE_URL` to `.env` file ← (verify: connection string uses Session pooler port 5432, NOT Transaction pooler port 6543)

## 2. Fix Connection Pooling

- [x] 2.1 Update `db/index.ts` with singleton pattern using `globalThis` caching ← (verify: singleton pattern matches design.md, preserves null fallback behavior)

## 3. Run Migrations

- [x] 3.1 Run `pnpm db:init` to generate and push migrations ← (verify: all 3 tables created - stats, books, movies; type enum created with values blog, snippet)

## 4. Verification

- [x] 4.1 Run `pnpm db:studio` and verify all tables exist with correct schema
- [x] 4.2 Run `pnpm dev` and test `/api/stats` endpoint returns valid response ← (verify: API responds without errors, database queries work)
