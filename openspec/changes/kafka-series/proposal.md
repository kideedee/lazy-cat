## Why

The current Kafka blog post (`data/blog/apache-kafka-deep-dive.mdx`) is too long (~2000 lines), making it overwhelming for readers who prefer quick, digestible content. Modern readers want "instant noodle" style articles - short, complete, with links to deep dives when needed.

## What Changes

- Split the monolithic Kafka post into a series: 1 entry point + 5 deep dive articles
- Create new folder structure: `data/blog/kafka/`
- Add updated content with 2025-2026 data (Kafka 4.0 KRaft, real-world stats from LinkedIn/Netflix/Uber, updated pricing comparisons)
- Convert original post to a redirect page pointing to the new series

## Capabilities

### New Capabilities

- `kafka-index`: Entry point article (~400 lines) - "Kafka: Everything You Need to Know" with quick overview, when to use/not use, and links to deep dives
- `kafka-architecture`: Deep dive on architecture, KRaft, producer/consumer workflow, delivery guarantees (~500 lines)
- `kafka-comparison`: Deep dive comparing Kafka vs RabbitMQ vs Pulsar vs SQS vs Redis Streams with 2025-2026 benchmarks and pricing (~400 lines)
- `kafka-spring`: Production configuration guide for Spring Kafka developers (~400 lines)
- `kafka-quarkus`: Production configuration guide for Quarkus/SmallRye Reactive Messaging developers (~400 lines)
- `kafka-use-cases`: 5 production use cases with configs (high throughput, low latency, exactly-once, event sourcing, CDC) + cheat sheet (~400 lines)

### Modified Capabilities

- None (new content series, original post becomes redirect only)

## Impact

- **Content files**: Create 6 new MDX files in `data/blog/kafka/`
- **Existing content**: Modify `data/blog/apache-kafka-deep-dive.mdx` to redirect to series
- **Navigation**: New series will appear in blog listing
- **Tags**: Reuse existing tags (`kafka`, `spring`, `quarkus`, `messaging`, `event-driven`)
- **No code changes**: Pure content restructuring
