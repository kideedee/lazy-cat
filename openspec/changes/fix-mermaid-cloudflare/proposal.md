## Why

Cloudflare Pages build fails because `rehype-mermaid` requires Playwright/headless browser to render mermaid diagrams at build time. Cloudflare's build environment doesn't have a browser available. Need to switch to client-side rendering with a feature flag for easy enable/disable.

## What Changes

- Add client-side Mermaid component that renders diagrams in the browser
- Update Pre component to detect mermaid code blocks and delegate to Mermaid component
- Add feature flag in site-metadata.ts with env var override (`NEXT_PUBLIC_ENABLE_MERMAID`)
- Remove/comment out `rehype-mermaid` from contentlayer config
- Add documentation for architecture and toggle guide

## Capabilities

### New Capabilities

- `client-mermaid-rendering`: Client-side mermaid diagram rendering with feature flag, error handling, and loading states

### Modified Capabilities

None - this is a new capability replacing a build-time approach with a client-side one.

## Impact

- `components/mdx/mermaid.tsx` - New client component (internal, used by Pre)
- `components/mdx/pre.tsx` - Detect mermaid language, delegate rendering
- `data/site-metadata.ts` - Add `features.mermaid` config
- `contentlayer.config.ts` - Comment out rehype-mermaid plugin
- `docs/architecture/mermaid.md` - New architecture documentation
- `docs/guides/mermaid-toggle.md` - New toggle guide
- `CLAUDE.md` - Add doc links
