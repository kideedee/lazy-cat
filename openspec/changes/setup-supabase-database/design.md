## Context

The blog uses Drizzle ORM with PostgreSQL. Schema exists in `db/schema.ts` with 3 tables:
- `stats`: Blog/snippet reactions and views (PK: type + slug)
- `books`: Goodreads reading list data
- `movies`: IMDB watch list data

Current state:
- `db/index.ts` returns `null` when `DATABASE_URL` is missing
- All queries in `db/queries.ts` gracefully handle null db client
- Known bug: hot reload creates multiple Drizzle instances, exhausting connections

## Goals / Non-Goals

**Goals:**
- Establish working Supabase PostgreSQL connection
- Fix connection pooling for development stability
- Create all database tables via migration
- Verify setup works with Drizzle Studio

**Non-Goals:**
- Seeding data (books/movies) - done separately
- Adding new tables or modifying schema
- Setting up backups or monitoring

## Decisions

### 1. Supabase Configuration

**Choice**: Tokyo region, Free tier, Session pooler

**Rationale**:
- Tokyo: Lowest latency for Vietnam-based development
- Free tier: Sufficient for personal blog (500MB storage)
- Session pooler (port 5432): Required for `db.transaction()` compatibility. Transaction pooler (PgBouncer) breaks Drizzle transactions.

### 2. Connection Singleton Pattern

**Choice**: Use `globalThis` caching pattern

```typescript
const globalForDb = globalThis as unknown as { db: ReturnType<typeof drizzle> | null }

export const db = process.env.DATABASE_URL
  ? (globalForDb.db ??= drizzle(process.env.DATABASE_URL, { casing: 'snake_case' }))
  : null
```

**Rationale**:
- Prevents connection exhaustion during Next.js hot reload
- Standard pattern recommended by Prisma/Drizzle for dev environments
- No impact on production (single instance)

**Alternative considered**: Connection pool limit in Drizzle config. Rejected because it doesn't solve the root cause (multiple instances).

### 3. Migration Strategy

**Choice**: Use `drizzle-kit push` (existing `pnpm db:init` command)

**Rationale**:
- Schema already defined in `db/schema.ts`
- `db:init` runs `drizzle-kit generate && drizzle-kit push`
- Direct push is safe for new/empty database

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Wrong pooler type selected | Explicitly document: use "Session pooler" (port 5432), NOT "Transaction pooler" |
| Connection string in git | Add `DATABASE_URL` to `.env` (already gitignored), document in `.env.example` |
| Free tier limits (2 projects, pauses after 1 week inactivity) | Acceptable for personal blog; upgrade to Pro if needed later |
