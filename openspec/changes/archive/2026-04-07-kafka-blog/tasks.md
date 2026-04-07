## 1. Setup

- [x] 1.1 Create MDX file at `/data/blog/apache-kafka-deep-dive.mdx` with valid frontmatter (title, date, tags, summary, authors)

## 2. Introduction & Core Concepts

- [x] 2.1 Write introduction section (what is Kafka, brief history, why it matters)
- [x] 2.2 Write core concepts section with ASCII diagram (brokers, topics, partitions, segments)
- [x] 2.3 Write replication section (ISR, leader election mechanism)

## 3. Architecture

- [x] 3.1 Write KRaft architecture section with ASCII diagram (controller quorum, metadata topic)
- [x] 3.2 Explain ZooKeeper removal timeline and migration considerations

## 4. How Kafka Works

- [x] 4.1 Write producer workflow section (partitioning strategies, acks, idempotence, batching) with ASCII diagram
- [x] 4.2 Write consumer workflow section (consumer groups, offsets, rebalancing) with ASCII diagram
- [x] 4.3 Write delivery guarantees section with comparison table (at-most-once, at-least-once, exactly-once)
- [x] 4.4 Write log compaction explanation

## 5. Pros & Cons

- [x] 5.1 Write strengths section (throughput numbers, durability, scalability, ecosystem)
- [x] 5.2 Write weaknesses section (complexity, latency floor, no routing, storage growth)
- [x] 5.3 Write "when to use" and "when NOT to use" guidance

## 6. Comparisons

- [x] 6.1 Write Kafka vs RabbitMQ comparison with table
- [x] 6.2 Write Kafka vs Apache Pulsar comparison with table
- [x] 6.3 Write Kafka vs Amazon SQS/SNS/Kinesis comparison with table
- [x] 6.4 Write Kafka vs Redis Streams comparison with table
- [x] 6.5 Create summary comparison table across all alternatives ← (verify: all alternatives covered with decision guidance)

## 7. Spring Kafka Integration

- [x] 7.1 Write setup section (dependencies, auto-configuration)
- [x] 7.2 Write producer configuration section with commented YAML (all configs explained)
- [x] 7.3 Write consumer configuration section with commented YAML (stability configs, fetch configs, offset management)
- [x] 7.4 Write listener container configuration section
- [x] 7.5 Write programming patterns section (KafkaTemplate, @KafkaListener, manual ack)
- [x] 7.6 Write error handling and DLT section with code examples
- [x] 7.7 Write transaction configuration and code examples ← (verify: all Spring configs from research included with explanations)

## 8. Quarkus Kafka Integration

- [x] 8.1 Write setup section (extension, dependencies)
- [x] 8.2 Write incoming channel configuration section (consumer configs, commit strategy, failure strategy)
- [x] 8.3 Write outgoing channel configuration section (producer configs)
- [x] 8.4 Write programming patterns section (@Incoming, @Outgoing, Emitter, Message handling)
- [x] 8.5 Write Dev Services section
- [x] 8.6 Write native compilation considerations
- [x] 8.7 Create Spring vs Quarkus comparison table ← (verify: all Quarkus configs from research included, comparison table complete)

## 9. Security & Schema Registry

- [x] 9.1 Write SSL/TLS configuration section for both Spring and Quarkus
- [x] 9.2 Write SASL authentication section (PLAIN, SCRAM, OAUTHBEARER)
- [x] 9.3 Write Confluent Schema Registry configuration section
- [x] 9.4 Write Apicurio Registry configuration section (Quarkus)

## 10. Advanced Consumer Stability

- [x] 10.1 Write consumer stability configs section with ASCII diagram (heartbeat model)
- [x] 10.2 Write troubleshooting scenarios (processing slow, network unstable, lag high)
- [x] 10.3 Create config relationship formulas (heartbeat ≤ session/3, etc.)

## 11. Use Case Configurations

- [x] 11.1 Write High Throughput use case config (Spring + Quarkus) with code examples
- [x] 11.2 Write Low Latency use case config (Spring + Quarkus) with code examples
- [x] 11.3 Write Exactly-Once use case config (Spring + Quarkus) with transaction code examples
- [x] 11.4 Write Event Sourcing use case config with topic configuration
- [x] 11.5 Write CDC (Debezium) use case config
- [x] 11.6 Create use case config summary table ← (verify: all 5 use cases complete with working configs)

## 12. Finalization

- [x] 12.1 Add config cheat sheet summary section
- [x] 12.2 Write conclusion with key takeaways
- [x] 12.3 Review and verify all ASCII diagrams render correctly (max 80 chars wide)
- [x] 12.4 Verify frontmatter is valid and tags are correct ← (verify: MDX parses without errors, all sections present per spec)
