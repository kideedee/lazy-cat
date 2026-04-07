# Mermaid Diagram Architecture

## Overview

Mermaid diagrams are rendered **client-side** using the `mermaid` npm package. This approach was chosen because Cloudflare Pages build environment doesn't support Playwright/headless browser required by server-side rendering.

## Component Flow

```
┌────────────────────────────────────────────────────┐
│                MDX Content                         │
│  ```mermaid                                        │
│  flowchart TD                                      │
│      A --> B                                       │
│  ```                                               │
└────────────────────────────────────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────────────┐
│              Pre Component                         │
│        components/mdx/pre.tsx                      │
├────────────────────────────────────────────────────┤
│                                                    │
│   Detects: className.includes('language-mermaid') │
│                                                    │
│         │                    │                     │
│    mermaid code         other code                │
│         │                    │                     │
│         ▼                    ▼                     │
│   ┌──────────┐         ┌──────────┐               │
│   │ Mermaid  │         │  <pre>   │               │
│   │Component │         │  block   │               │
│   └──────────┘         └──────────┘               │
│                                                    │
└────────────────────────────────────────────────────┘
                        │
                        ▼
┌────────────────────────────────────────────────────┐
│            Mermaid Component                       │
│       components/mdx/mermaid.tsx                   │
├────────────────────────────────────────────────────┤
│                                                    │
│   Props: { code: string, enabled: boolean }        │
│                                                    │
│   States:                                          │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│   │ loading │  │ success │  │  error  │          │
│   │(code)   │  │  (SVG)  │  │(msg+code│          │
│   └─────────┘  └─────────┘  └─────────┘          │
│                                                    │
│         ┌─────────┐                               │
│         │disabled │                               │
│         │(msg+code│                               │
│         └─────────┘                               │
│                                                    │
└────────────────────────────────────────────────────┘
```

## Feature Flag

The mermaid feature can be enabled/disabled via:

1. **Site config** (`data/site-metadata.ts`):
   ```typescript
   features: {
     mermaid: true  // default
   }
   ```

2. **Environment variable** (overrides config):
   ```bash
   NEXT_PUBLIC_ENABLE_MERMAID=false  # disable
   NEXT_PUBLIC_ENABLE_MERMAID=true   # enable
   ```

Resolution logic in `utils/mermaid.ts`:
- If env var is set → use env var value
- Otherwise → use site config value
- Default → `true`

## File Structure

```
components/mdx/
├── mermaid.tsx      # Client-side mermaid renderer
├── pre.tsx          # Code block wrapper (delegates mermaid)
└── index.tsx        # MDX component exports

utils/
└── mermaid.ts       # Feature flag helper

data/
└── site-metadata.ts # Contains features.mermaid config
```

## Why Client-Side?

| Approach | Pros | Cons |
|----------|------|------|
| Server-side (rehype-mermaid) | SEO-friendly, no JS needed | Requires Playwright, fails on Cloudflare |
| Client-side (mermaid.js) | Works anywhere, simple | Slight render delay, needs JS |

We chose client-side because:
1. Cloudflare Pages doesn't support Playwright
2. Diagrams are supplementary content (SEO impact minimal)
3. Simpler deployment with no browser dependencies
