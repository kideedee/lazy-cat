## 1. Create HeroBanner Component

- [x] 1.1 Create `components/home-page/hero-banner.tsx` with basic structure
- [x] 1.2 Add `next/image` with `fill`, `priority`, `sizes="100vw"`, and `object-cover object-center`
- [x] 1.3 Wrap image in `Link` component pointing to `/`
- [x] 1.4 Add fallback yellow background color to container (`bg-yellow-500` or similar)
- [x] 1.5 Set responsive height: `h-[35vh] md:h-[40vh]` ← (verify: component renders correctly, image displays with proper sizing)

## 2. Integrate Banner into Homepage

- [x] 2.1 Import `HeroBanner` in `components/home-page/index.tsx`
- [x] 2.2 Add `HeroBanner` before the `Container` component, wrapped in React fragment
- [x] 2.3 Verify banner appears only on homepage, not on other pages ← (verify: homepage shows banner, blog/snippets/about pages do not)

## 3. Visual Verification

- [x] 3.1 Test banner display on desktop viewport (full-width, ~40vh height)
- [x] 3.2 Test banner display on mobile viewport (full-width, ~35vh height, cats centered)
- [x] 3.3 Test click navigation (clicking banner goes to homepage)
- [x] 3.4 Run `pnpm build` to verify no build errors ← (verify: build succeeds, no TypeScript or Next.js errors)
