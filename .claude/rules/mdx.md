---
paths:
  - "data/**/*.mdx"
  - "contentlayer.config.ts"
---

# MDX Content Rules

## Frontmatter Requirements

All MDX files MUST have these fields:
```yaml
---
title: 'Post Title'
date: '2024-01-15'
tags: ['tag1', 'tag2']
summary: 'Brief description'
---
```

Optional fields: `draft`, `images`, `authors`, `lastmod`

## Hot Reload Gotchas

- Frontmatter-only changes do NOT trigger HMR
- After frontmatter edits: restart dev server
- Component imports in MDX: restart dev server if stale

## Cache Issues

If content doesn't update:
```bash
rm -rf .contentlayer .next && pnpm dev
```

## Content Locations

- Blog posts: `/data/blog/`
- Snippets: `/data/snippets/`
- Authors: `/data/authors/`

## Schema Changes

After modifying `contentlayer.config.ts`:
1. Stop dev server
2. `rm -rf .contentlayer`
3. Restart with `pnpm dev`

## MDX Components

Custom components available in MDX are defined in `/components/mdx/`
