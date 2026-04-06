## Why

Building a personal blog to document programming journey, share lessons, insights, and resources. Content will include technical diagrams (flowcharts, sequence diagrams, architecture), tables, and images. Need a modern, performant blog with good SEO and developer experience.

## What Changes

- Fork and customize `hta218/leohuynh.dev` template (Next.js 15 + React 19 + contentlayer2)
- Add Mermaid diagram support via `rehype-mermaid` for build-time SVG rendering
- Configure deployment to Cloudflare Pages (instead of Vercel)
- Customize site configuration (name, author, social links)
- Remove sample content and prepare for new posts

## Capabilities

### New Capabilities

- `blog-setup`: Initial project setup by forking leohuynh.dev template, installing dependencies, and verifying local development works
- `mermaid-diagrams`: Add Mermaid diagram support with server-side SVG rendering via rehype-mermaid plugin
- `cloudflare-deployment`: Configure Next.js for Cloudflare Pages deployment with @cloudflare/next-on-pages adapter
- `site-customization`: Customize site metadata, author info, social links, and branding

### Modified Capabilities

<!-- None - this is a new project -->

## Impact

- **New repository**: Fork of hta218/leohuynh.dev
- **Dependencies added**: rehype-mermaid, @cloudflare/next-on-pages
- **Config changes**: next.config.js, contentlayer.config.ts, site metadata files
- **Deployment**: Cloudflare Pages (new)
