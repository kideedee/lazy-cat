# 05. Xử lý lỗi thường gặp (Troubleshooting)

Hướng dẫn khắc phục các lỗi phổ biến khi làm việc với dự án.

## Mục lục

1. [Lỗi cài đặt](#1-lỗi-cài-đặt)
2. [Lỗi Development Server](#2-lỗi-development-server)
3. [Lỗi Build](#3-lỗi-build)
4. [Lỗi Content (MDX)](#4-lỗi-content-mdx)
5. [Lỗi Database](#5-lỗi-database)
6. [Lỗi Styling](#6-lỗi-styling)
7. [Lỗi TypeScript](#7-lỗi-typescript)
8. [Lỗi Git/Commit](#8-lỗi-gitcommit)

---

## 1. Lỗi cài đặt

### `pnpm: command not found`

**Nguyên nhân:** pnpm chưa được cài đặt.

**Giải pháp:**
```bash
npm install -g pnpm
```

### `EACCES: permission denied`

**Nguyên nhân:** Không có quyền ghi vào thư mục.

**Giải pháp:**
```bash
# Sửa quyền thư mục npm global
sudo chown -R $(whoami) ~/.npm

# Hoặc dùng nvm để quản lý Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### `Could not resolve dependency`

**Nguyên nhân:** Conflict giữa các packages.

**Giải pháp:**
```bash
# Xóa cache và cài lại
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## 2. Lỗi Development Server

### Port 3434 đã được sử dụng

**Lỗi:** `Error: listen EADDRINUSE: address already in use :::3434`

**Giải pháp:**
```bash
# Tìm process đang dùng port
lsof -i :3434

# Kill process
kill -9 <PID>

# Hoặc chạy ở port khác
PORT=3000 pnpm dev
```

### Module not found

**Lỗi:** `Module not found: Can't resolve '~/components/...'`

**Giải pháp:**
```bash
# Xóa cache Next.js
rm -rf .next

# Chạy lại
pnpm dev
```

### Contentlayer không generate

**Lỗi:** Content không được cập nhật sau khi sửa MDX.

**Giải pháp:**
```bash
# Xóa cache Contentlayer
rm -rf .contentlayer

# Restart dev server
pnpm dev
```

---

## 3. Lỗi Build

### Build failed với lỗi TypeScript

**Lỗi:** `Type error: Property 'x' does not exist on type 'y'`

**Giải pháp:**
```bash
# Kiểm tra lỗi TypeScript
pnpm typecheck

# Sửa lỗi theo hướng dẫn
```

### Out of memory

**Lỗi:** `JavaScript heap out of memory`

**Giải pháp:**
```bash
# Tăng memory limit
NODE_OPTIONS="--max_old_space_size=4096" pnpm build
```

### Image optimization failed

**Lỗi:** `Error: Image Optimization`

**Giải pháp:**
1. Kiểm tra hình ảnh có tồn tại trong `public/`
2. Đảm bảo đường dẫn đúng (bắt đầu bằng `/static/images/`)
3. Kiểm tra kích thước file không quá lớn

---

## 4. Lỗi Content (MDX)

### Frontmatter không hợp lệ

**Lỗi:** `YAMLException: bad indentation of a mapping entry`

**Nguyên nhân:** Format YAML sai.

**Giải pháp:**
```mdx
# Sai
---
title: Hello World
tags: [react, javascript  # Thiếu dấu ]
---

# Đúng
---
title: 'Hello World'
tags: ['react', 'javascript']
---
```

### Date format sai

**Lỗi:** `Invalid time value`

**Giải pháp:**
```mdx
# Sai
date: 'April 6, 2026'
date: '06-04-2026'

# Đúng (ISO format)
date: '2026-04-06'
```

### MDX syntax error

**Lỗi:** `Unexpected token`

**Nguyên nhân:** JSX syntax trong MDX không đúng.

**Giải pháp:**
```mdx
# Sai - HTML comments
<!-- This is a comment -->

# Đúng - JSX comments
{/* This is a comment */}

# Sai - Unescaped special chars
Use the <Component> tag

# Đúng - Escape hoặc dùng code
Use the `<Component>` tag
```

### Bài viết không hiển thị

**Kiểm tra:**
1. File đặt đúng thư mục `data/blog/`
2. Extension là `.mdx`
3. `draft` không được set `true`
4. `date` không phải ngày tương lai

---

## 5. Lỗi Database

### Connection refused

**Lỗi:** `Connection refused to localhost:5432`

**Giải pháp:**
1. Kiểm tra `DATABASE_URL` trong `.env`
2. Đảm bảo database server đang chạy
3. Kiểm tra firewall/network

### Migration failed

**Lỗi:** `relation "xxx" already exists`

**Giải pháp:**
```bash
# Reset database (CẨN THẬN: mất dữ liệu)
npx drizzle-kit drop
npx drizzle-kit push
```

### Drizzle Studio không mở

**Giải pháp:**
```bash
# Kiểm tra port 8088
lsof -i :8088

# Chạy ở port khác
npx drizzle-kit studio --port 8089
```

---

## 6. Lỗi Styling

### Tailwind classes không hoạt động

**Nguyên nhân:** Class không được include trong build.

**Giải pháp:**
1. Kiểm tra file có nằm trong `content` của Tailwind config
2. Restart dev server sau khi sửa config

### Dark mode không chuyển đổi

**Kiểm tra:**
1. `theme` setting trong `data/site-metadata.ts`
2. LocalStorage có bị conflict không

```javascript
// Clear theme setting
localStorage.removeItem('theme')
```

### Fonts không load

**Giải pháp:**
1. Kiểm tra fonts trong `public/fonts/`
2. Kiểm tra CSS import

---

## 7. Lỗi TypeScript

### Cannot find module

**Lỗi:** `Cannot find module '~/components/...'`

**Giải pháp:**
```bash
# Restart TypeScript server (trong VSCode)
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Type mismatch

**Lỗi:** `Type 'A' is not assignable to type 'B'`

**Giải pháp:**
```typescript
// Kiểm tra type definitions
// Đảm bảo import đúng type

// Nếu cần bỏ qua tạm thời (không khuyến khích)
// @ts-ignore
```

---

## 8. Lỗi Git/Commit

### Pre-commit hook failed

**Lỗi:** `husky - pre-commit hook exited with code 1`

**Nguyên nhân:** Biome check phát hiện lỗi.

**Giải pháp:**
```bash
# Fix tất cả lỗi
pnpm biome:fix

# Sau đó commit lại
git add .
git commit -m "your message"
```

### Lint-staged error

**Lỗi:** `lint-staged failed`

**Giải pháp:**
```bash
# Fix files cụ thể
pnpm biome:fix

# Hoặc bypass (không khuyến khích)
git commit --no-verify -m "your message"
```

---

## 9. Checklist Debug

Khi gặp lỗi, làm theo thứ tự:

### Step 1: Đọc error message
```
Error message thường chỉ rõ:
- File nào gây lỗi
- Dòng nào
- Lỗi gì
```

### Step 2: Xóa cache
```bash
rm -rf .next .contentlayer node_modules/.cache
pnpm dev
```

### Step 3: Reinstall dependencies
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Step 4: Kiểm tra versions
```bash
node -v    # Nên >= 18
pnpm -v    # Nên >= 8
```

### Step 5: Google error message

Tìm kiếm exact error message trên:
- Stack Overflow
- GitHub Issues
- Next.js Discussions

---

## 10. Liên hệ hỗ trợ

Nếu vẫn không giải quyết được:

1. **Mở issue trên GitHub** với:
   - Error message đầy đủ
   - Steps to reproduce
   - Environment info (OS, Node version, etc.)

2. **Kiểm tra existing issues** - có thể ai đó đã gặp và giải quyết

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│                    QUICK FIX COMMANDS                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  pnpm biome:fix        Fix code style & lint               │
│  pnpm typecheck        Check TypeScript errors              │
│                                                             │
│  rm -rf .next          Clear Next.js cache                  │
│  rm -rf .contentlayer  Clear Contentlayer cache             │
│                                                             │
│  rm -rf node_modules   Full reinstall                       │
│  pnpm install          (run after rm node_modules)          │
│                                                             │
│  kill -9 $(lsof -t -i:3434)   Kill process on port 3434    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```
