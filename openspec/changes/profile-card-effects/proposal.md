## Why

The current ProfileCard uses a 3D tilt effect (rotateX/rotateY on mouse move) which, while visually appealing, can cause discomfort for users with vestibular disorders. We want to experiment with alternative hover effects that are modern, visually impressive, and more accessibility-friendly, then choose the best one.

## What Changes

- Replace the existing 3D tilt effect with a variant-based system supporting 3 effects:
  - **Spotlight**: Radial gradient that follows the cursor (green→blue→purple theme colors)
  - **Glass**: Glassmorphism with semi-transparent background, subtle blur, and hover lift
  - **Spotlight-border**: Combines spotlight effect with animated conic-gradient border on hover
- Add `prefers-reduced-motion` support to disable animations for accessibility
- After manual testing, one variant will be selected and others removed (cleanup phase)

## Capabilities

### New Capabilities
- `profile-card-effects`: Experimental hover effect variants for ProfileCard component with spotlight gradient, glassmorphism, and animated border options

### Modified Capabilities
<!-- No existing specs are being modified -->

## Impact

- **Components**: `components/cards/profile/index.tsx` - major refactor
- **Styles**: `css/tailwind.css` - add keyframe for conic-gradient rotation
- **Dependencies**: None (pure CSS/JS implementation)
- **Breaking changes**: None (internal component change, same external API)
