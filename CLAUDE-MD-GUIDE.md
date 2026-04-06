# CLAUDE.md Best Practices Guide

Hướng dẫn tạo file CLAUDE.md hiệu quả cho Claude Code.

---

## Nguyên tắc cốt lõi

### 1. CLAUDE.md là context, không phải config

- Claude **đọc và cố gắng tuân theo**, không đảm bảo 100%
- Instructions dài/mơ hồ → Claude dễ bỏ qua
- Muốn enforce cứng → dùng hooks trong `settings.json`

### 2. Ngắn gọn là vàng

| Khuyến nghị | Nguồn |
|-------------|-------|
| < 200 dòng | Official Anthropic docs |
| < 150 dòng | Community consensus |
| < 60 dòng | HumanLayer (aggressive) |

**Lý do:** Mỗi byte trong CLAUDE.md tiêu tốn context window, mọi session.

### 3. Chỉ document những gì Claude không thể tự suy ra

✅ **Nên có:**
- Commands mà Claude không đoán được (build, test, lint)
- Code style khác default của ngôn ngữ
- Project-specific conventions
- Gotchas và non-obvious behaviors
- Architecture decisions đặc thù

❌ **Không nên có:**
- Conventions Claude đã biết (async/await, optional chaining)
- Chi tiết mà Claude có thể đọc từ code
- API docs dài (link thay vì copy)
- Thông tin thay đổi thường xuyên
- File-by-file descriptions

---

## Cấu trúc khuyến nghị

```markdown
# CLAUDE.md

## Project Overview
[1-2 câu mô tả project]

## Essential Commands
[Build, dev, test, lint - chỉ những gì không đoán được]

## Architecture
[Key directories, patterns - không cần chi tiết từng file]

## Coding Standards
[CHỈ rules khác default - không lặp lại best practices phổ biến]

## Workflow
[Git conventions, PR process - nếu có quy trình đặc thù]

## Environment
[Required env vars, setup steps đặc biệt]

## Gotchas
[Non-obvious behaviors, known footguns - RẤT QUAN TRỌNG]
```

---

## Checklist trước khi commit CLAUDE.md

### Content Quality

- [ ] Dưới 200 dòng (lý tưởng < 150)
- [ ] Không có rules mà Claude đã biết (async/await, arrow functions...)
- [ ] Không duplicate với README hoặc docs khác
- [ ] Có Gotchas section (non-obvious behaviors)
- [ ] Mỗi rule đủ specific để verify được

### Critical Rules

- [ ] Rules quan trọng có prefix "IMPORTANT:" hoặc "YOU MUST"
- [ ] Không có rules conflict với nhau
- [ ] Không có instructions mơ hồ ("write clean code", "good UX")

### Organization

- [ ] Commands được nhóm theo mục đích
- [ ] Không có file-by-file descriptions dài
- [ ] Links thay vì copy cho docs dài

---

## Path-scoped rules (.claude/rules/)

Thay vì nhồi mọi thứ vào CLAUDE.md, tách rules theo context:

```
.claude/rules/
├── api.md           # paths: app/api/**
├── frontend.md      # paths: components/**, app/**/page.tsx
├── database.md      # paths: db/**, prisma/**
└── testing.md       # paths: **/*.test.ts, **/*.spec.ts
```

**Format:**
```markdown
---
paths:
  - "app/api/**"
---

# API Rules
[Rules chỉ load khi làm việc với API files]
```

**Lợi ích:**
- Tiết kiệm context tokens
- Rules relevant hơn
- Dễ maintain

---

## File hierarchy

| Scope | Location | Ai thấy |
|-------|----------|---------|
| Project (team) | `./CLAUDE.md` | Commit vào git |
| Project (cá nhân) | `./CLAUDE.local.md` | Gitignore |
| Global (cá nhân) | `~/.claude/CLAUDE.md` | Chỉ bạn |
| Subdirectory | `./subdir/CLAUDE.md` | Load on-demand |

**CLAUDE.local.md dùng cho:**
- Local URLs (localhost, staging)
- Personal preferences
- Debug shortcuts
- IDE-specific settings

---

## Anti-patterns cần tránh

### 1. File quá dài
```markdown
❌ 500 dòng mô tả chi tiết từng file
✅ 100 dòng tập trung vào decisions và gotchas
```

### 2. Rules mơ hồ
```markdown
❌ "Write clean, maintainable code"
✅ "Functions > 50 lines should be split. Max 3 params per function."
```

### 3. Duplicate standard practices
```markdown
❌ "Use async/await instead of callbacks"
❌ "Prefer const over let"
✅ [Không cần viết - Claude đã biết]
```

### 4. Copy-paste API docs
```markdown
❌ [200 dòng API documentation]
✅ "API docs: https://example.com/docs"
```

### 5. Thiếu Gotchas
```markdown
❌ [Không có section Gotchas]
✅ ## Gotchas
   1. Cache issue: rm -rf .next after X
   2. HMR không work với Y → restart server
```

---

## Tips nâng cao

### 1. Dùng @import cho modular organization
```markdown
@docs/architecture.md
@docs/api-patterns.md
```

### 2. HTML comments cho maintainer notes
```markdown
<!-- Note for maintainers: update this after Q3 -->
```
→ Bị strip khỏi context, không tốn tokens

### 3. Chạy /init để bootstrap
```bash
# Trong Claude Code session
/init
```
→ Auto-detect commands, patterns. Dùng làm starting point.

### 4. Review định kỳ
- CLAUDE.md dễ outdated
- Treat như code: update qua PRs
- Audit conflicts quarterly

---

## Quick reference

```
┌─────────────────────────────────────────────────────────┐
│                 CLAUDE.MD CHEAT SHEET                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ✅ DO                        ❌ DON'T                  │
│  ─────────────────────────    ─────────────────────────│
│  Keep under 150 lines         Write 500+ lines          │
│  Document gotchas             Skip non-obvious issues   │
│  Use IMPORTANT: prefix        Bury critical rules       │
│  Be specific & verifiable     Be vague ("clean code")   │
│  Use path-scoped rules        Put everything in one file│
│  Link to docs                 Copy-paste API docs       │
│  Update regularly             Let it get stale          │
│                                                         │
│  STRUCTURE                                              │
│  ─────────────────────────────────────────────────────  │
│  Project Overview  →  1-2 sentences                     │
│  Commands          →  Only non-obvious ones             │
│  Architecture      →  Key decisions, not file list      │
│  Standards         →  Only deviations from defaults     │
│  Workflow          →  Git/PR conventions if custom      │
│  Gotchas           →  CRITICAL - don't skip this        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

*Tài liệu này dựa trên:*
- *Anthropic Official Documentation (code.claude.com/docs)*
- *HumanLayer Blog - Writing a Good CLAUDE.md*
- *Builder.io - Claude MD Guide*
- *Community best practices*

*Cập nhật: 2026-04-06*
