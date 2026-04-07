## Why

Create a comprehensive technical blog post about Apache Kafka to share knowledge with the developer community. This covers architecture, internals, comparisons with alternatives, and practical integration guides for Spring and Quarkus - filling a gap for Vietnamese developers who want in-depth Kafka content with real-world configurations.

## What Changes

- Add new MDX blog post file `data/blog/apache-kafka-deep-dive.mdx`
- Include detailed ASCII diagrams for architecture visualization
- Provide production-ready configuration examples for Spring Kafka and Quarkus SmallRye
- Cover 5 use cases: High Throughput, Low Latency, Exactly-Once, Event Sourcing, CDC

## Capabilities

### New Capabilities

- `kafka-blog-content`: Technical blog post covering Kafka fundamentals, architecture (KRaft mode), producer/consumer workflows, delivery guarantees, comparisons (RabbitMQ, Pulsar, SQS, Redis Streams), Spring Kafka integration, Quarkus Kafka integration, and use-case-specific configurations

### Modified Capabilities

(none - this is new content only)

## Impact

- New file: `data/blog/apache-kafka-deep-dive.mdx`
- No code changes required
- No API changes
- No dependency changes
- Content will be automatically processed by Contentlayer
