# 04. Tham khảo kỹ thuật

Tài liệu tham khảo chi tiết về MDX frontmatter, commands, environment variables, và cấu hình.

## Mục lục

1. [MDX Frontmatter Fields](#1-mdx-frontmatter-fields)
2. [CLI Commands](#2-cli-commands)
3. [Environment Variables](#3-environment-variables)
4. [Path Aliases](#4-path-aliases)
5. [Database Schema](#5-database-schema)
6. [API Routes](#6-api-routes)
7. [Contentlayer Configuration](#7-contentlayer-configuration)

---

## 1. MDX Frontmatter Fields

### Blog Post (`data/blog/*.mdx`)

| Field | Type | Bắt buộc | Mô tả | Ví dụ |
|-------|------|----------|-------|-------|
| `title` | string | ✅ | Tiêu đề bài viết | `'Hello World'` |
| `date` | string | ✅ | Ngày đăng (ISO format) | `'2026-04-06'` |
| `tags` | string[] | ❌ | Danh sách tags | `['react', 'tutorial']` |
| `lastmod` | string | ❌ | Ngày cập nhật cuối | `'2026-04-07'` |
| `draft` | boolean | ❌ | Ẩn bài viết | `true` / `false` |
| `summary` | string | ❌ | Mô tả ngắn | `'A quick intro...'` |
| `images` | string[] | ❌ | Hình ảnh social sharing | `['/static/images/og.jpg']` |
| `authors` | string[] | ❌ | Tác giả | `['default']` |
| `layout` | string | ❌ | Layout template | `'PostLayout'` |
| `bibliography` | string | ❌ | File bibliography | `'references.bib'` |
| `canonicalUrl` | string | ❌ | URL gốc | `'https://original.com/post'` |

**Computed fields** (tự động tính toán):
- `readingTime` - Thời gian đọc ước tính
- `slug` - URL slug
- `path` - Đường dẫn file
- `toc` - Table of contents

### Snippet (`data/snippets/*.mdx`)

| Field | Type | Bắt buộc | Mô tả |
|-------|------|----------|-------|
| `heading` | string | ✅ | Heading phụ |
| `title` | string | ✅ | Tiêu đề |
| `icon` | string | ✅ | Icon name |
| `date` | string | ✅ | Ngày tạo |
| `tags` | string[] | ❌ | Tags |
| `summary` | string | ❌ | Mô tả |

### Author (`data/authors/*.mdx`)

| Field | Type | Bắt buộc | Mô tả |
|-------|------|----------|-------|
| `name` | string | ✅ | Tên tác giả |
| `avatar` | string | ❌ | Đường dẫn avatar |
| `occupation` | string | ❌ | Nghề nghiệp |
| `company` | string | ❌ | Công ty |
| `email` | string | ❌ | Email |
| `twitter` | string | ❌ | Twitter URL |
| `linkedin` | string | ❌ | LinkedIn URL |
| `github` | string | ❌ | GitHub URL |

---

## 2. CLI Commands

### Development

```bash
# Chạy development server (port 3434)
pnpm dev

# Build production
pnpm build

# Chạy production server
pnpm serve

# Clean cache và node_modules
pnpm clean
```

### Code Quality

```bash
# Tự động fix tất cả (lint + format)
pnpm biome:fix

# Chỉ kiểm tra lint
pnpm biome:lint

# Chỉ format code
pnpm biome:format

# Kiểm tra TypeScript types
pnpm typecheck

# Next.js linter
pnpm lint
```

### Database

```bash
# Tạo và push migrations
pnpm db:init

# Mở Drizzle Studio (GUI, port 8088)
pnpm db:studio

# Seed dữ liệu mẫu
pnpm seed
```

### Analysis

```bash
# Phân tích bundle size
pnpm analyze
```

---

## 3. Environment Variables

Tạo file `.env` ở root directory.

### Bắt buộc (nếu dùng database features)

```env
# Supabase PostgreSQL connection string
DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
```

### Analytics (tùy chọn)

```env
# Umami Analytics
NEXT_UMAMI_ID=your-website-id
```

### Comments - Giscus (tùy chọn)

```env
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=R_kgDO...
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDO...
```

### Spotify Integration (tùy chọn)

```env
SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
SPOTIFY_REFRESH_TOKEN=your-refresh-token
```

### GitHub Integration (tùy chọn)

```env
GITHUB_API_TOKEN=ghp_xxxx
```

---

## 4. Path Aliases

Được cấu hình trong `tsconfig.json`:

| Alias | Path | Ví dụ |
|-------|------|-------|
| `~/` | Root directory | `import { Button } from '~/components/ui/button'` |
| `contentlayer/generated` | Contentlayer output | `import { allBlogs } from 'contentlayer/generated'` |

### Sử dụng

```typescript
// Thay vì relative imports
import { Button } from '../../../components/ui/button'

// Dùng alias
import { Button } from '~/components/ui/button'
```

---

## 5. Database Schema

Schema được định nghĩa trong `db/schema.ts` sử dụng Drizzle ORM.

### Tables

#### `reactions`

Lưu reactions của người đọc.

```typescript
{
  id: serial
  slug: varchar(255)    // Slug của bài viết
  type: varchar(50)     // Loại reaction: 'like', 'love', etc.
  count: integer        // Số lượng
  createdAt: timestamp
  updatedAt: timestamp
}
```

#### `views`

Đếm lượt xem bài viết.

```typescript
{
  id: serial
  slug: varchar(255)    // Slug của bài viết
  count: integer        // Số lượt xem
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Migrations

```bash
# Tạo migration mới
npx drizzle-kit generate

# Push migration lên database
npx drizzle-kit push
```

---

## 6. API Routes

Các API routes trong `app/api/`.

### GET `/api/stats/[slug]`

Lấy thống kê bài viết.

**Response:**
```json
{
  "views": 123,
  "reactions": {
    "like": 45,
    "love": 12
  }
}
```

### POST `/api/stats/[slug]/view`

Tăng lượt xem.

### POST `/api/stats/[slug]/reaction`

Thêm reaction.

**Body:**
```json
{
  "type": "like"
}
```

### GET `/api/spotify/now-playing`

Lấy bài hát đang phát trên Spotify.

**Response:**
```json
{
  "isPlaying": true,
  "title": "Song Name",
  "artist": "Artist Name",
  "album": "Album Name",
  "albumImageUrl": "https://...",
  "songUrl": "https://..."
}
```

### GET `/api/github/activities`

Lấy hoạt động GitHub gần đây.

---

## 7. Contentlayer Configuration

File: `contentlayer.config.ts`

### Document Types

| Type | Path Pattern | Mô tả |
|------|--------------|-------|
| `Blog` | `blog/**/*.mdx` | Bài viết blog |
| `Snippet` | `snippets/**/*.mdx` | Code snippets |
| `Author` | `authors/**/*.mdx` | Thông tin tác giả |

### Plugins

**Remark plugins** (xử lý Markdown):
- `remarkGfm` - GitHub Flavored Markdown
- `remarkMath` - Math equations
- `remarkAlert` - GitHub-style alerts
- `remarkCodeTitles` - Code block titles
- `remarkImgToJsx` - Convert images to JSX

**Rehype plugins** (xử lý HTML):
- `rehypeSlug` - Add IDs to headings
- `rehypeAutolinkHeadings` - Link anchors for headings
- `rehypeMermaid` - Mermaid diagrams
- `rehypeCitation` - Academic citations
- `rehypePresetMinify` - Minify HTML

### Generated Files

Khi chạy `pnpm dev` hoặc `pnpm build`, Contentlayer tự động tạo:

```
.contentlayer/
├── generated/
│   ├── index.d.ts     # TypeScript types
│   ├── index.mjs      # ESM exports
│   ├── Blog/          # Blog posts data
│   ├── Snippet/       # Snippets data
│   └── Author/        # Authors data
```

---

## 8. Biome Configuration

File: `biome.json`

### Rules

```json
{
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 80
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "jsxQuoteStyle": "double",
      "trailingCommas": "all",
      "semicolons": "asNeeded"
    }
  }
}
```

### Ignored Files

- `node_modules/`
- `.next/`
- `.contentlayer/`
- `public/`

---

## 9. Coding Standards Reference

### TypeScript

```typescript
// Constants: ALL_CAPS
const MAX_POSTS = 10
const API_URL = 'https://api.example.com'

// Variables: camelCase
let currentPage = 1
const isLoading = false

// Functions: arrow functions
const fetchPosts = async () => { ... }

// Avoid 'any', use proper types
interface Post {
  title: string
  date: string
  tags: string[]
}
```

### React Components

```tsx
// Functional components only
export function MyComponent({ title }: { title: string }) {
  return <div>{title}</div>
}

// Or with React.FC
export const MyComponent: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}
```

### File Naming

| Type | Convention | Ví dụ |
|------|------------|-------|
| Components | PascalCase | `BlogPost.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Hooks | camelCase (use prefix) | `useActivities.ts` |
| MDX | kebab-case | `my-blog-post.mdx` |

---

## Tiếp theo

- [05. Xử lý lỗi](./05-troubleshooting.md) - Các lỗi thường gặp và cách fix
