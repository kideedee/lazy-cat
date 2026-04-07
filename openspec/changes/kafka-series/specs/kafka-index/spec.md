## ADDED Requirements

### Requirement: Entry point article structure
The entry point article SHALL be located at `data/blog/kafka/index.mdx` and serve as a quick overview (~400 lines) that links to deep dive articles.

#### Scenario: Reader wants quick Kafka overview
- **WHEN** reader visits /blog/kafka
- **THEN** they see a concise article (~5-7 min read) covering what Kafka is, when to use it, and links to detailed topics

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter with title, date, tags, summary, and authors fields.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title "Apache Kafka: Tat Ca Nhung Gi Ban Can Biet", date, tags ['kafka', 'messaging', 'event-driven'], summary, and authors ['default']

### Requirement: What is Kafka section
The article SHALL include a brief introduction explaining what Kafka is with real-world scale examples.

#### Scenario: Introduction with stats
- **WHEN** reader reads the introduction
- **THEN** they see Kafka defined as event streaming platform with stats (LinkedIn 7T msg/day, Netflix 1.1T msg/day, 18% market share)

### Requirement: Core concepts diagram
The article SHALL include one ASCII diagram showing Kafka's core architecture (broker, topic, partition, consumer group).

#### Scenario: Visual architecture overview
- **WHEN** reader views core concepts section
- **THEN** they see a simple ASCII diagram showing broker cluster with topics and partitions

### Requirement: When to use checklist
The article SHALL include two checklists: when to use Kafka and when NOT to use Kafka.

#### Scenario: Use Kafka checklist
- **WHEN** reader checks "when to use" section
- **THEN** they see checklist with: high throughput >10K msg/s, event replay needed, multiple consumers, data pipelines

#### Scenario: Don't use Kafka checklist
- **WHEN** reader checks "when not to use" section
- **THEN** they see checklist with: sub-ms latency required, complex routing needed, small scale <1K msg/s, serverless preferred

### Requirement: Quick comparison table
The article SHALL include a summary comparison table (Kafka vs RabbitMQ vs Pulsar vs SQS) with 5-6 key dimensions.

#### Scenario: Comparison at a glance
- **WHEN** reader views comparison section
- **THEN** they see table comparing throughput, latency, replay capability, routing, and best use case

### Requirement: Getting started code
The article SHALL include minimal Docker Compose and producer/consumer code example (~10-15 lines total).

#### Scenario: Quick start example
- **WHEN** reader wants to try Kafka
- **THEN** they see Docker Compose snippet and basic Java/TypeScript producer-consumer example

### Requirement: Deep dive links section
The article SHALL end with prominent links to all 5 deep dive articles with brief descriptions.

#### Scenario: Navigation to deep dives
- **WHEN** reader finishes the entry point
- **THEN** they see cards/links to: Architecture, Comparison, Spring, Quarkus, Use Cases articles with 1-line descriptions
