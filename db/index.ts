import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'

config({ path: '.env' })

// Make database optional for minimal blog setup
export let db = process.env.DATABASE_URL
  ? drizzle(process.env.DATABASE_URL, { casing: 'snake_case' })
  : null
