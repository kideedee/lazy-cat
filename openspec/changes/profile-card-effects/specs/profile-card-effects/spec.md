## ADDED Requirements

### Requirement: Variant prop support
The ProfileCard component SHALL accept an optional `variant` prop with values: `'spotlight'`, `'glass'`, or `'spotlight-border'`. The default value SHALL be `'spotlight'`.

#### Scenario: Default variant
- **WHEN** ProfileCard is rendered without a variant prop
- **THEN** the spotlight effect SHALL be applied

#### Scenario: Explicit variant selection
- **WHEN** ProfileCard is rendered with `variant="glass"`
- **THEN** the glass effect SHALL be applied instead of spotlight

---

### Requirement: Spotlight effect behavior
The spotlight variant SHALL display a radial gradient that follows the cursor position within the card boundaries using theme colors (green-300 → blue-500 → purple-600).

#### Scenario: Cursor enters card on desktop
- **WHEN** cursor moves over the card on viewport >= 1280px
- **THEN** a radial gradient highlight SHALL appear centered at the cursor position
- **THEN** the gradient SHALL update position as cursor moves

#### Scenario: Cursor leaves card
- **WHEN** cursor leaves the card area
- **THEN** the spotlight gradient SHALL fade out or reset to default state

#### Scenario: Mobile viewport
- **WHEN** viewport width is < 1280px
- **THEN** the spotlight effect SHALL NOT be active (no gradient tracking)

---

### Requirement: Glass effect behavior
The glass variant SHALL display a semi-transparent background with subtle blur effect and vertical lift on hover.

#### Scenario: Glass appearance at rest
- **WHEN** ProfileCard with glass variant is rendered
- **THEN** the card SHALL have a semi-transparent background (white 70% in light mode, dark 80% in dark mode)
- **THEN** the card SHALL have backdrop-filter blur of 8px

#### Scenario: Glass hover state
- **WHEN** cursor hovers over the glass variant card on desktop
- **THEN** the card SHALL translate upward by 4px
- **THEN** the card shadow SHALL be enhanced

#### Scenario: Glass fallback
- **WHEN** browser does not support backdrop-filter
- **THEN** the card SHALL display a solid background color instead

---

### Requirement: Spotlight-border effect behavior
The spotlight-border variant SHALL combine the spotlight gradient effect with an animated conic-gradient border that rotates continuously on hover.

#### Scenario: Border at rest
- **WHEN** ProfileCard with spotlight-border variant is rendered (not hovered)
- **THEN** the border SHALL display a static gradient (green → blue → purple)

#### Scenario: Border on hover
- **WHEN** cursor hovers over the spotlight-border variant card
- **THEN** the border gradient SHALL animate in a continuous rotation (360° every 3 seconds)
- **THEN** the spotlight gradient SHALL also follow the cursor

#### Scenario: Border animation fallback
- **WHEN** browser does not support CSS @property
- **THEN** the border SHALL display a static gradient (no animation)

---

### Requirement: Reduced motion support
All variants SHALL respect the user's `prefers-reduced-motion` system preference.

#### Scenario: Reduced motion enabled
- **WHEN** user has `prefers-reduced-motion: reduce` enabled
- **THEN** all animations SHALL be disabled (no gradient movement, no border rotation)
- **THEN** all transitions SHALL be disabled or set to instant
- **THEN** the card SHALL maintain its static visual appearance

#### Scenario: Reduced motion disabled
- **WHEN** user has NOT enabled reduced motion preference
- **THEN** all variant effects SHALL function normally with animations

---

### Requirement: Scale effect preservation
All variants SHALL maintain the existing scale behavior on hover for desktop viewports.

#### Scenario: Desktop hover scale
- **WHEN** cursor hovers over the card on viewport >= 1280px
- **THEN** the card SHALL scale to 1.15x its original size
- **THEN** the z-index SHALL increase to 50 to appear above other content

#### Scenario: Mobile no scale
- **WHEN** viewport width is < 1280px
- **THEN** no scale effect SHALL be applied on interaction
