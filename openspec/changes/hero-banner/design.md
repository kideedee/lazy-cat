## Context

The homepage currently uses a `Container` component that wraps all content with consistent padding. The layout structure is:

```
<Header />                    ← sticky nav
<TiltedGridBackground />      ← decorative SVG pattern (absolute, z-[-1])
<main>
  <Home />                    ← Container with Greeting, Intro, LatestPosts, etc.
</main>
<Footer />
```

The hero banner needs to be full-width (outside Container) but only appear on the homepage.

## Goals / Non-Goals

**Goals:**
- Display hero banner with lazy-cat mascot on homepage only
- Full-width layout that breaks out of the Container pattern
- Optimal performance (LCP-friendly)
- Responsive behavior with centered focal point on mobile
- Clickable banner linking to homepage

**Non-Goals:**
- Banner on other pages (blog posts, snippets, about, etc.)
- Text overlay on the banner
- Animation or interactive effects
- Replacing TiltedGridBackground (it remains as subtle background below banner)

## Decisions

### 1. Component Location
**Decision**: Create `HeroBanner` in `components/home-page/hero-banner.tsx`

**Rationale**: This is homepage-specific, so it belongs with other homepage components rather than in `components/ui/`.

### 2. Layout Integration
**Decision**: Add `HeroBanner` inside `<Home />` component, BEFORE the Container

```tsx
export function Home({ posts, snippets }) {
  return (
    <>
      <HeroBanner />           {/* NEW: full-width, outside Container */}
      <Container as="div" className="...">
        {/* existing content */}
      </Container>
    </>
  )
}
```

**Rationale**: Keeps the change localized to homepage component. Alternative was modifying `app/layout.tsx` with conditional rendering, but that adds complexity to the global layout.

### 3. Image Component
**Decision**: Use `next/image` with `fill` layout inside a relatively-positioned container

```tsx
<div className="relative w-full h-[35vh] md:h-[40vh]">
  <Image
    src="/static/images/banners/lazy-cat-banner.png"
    alt="Lazy Cat Banner"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />
</div>
```

**Rationale**: 
- `priority` ensures no lazy loading (LCP element)
- `fill` + `object-cover` handles responsive sizing
- `object-center` keeps all 3 cats visible on narrow screens
- `sizes="100vw"` optimizes srcset generation

### 4. Click Behavior
**Decision**: Wrap entire banner in `<Link href="/">`

**Rationale**: Simple, semantic. Using `onClick` with router.push would require `'use client'` directive unnecessarily.

### 5. Height Strategy
**Decision**: Use viewport-relative height `h-[35vh] md:h-[40vh]`

**Rationale**: Maintains visual proportion across screen sizes. Fixed pixel height would look too small on large screens or too large on mobile.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Image not optimized (large file size) | Recommend converting to WebP; Next.js will also generate optimized versions |
| Mobile cropping loses side cats | Use `object-center` to keep focal point centered; current image has cats well-distributed |
| Banner adds to page height, pushing content down | Acceptable trade-off for brand impact; 35-40vh is moderate |
| Image load failure | Add fallback background color matching the banner's yellow (#EAB308 or similar) |
