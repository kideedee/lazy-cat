# 02. Chỉnh sửa nội dung

Hướng dẫn chi tiết cách chỉnh sửa nội dung website: viết blog, sửa trang About, quản lý projects, và tùy chỉnh menu.

## Mục lục

1. [Viết bài blog mới](#1-viết-bài-blog-mới)
2. [Chỉnh sửa trang About](#2-chỉnh-sửa-trang-about)
3. [Quản lý Projects](#3-quản-lý-projects)
4. [Tùy chỉnh Menu điều hướng](#4-tùy-chỉnh-menu-điều-hướng)
5. [Cấu hình Website](#5-cấu-hình-website)
6. [Quản lý hình ảnh](#6-quản-lý-hình-ảnh)

---

## 1. Viết bài blog mới

### Bước 1: Tạo file MDX

Tạo file mới trong thư mục `data/blog/` với tên dạng `ten-bai-viet.mdx`:

```
data/blog/ten-bai-viet-cua-toi.mdx
```

> **Quy tắc đặt tên**: Dùng chữ thường, không dấu, các từ nối bằng dấu gạch ngang `-`

### Bước 2: Thêm frontmatter

Mỗi file MDX bắt đầu bằng phần **frontmatter** (metadata) nằm giữa hai dấu `---`:

```mdx
---
title: 'Tiêu đề bài viết'
date: '2026-04-06'
tags: ['javascript', 'react', 'tutorial']
summary: 'Mô tả ngắn về bài viết, hiển thị ở trang danh sách blog'
images: ['/static/images/my-image.jpg']
authors: ['default']
draft: false
---

Nội dung bài viết bắt đầu từ đây...
```

### Giải thích các trường frontmatter

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| `title` | ✅ | Tiêu đề bài viết |
| `date` | ✅ | Ngày đăng (YYYY-MM-DD) |
| `tags` | ❌ | Danh sách tags, dùng cho phân loại |
| `summary` | ❌ | Mô tả ngắn, hiển thị ở trang list |
| `images` | ❌ | Hình ảnh đại diện (social sharing) |
| `authors` | ❌ | Tác giả, mặc định là `['default']` |
| `draft` | ❌ | `true` = ẩn bài viết, `false` = hiện |
| `lastmod` | ❌ | Ngày cập nhật cuối |
| `canonicalUrl` | ❌ | URL gốc nếu bài đăng lại từ nơi khác |

### Bước 3: Viết nội dung

Nội dung bài viết sử dụng **Markdown** với các tính năng mở rộng:

#### Headings

```mdx
## Heading 2
### Heading 3
#### Heading 4
```

#### Code blocks

````mdx
```javascript
function hello() {
  console.log('Hello World!')
}
```
````

Hỗ trợ syntax highlighting cho nhiều ngôn ngữ: `javascript`, `typescript`, `python`, `bash`, `css`, `html`, v.v.

#### Images

```mdx
![Alt text](/static/images/my-image.jpg)
```

#### Links

```mdx
[Link text](https://example.com)
```

#### Tables

```mdx
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

#### Blockquotes

```mdx
> Đây là một blockquote
```

#### Lists

```mdx
- Item 1
- Item 2
  - Sub-item

1. First
2. Second
```

### Ví dụ bài viết hoàn chỉnh

```mdx
---
title: 'Hướng dẫn sử dụng React Hooks'
date: '2026-04-06'
tags: ['react', 'hooks', 'tutorial']
summary: 'Tìm hiểu cách sử dụng React Hooks cơ bản: useState, useEffect, và useContext'
authors: ['default']
---

## Giới thiệu

React Hooks là tính năng được giới thiệu từ React 16.8...

## useState

Hook cơ bản nhất để quản lý state:

```jsx
const [count, setCount] = useState(0)
```

## useEffect

Dùng để xử lý side effects:

```jsx
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])
```

## Kết luận

Hooks giúp code React gọn gàng và dễ hiểu hơn.
```

---

## 2. Chỉnh sửa trang About

Trang About được lấy từ file `data/authors/default.mdx`.

### Cấu trúc file

```mdx
---
name: Son Vu Quang
avatar: /static/images/lazy-cat.png
occupation: Software Engineer
company: Company Name
email: email@example.com
twitter: https://twitter.com/username
linkedin: https://linkedin.com/in/username
github: https://github.com/username
---

## Hi 👋 I'm Son

Nội dung giới thiệu về bạn...

## Why have this blog?

> Because sharing is learning

Giải thích lý do tạo blog...

## Tech stack

Mô tả tech stack của blog...
```

### Các trường có thể sửa

| Trường | Mô tả |
|--------|-------|
| `name` | Tên của bạn |
| `avatar` | Đường dẫn ảnh đại diện |
| `occupation` | Nghề nghiệp |
| `company` | Công ty (để trống nếu không muốn hiện) |
| `email` | Email |
| `twitter` | Link Twitter |
| `linkedin` | Link LinkedIn |
| `github` | Link GitHub |

### Sử dụng Emoji

Dùng component `<Twemoji>` để hiển thị emoji đẹp:

```mdx
## Hi <Twemoji emoji="waving-hand" /> I'm Son

Thanks for reading <Twemoji emoji="folded-hands" />
```

---

## 3. Quản lý Projects

Danh sách projects nằm trong file `data/projects.ts`.

### Cấu trúc một project

```typescript
{
  type: 'work',  // 'work' hoặc 'self'
  title: 'Tên Project',
  description: 'Mô tả ngắn về project...',
  imgSrc: '/static/images/project-icon.png',
  url: 'https://project-url.com',
  repo: 'username/repo-name',  // GitHub repo
  builtWith: ['React', 'TypeScript', 'TailwindCSS'],
  links: [
    { title: 'Website', url: 'https://...' },
    { title: 'GitHub', url: 'https://...' }
  ]
}
```

### Giải thích các trường

| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| `type` | ✅ | `'work'` = project công việc, `'self'` = project cá nhân |
| `title` | ✅ | Tên project |
| `description` | ✅ | Mô tả ngắn |
| `imgSrc` | ✅ | Icon/logo của project |
| `url` | ❌ | Link đến website/demo |
| `repo` | ❌ | GitHub repo (format: `username/repo`) |
| `builtWith` | ❌ | Danh sách công nghệ sử dụng |
| `links` | ❌ | Các links liên quan |

### Thêm project mới

Mở file `data/projects.ts` và thêm vào mảng `PROJECTS`:

```typescript
export const PROJECTS: Project[] = [
  // Project mới
  {
    type: 'self',
    title: 'My New Project',
    description: 'A cool project I built...',
    imgSrc: '/static/images/my-project.png',
    repo: 'myusername/my-project',
    builtWith: ['Next.js', 'TailwindCSS'],
  },
  // ... các projects khác
]
```

---

## 4. Tùy chỉnh Menu điều hướng

Menu được cấu hình trong file `data/navigation.ts`.

### Header Navigation

```typescript
export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: '/about', title: 'About', emoji: 'billed-cap' },
]
```

### Thêm menu mới

```typescript
export const HEADER_NAV_LINKS = [
  { href: '/blog', title: 'Blog', emoji: 'writing-hand' },
  { href: '/projects', title: 'Projects', emoji: 'hammer-and-wrench' },  // Mới
  { href: '/tags', title: 'Tags', emoji: 'label' },
  { href: '/about', title: 'About', emoji: 'billed-cap' },
]
```

### Footer Navigation

```typescript
export const FOOTER_NAV_LINKS = [
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/about', title: 'About' },
  { href: '/feed.xml', title: 'RSS Feed' },
]
```

### Tìm emoji

Danh sách emoji: [Twemoji cheat sheet](https://twemoji-cheatsheet.vercel.app/)

---

## 5. Cấu hình Website

Thông tin website nằm trong file `data/site-metadata.ts`.

### Các cấu hình quan trọng

```typescript
export const SITE_METADATA = {
  // Thông tin cơ bản
  title: `Lazy Cat – dev blog`,
  author: 'Son Vu Quang',
  headerTitle: `Lazy Cat`,
  description: 'Mô tả website...',
  
  // URL
  siteUrl: 'https://lazy-cat.pages.dev',
  
  // Theme: 'system', 'dark', 'light'
  theme: 'system',
  
  // Social links (để trống nếu không dùng)
  email: 'your@email.com',
  github: 'https://github.com/username',
  linkedin: 'https://linkedin.com/in/username',
  twitter: 'https://twitter.com/username',
  
  // Analytics
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  
  // Comments (Giscus)
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      // ... các config khác
    },
  },
}
```

---

## 6. Quản lý hình ảnh

### Nơi lưu hình ảnh

```
public/static/images/
├── lazy-cat.png       # Logo/Avatar website
├── twitter-card.jpeg  # Social sharing image
└── [your-images]/     # Hình ảnh của bạn
```

### Sử dụng trong bài viết

```mdx
![Mô tả ảnh](/static/images/my-image.jpg)
```

### Kích thước khuyến nghị

| Loại | Kích thước |
|------|------------|
| Avatar | 200x200 px |
| Blog thumbnail | 1200x630 px |
| Social card | 1200x630 px |
| Project icon | 96x96 px |

### Tối ưu hình ảnh

- Dùng định dạng `.jpg` cho ảnh chụp, `.png` cho graphics
- Nén ảnh trước khi upload (dùng [TinyPNG](https://tinypng.com/))
- Đặt tên file mô tả: `react-hooks-diagram.png` thay vì `image1.png`

---

## Checklist khi thêm nội dung mới

### Bài blog mới
- [ ] Tạo file `.mdx` trong `data/blog/`
- [ ] Thêm frontmatter đầy đủ (title, date, tags, summary)
- [ ] Viết nội dung
- [ ] Thêm hình ảnh vào `public/static/images/` nếu cần
- [ ] Kiểm tra trên browser (`pnpm dev`)
- [ ] Chạy `pnpm biome:fix` trước khi commit

### Sửa thông tin cá nhân
- [ ] Cập nhật `data/authors/default.mdx`
- [ ] Cập nhật `data/site-metadata.ts`
- [ ] Thay avatar trong `public/static/images/`

### Thêm project
- [ ] Thêm vào `data/projects.ts`
- [ ] Thêm icon vào `public/static/images/`

---

## Tiếp theo

- [03. Components](./03-components-guide.md) - Tìm hiểu các components React
- [04. Tham khảo kỹ thuật](./04-technical-reference.md) - MDX fields chi tiết, commands
