## Context

Current setup uses `rehype-mermaid` with `strategy: 'inline-svg'` in contentlayer config. This requires Playwright/headless browser to render mermaid diagrams at build time. Cloudflare Pages build environment doesn't have browser access, causing build failures.

The existing MDX component architecture uses a `Pre` component that wraps code blocks. This is the natural integration point for client-side mermaid rendering.

## Goals / Non-Goals

**Goals:**
- Fix Cloudflare Pages deployment by moving mermaid rendering to client-side
- Provide feature flag to easily enable/disable mermaid support
- Show meaningful error messages when mermaid syntax is invalid
- Document architecture and toggle process for future reference

**Non-Goals:**
- Server-side rendering of mermaid (requires browser, defeats purpose)
- Supporting all mermaid diagram types (use standard mermaid library support)
- Custom mermaid themes (use mermaid defaults, can extend later if needed)

## Decisions

### 1. Client-side rendering via mermaid.js library

**Decision**: Use `mermaid` npm package for client-side rendering.

**Alternatives considered**:
- A. Keep rehype-mermaid, install Playwright in CI → Complex CI setup, still fails on edge
- B. Pre-render diagrams as static images → Loses interactivity, complex build pipeline
- C. ★ Client-side mermaid.js → Simple, works anywhere, standard approach

**Rationale**: Client-side rendering is the simplest solution that works in all environments. The mermaid library is well-maintained and provides good error handling.

### 2. Feature flag architecture

**Decision**: Dual-layer config with env var override.

```typescript
// site-metadata.ts
features: {
  mermaid: true  // default
}

// Build-time: process.env.NEXT_PUBLIC_ENABLE_MERMAID overrides if set
// NEXT_PUBLIC_ENABLE_MERMAID=false → disabled regardless of config
// NEXT_PUBLIC_ENABLE_MERMAID=true → enabled regardless of config
// NEXT_PUBLIC_ENABLE_MERMAID unset → use site-metadata value
```

**Note**: Uses `NEXT_PUBLIC_` prefix because `Pre` and `Mermaid` are client components. In Next.js, only `NEXT_PUBLIC_*` env vars are exposed to client-side code. This means changing the env var requires a rebuild to take effect.

**Rationale**: Env var allows toggle without code changes (rebuild required). Config provides sensible default.

### 3. Integration point: Pre component

**Decision**: Detect `language-mermaid` class in Pre component, delegate to Mermaid component.

```
┌────────────────────────────────────────────────────┐
│                    Pre Component                    │
├────────────────────────────────────────────────────┤
│                                                    │
│   children.props.className                         │
│         │                                          │
│         ▼                                          │
│   ┌─────────────────────┐                         │
│   │ "language-mermaid"? │                         │
│   └─────────────────────┘                         │
│         │           │                              │
│        yes          no                             │
│         ▼           ▼                              │
│   ┌──────────┐  ┌──────────┐                      │
│   │ Mermaid  │  │  <pre>   │                      │
│   │Component │  │  block   │                      │
│   └──────────┘  └──────────┘                      │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Rationale**: Pre component already handles all code blocks. Minimal changes required.

### 4. Loading state: Code block → SVG swap

**Decision**: Show raw code block initially, swap to rendered SVG when mermaid completes.

**Rationale**: User sees content immediately. No jarring skeleton. Graceful degradation if JS fails.

### 5. Error handling: Show mermaid error message

**Decision**: When mermaid fails to parse, show the error message from mermaid library in a styled error box, plus the original code.

**Rationale**: Detailed error messages help users debug their mermaid syntax.

### 6. Disabled state: Code + message

**Decision**: When mermaid feature is disabled, show code block with a small message: "Mermaid diagrams disabled".

**Rationale**: Clear indication that feature is off, user can still see the source.

## Risks / Trade-offs

**[Client-side rendering delay]** → Acceptable for diagrams. Code block shown during load provides instant feedback.

**[Mermaid library bundle size]** → Mermaid is ~800KB. Consider dynamic import to avoid loading when no mermaid blocks exist. Can optimize later if needed.

**[No SSR for diagrams]** → SEO impact minimal for diagrams. Content is supplementary, not primary.

**[Feature flag complexity]** → Two layers (env + config) could confuse. Document clearly in toggle guide.
