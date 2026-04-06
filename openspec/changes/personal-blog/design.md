## Context

Building a personal technical blog from the `hta218/leohuynh.dev` template. The template is based on `timlrx/tailwind-nextjs-starter-blog` but modernized with Next.js 15, React 19, and contentlayer2 (maintained fork).

Current template stack:
- Next.js 15.4.7 + React 19
- contentlayer2 + MDX for content
- Tailwind CSS for styling
- Shiki + rehype-pretty-code for syntax highlighting
- Supabase + Drizzle ORM for database (optional features)
- Biome for linting/formatting
- Deployed to Vercel by default

Target deployment: Cloudflare Pages (free, unlimited bandwidth).

## Goals / Non-Goals

**Goals:**
- Fork and customize leohuynh.dev template for personal use
- Add Mermaid diagram support (build-time SVG rendering)
- Deploy to Cloudflare Pages successfully
- Minimal blog initially, extensible for future features

**Non-Goals:**
- Database features (Supabase/Drizzle) - not needed for minimal blog
- Comments system (Giscus) - add later
- Analytics (Umami) - add later
- Newsletter subscription - add later
- Custom theme/colors - use default initially

## Decisions

### 1. Fork hta218/leohuynh.dev instead of timlrx/tailwind-nextjs-starter-blog

**Choice**: Fork leohuynh.dev

**Rationale**:
- Uses contentlayer2 (maintained) vs contentlayer (unmaintained)
- Already on Next.js 15 + React 19 (latest)
- Has useful additions: kbar (command palette), image zoom, better syntax highlighting
- More modern tooling (Biome vs ESLint)

**Alternative considered**: Fork timlrx directly
- Rejected: Would need to upgrade stack and replace contentlayer anyway

### 2. Mermaid integration via rehype-mermaid

**Choice**: Use `rehype-mermaid` with `strategy: "inline-svg"`

**Rationale**:
- Server-side rendering → zero client JS for diagrams
- Integrates with existing rehype pipeline in contentlayer config
- SVG output is accessible and scales perfectly

**Alternative considered**: Client-side mermaid.js
- Rejected: Adds ~200KB JS, causes layout shift, worse performance

### 3. Cloudflare Pages deployment

**Choice**: Use `@cloudflare/next-on-pages` adapter

**Rationale**:
- Free unlimited bandwidth (vs Vercel 100GB cap)
- Better global performance (~50ms TTFB)
- Works with Next.js App Router

**Configuration needed**:
- Add `@cloudflare/next-on-pages` dependency
- Create `wrangler.toml` configuration
- Modify next.config.js for edge runtime compatibility
- Setup Cloudflare Pages project connected to GitHub

### 4. Keep database code but disable

**Choice**: Keep Supabase/Drizzle code but don't configure

**Rationale**:
- Allows easy activation later for features like view counts
- No harm if env vars not set (graceful degradation expected)
- Less code to re-add later

**Alternative considered**: Strip database code completely
- Rejected: More work, harder to add back later

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Next.js 15 edge compatibility issues with Cloudflare | Test thoroughly; fallback to Node.js runtime if needed |
| rehype-mermaid may have issues with complex diagrams | Test with representative diagrams before committing |
| contentlayer2 may have undiscovered bugs | It's actively maintained; issues can be reported |
| Some template features may depend on Vercel-specific APIs | Review and adapt as needed during setup |
