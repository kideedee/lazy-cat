## [2026-04-07] Round 1 (from spx-apply auto-verify)

### spx-verifier
- Fixed: Breakpoint `md:hover:scale-[1.15]` → `xl:hover:scale-[1.15]` to match 1280px spec (components/cards/profile/index.tsx:79)
- Fixed: Spotlight overlay `transition-opacity duration-300` now conditional on `!reducedMotion` (components/cards/profile/index.tsx:128)
- Fixed: Conic border moved from inside card div to wrapper level to avoid `overflow-hidden` clipping (components/cards/profile/index.tsx:97-111)
- Fixed: Dead opacity conditional `opacity-100 : opacity-100` → `opacity-100 : opacity-70` for hover distinction

### spx-uiux-verifier
- Fixed: Added CSS-layer `@media (prefers-reduced-motion: reduce)` guard for spin-border animation (css/tailwind.css)
- Fixed: Added focus-visible indicators to email and social links in ProfileCardInfo (components/cards/profile/profile-info.tsx)
- Fixed: Added `aria-hidden="true"` to social link icons for screen reader accessibility (components/cards/profile/profile-info.tsx)

## [2026-04-07] Round 2 (from spx-apply auto-verify)

### spx-verifier
- Fixed: Added `relative` to wrapper div so conic border `absolute` positioning works correctly (components/cards/profile/index.tsx:78)
