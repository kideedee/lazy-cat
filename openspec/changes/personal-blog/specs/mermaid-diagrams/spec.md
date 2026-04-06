## ADDED Requirements

### Requirement: Mermaid code blocks render as SVG diagrams

The system SHALL render Mermaid code blocks in MDX files as inline SVG diagrams at build time.

#### Scenario: Flowchart diagram renders
- **WHEN** an MDX file contains a fenced code block with language `mermaid` containing a flowchart definition
- **THEN** the built page displays an SVG flowchart diagram instead of code text

#### Scenario: Sequence diagram renders
- **WHEN** an MDX file contains a Mermaid sequence diagram definition
- **THEN** the built page displays an SVG sequence diagram

#### Scenario: No client-side JavaScript for diagrams
- **WHEN** a page with Mermaid diagrams is loaded in browser
- **THEN** no Mermaid JavaScript is loaded (diagrams are pre-rendered SVG)

### Requirement: rehype-mermaid plugin integrated in content pipeline

The system SHALL use rehype-mermaid plugin in the contentlayer MDX processing pipeline.

#### Scenario: Plugin configured in contentlayer
- **WHEN** contentlayer processes MDX files
- **THEN** rehype-mermaid is included in the rehype plugins array with inline-svg strategy

### Requirement: Diagrams are accessible

The system SHALL ensure rendered diagrams are accessible.

#### Scenario: SVG has appropriate attributes
- **WHEN** a Mermaid diagram is rendered
- **THEN** the SVG element has role="img" or appropriate ARIA attributes
- **THEN** diagram content is readable by screen readers or has alt text

### Requirement: Diagram errors are handled gracefully

The system SHALL handle invalid Mermaid syntax gracefully.

#### Scenario: Invalid Mermaid syntax
- **WHEN** an MDX file contains invalid Mermaid syntax
- **THEN** build does not crash
- **THEN** error message indicates which file has the issue
