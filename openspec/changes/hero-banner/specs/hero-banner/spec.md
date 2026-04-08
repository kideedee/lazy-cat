## ADDED Requirements

### Requirement: Banner displays on homepage only
The hero banner SHALL be visible only on the homepage (`/`). Other pages (blog posts, snippets, about, projects) SHALL NOT display the banner.

#### Scenario: Homepage shows banner
- **WHEN** user navigates to the homepage (`/`)
- **THEN** the hero banner is displayed below the header and above the main content

#### Scenario: Blog post page hides banner
- **WHEN** user navigates to a blog post (`/blog/*`)
- **THEN** the hero banner is NOT displayed

#### Scenario: Other pages hide banner
- **WHEN** user navigates to snippets, about, or projects pages
- **THEN** the hero banner is NOT displayed

### Requirement: Banner uses full-width layout
The hero banner SHALL span the full viewport width (100vw), not constrained by the Container component's max-width.

#### Scenario: Banner width on desktop
- **WHEN** viewing the homepage on desktop (viewport > 1280px)
- **THEN** the banner extends edge-to-edge across the viewport

#### Scenario: Banner width on mobile
- **WHEN** viewing the homepage on mobile (viewport < 640px)
- **THEN** the banner extends edge-to-edge across the viewport

### Requirement: Banner has hero-size height
The hero banner SHALL have a height of approximately 35-45vh (viewport height units) to create visual impact without dominating the page.

#### Scenario: Banner height on desktop
- **WHEN** viewing the homepage on desktop
- **THEN** the banner height is approximately 40vh

#### Scenario: Banner height on mobile
- **WHEN** viewing the homepage on mobile
- **THEN** the banner height is approximately 35vh

### Requirement: Banner image is responsive
The banner image SHALL maintain its aspect ratio and center the focal point (3 cats) across all viewport sizes using `object-cover` and `object-center`.

#### Scenario: Image centering on narrow viewport
- **WHEN** viewport width is narrower than the image's natural aspect ratio
- **THEN** the image is cropped from edges while keeping the center (cats) visible

### Requirement: Banner is clickable
The entire banner area SHALL be clickable and navigate to the homepage (`/`).

#### Scenario: Click on banner
- **WHEN** user clicks anywhere on the banner
- **THEN** user is navigated to the homepage (`/`)

### Requirement: Banner is optimized for performance
The banner image SHALL use Next.js `<Image>` component with `priority` attribute to ensure it loads immediately as the Largest Contentful Paint (LCP) element.

#### Scenario: Banner loads without lazy loading
- **WHEN** homepage loads
- **THEN** the banner image is loaded eagerly (not lazy-loaded)
- **AND** the image is preloaded in the document head

### Requirement: Banner has fallback background
The banner container SHALL have a fallback background color (yellow, matching the banner image) that displays while the image loads or if it fails to load.

#### Scenario: Image loading state
- **WHEN** the banner image is still loading
- **THEN** the banner area displays a yellow background color

#### Scenario: Image load failure
- **WHEN** the banner image fails to load
- **THEN** the banner area displays a yellow background color
