---
paths:
  - "db/**"
  - "drizzle.config.ts"
---

# Database Rules

## Drizzle ORM Patterns

### Schema Location
- Schema: `/db/schema.ts`
- Client: `/db/index.ts`

### Important: Relations vs Foreign Keys

`relations()` does NOT create database constraints!
You MUST define `.references()` for actual FK constraints:

```ts
// This only provides query ergonomics, NOT referential integrity
export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, { fields: [posts.authorId], references: [users.id] })
}))

// This creates actual FK constraint
authorId: integer('author_id').references(() => users.id)
```

## Migration Workflow

```bash
# After schema changes
pnpm db:init    # Generate + push migrations

# View data
pnpm db:studio  # Opens on port 8088
```

## Connection Handling

IMPORTANT: Use singleton pattern to prevent connection exhaustion during hot reload:

```ts
const globalForDb = globalThis as unknown as { db: typeof db }
export const db = globalForDb.db ?? drizzle(...)
if (process.env.NODE_ENV !== 'production') globalForDb.db = db
```

## Supabase Notes

- Use Session pooler for transactions (NOT Transaction pooler)
- Transaction pooler (PgBouncer) incompatible with `db.transaction()`
- Check connection string in Supabase dashboard
