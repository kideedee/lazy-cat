## 1. Feature Flag Setup

- [x] 1.1 Add `features.mermaid` to site-metadata.ts with default value `true`
- [x] 1.2 Create helper function to resolve mermaid enabled state (env var override logic) ← (verify: env var correctly overrides config in all combinations)

## 2. Mermaid Component

- [x] 2.1 Create `components/mdx/mermaid.tsx` client component
- [x] 2.2 Implement loading state (show code block initially)
- [x] 2.3 Implement successful render (swap code with SVG)
- [x] 2.4 Implement error state (show mermaid error + code)
- [x] 2.5 Implement disabled state (show code + "Mermaid diagrams disabled" message) ← (verify: all 4 states render correctly per spec scenarios)

## 3. Pre Component Integration

- [x] 3.1 Update Pre component to detect `language-mermaid` class
- [x] 3.2 Delegate mermaid code blocks to Mermaid component
- [x] 3.3 Pass feature flag state to Mermaid component ← (verify: mermaid blocks detected and delegated, non-mermaid blocks unchanged)

## 4. Contentlayer Config Update

- [x] 4.1 Comment out `rehype-mermaid` plugin in contentlayer.config.ts
- [x] 4.2 Remove or comment mermaid import ← (verify: build passes without rehype-mermaid)

## 5. Documentation

- [x] 5.1 Create `docs/architecture/mermaid.md` with architecture diagram
- [x] 5.2 Create `docs/guides/mermaid-toggle.md` with toggle instructions
- [x] 5.3 Add doc links to CLAUDE.md ← (verify: docs are clear and complete)

## 6. Manual Verification

- [x] 6.1 Test with `test-mermaid-diagrams.mdx` locally (all diagram types)
- [x] 6.2 Test disabled state by setting `ENABLE_MERMAID=false`
- [x] 6.3 Test error state with invalid mermaid syntax
- [x] 6.4 Run `pnpm build` to verify Cloudflare-compatible build ← (verify: all states work, build succeeds)
