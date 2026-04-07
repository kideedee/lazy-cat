## ADDED Requirements

### Requirement: Spring Kafka article structure
The article SHALL be located at `data/blog/kafka/kafka-spring.mdx` (~400 lines) as production guide for Spring developers.

#### Scenario: Spring-focused guide
- **WHEN** Spring developer visits /blog/kafka/kafka-spring
- **THEN** they see production-ready configurations and patterns for Spring Kafka

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter targeting Spring developers.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title about Spring Kafka, tags ['kafka', 'spring', 'java'], and series reference

### Requirement: Setup section
The article SHALL show Maven/Gradle dependencies and auto-configuration basics.

#### Scenario: Dependencies
- **WHEN** reader sets up project
- **THEN** they see spring-kafka dependency for Maven and Gradle

#### Scenario: Auto-configuration explanation
- **WHEN** reader understands setup
- **THEN** they know Spring Boot auto-creates KafkaTemplate, producer/consumer factories

### Requirement: Producer configuration section
The article SHALL cover production-ready producer YAML configuration.

#### Scenario: Producer YAML config
- **WHEN** reader configures producer
- **THEN** they see spring.kafka.producer config with: key/value serializers, acks=all, idempotence=true, batch-size, linger.ms, compression-type

#### Scenario: KafkaTemplate usage
- **WHEN** reader sends messages
- **THEN** they see KafkaTemplate.send() with CompletableFuture callback pattern

### Requirement: Consumer configuration section
The article SHALL cover production-ready consumer YAML configuration.

#### Scenario: Consumer YAML config
- **WHEN** reader configures consumer
- **THEN** they see spring.kafka.consumer config with: deserializers, group-id, auto-offset-reset, enable-auto-commit=false, stability settings (session.timeout.ms, heartbeat.interval.ms, max.poll.interval.ms)

#### Scenario: @KafkaListener patterns
- **WHEN** reader implements consumers
- **THEN** they see: simple listener, listener with Acknowledgment, batch listener, listener with metadata headers

### Requirement: Error handling section
The article SHALL cover DefaultErrorHandler and Dead Letter Topic pattern.

#### Scenario: Error handler configuration
- **WHEN** reader handles errors
- **THEN** they see DefaultErrorHandler with DeadLetterPublishingRecoverer and retry backoff

#### Scenario: DLT listener
- **WHEN** reader processes failed messages
- **THEN** they see @KafkaListener for .DLT topic with error header extraction

### Requirement: Transaction section
The article SHALL cover Kafka transactions with Spring.

#### Scenario: Transaction configuration
- **WHEN** reader needs exactly-once
- **THEN** they see transaction-id-prefix config and isolation.level=read_committed

#### Scenario: @Transactional usage
- **WHEN** reader implements transactions
- **THEN** they see @Transactional("kafkaTransactionManager") and executeInTransaction patterns

### Requirement: Security section
The article SHALL cover SSL and SASL configuration for Spring.

#### Scenario: SSL configuration
- **WHEN** reader secures connection
- **THEN** they see spring.kafka.ssl config with truststore/keystore paths and passwords

#### Scenario: SASL PLAIN configuration
- **WHEN** reader uses username/password auth
- **THEN** they see security.protocol=SASL_SSL and sasl.jaas.config for PLAIN mechanism
