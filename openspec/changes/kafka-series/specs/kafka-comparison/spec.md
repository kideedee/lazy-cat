## ADDED Requirements

### Requirement: Comparison article structure
The article SHALL be located at `data/blog/kafka/kafka-comparison.mdx` (~400 lines) comparing Kafka with competing technologies.

#### Scenario: Technology comparison deep dive
- **WHEN** reader visits /blog/kafka/kafka-comparison
- **THEN** they see detailed comparison with RabbitMQ, Pulsar, SQS/Kinesis, Redis Streams

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter with comparison-focused metadata.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title about Kafka comparisons, tags ['kafka', 'rabbitmq', 'pulsar', 'aws'], and series reference

### Requirement: Kafka vs RabbitMQ section
The article SHALL compare Kafka 4.0 with RabbitMQ 4.x using 2025 data.

#### Scenario: Comparison table
- **WHEN** reader views RabbitMQ comparison
- **THEN** they see table comparing: model (log vs broker), throughput (millions vs tens of thousands), latency (tens of ms vs single-digit), routing, replay capability

#### Scenario: When to choose each
- **WHEN** reader needs decision guidance
- **THEN** they see clear recommendation: Kafka for streaming/replay, RabbitMQ for routing/low-latency queues

### Requirement: Kafka vs Apache Pulsar section
The article SHALL compare with Pulsar 3.x focusing on architectural differences.

#### Scenario: Architecture comparison
- **WHEN** reader views Pulsar comparison
- **THEN** they understand: Kafka brokers store data vs Pulsar separate brokers + BookKeeper

#### Scenario: Feature comparison table
- **WHEN** reader views feature comparison
- **THEN** they see: multi-tenancy (limited vs native), geo-replication (MirrorMaker vs built-in), tiered storage, operational complexity

#### Scenario: When to choose Pulsar
- **WHEN** reader evaluates Pulsar
- **THEN** they understand: choose Pulsar for multi-tenant SaaS, geo-replication requirements; accept higher ops complexity

### Requirement: Kafka vs AWS services section
The article SHALL compare with SQS, SNS, Kinesis, and MSK including 2026 pricing.

#### Scenario: Service type comparison
- **WHEN** reader views AWS comparison
- **THEN** they understand: SQS (queue), SNS (pub/sub), Kinesis (stream), MSK (managed Kafka)

#### Scenario: Pricing comparison table
- **WHEN** reader evaluates costs
- **THEN** they see monthly costs: 3-broker self-hosted ~$571 vs MSK ~$1,045 (1.8x), 30-broker ~$8,820 vs ~$37,257 (4.2x)

#### Scenario: Kinesis limitations
- **WHEN** reader considers Kinesis
- **THEN** they understand: 1 MB/s per shard limit, proprietary API, vendor lock-in concerns

### Requirement: Kafka vs Redis Streams section
The article SHALL compare with Redis Streams for speed vs durability trade-off.

#### Scenario: Performance comparison
- **WHEN** reader views Redis comparison
- **THEN** they understand: Redis sub-ms latency (in-memory) vs Kafka ~5ms (disk-based)

#### Scenario: When to choose Redis
- **WHEN** reader needs decision
- **THEN** they see: choose Redis Streams when speed critical and data fits in memory; choose Kafka when durability critical

### Requirement: Decision matrix section
The article SHALL end with a clear decision guide for technology selection.

#### Scenario: Decision flowchart
- **WHEN** reader needs to choose
- **THEN** they see decision guide: high-volume streaming -> Kafka, complex routing -> RabbitMQ, multi-tenant -> Pulsar, AWS-native managed -> MSK, sub-ms latency -> Redis

#### Scenario: Summary comparison table
- **WHEN** reader wants quick reference
- **THEN** they see 5-column table rating each technology on throughput, latency, durability, replay, routing, complexity
