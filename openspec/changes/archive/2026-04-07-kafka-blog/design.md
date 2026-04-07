## Context

This is a technical blog post creation task, not a software feature. The blog is built with Next.js 15 + MDX/Contentlayer. Content goes in `/data/blog/` as `.mdx` files with YAML frontmatter.

The research phase has been completed with comprehensive information from web research covering:
- Kafka architecture and KRaft mode (ZooKeeper removal in 4.0)
- Producer/Consumer internals and delivery guarantees
- Comparisons with RabbitMQ, Pulsar, SQS/SNS, Redis Streams
- Spring Kafka and Quarkus SmallRye Reactive Messaging configurations
- Use case specific configurations

## Goals / Non-Goals

**Goals:**
- Create a comprehensive, well-structured blog post about Apache Kafka
- Include ASCII diagrams for visual architecture explanation
- Provide production-ready configuration examples with detailed explanations
- Cover 5 specific use cases with tailored configs
- Make content accessible to Vietnamese developers while keeping technical accuracy

**Non-Goals:**
- Kafka Streams API (separate blog topic)
- ksqlDB (separate blog topic)
- Monitoring/Alerting setup (separate blog topic)
- Kafka cluster administration/operations
- Performance benchmarking how-to

## Decisions

### 1. Blog Structure

**Decision**: Organize content into 9 major sections

| Section | Content |
|---------|---------|
| 1. Introduction | What is Kafka, brief history |
| 2. Core Concepts | Brokers, Topics, Partitions, Replication |
| 3. Architecture | KRaft mode, ZooKeeper removal |
| 4. How It Works | Producer/Consumer workflow, delivery guarantees |
| 5. Pros & Cons | Strengths, weaknesses, when to use |
| 6. Comparisons | vs RabbitMQ, Pulsar, SQS, Redis Streams |
| 7. Spring Kafka | Setup, configs, patterns |
| 8. Quarkus Kafka | Setup, configs, patterns |
| 9. Use Cases | High throughput, Low latency, Exactly-once, Event Sourcing, CDC |

**Rationale**: Logical flow from concepts → implementation → application. Readers can jump to specific sections.

### 2. Diagram Style

**Decision**: Use ASCII diagrams instead of images

**Rationale**:
- No external image hosting needed
- Renders well in markdown/code blocks
- Easy to modify
- Accessible (screen readers can process)
- Consistent with technical documentation style

### 3. Configuration Format

**Decision**: Show YAML for Spring, Properties for Quarkus with inline comments

**Rationale**:
- Spring Boot convention is YAML
- Quarkus SmallRye convention is properties files
- Inline comments explain each config's purpose

### 4. Language

**Decision**: Write in Vietnamese with English technical terms preserved

**Rationale**:
- Target audience is Vietnamese developers
- Technical terms (Kafka, broker, partition, offset, etc.) should remain in English for searchability and accuracy

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Content too long | Use collapsible sections or split into series if needed |
| Code examples become outdated | Pin version numbers, note "as of 2026" |
| ASCII diagrams break on mobile | Keep diagrams simple, max 80 chars wide |
| Information overload | Add TL;DR sections, clear navigation |

## Open Questions

(none - research is complete, structure is defined)
