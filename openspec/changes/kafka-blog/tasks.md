## 1. Setup

- [ ] 1.1 Create MDX file at `/data/blog/apache-kafka-deep-dive.mdx` with valid frontmatter (title, date, tags, summary, authors)

## 2. Introduction & Core Concepts

- [ ] 2.1 Write introduction section (what is Kafka, brief history, why it matters)
- [ ] 2.2 Write core concepts section with ASCII diagram (brokers, topics, partitions, segments)
- [ ] 2.3 Write replication section (ISR, leader election mechanism)

## 3. Architecture

- [ ] 3.1 Write KRaft architecture section with ASCII diagram (controller quorum, metadata topic)
- [ ] 3.2 Explain ZooKeeper removal timeline and migration considerations

## 4. How Kafka Works

- [ ] 4.1 Write producer workflow section (partitioning strategies, acks, idempotence, batching) with ASCII diagram
- [ ] 4.2 Write consumer workflow section (consumer groups, offsets, rebalancing) with ASCII diagram
- [ ] 4.3 Write delivery guarantees section with comparison table (at-most-once, at-least-once, exactly-once)
- [ ] 4.4 Write log compaction explanation

## 5. Pros & Cons

- [ ] 5.1 Write strengths section (throughput numbers, durability, scalability, ecosystem)
- [ ] 5.2 Write weaknesses section (complexity, latency floor, no routing, storage growth)
- [ ] 5.3 Write "when to use" and "when NOT to use" guidance

## 6. Comparisons

- [ ] 6.1 Write Kafka vs RabbitMQ comparison with table
- [ ] 6.2 Write Kafka vs Apache Pulsar comparison with table
- [ ] 6.3 Write Kafka vs Amazon SQS/SNS/Kinesis comparison with table
- [ ] 6.4 Write Kafka vs Redis Streams comparison with table
- [ ] 6.5 Create summary comparison table across all alternatives ← (verify: all alternatives covered with decision guidance)

## 7. Spring Kafka Integration

- [ ] 7.1 Write setup section (dependencies, auto-configuration)
- [ ] 7.2 Write producer configuration section with commented YAML (all configs explained)
- [ ] 7.3 Write consumer configuration section with commented YAML (stability configs, fetch configs, offset management)
- [ ] 7.4 Write listener container configuration section
- [ ] 7.5 Write programming patterns section (KafkaTemplate, @KafkaListener, manual ack)
- [ ] 7.6 Write error handling and DLT section with code examples
- [ ] 7.7 Write transaction configuration and code examples ← (verify: all Spring configs from research included with explanations)

## 8. Quarkus Kafka Integration

- [ ] 8.1 Write setup section (extension, dependencies)
- [ ] 8.2 Write incoming channel configuration section (consumer configs, commit strategy, failure strategy)
- [ ] 8.3 Write outgoing channel configuration section (producer configs)
- [ ] 8.4 Write programming patterns section (@Incoming, @Outgoing, Emitter, Message handling)
- [ ] 8.5 Write Dev Services section
- [ ] 8.6 Write native compilation considerations
- [ ] 8.7 Create Spring vs Quarkus comparison table ← (verify: all Quarkus configs from research included, comparison table complete)

## 9. Security & Schema Registry

- [ ] 9.1 Write SSL/TLS configuration section for both Spring and Quarkus
- [ ] 9.2 Write SASL authentication section (PLAIN, SCRAM, OAUTHBEARER)
- [ ] 9.3 Write Confluent Schema Registry configuration section
- [ ] 9.4 Write Apicurio Registry configuration section (Quarkus)

## 10. Advanced Consumer Stability

- [ ] 10.1 Write consumer stability configs section with ASCII diagram (heartbeat model)
- [ ] 10.2 Write troubleshooting scenarios (processing slow, network unstable, lag high)
- [ ] 10.3 Create config relationship formulas (heartbeat ≤ session/3, etc.)

## 11. Use Case Configurations

- [ ] 11.1 Write High Throughput use case config (Spring + Quarkus) with code examples
- [ ] 11.2 Write Low Latency use case config (Spring + Quarkus) with code examples
- [ ] 11.3 Write Exactly-Once use case config (Spring + Quarkus) with transaction code examples
- [ ] 11.4 Write Event Sourcing use case config with topic configuration
- [ ] 11.5 Write CDC (Debezium) use case config
- [ ] 11.6 Create use case config summary table ← (verify: all 5 use cases complete with working configs)

## 12. Finalization

- [ ] 12.1 Add config cheat sheet summary section
- [ ] 12.2 Write conclusion with key takeaways
- [ ] 12.3 Review and verify all ASCII diagrams render correctly (max 80 chars wide)
- [ ] 12.4 Verify frontmatter is valid and tags are correct ← (verify: MDX parses without errors, all sections present per spec)
