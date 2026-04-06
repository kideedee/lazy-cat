---
paths:
  - "app/api/**"
---

# API Routes Rules

## Server Component Patterns

- Route handlers are Server Components by default
- Use `export async function GET/POST/PUT/DELETE(request: Request)`
- Access params via: `const { slug } = await params`

## Response Format

```ts
// Success
return Response.json({ data }, { status: 200 })

// Error
return Response.json({ error: 'message' }, { status: 400 })
```

## Fetch Caching

Next.js 15 defaults to `no-store`. For cached responses:
```ts
fetch(url, { cache: 'force-cache' })
// or ISR
fetch(url, { next: { revalidate: 3600 } })
```

## Error Handling

- Wrap external API calls in try/catch
- Return appropriate HTTP status codes
- Log errors server-side, return user-friendly messages

## Existing API Routes

- `/api/activities/` - Activity feed
- `/api/github/` - GitHub integration  
- `/api/spotify/` - Now-playing
- `/api/stats/` - Blog statistics
- `/api/newsletter/` - Subscriptions
