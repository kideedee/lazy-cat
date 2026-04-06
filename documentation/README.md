# Tài liệu dự án Lazy Cat Blog

Chào mừng bạn đến với tài liệu hướng dẫn dự án **Lazy Cat Blog** - một blog cá nhân được xây dựng với Next.js 15 và MDX.

## Mục lục

| Tài liệu | Mô tả | Dành cho |
|----------|-------|----------|
| [01. Quick Start](./01-quick-start.md) | Cài đặt và chạy dự án | Tất cả |
| [02. Chỉnh sửa nội dung](./02-content-editing.md) | Viết blog, sửa About, quản lý projects | Content editor |
| [03. Components](./03-components-guide.md) | Giải thích các components React | Developer |
| [04. Tham khảo kỹ thuật](./04-technical-reference.md) | MDX fields, commands, env vars | Developer |
| [05. Xử lý lỗi](./05-troubleshooting.md) | Các lỗi thường gặp và cách fix | Tất cả |

## Tổng quan dự án

```
lazy-cat/
├── app/                    # Next.js App Router (pages & API)
├── components/             # React components
├── data/                   # 📝 NỘI DUNG CHÍNH (blog, authors, projects)
├── public/                 # Static files (images, fonts)
├── db/                     # Database schema (Drizzle)
├── utils/                  # Utility functions
└── documentation/          # 📖 Bạn đang ở đây
```

## Bắt đầu nhanh

```bash
# 1. Cài đặt dependencies
pnpm install

# 2. Chạy development server
pnpm dev

# 3. Mở trình duyệt
# http://localhost:3434
```

## Những file bạn sẽ thường xuyên chỉnh sửa

| Muốn làm gì? | Sửa file nào? |
|--------------|---------------|
| Đổi tên website, mô tả | `data/site-metadata.ts` |
| Sửa menu điều hướng | `data/navigation.ts` |
| Viết bài blog mới | Tạo file `.mdx` trong `data/blog/` |
| Sửa trang About | `data/authors/default.mdx` |
| Thêm/sửa projects | `data/projects.ts` |
| Thêm hình ảnh | `public/static/images/` |

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS
- **Content**: MDX với Contentlayer2
- **Database**: Supabase PostgreSQL + Drizzle ORM
- **Deployment**: Cloudflare Pages

## Hỗ trợ

Nếu gặp vấn đề, xem [05-troubleshooting.md](./05-troubleshooting.md) hoặc mở issue trên GitHub.
