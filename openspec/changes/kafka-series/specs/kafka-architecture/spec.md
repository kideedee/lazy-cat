## ADDED Requirements

### Requirement: Architecture article structure
The article SHALL be located at `data/blog/kafka/kafka-architecture.mdx` (~500 lines) covering Kafka internals from broker to KRaft.

#### Scenario: Deep dive on architecture
- **WHEN** reader visits /blog/kafka/kafka-architecture
- **THEN** they see detailed explanation of Kafka architecture including diagrams and technical details

### Requirement: Frontmatter configuration
The article SHALL include valid MDX frontmatter with appropriate title, date, tags, and summary.

#### Scenario: Valid frontmatter
- **WHEN** Contentlayer processes the file
- **THEN** frontmatter includes title about Kafka architecture, tags ['kafka', 'architecture', 'kraft'], and series reference

### Requirement: Core concepts section
The article SHALL explain Broker, Topic, Partition, and Segments with diagrams.

#### Scenario: Broker explanation
- **WHEN** reader views broker section
- **THEN** they understand broker as Kafka server instance with responsibilities (storage, request handling, replication)

#### Scenario: Topic and partition explanation
- **WHEN** reader views topic/partition section
- **THEN** they see diagram showing topic split into partitions with offset numbering

#### Scenario: Segments explanation
- **WHEN** reader views segments section
- **THEN** they understand log segments as files on disk with active/closed segment lifecycle

### Requirement: Replication and ISR section
The article SHALL explain replication mechanism, ISR (In-Sync Replicas), and leader election.

#### Scenario: Replication diagram
- **WHEN** reader views replication section
- **THEN** they see diagram showing leader and follower replicas with data flow

#### Scenario: ISR explanation
- **WHEN** reader learns about ISR
- **THEN** they understand replica.lag.time.max.ms and how replicas join/leave ISR

#### Scenario: Leader election flow
- **WHEN** reader views leader election
- **THEN** they see timeline showing controller detecting failure and electing new leader

### Requirement: KRaft architecture section
The article SHALL cover Kafka 4.0 KRaft mode replacing ZooKeeper.

#### Scenario: Why ZooKeeper removed
- **WHEN** reader views KRaft section
- **THEN** they understand reasons: reduced complexity, better scalability, faster failover

#### Scenario: Controller quorum diagram
- **WHEN** reader views KRaft architecture
- **THEN** they see diagram showing controller quorum separate from broker nodes

#### Scenario: __cluster_metadata topic
- **WHEN** reader learns about metadata storage
- **THEN** they understand internal topic storing all cluster metadata via Raft consensus

#### Scenario: Deployment modes
- **WHEN** reader views deployment options
- **THEN** they understand combined mode (dev) vs isolated mode (production)

### Requirement: Producer workflow section
The article SHALL explain producer flow including partitioning, acks, batching.

#### Scenario: Producer flow diagram
- **WHEN** reader views producer section
- **THEN** they see diagram: Record -> Serializer -> Partitioner -> Batch Accumulator -> Sender -> Broker

#### Scenario: Partitioning strategies
- **WHEN** reader learns partitioning
- **THEN** they understand key-based, round-robin, sticky partitioning options

#### Scenario: Acks settings table
- **WHEN** reader views acks configuration
- **THEN** they see table comparing acks=0, acks=1, acks=all with durability/latency trade-offs

### Requirement: Consumer workflow section
The article SHALL explain consumer groups, offset management, and rebalancing.

#### Scenario: Consumer group diagram
- **WHEN** reader views consumer section
- **THEN** they see diagram showing partitions assigned to consumers in a group

#### Scenario: Offset management
- **WHEN** reader learns about offsets
- **THEN** they understand committed offset, current position, and commit strategies (auto, sync, async)

#### Scenario: Rebalancing protocols
- **WHEN** reader views rebalancing
- **THEN** they understand eager vs cooperative rebalancing with timeline comparison

### Requirement: Delivery guarantees section
The article SHALL explain at-most-once, at-least-once, and exactly-once semantics.

#### Scenario: Delivery semantics table
- **WHEN** reader views delivery guarantees
- **THEN** they see table with semantic, description, how to achieve, and trade-offs

#### Scenario: Exactly-once code example
- **WHEN** reader wants exactly-once
- **THEN** they see transaction code pattern with initTransactions, beginTransaction, commitTransaction

### Requirement: Log compaction section
The article SHALL explain log compaction for keeping latest value per key.

#### Scenario: Compaction diagram
- **WHEN** reader views log compaction
- **THEN** they see before/after diagram showing how old values are removed keeping latest per key

#### Scenario: Tombstone handling
- **WHEN** reader learns about deletes
- **THEN** they understand tombstone (value=null) and delete.retention.ms
