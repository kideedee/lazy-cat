import { and, desc, eq } from 'drizzle-orm'
import { db } from './index'
import {
  type InsertBook,
  type InsertMovie,
  type SelectBook,
  type SelectMovie,
  type SelectStats,
  type StatsType,
  booksTable,
  moviesTable,
  statsTable,
} from './schema'

// Default empty stats for when database is not configured
const emptyStats: Omit<SelectStats, 'type' | 'slug'> = {
  views: 0,
  loves: 0,
  applauses: 0,
  ideas: 0,
  bullseyes: 0,
}

export async function getBlogStats(type: StatsType, slug: string) {
  if (!db) {
    return { type, slug, ...emptyStats }
  }
  let stats = await db
    .select()
    .from(statsTable)
    .where(and(eq(statsTable.type, type), eq(statsTable.slug, slug)))
  if (stats.length) {
    return stats[0]
  }
  let newStats = await db.insert(statsTable).values({ type, slug }).returning()
  return newStats[0]
}

export async function updateBlogStats(
  type: StatsType,
  slug: string,
  updates: Omit<SelectStats, 'type' | 'slug'>,
) {
  if (!db) {
    return { type, slug, ...emptyStats, ...updates }
  }
  let currentStats = await getBlogStats(type, slug)
  // Safeguard against negative updates
  for (let key in updates) {
    if (typeof updates[key] === 'number' && updates[key] < currentStats[key]) {
      updates[key] = currentStats[key]
    }
  }
  let updatedStats = await db
    .update(statsTable)
    .set(updates)
    .where(and(eq(statsTable.type, type), eq(statsTable.slug, slug)))
    .returning()
  return updatedStats[0]
}

export async function upsertBooks(
  booksData: InsertBook[],
): Promise<SelectBook[]> {
  if (!db || booksData.length === 0) return []

  let books: InsertBook[] = booksData.map((bookData) => ({
    ...bookData,
    updatedAt: new Date(),
  }))

  let result = await db
    .insert(booksTable)
    .values(books)
    .onConflictDoUpdate({
      target: booksTable.id,
      set: {
        updatedAt: new Date(),
      },
    })
    .returning()

  return result
}

export async function upsertManyMovies(
  moviesData: InsertMovie[],
): Promise<SelectMovie[]> {
  if (!db || moviesData.length === 0) return []

  let movies: InsertMovie[] = moviesData.map((movieData) => ({
    ...movieData,
    updatedAt: new Date(),
  }))

  let result = await db
    .insert(moviesTable)
    .values(movies)
    .onConflictDoUpdate({
      target: moviesTable.id,
      set: {
        updatedAt: new Date(),
      },
    })
    .returning()

  return result
}

export async function getAllBooks(): Promise<SelectBook[]> {
  if (!db) return []
  return await db.select().from(booksTable).orderBy(booksTable.userReadAt)
}

export async function getAllMovies(): Promise<SelectMovie[]> {
  if (!db) return []
  return await db.select().from(moviesTable).orderBy(moviesTable.dateRated)
}

export async function getCurrentlyReading(): Promise<SelectBook | null> {
  if (!db) return null
  let books = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.userShelves, 'currently-reading'))
    .orderBy(desc(booksTable.pubDate))
    .limit(1)
  return books[0] || null
}

export async function getLastWatchedMovie(): Promise<SelectMovie | null> {
  if (!db) return null
  let movies = await db
    .select()
    .from(moviesTable)
    .orderBy(desc(moviesTable.dateRated))
    .limit(1)
  return movies[0] || null
}
