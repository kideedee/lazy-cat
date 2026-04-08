## Why

The blog currently has a minimalist design with a subtle tilted grid background. Adding a hero banner featuring the lazy-cat mascot (3 black cats on yellow background) will give the homepage a distinctive personality and stronger brand identity.

## What Changes

- Add a hero banner component displayed only on the homepage
- Banner appears below the header, above the main content
- Full-width layout with hero size height (~35-45vh)
- Banner image is clickable, links to homepage
- Uses `next/image` with `priority` flag for optimal LCP performance

## Capabilities

### New Capabilities
- `hero-banner`: Homepage hero banner component displaying the lazy-cat mascot image with full-width layout, responsive behavior, and click-to-home navigation

### Modified Capabilities
<!-- None - this is a new addition that doesn't change existing behavior -->

## Impact

- **New files**: `components/home-page/hero-banner.tsx`
- **Modified files**: `components/home-page/index.tsx` (add HeroBanner above Container)
- **Assets**: Uses existing `public/static/images/banners/lazy-cat-banner.png`
- **Performance**: Banner uses `priority` to avoid LCP impact; image should be optimized (WebP recommended)
