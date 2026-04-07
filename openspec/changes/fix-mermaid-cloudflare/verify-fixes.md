## [2026-04-07] Round 1 (from spx-apply auto-verify)

### spx-verifier
- Fixed: design.md updated env var name from `ENABLE_MERMAID` to `NEXT_PUBLIC_ENABLE_MERMAID` with note explaining NEXT_PUBLIC_ prefix requirement for client components
- Fixed: proposal.md updated to reflect that Mermaid component is internal (used by Pre, not exported from index.tsx)
- Fixed: proposal.md updated env var name to match implementation
- Fixed: docs/guides/mermaid-toggle.md added note that env var changes require rebuild
- Fixed: components/mdx/mermaid.tsx added singleton guard for mermaid.initialize() to prevent race conditions with multiple diagrams
