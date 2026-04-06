# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

Personal blog built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4. Content managed with MDX/Contentlayer2, data stored in Supabase PostgreSQL via Drizzle ORM.

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server (port 3434)
pnpm build            # Production build
pnpm serve            # Start production server

# Code Quality - IMPORTANT: Run before committing
pnpm biome:fix        # Auto-fix style and linting
pnpm typecheck        # TypeScript type checking

# Database
pnpm db:init          # Generate and push migrations
pnpm db:studio        # Open Drizzle Studio (port 8088)
pnpm seed             # Seed initial data

# Cleanup (when cache issues occur)
rm -rf .contentlayer .next && pnpm dev
```

## Architecture

### Content Layer
- MDX content: `/data/blog/`, `/data/snippets/`, `/data/authors/`
- Contentlayer processes MDX → TypeScript types
- Generated: `/json/tag-data.json`, search index, RSS feeds

### Database Layer
- Schema: `/db/schema.ts` (Drizzle ORM)
- Migrations: `/supabase/migrations/`
- Stores: reactions, views, activity data

### Key Directories
- `/components/ui/` — Reusable UI components (use these first)
- `/components/blog/` — Blog-specific (comments, reactions, TOC)
- `/app/api/` — API routes (activities, github, spotify, stats)
- `/layouts/` — Page layout templates

## Coding Standards

### File Naming
- Components: PascalCase (`BlogPost.tsx`)
- Utilities/hooks: camelCase (`useActivities.ts`)
- MDX content: kebab-case (`my-blog-post.mdx`)

### Code Style (Biome enforced)
- 2 spaces, single quotes (JS/TS), double quotes (JSX)
- Trailing commas, 80 char limit, ASI semicolons
- IMPORTANT: Avoid `any` type — define proper interfaces

## Workflow

### Git Conventions
- Commit format: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`)
- Branch naming: `feature/<name>`, `fix/<name>`, `chore/<name>`
- IMPORTANT: Always run `pnpm biome:fix` before committing (Husky enforces)

## Environment Variables

Required in `.env`:
```
DATABASE_URL=          # Supabase PostgreSQL (use Session pooler for transactions)
SPOTIFY_CLIENT_ID=     # Spotify now-playing
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
GITHUB_API_TOKEN=      # Activity feed
NEXT_PUBLIC_UMAMI_*=   # Analytics
```

## Gotchas

1. **Contentlayer cache**: After schema changes or weird errors → `rm -rf .contentlayer .next && pnpm dev`
2. **MDX frontmatter HMR**: Frontmatter-only changes don't hot reload → restart dev server
3. **Next.js 15 async APIs**: `params`, `searchParams`, `cookies()`, `headers()` are Promises — must `await`
4. **Fetch caching**: Next.js 15 defaults to `no-store` — add explicit `{ cache: 'force-cache' }` or `{ next: { revalidate: N } }` for caching
5. **DB connection pooling**: In dev, hot reload can exhaust connections — use singleton pattern for db client

## Path Aliases

- `~/` → Root directory (`~/components/ui/button`)
- `contentlayer/generated` → Contentlayer types