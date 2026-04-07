## Context

The ProfileCard component (`components/cards/profile/index.tsx`) currently implements a 3D tilt effect using `rotateX`/`rotateY` transforms based on mouse position. While visually impressive, this effect can trigger discomfort in users with vestibular disorders (WCAG 2.3.3). 

Current implementation:
- Uses `perspective: 600px` on parent, `rotateX`/`rotateY` on card
- Rotation range: -15° to +15°
- Only active on desktop (>= 1280px viewport)
- Scale effect on hover: 1.0 → 1.15

## Goals / Non-Goals

**Goals:**
- Provide 3 experimental effect variants for A/B comparison
- Maintain visual appeal while improving accessibility
- Support `prefers-reduced-motion` media query
- Keep mobile behavior unchanged (effects disabled < 1280px)
- Use theme colors (green-300 → blue-500 → purple-600) for consistency

**Non-Goals:**
- Performance optimization for multiple cards (only 1 ProfileCard exists)
- Server-side rendering considerations (already client component)
- Persisting variant choice (manual selection, then cleanup)

## Decisions

### 1. Variant Implementation Strategy
**Decision**: Single component with `variant` prop and conditional logic

**Alternatives considered**:
- Separate components per variant → More code duplication, harder to compare
- CSS-only with class switching → Less control over JS event handlers

**Rationale**: Prop-based switching allows easy comparison during testing while keeping code in one place. After selection, unused code is removed.

### 2. Spotlight Effect Implementation
**Decision**: CSS custom properties (`--spotX`, `--spotY`) updated via `mousemove` listener, rendered as `radial-gradient` overlay

**Implementation**:
```css
background: radial-gradient(
  circle at var(--spotX) var(--spotY),
  rgba(134, 239, 172, 0.15),  /* green-300 */
  rgba(59, 130, 246, 0.1),     /* blue-500 */
  transparent 50%
)
```

**Rationale**: GPU-composited, no layout reflow, minimal JS. Same event handler pattern as current tilt.

### 3. Glass Effect Implementation
**Decision**: `backdrop-filter: blur(8px)` with semi-transparent background, `translateY(-4px)` on hover

**Implementation**:
- Background: `rgba(255,255,255,0.7)` light / `rgba(31,31,31,0.8)` dark
- Blur: 8px (subtle, not heavy)
- Hover: `translateY(-4px)` + enhanced shadow

**Rationale**: Lighter blur reduces GPU cost. Semi-transparent (not fully transparent) ensures text readability without heavy blur.

### 4. Conic Border Animation
**Decision**: CSS `@property` for `--angle` animation with `conic-gradient` on `::before` pseudo-element

**Implementation**:
```css
@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.conic-border::before {
  background: conic-gradient(from var(--border-angle), #86efac, #3b82f6, #a855f6, #86efac);
  animation: spin-border 3s linear infinite;
}
```

**Rationale**: Pure CSS animation, GPU-accelerated. `@property` enables smooth angle interpolation (supported in Chromium/Safari). Falls back to static gradient in older browsers.

### 5. Event Handler Architecture
**Decision**: Reuse existing `onMouseMove`/`onMouseLeave` pattern, switch logic based on variant

**Rationale**: Consistent with current code structure. All variants need mouse position tracking (spotlight) or none at all (glass).

### 6. Reduced Motion Handling
**Decision**: Check `prefers-reduced-motion` via `matchMedia` in useEffect, disable all animations/transitions

**Implementation**:
- Set `transition: none` in style
- Skip gradient position updates
- Disable conic animation
- Keep static visual appearance

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| `backdrop-filter` not supported in older browsers | Fallback to solid background color |
| `@property` not supported in Firefox < 128 | Fallback to static gradient border (no animation) |
| Glass effect may have low contrast in some backgrounds | Semi-transparent (not full transparency) + tested with current homepage background |
| Spotlight may be too subtle | Adjustable opacity values, can tweak during testing |

## Implementation Notes

### File Changes
1. **css/tailwind.css**: Add `@property --border-angle` and `@keyframes spin-border`
2. **components/cards/profile/index.tsx**: Refactor to variant-based system

### Variant Prop Type
```typescript
type ProfileCardVariant = 'spotlight' | 'glass' | 'spotlight-border'
```

### CSS Custom Properties (Spotlight)
```typescript
// Updated on mousemove
style={{
  '--spotX': `${mouseX}px`,
  '--spotY': `${mouseY}px`,
}}
```
