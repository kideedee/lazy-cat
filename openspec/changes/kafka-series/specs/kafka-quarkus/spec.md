## ADDED Requirements

### Requirement: Quarkus Kafka article structure
The article SHALL be located at `data/blog/kafka/kafka-quarkus.mdx` (~400 lines) as production guide for Quarkus developers.

#### Scenario: Quarkus-focused guide
- **WHEN** Quarkus developer visits /blog/kafka/kafka-quarkus
- **THEN** they see SmallRye Reactive Messaging patterns and configurations

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter targeting Quarkus developers.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title about Quarkus Kafka, tags ['kafka', 'quarkus', 'reactive'], and series reference

### Requirement: Setup section
The article SHALL show dependency and Dev Services configuration.

#### Scenario: Dependencies
- **WHEN** reader sets up project
- **THEN** they see quarkus-messaging-kafka dependency for Maven and Gradle

#### Scenario: Dev Services
- **WHEN** reader runs in dev mode
- **THEN** they understand Quarkus auto-starts Kafka container with quarkus.kafka.devservices config

### Requirement: Incoming channel configuration
The article SHALL cover consumer (incoming) channel properties.

#### Scenario: Incoming channel config
- **WHEN** reader configures consumer
- **THEN** they see mp.messaging.incoming.* properties: connector, topic, group.id, deserializer, commit-strategy, failure-strategy, stability settings

#### Scenario: @Incoming patterns
- **WHEN** reader implements consumers
- **THEN** they see: simple payload consumer, Message<T> with manual ack, Uni<Void> reactive pattern

### Requirement: Outgoing channel configuration
The article SHALL cover producer (outgoing) channel properties.

#### Scenario: Outgoing channel config
- **WHEN** reader configures producer
- **THEN** they see mp.messaging.outgoing.* properties: connector, topic, serializer, acks, batch.size, linger.ms, compression.type, idempotence

#### Scenario: @Outgoing patterns
- **WHEN** reader implements producers
- **THEN** they see: Multi<T> stream generation, @Incoming/@Outgoing processor pattern

### Requirement: Emitter section
The article SHALL cover imperative message sending with Emitter.

#### Scenario: Basic Emitter usage
- **WHEN** reader sends messages imperatively
- **THEN** they see @Channel Emitter<T> injection and emitter.send() pattern

#### Scenario: Emitter with metadata
- **WHEN** reader needs key/headers
- **THEN** they see OutgoingKafkaRecordMetadata builder for key and headers

### Requirement: Message metadata section
The article SHALL cover accessing Kafka metadata in consumers.

#### Scenario: IncomingKafkaRecordMetadata
- **WHEN** reader needs message metadata
- **THEN** they see extracting key, partition, offset, timestamp, headers from Message

### Requirement: Native compilation section
The article SHALL cover GraalVM native considerations.

#### Scenario: Reflection configuration
- **WHEN** reader builds native
- **THEN** they understand @RegisterForReflection for serialization classes

### Requirement: Spring vs Quarkus comparison
The article SHALL include brief comparison with Spring Kafka.

#### Scenario: Comparison table
- **WHEN** reader evaluates frameworks
- **THEN** they see table comparing: programming model, config style, annotations, startup time (2-5s vs 50-200ms), memory (150-300MB vs 30-50MB)
