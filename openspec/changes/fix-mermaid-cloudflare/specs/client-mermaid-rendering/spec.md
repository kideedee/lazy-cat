## ADDED Requirements

### Requirement: Client-side mermaid rendering

The system SHALL render mermaid diagrams in the browser using the mermaid.js library instead of at build time.

#### Scenario: Valid mermaid diagram renders successfully
- **WHEN** a blog post contains a mermaid code block with valid syntax
- **THEN** the diagram SHALL render as an SVG in the browser

#### Scenario: Code block shown during loading
- **WHEN** a mermaid diagram is loading
- **THEN** the raw mermaid code SHALL be displayed until rendering completes
- **THEN** the code block SHALL be replaced with the rendered SVG

### Requirement: Feature flag control

The system SHALL provide a feature flag to enable or disable mermaid rendering.

#### Scenario: Feature enabled via site-metadata
- **WHEN** `siteMetadata.features.mermaid` is `true` and `ENABLE_MERMAID` env var is not set
- **THEN** mermaid diagrams SHALL render

#### Scenario: Feature disabled via site-metadata
- **WHEN** `siteMetadata.features.mermaid` is `false` and `ENABLE_MERMAID` env var is not set
- **THEN** mermaid code blocks SHALL display raw code with message "Mermaid diagrams disabled"

#### Scenario: Env var overrides site-metadata (enable)
- **WHEN** `ENABLE_MERMAID` env var is `"true"`
- **THEN** mermaid diagrams SHALL render regardless of site-metadata value

#### Scenario: Env var overrides site-metadata (disable)
- **WHEN** `ENABLE_MERMAID` env var is `"false"`
- **THEN** mermaid diagrams SHALL NOT render regardless of site-metadata value

### Requirement: Error handling for invalid mermaid syntax

The system SHALL display helpful error messages when mermaid syntax is invalid.

#### Scenario: Invalid mermaid syntax
- **WHEN** a mermaid code block contains invalid syntax
- **THEN** the system SHALL display the error message from mermaid library
- **THEN** the system SHALL display the original mermaid code below the error

### Requirement: Disabled state display

The system SHALL clearly indicate when mermaid rendering is disabled.

#### Scenario: Mermaid disabled display
- **WHEN** mermaid feature is disabled
- **THEN** the code block SHALL be displayed
- **THEN** a message "Mermaid diagrams disabled" SHALL be shown
