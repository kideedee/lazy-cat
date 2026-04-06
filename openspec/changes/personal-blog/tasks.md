## 1. Project Setup

- [x] 1.1 Fork hta218/leohuynh.dev repository to personal GitHub account
- [x] 1.2 Clone forked repository to local machine
- [x] 1.3 Install dependencies with `npm install`
- [x] 1.4 Run `npm run dev` and verify site loads at localhost:3434 ← (verify: homepage renders, no console errors)

## 2. Site Customization

- [x] 2.1 Update site metadata in `data/siteMetadata.js` (title, description, siteUrl, author)
- [x] 2.2 Update author info and avatar in author config
- [x] 2.3 Update social links (GitHub, remove/update others as needed)
- [x] 2.4 Review and update navigation items in header config
- [x] 2.5 Remove sample blog posts from `data/blog/` directory
- [x] 2.6 Create a placeholder "Hello World" post to verify content pipeline ← (verify: post renders correctly, MDX works)

## 3. Mermaid Diagram Support

- [x] 3.1 Install rehype-mermaid: `npm install rehype-mermaid`
- [x] 3.2 Add rehype-mermaid to contentlayer.config.ts in rehypePlugins array with inline-svg strategy
- [x] 3.3 Create a test post with Mermaid flowchart diagram
- [x] 3.4 Create a test post with Mermaid sequence diagram
- [x] 3.5 Verify diagrams render as SVG in browser (no client-side JS loaded) ← (verify: diagrams visible, view-source shows SVG, no mermaid.js in network tab)

## 4. Cloudflare Pages Deployment

- [x] 4.1 Install @cloudflare/next-on-pages: `npm install @cloudflare/next-on-pages`
- [x] 4.2 Create wrangler.toml with pages configuration and nodejs_compat flag
- [x] 4.3 Update next.config.js for edge runtime compatibility if needed
- [x] 4.4 Run `npm run build` and verify production build succeeds
- [ ] 4.5 Create Cloudflare Pages project and connect GitHub repository
- [ ] 4.6 Configure build command: `npx @cloudflare/next-on-pages`
- [ ] 4.7 Deploy and verify site is accessible at *.pages.dev URL ← (verify: site loads, all pages work, no 500 errors)

## 5. Final Verification

- [ ] 5.1 Test all navigation links work
- [ ] 5.2 Verify blog post with table renders correctly
- [ ] 5.3 Verify blog post with image renders correctly (with zoom feature)
- [ ] 5.4 Verify blog post with Mermaid diagram renders correctly
- [ ] 5.5 Run Lighthouse audit and confirm score > 90 ← (verify: Lighthouse performance/SEO/accessibility scores acceptable)
