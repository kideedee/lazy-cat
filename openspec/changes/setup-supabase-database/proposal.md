## Why

The blog currently has database schema and queries defined but no actual database connected. Setting up Supabase PostgreSQL enables core features: blog post reactions/views tracking, books reading list, and movies watch list.

## What Changes

- Create new Supabase project (Tokyo region, Free tier)
- Configure `DATABASE_URL` environment variable with Session pooler connection string
- Fix connection pooling bug in `db/index.ts` (singleton pattern to prevent connection exhaustion during hot reload)
- Run Drizzle migrations to create all 3 tables: `stats`, `books`, `movies`

## Capabilities

### New Capabilities

- `database-connection`: Establish Supabase PostgreSQL connection with proper pooling and environment configuration

### Modified Capabilities

None - this is infrastructure setup, not changing existing spec-level behavior.

## Impact

- **Environment**: New `DATABASE_URL` required in `.env`
- **Code**: `db/index.ts` modified for singleton pattern
- **Database**: 3 new tables created (`stats`, `books`, `movies`)
- **Features enabled**: Blog reactions, view counts, books list, movies list
