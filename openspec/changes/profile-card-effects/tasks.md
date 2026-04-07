## 1. CSS Setup

- [x] 1.1 Add `@property --border-angle` declaration to tailwind.css for conic gradient animation
- [x] 1.2 Add `@keyframes spin-border` animation (0deg → 360deg over 3s) ← (verify: animation plays smoothly in browser)

## 2. Component Refactor

- [x] 2.1 Add `ProfileCardVariant` type definition (`'spotlight' | 'glass' | 'spotlight-border'`)
- [x] 2.2 Add `variant` prop to ProfileCard with default value `'spotlight'`
- [x] 2.3 Remove existing 3D tilt logic (rotateX/rotateY calculations)
- [x] 2.4 Update mouse event handlers to track position for spotlight effect (--spotX, --spotY) ← (verify: console.log confirms coordinates update on mousemove)

## 3. Spotlight Variant

- [x] 3.1 Create spotlight gradient overlay using radial-gradient with CSS custom properties
- [x] 3.2 Apply theme colors (green-300 → blue-500 → purple-600) to gradient
- [x] 3.3 Add fade-out behavior on mouse leave ← (verify: spotlight variant displays gradient following cursor)

## 4. Glass Variant

- [x] 4.1 Implement semi-transparent background (white 70% light / dark 80% dark mode)
- [x] 4.2 Add backdrop-filter blur (8px)
- [x] 4.3 Add hover translateY(-4px) and enhanced shadow
- [x] 4.4 Add fallback for browsers without backdrop-filter support ← (verify: glass variant shows blur effect and lifts on hover)

## 5. Spotlight-Border Variant

- [x] 5.1 Create ::before pseudo-element with conic-gradient border
- [x] 5.2 Apply spin-border animation on hover state
- [x] 5.3 Combine with spotlight gradient effect from variant A
- [x] 5.4 Add static fallback for browsers without @property support ← (verify: border animates on hover, spotlight also works)

## 6. Accessibility

- [x] 6.1 Add prefers-reduced-motion detection using matchMedia
- [x] 6.2 Disable all animations/transitions when reduced motion is preferred
- [x] 6.3 Ensure focus states remain visible for all variants ← (verify: with reduced-motion enabled, no animations occur)

## 7. Final Verification

- [ ] 7.1 Test all 3 variants in browser (switch variant prop manually)
- [ ] 7.2 Test mobile viewport (< 1280px) - effects should be disabled
- [ ] 7.3 Test dark mode for all variants
- [x] 7.4 Run `pnpm biome:fix` and `pnpm typecheck` ← (verify: all variants work correctly, no console errors, passes lint/typecheck)
