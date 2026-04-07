## ADDED Requirements

### Requirement: Use cases article structure
The article SHALL be located at `data/blog/kafka/kafka-use-cases.mdx` (~400 lines) covering production configurations for 5 use cases.

#### Scenario: Use case focused guide
- **WHEN** architect/DevOps visits /blog/kafka/kafka-use-cases
- **THEN** they see production-ready configs for common scenarios

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter for DevOps/SRE audience.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title about Kafka use cases, tags ['kafka', 'devops', 'production'], and series reference

### Requirement: Consumer stability section
The article SHALL explain heartbeat model and troubleshooting common issues.

#### Scenario: Heartbeat model diagram
- **WHEN** reader learns consumer stability
- **THEN** they see diagram showing heartbeat thread vs main thread, session.timeout.ms, max.poll.interval.ms

#### Scenario: Config relationships formula
- **WHEN** reader configures stability
- **THEN** they understand: heartbeat.interval.ms <= session.timeout.ms / 3, max.poll.interval.ms > processing time

#### Scenario: Troubleshooting scenarios
- **WHEN** reader has consumer issues
- **THEN** they see solutions for: processing too slow, network unstable, lag increasing

### Requirement: High throughput use case
The article SHALL provide configuration for maximum messages per second.

#### Scenario: High throughput config
- **WHEN** reader needs high throughput
- **THEN** they see: acks=1, batch-size=64KB, linger.ms=50, compression=lz4, max.poll.records=1000

#### Scenario: Batch consumer pattern
- **WHEN** reader implements batch processing
- **THEN** they see batch listener with batch database writes

### Requirement: Low latency use case
The article SHALL provide configuration for minimum latency.

#### Scenario: Low latency config
- **WHEN** reader needs low latency
- **THEN** they see: acks=1, batch-size=0, linger.ms=0, compression=none, max.poll.records=1

### Requirement: Exactly-once use case
The article SHALL provide configuration for financial/critical systems.

#### Scenario: Exactly-once config
- **WHEN** reader needs exactly-once
- **THEN** they see: enable.idempotence=true, acks=all, transaction-id-prefix, isolation.level=read_committed

#### Scenario: Transactional service pattern
- **WHEN** reader implements transactions
- **THEN** they see database + Kafka in same transaction with rollback on failure

### Requirement: Event sourcing use case
The article SHALL provide configuration for event store with log compaction.

#### Scenario: Event sourcing topic config
- **WHEN** reader sets up event sourcing
- **THEN** they see topic creation with cleanup.policy=compact, min.cleanable.dirty.ratio, segment.ms

#### Scenario: Event store pattern
- **WHEN** reader implements event sourcing
- **THEN** they see DomainEvent interface with aggregateId as key ensuring ordering

### Requirement: CDC use case
The article SHALL provide Debezium configuration for change data capture.

#### Scenario: Debezium connector config
- **WHEN** reader sets up CDC
- **THEN** they see PostgresConnector JSON config with database connection, table.include.list, topic.prefix

#### Scenario: CDC consumer pattern
- **WHEN** reader processes CDC events
- **THEN** they see parsing Debezium event with operation type (c/u/d) handling

### Requirement: Config cheat sheet section
The article SHALL end with quick reference tables.

#### Scenario: Producer essentials table
- **WHEN** reader needs quick reference
- **THEN** they see table with acks, idempotence, batch.size, linger.ms, compression configs

#### Scenario: Consumer essentials table
- **WHEN** reader configures consumer
- **THEN** they see table with auto.offset.reset, enable.auto.commit, stability configs, fetch configs

#### Scenario: Use case summary table
- **WHEN** reader compares use cases
- **THEN** they see table mapping use case to key config values (acks, batch.size, linger.ms, etc.)
