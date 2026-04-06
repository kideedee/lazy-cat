# 03. Components Guide

Hướng dẫn về các React components trong dự án. Giúp bạn hiểu cấu trúc, chức năng và cách tùy chỉnh từng component.

## Tổng quan cấu trúc

```
components/
├── ui/          # Components UI cơ bản (Button, Link, Image, etc.)
├── blog/        # Components cho trang blog
├── header/      # Header và Navigation
├── footer/      # Footer
├── home-page/   # Các sections của trang chủ
├── mdx/         # Components để render MDX
├── cards/       # Card components
├── search/      # Search functionality (kbar)
├── author/      # Author components
└── analytics/   # Analytics components
```

---

## 1. UI Components (`components/ui/`)

Các components UI cơ bản, tái sử dụng được.

### Button (`button.tsx`)

```tsx
import { Button } from '~/components/ui/button'

// Sử dụng
<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
```

### Link (`link.tsx`)

Link component thông minh - tự động phân biệt internal và external links.

```tsx
import { Link } from '~/components/ui/link'

// Internal link
<Link href="/blog">Blog</Link>

// External link (tự động thêm rel="noopener noreferrer")
<Link href="https://github.com">GitHub</Link>
```

### Image (`image.tsx`)

Wrapper cho Next.js Image với các tính năng bổ sung.

```tsx
import { Image } from '~/components/ui/image'

<Image 
  src="/static/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Twemoji (`twemoji.tsx`)

Hiển thị emoji đẹp với Twemoji.

```tsx
import { Twemoji } from '~/components/ui/twemoji'

<Twemoji emoji="waving-hand" />
<Twemoji emoji="rocket" />
```

### Container (`container.tsx`)

Wrapper để giới hạn chiều rộng nội dung.

```tsx
import { Container } from '~/components/ui/container'

<Container>
  <p>Content with max-width</p>
</Container>
```

### Page Header (`page-header.tsx`)

Header cho các trang.

```tsx
import { PageHeader } from '~/components/ui/page-header'

<PageHeader 
  title="Blog Posts"
  description="All my writings"
/>
```

### Now Playing (`now-playing.tsx`)

Hiển thị bài hát đang phát trên Spotify.

```tsx
import { NowPlaying } from '~/components/ui/now-playing'

<NowPlaying />
```

### Other UI Components

| Component | File | Mô tả |
|-----------|------|-------|
| `Brand` | `brand.tsx` | Logo và social icons |
| `GradientBorder` | `gradient-border.tsx` | Border với gradient |
| `GradientDivider` | `gradient-divider.tsx` | Divider với gradient |
| `GrowingUnderline` | `growing-underline.tsx` | Underline animation |
| `MusicWaves` | `music-waves.tsx` | Animation sóng nhạc |
| `RadiantCard` | `radiant-card.tsx` | Card với hiệu ứng radiant |
| `Rating` | `rating.tsx` | Hiển thị rating (stars) |
| `NewsletterForm` | `newsletter-form.tsx` | Form đăng ký newsletter |

---

## 2. Blog Components (`components/blog/`)

Components dùng cho trang blog và bài viết.

### Blog Meta (`blog-meta.tsx`)

Hiển thị thông tin bài viết (ngày, thời gian đọc, views).

```tsx
import { BlogMeta } from '~/components/blog/blog-meta'

<BlogMeta
  date="2026-04-06"
  readingTime={{ minutes: 5 }}
  views={123}
/>
```

### Authors (`authors.tsx`)

Hiển thị thông tin tác giả.

```tsx
import { Authors } from '~/components/blog/authors'

<Authors authors={['default']} />
```

### Tags (`tags.tsx`)

Hiển thị danh sách tags.

```tsx
import { Tags } from '~/components/blog/tags'

<Tags tags={['react', 'javascript']} />
```

### Comments (`comments.tsx`)

Hệ thống comments sử dụng Giscus.

```tsx
import { Comments } from '~/components/blog/comments'

<Comments />
```

### Reactions (`reactions.tsx`)

Nút reactions cho bài viết (like, love, etc.).

```tsx
import { Reactions } from '~/components/blog/reactions'

<Reactions slug="my-post-slug" />
```

### Table of Contents (`toc.tsx`)

Mục lục bài viết.

```tsx
import { TableOfContents } from '~/components/blog/toc'

<TableOfContents toc={tocData} />
```

### Post Navigation (`post-nav.tsx`)

Điều hướng bài trước/sau.

```tsx
import { PostNav } from '~/components/blog/post-nav'

<PostNav prev={prevPost} next={nextPost} />
```

### Post Cards

| Component | Mô tả |
|-----------|-------|
| `PostCardListView` | Card bài viết dạng list |
| `PostCardGridView` | Card bài viết dạng grid |

### Social Share (`social-share.tsx`)

Nút chia sẻ bài viết lên social media.

```tsx
import { SocialShare } from '~/components/blog/social-share'

<SocialShare title="Post title" url="https://..." />
```

---

## 3. Homepage Components (`components/home-page/`)

Components cho trang chủ.

### Homepage Layout (`index.tsx`)

Layout chính của trang chủ, bao gồm tất cả sections.

```tsx
import { HomePage } from '~/components/home-page'

<HomePage />
```

### Greeting (`greeting.tsx`)

Lời chào với emoji.

### Intro (`intro.tsx`)

Phần giới thiệu ngắn.

### Typed Bios (`typed-bios.tsx`)

Hiệu ứng typing cho bio.

```tsx
import { TypedBios } from '~/components/home-page/typed-bios'

<TypedBios />
```

### Latest Posts (`latest-posts.tsx`)

Hiển thị các bài viết mới nhất.

```tsx
import { LatestPosts } from '~/components/home-page/latest-posts'

<LatestPosts posts={latestPosts} />
```

### Links (`links.tsx`)

Social links và contact info.

### Activities (`activities/`)

Hiển thị hoạt động gần đây (GitHub, Spotify, etc.).

---

## 4. Header Components (`components/header/`)

```
header/
├── index.tsx         # Main header
├── header.tsx        # Header layout
├── mobile-nav.tsx    # Mobile navigation
├── nav-item.tsx      # Navigation item
├── theme-switch.tsx  # Dark/light mode switch
└── search-button.tsx # Search button
```

### Theme Switch

Chuyển đổi dark/light mode.

### Mobile Navigation

Menu hamburger cho mobile.

---

## 5. Footer Components (`components/footer/`)

```
footer/
├── index.tsx         # Main footer
├── footer.tsx        # Footer layout
├── footer-links.tsx  # Navigation links
├── now-playing.tsx   # Spotify widget
└── built-with.tsx    # "Built with" credits
```

---

## 6. MDX Components (`components/mdx/`)

Components được inject vào MDX content.

```
mdx/
├── index.tsx         # Export tất cả MDX components
├── pre.tsx           # Code block wrapper
├── code.tsx          # Inline code
├── heading.tsx       # Headings (h1-h6)
└── ...
```

### Sử dụng trong MDX

Các components này tự động available trong MDX files:

```mdx
## Heading (tự động có anchor link)

`inline code`

```javascript
// Code block với syntax highlighting
```

<Twemoji emoji="rocket" />
```

---

## 7. Diagram: Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         APP LAYOUT                               │
│                      (app/layout.tsx)                            │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│    HEADER    │      │    MAIN      │      │    FOOTER    │
│  components/ │      │   CONTENT    │      │  components/ │
│   header/    │      │              │      │   footer/    │
└──────────────┘      └──────────────┘      └──────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   HOMEPAGE   │      │    BLOG      │      │    ABOUT     │
│  components/ │      │  components/ │      │   layouts/   │
│  home-page/  │      │    blog/     │      │              │
└──────────────┘      └──────────────┘      └──────────────┘
        │                     │
        │                     │
        ▼                     ▼
┌──────────────────────────────────────────────────────────┐
│                     UI COMPONENTS                         │
│                   components/ui/                          │
│  Button, Link, Image, Twemoji, Container, etc.           │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Cách tùy chỉnh Components

### Sửa màu sắc

Màu sắc được định nghĩa trong Tailwind config. Sửa file `css/tailwind.css` hoặc class trực tiếp.

### Sửa layout

1. **Trang chủ**: Sửa `components/home-page/index.tsx`
2. **Header**: Sửa `components/header/header.tsx`
3. **Footer**: Sửa `components/footer/footer.tsx`

### Thêm component mới

1. Tạo file trong thư mục phù hợp
2. Export component
3. Import và sử dụng

```tsx
// components/ui/my-component.tsx
export function MyComponent({ children }) {
  return <div className="...">{children}</div>
}

// Sử dụng
import { MyComponent } from '~/components/ui/my-component'
```

---

## Tiếp theo

- [04. Tham khảo kỹ thuật](./04-technical-reference.md) - MDX fields, commands, env vars
- [05. Xử lý lỗi](./05-troubleshooting.md) - Các lỗi thường gặp
