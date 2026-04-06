# 01. Quick Start - Hướng dẫn cài đặt và chạy dự án

Hướng dẫn này giúp bạn cài đặt và chạy dự án Lazy Cat Blog trên máy tính của mình.

## Yêu cầu hệ thống

Trước khi bắt đầu, đảm bảo máy tính của bạn đã cài đặt:

| Phần mềm | Phiên bản tối thiểu | Kiểm tra bằng lệnh |
|----------|---------------------|-------------------|
| Node.js | 18.x trở lên | `node -v` |
| pnpm | 8.x trở lên | `pnpm -v` |
| Git | Bất kỳ | `git --version` |

### Cài đặt Node.js

Tải từ [nodejs.org](https://nodejs.org/) hoặc dùng nvm:
```bash
# Cài nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Cài Node.js
nvm install 20
nvm use 20
```

### Cài đặt pnpm

```bash
npm install -g pnpm
```

## Cài đặt dự án

### Bước 1: Clone repository

```bash
git clone <repository-url> lazy-cat
cd lazy-cat
```

### Bước 2: Cài đặt dependencies

```bash
pnpm install
```

Lệnh này sẽ cài đặt tất cả các packages cần thiết. Có thể mất vài phút.

### Bước 3: Cấu hình môi trường (tùy chọn)

Tạo file `.env` từ template:

```bash
cp .env.example .env
```

Mở file `.env` và điền các giá trị:

```env
# Database (bắt buộc nếu dùng tính năng reactions/views)
DATABASE_URL=postgresql://...

# Umami Analytics (tùy chọn)
NEXT_UMAMI_ID=your-website-id

# Giscus Comments (tùy chọn)
NEXT_PUBLIC_GISCUS_REPO=username/repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=...
NEXT_PUBLIC_GISCUS_CATEGORY=...
NEXT_PUBLIC_GISCUS_CATEGORY_ID=...
```

> **Lưu ý**: Dự án vẫn chạy được mà không cần file `.env`. Các tính năng liên quan sẽ bị vô hiệu hóa.

### Bước 4: Chạy development server

```bash
pnpm dev
```

Mở trình duyệt và truy cập: **http://localhost:3434**

## Các lệnh thường dùng

### Development

| Lệnh | Mô tả |
|------|-------|
| `pnpm dev` | Chạy development server (port 3434) |
| `pnpm build` | Build production |
| `pnpm serve` | Chạy production server |

### Code Quality

| Lệnh | Mô tả |
|------|-------|
| `pnpm biome:fix` | Tự động fix lỗi code style và lint |
| `pnpm biome:lint` | Kiểm tra lỗi lint |
| `pnpm biome:format` | Format code |
| `pnpm typecheck` | Kiểm tra TypeScript types |

### Database

| Lệnh | Mô tả |
|------|-------|
| `pnpm db:init` | Tạo và push database migrations |
| `pnpm db:studio` | Mở Drizzle Studio (port 8088) |
| `pnpm seed` | Seed dữ liệu mẫu |

## Cấu trúc thư mục

```
lazy-cat/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blog/              # Trang blog
│   ├── about/             # Trang about
│   ├── tags/              # Trang tags
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Trang chủ
│
├── components/            # React components
│   ├── ui/               # UI components (Button, Link, etc.)
│   ├── blog/             # Blog components (Comments, TOC, etc.)
│   ├── header/           # Header & Navigation
│   ├── footer/           # Footer
│   ├── home-page/        # Homepage sections
│   └── mdx/              # MDX rendering components
│
├── data/                  # 📝 NỘI DUNG - BẠN SẼ SỬA Ở ĐÂY
│   ├── blog/             # Bài viết blog (*.mdx)
│   ├── authors/          # Thông tin tác giả (*.mdx)
│   ├── snippets/         # Code snippets (*.mdx)
│   ├── site-metadata.ts  # Cấu hình website
│   ├── navigation.ts     # Menu điều hướng
│   └── projects.ts       # Danh sách projects
│
├── public/                # Static files
│   └── static/
│       └── images/       # Hình ảnh
│
├── db/                    # Database
│   └── schema.ts         # Drizzle schema
│
├── utils/                 # Utility functions
├── hooks/                 # React hooks
├── icons/                 # SVG icons
├── layouts/               # Page layouts
└── css/                   # Global styles
```

## Workflow phát triển

```
┌─────────────────────────────────────────────────────────────┐
│                    WORKFLOW PHÁT TRIỂN                       │
└─────────────────────────────────────────────────────────────┘

1. Sửa file         2. Dev server        3. Kiểm tra         4. Commit
   (data/, etc.)       tự động reload       biome:fix           git commit
       │                    │                   │                   │
       ▼                    ▼                   ▼                   ▼
   ┌────────┐          ┌────────┐          ┌────────┐          ┌────────┐
   │  Edit  │ ───────▶ │  View  │ ───────▶ │  Fix   │ ───────▶ │  Save  │
   │  File  │          │ Browser│          │  Code  │          │   Git  │
   └────────┘          └────────┘          └────────┘          └────────┘
```

### Quy trình chuẩn

1. **Sửa file** - Chỉnh sửa nội dung trong `data/` hoặc code trong `components/`
2. **Xem kết quả** - Development server tự động reload, xem thay đổi trên trình duyệt
3. **Fix lỗi** - Chạy `pnpm biome:fix` để fix lỗi code style
4. **Commit** - Commit thay đổi với message rõ ràng

## Tiếp theo

- [02. Chỉnh sửa nội dung](./02-content-editing.md) - Học cách viết blog, sửa About, quản lý projects
- [03. Components](./03-components-guide.md) - Tìm hiểu các components trong dự án
