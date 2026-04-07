## Context

The blog currently has a single Kafka post at `data/blog/apache-kafka-deep-dive.mdx` (~2000 lines). Research shows modern readers prefer shorter, focused articles. The goal is to restructure into a series with a quick entry point and optional deep dives.

**Current state:**
- Single MDX file covering everything: architecture, comparisons, Spring, Quarkus, use cases
- Content is comprehensive but overwhelming
- Some data is outdated (pre-Kafka 4.0 KRaft)

**Constraints:**
- Must preserve SEO value of original post (redirect, not delete)
- Reuse existing content where possible
- Follow project MDX conventions (frontmatter, components)

## Goals / Non-Goals

**Goals:**
- Create 6 focused MDX files (~400-500 lines each)
- Entry point article readable in 5-7 minutes
- Deep dives serve specific audiences (Spring devs, Quarkus devs, architects)
- Update with 2025-2026 data (Kafka 4.0, real-world stats, pricing)

**Non-Goals:**
- No new components or layouts needed
- No changes to blog listing logic
- No translation (English only for now)
- Not covering Kafka Streams or ksqlDB in detail

## Decisions

### 1. Folder structure: `data/blog/kafka/` with individual files

**Decision:** Create folder with 6 separate MDX files, each standalone.

**Alternatives considered:**
- Single file with tabs/sections → rejected (still one long page)
- Nested folders per topic → rejected (over-engineering for 6 files)

**Rationale:** Flat folder structure is simple, each file gets its own URL, easy to maintain.

### 2. Entry point naming: `index.mdx`

**Decision:** Use `index.mdx` as the series entry point.

**Rationale:** Contentlayer will generate `/blog/kafka` route. Clear convention for series landing page.

### 3. Content split strategy

| File | Target Audience | Content Source |
|------|-----------------|----------------|
| `index.mdx` | Everyone | New (summary + links) |
| `kafka-architecture.mdx` | All developers | Sections 2-4 from original |
| `kafka-comparison.mdx` | Architects | Section 6 + new research data |
| `kafka-spring.mdx` | Spring developers | Section 7 + parts of 9-10 |
| `kafka-quarkus.mdx` | Quarkus developers | Section 8 + parts of 9 |
| `kafka-use-cases.mdx` | DevOps/SRE | Sections 10-12 |

### 4. Original post handling: Redirect with summary

**Decision:** Replace original content with brief summary + prominent links to series.

**Alternatives considered:**
- Delete original → rejected (breaks existing links/SEO)
- Keep both → rejected (duplicate content)

**Rationale:** Preserves SEO, guides existing readers to new structure.

### 5. Cross-linking strategy

**Decision:** Each deep dive includes:
- "Prerequisites" link to entry point
- "Related" links to other deep dives where relevant
- No redundant content between files

## Risks / Trade-offs

**[Risk] Content duplication across files** → Each file has clear scope defined in specs. Entry point has summaries only, deep dives have details.

**[Risk] Broken internal links** → Update any internal links in original post. Search codebase for references to original slug.

**[Risk] Outdated original post still indexed** → Add canonical URL and redirect notice. Monitor search console after deployment.

**[Trade-off] More files to maintain** → Accepted. Benefit of focused articles outweighs maintenance cost. Each file is self-contained.

**[Trade-off] Readers may miss deep dives** → Entry point prominently displays links with clear descriptions of what each deep dive covers.
