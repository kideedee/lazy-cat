import { drizzle } from 'drizzle-orm/postgres-js'

// Singleton pattern to prevent connection exhaustion during hot reload
const globalForDb = globalThis as unknown as {
  db: ReturnType<typeof drizzle> | null
}

// Make database optional for minimal blog setup
if (process.env.DATABASE_URL && !globalForDb.db) {
  globalForDb.db = drizzle(process.env.DATABASE_URL, { casing: 'snake_case' })
}

export const db = globalForDb.db ?? null
