---
paths:
  - "components/**"
  - "layouts/**"
---

# React Component Rules

## Server vs Client Components

Next.js 15 App Router defaults to Server Components.

### When to use 'use client'
- Using hooks (useState, useEffect, useContext)
- Browser APIs (window, document, localStorage)
- Event handlers (onClick, onChange)
- Third-party libs that use browser APIs

### Pattern
```tsx
// Server Component (default) - can fetch data directly
export default async function Page() {
  const data = await getData()
  return <ClientWrapper data={data} />
}

// Client Component - for interactivity
'use client'
export function ClientWrapper({ data }) {
  const [state, setState] = useState(data)
  return <button onClick={() => {}} />
}
```

## Existing UI Components

IMPORTANT: Check `/components/ui/` before creating new components.
Existing: buttons, cards, inputs, modals, etc.

## Component Organization

- `/components/ui/` — Reusable primitives
- `/components/blog/` — Blog features (comments, reactions, TOC)
- `/components/home-page/` — Homepage sections
- `/components/mdx/` — MDX rendering
- `/layouts/` — Page templates

## Hydration Gotchas

Avoid hydration mismatches:
- Don't use `Math.random()` or `Date.now()` in initial render
- Use `useEffect` for browser-only operations
- Use `dynamic(() => import(...), { ssr: false })` for client-only libs
