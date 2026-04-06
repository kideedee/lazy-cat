## ADDED Requirements

### Requirement: Site metadata is customized

The system SHALL have customized site metadata reflecting the blog owner's information.

#### Scenario: Site title updated
- **WHEN** viewing the blog homepage
- **THEN** browser title shows the custom site name (not "Leo's Blog" or template default)

#### Scenario: Site description updated
- **WHEN** inspecting page meta tags
- **THEN** description meta tag contains custom blog description

#### Scenario: Site URL configured
- **WHEN** inspecting canonical URL or sitemap
- **THEN** URLs point to the actual deployed domain

### Requirement: Author information is customized

The system SHALL display the blog owner's author information.

#### Scenario: Author name updated
- **WHEN** viewing author section or about page
- **THEN** displays custom author name

#### Scenario: Author avatar updated
- **WHEN** viewing author section
- **THEN** displays custom avatar image (or placeholder if not set)

### Requirement: Social links are customized

The system SHALL have updated social media links.

#### Scenario: GitHub link updated
- **WHEN** clicking GitHub social link
- **THEN** navigates to custom GitHub profile URL

#### Scenario: Other social links updated or removed
- **WHEN** viewing social links section
- **THEN** only relevant social links are displayed with correct URLs

### Requirement: Sample content is removed

The system SHALL not contain template sample posts.

#### Scenario: No template blog posts
- **WHEN** viewing blog listing page
- **THEN** no sample posts from the template are visible

#### Scenario: Clean content directory
- **WHEN** checking data/blog directory
- **THEN** template sample posts are removed or replaced with placeholder

### Requirement: Navigation is appropriate

The system SHALL have navigation relevant to the blog.

#### Scenario: Navigation items reviewed
- **WHEN** viewing site navigation
- **THEN** only relevant navigation items are shown (e.g., Blog, About, Tags)
- **THEN** template-specific items (like Snippets, Projects if not needed) are hidden or removed
