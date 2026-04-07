## 1. Setup

- [x] 1.1 Create folder `data/blog/kafka/`
- [x] 1.2 Verify Contentlayer handles nested blog folders correctly

## 2. Entry Point Article

- [x] 2.1 Create `data/blog/kafka/index.mdx` with frontmatter
- [x] 2.2 Write "What is Kafka" section with real-world stats (LinkedIn 7T msg/day, Netflix 1.1T msg/day)
- [x] 2.3 Create core concepts ASCII diagram (broker, topic, partition)
- [x] 2.4 Write "When to use / not use" checklists
- [x] 2.5 Create quick comparison table (Kafka vs RabbitMQ vs Pulsar vs SQS)
- [x] 2.6 Add getting started code (Docker Compose + minimal producer/consumer)
- [x] 2.7 Add deep dive links section with descriptions ← (verify: all links work, descriptions match actual content)

## 3. Architecture Deep Dive

- [x] 3.1 Create `data/blog/kafka/kafka-architecture.mdx` with frontmatter
- [x] 3.2 Write core concepts section (broker, topic, partition, segments) from original sections 2.1-2.4
- [x] 3.3 Write replication and ISR section from original section 2.5
- [x] 3.4 Write KRaft architecture section from original section 3
- [x] 3.5 Write producer workflow section from original section 4.1
- [x] 3.6 Write consumer workflow section from original section 4.2
- [x] 3.7 Write delivery guarantees section from original section 4.3
- [x] 3.8 Write log compaction section from original section 4.4 ← (verify: all diagrams render, content matches spec scenarios)

## 4. Comparison Deep Dive

- [x] 4.1 Create `data/blog/kafka/kafka-comparison.mdx` with frontmatter
- [x] 4.2 Write Kafka vs RabbitMQ section with 2025 data from original + research
- [x] 4.3 Write Kafka vs Pulsar section from original + research
- [x] 4.4 Write Kafka vs AWS services section with 2026 pricing data from research
- [x] 4.5 Write Kafka vs Redis Streams section from original
- [x] 4.6 Create decision matrix and summary table ← (verify: pricing numbers accurate, decision guide clear)

## 5. Spring Kafka Deep Dive

- [x] 5.1 Create `data/blog/kafka/kafka-spring.mdx` with frontmatter
- [x] 5.2 Write setup section from original section 7.1
- [x] 5.3 Write producer configuration section from original sections 7.2-7.3
- [x] 5.4 Write consumer configuration section from original sections 7.3-7.5
- [x] 5.5 Write error handling and DLT section from original section 7.6
- [x] 5.6 Write transaction section from original section 7.7
- [x] 5.7 Write security section (SSL, SASL) from original section 9.1-9.2 ← (verify: all code examples compile-ready, configs production-safe)

## 6. Quarkus Kafka Deep Dive

- [x] 6.1 Create `data/blog/kafka/kafka-quarkus.mdx` with frontmatter
- [x] 6.2 Write setup and Dev Services section from original section 8.1, 8.5
- [x] 6.3 Write incoming channel configuration from original section 8.2
- [x] 6.4 Write outgoing channel configuration from original section 8.3
- [x] 6.5 Write Emitter and metadata sections from original section 8.4
- [x] 6.6 Write native compilation section from original section 8.6
- [x] 6.7 Write Spring vs Quarkus comparison from original section 8.7 ← (verify: reactive patterns correct, Dev Services config works)

## 7. Use Cases Deep Dive

- [x] 7.1 Create `data/blog/kafka/kafka-use-cases.mdx` with frontmatter
- [x] 7.2 Write consumer stability section from original section 10
- [x] 7.3 Write high throughput use case from original section 11.1
- [x] 7.4 Write low latency use case from original section 11.2
- [x] 7.5 Write exactly-once use case from original section 11.3
- [x] 7.6 Write event sourcing use case from original section 11.4
- [x] 7.7 Write CDC with Debezium use case from original section 11.5
- [x] 7.8 Create config cheat sheet from original section 12 ← (verify: all 5 use cases have working configs, cheat sheet accurate)

## 8. Original Post Redirect

- [x] 8.1 Replace content of `data/blog/apache-kafka-deep-dive.mdx` with redirect notice
- [x] 8.2 Add prominent links to new series
- [x] 8.3 Keep original frontmatter for SEO preservation ← (verify: original URL still works, redirects clearly to series)

## 9. Final Verification

- [x] 9.1 Run `pnpm dev` and verify all 6 articles render correctly
- [x] 9.2 Check all internal cross-links work
- [x] 9.3 Verify tag pages include new articles
- [x] 9.4 Run `pnpm biome:fix` and `pnpm typecheck` ← (verify: no build errors, all articles accessible, series navigation works)
