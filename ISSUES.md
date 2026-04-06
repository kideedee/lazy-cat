# Technical Issues to Address

Issues discovered during CLAUDE.md improvement research. Address when convenient.

## High Priority

### 1. DB Connection Pool Exhaustion

**File**: `db/index.ts:7-9`

**Issue**: Hot reload creates multiple Drizzle instances, exhausting Supabase connection slots.

**Current code**:
```ts
export let db = process.env.DATABASE_URL
  ? drizzle(process.env.DATABASE_URL, { casing: 'snake_case' })
  : null
```

**Fix needed**:
```ts
const globalForDb = globalThis as unknown as { 
  db: ReturnType<typeof drizzle> | null 
}

export const db = globalForDb.db ?? (
  process.env.DATABASE_URL
    ? drizzle(process.env.DATABASE_URL, { casing: 'snake_case' })
    : null
)

if (process.env.NODE_ENV !== 'production') globalForDb.db = db
```

### 2. Next.js 15 Async Params/SearchParams

**Issue**: `params`, `searchParams`, `cookies()`, `headers()` are now Promises in Next.js 15.

**Audit needed**:
- All `app/**/page.tsx`
- All `app/**/layout.tsx`
- Any component using these values

**Pattern to follow**:
```ts
// Before
export default function Page({ params }) {
  const { slug } = params
}

// After
export default async function Page({ params }) {
  const { slug } = await params
}
```

## Medium Priority

### 3. Fetch Caching Audit

**Issue**: Next.js 15 changed default from `force-cache` to `no-store`. May cause performance regression.

**Audit needed**: All `fetch()` calls in Server Components. Add explicit cache options:
```ts
fetch(url, { cache: 'force-cache' })
// or
fetch(url, { next: { revalidate: 3600 } })
```

### 4. Supabase Connection String Check

**Issue**: `db.transaction()` fails silently with Transaction pooler.

**Action**: Verify `DATABASE_URL` uses Session pooler in Supabase dashboard (not Transaction pooler).

## Low Priority (Awareness)

### 5. Contentlayer2 Maintenance Risk

Community-maintained fork with small team. Monitor for stagnation. Alternatives if needed: Velite, next-mdx-remote, headless CMS.

### 6. React 19 Third-Party Library Compatibility

Libraries that manipulate DOM directly may break with concurrent rendering. If encountering weird issues with charts/maps/analytics, wrap in dedicated container component.

---

*Created: 2026-04-06*
*Source: CLAUDE.md improvement research*
