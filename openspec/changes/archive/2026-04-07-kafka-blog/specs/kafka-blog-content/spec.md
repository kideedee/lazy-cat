## ADDED Requirements

### Requirement: Blog post file structure
The blog post SHALL be created as `/data/blog/apache-kafka-deep-dive.mdx` with valid YAML frontmatter including title, date, tags, summary, and authors fields.

#### Scenario: Valid frontmatter
- **WHEN** the MDX file is processed by Contentlayer
- **THEN** the post appears in the blog listing with correct metadata

#### Scenario: Tags for discoverability
- **WHEN** the post is created
- **THEN** it MUST include tags: `kafka`, `spring`, `quarkus`, `messaging`, `event-driven`

---

### Requirement: Introduction section
The blog post SHALL include an introduction explaining what Apache Kafka is and its brief history (LinkedIn origin, Apache project, current state).

#### Scenario: Reader context
- **WHEN** a reader starts the post
- **THEN** they understand what Kafka is and why it matters within the first 2 paragraphs

---

### Requirement: Core concepts section
The blog post SHALL explain core Kafka concepts: Brokers, Topics, Partitions, Segments, Replication Factor, ISR (In-Sync Replicas), Leader Election.

#### Scenario: Concept diagram
- **WHEN** explaining cluster architecture
- **THEN** an ASCII diagram MUST visualize the broker/topic/partition relationship

#### Scenario: Technical accuracy
- **WHEN** explaining replication
- **THEN** the ISR mechanism and leader election process MUST be correctly described

---

### Requirement: KRaft architecture section
The blog post SHALL explain the KRaft (Kafka Raft) architecture, ZooKeeper removal in Kafka 4.0, and migration considerations.

#### Scenario: Current state clarity
- **WHEN** discussing KRaft
- **THEN** it MUST clearly state that ZooKeeper is removed in Kafka 4.0 (2025) and KRaft is the only mode

#### Scenario: Architecture diagram
- **WHEN** explaining KRaft
- **THEN** an ASCII diagram MUST show controller quorum and metadata topic

---

### Requirement: Producer workflow section
The blog post SHALL explain producer workflow including partitioning strategies, acks settings, idempotence, and batching.

#### Scenario: Partitioning explanation
- **WHEN** explaining partitioning
- **THEN** key-based, round-robin, and custom partitioner strategies MUST be covered

#### Scenario: Durability options
- **WHEN** explaining acks
- **THEN** the trade-offs between acks=0, acks=1, and acks=all MUST be clearly compared

---

### Requirement: Consumer workflow section
The blog post SHALL explain consumer workflow including consumer groups, offset management, rebalancing, and commit strategies.

#### Scenario: Consumer group diagram
- **WHEN** explaining consumer groups
- **THEN** an ASCII diagram MUST show partition-to-consumer assignment

#### Scenario: Rebalancing explanation
- **WHEN** explaining rebalancing
- **THEN** both eager and cooperative rebalancing protocols MUST be mentioned

---

### Requirement: Delivery guarantees section
The blog post SHALL explain the three delivery semantics: at-most-once, at-least-once, and exactly-once with their trade-offs.

#### Scenario: Comparison table
- **WHEN** presenting delivery guarantees
- **THEN** a table MUST compare all three semantics with how to achieve each

#### Scenario: Exactly-once depth
- **WHEN** explaining exactly-once
- **THEN** idempotent producer and transactional API MUST both be covered

---

### Requirement: Pros and cons section
The blog post SHALL list Kafka's strengths and weaknesses with specific examples and numbers where available.

#### Scenario: Balanced view
- **WHEN** presenting pros and cons
- **THEN** at least 5 strengths and 5 weaknesses MUST be listed

#### Scenario: Use case guidance
- **WHEN** finishing pros/cons
- **THEN** "when to use" and "when NOT to use" Kafka MUST be clearly stated

---

### Requirement: Comparisons section
The blog post SHALL compare Kafka with RabbitMQ, Apache Pulsar, Amazon SQS/SNS, and Redis Streams.

#### Scenario: Comparison table
- **WHEN** comparing alternatives
- **THEN** a table MUST compare key dimensions: model, throughput, latency, retention, replay, complexity

#### Scenario: Decision guidance
- **WHEN** concluding each comparison
- **THEN** clear guidance on when to choose each technology MUST be provided

---

### Requirement: Spring Kafka configuration section
The blog post SHALL provide comprehensive Spring Kafka configuration guide including producer configs, consumer configs, listener configs, SSL, transactions, and Schema Registry.

#### Scenario: Config explanations
- **WHEN** listing configurations
- **THEN** each config MUST have inline comment explaining its purpose and default value

#### Scenario: Stability configs
- **WHEN** explaining consumer stability
- **THEN** session.timeout.ms, heartbeat.interval.ms, max.poll.interval.ms, max.poll.records MUST be covered with their relationships

#### Scenario: Code examples
- **WHEN** explaining patterns
- **THEN** KafkaTemplate, @KafkaListener, error handling, and DLT examples MUST be provided

---

### Requirement: Quarkus Kafka configuration section
The blog post SHALL provide comprehensive Quarkus SmallRye Reactive Messaging configuration guide including incoming/outgoing channel configs, commit strategies, failure strategies, and Dev Services.

#### Scenario: Config explanations
- **WHEN** listing configurations
- **THEN** each config MUST have explanation of its purpose

#### Scenario: Quarkus-specific features
- **WHEN** explaining Quarkus
- **THEN** Dev Services, native compilation, and reactive patterns MUST be covered

#### Scenario: Code examples
- **WHEN** explaining patterns
- **THEN** @Incoming, @Outgoing, Emitter, and Message handling examples MUST be provided

---

### Requirement: Spring vs Quarkus comparison
The blog post SHALL include a comparison table between Spring Kafka and Quarkus SmallRye Reactive Messaging.

#### Scenario: Side-by-side comparison
- **WHEN** comparing frameworks
- **THEN** a table MUST compare: programming model, config style, error handling, dev experience, native support, startup time, memory footprint

---

### Requirement: Use case configurations section
The blog post SHALL provide specific configuration examples for 5 use cases: High Throughput, Low Latency, Exactly-Once, Event Sourcing, CDC.

#### Scenario: High throughput config
- **WHEN** explaining high throughput use case
- **THEN** batch-optimized producer and batch consumer configs MUST be provided

#### Scenario: Low latency config
- **WHEN** explaining low latency use case
- **THEN** no-batch producer and single-record consumer configs MUST be provided

#### Scenario: Exactly-once config
- **WHEN** explaining exactly-once use case
- **THEN** transactional producer and read_committed consumer configs MUST be provided

#### Scenario: Config summary table
- **WHEN** concluding use cases
- **THEN** a summary table MUST compare key configs across all 5 use cases

---

### Requirement: Advanced consumer stability configs
The blog post SHALL explain advanced consumer configs that prevent disconnection: session.timeout.ms, heartbeat.interval.ms, max.poll.interval.ms, max.poll.records, and their relationships.

#### Scenario: Heartbeat diagram
- **WHEN** explaining heartbeat mechanism
- **THEN** an ASCII diagram MUST show the relationship between heartbeat thread, main thread, and session timeout

#### Scenario: Troubleshooting guidance
- **WHEN** explaining stability configs
- **THEN** common scenarios (processing too slow, network unstable) with solutions MUST be provided

---

### Requirement: Security configuration section
The blog post SHALL explain SSL/TLS and SASL authentication configurations for both Spring and Quarkus.

#### Scenario: SSL config
- **WHEN** explaining SSL
- **THEN** truststore, keystore, and hostname verification configs MUST be covered

#### Scenario: SASL mechanisms
- **WHEN** explaining SASL
- **THEN** PLAIN, SCRAM, and OAUTHBEARER mechanisms MUST be mentioned

---

### Requirement: Schema Registry configuration
The blog post SHALL explain Schema Registry integration for both Confluent Schema Registry and Apicurio Registry.

#### Scenario: Avro serialization
- **WHEN** explaining Schema Registry
- **THEN** producer serializer and consumer deserializer configs MUST be provided

#### Scenario: Schema evolution
- **WHEN** explaining Schema Registry
- **THEN** auto.register.schemas and subject naming strategies MUST be mentioned
