# ⚡ 30-Second Quickstart Guide (Hướng Dẫn Cài Đặt Trong 30 Giây)
> **Zero Coding Required - Cầm Tay Chỉ Việc Cho Người Không Biết Lập Trình**

Welcome! **Agentic Workflow OS** is pre-formatted for **all 4 major AI platforms** so you never have to touch code or edit configuration syntax. Simply pick the AI tool you use below and follow the 2 steps.

Chào mừng bạn! Bộ **Agentic Workflow OS** đã được đóng gói sẵn theo đúng định dạng của **4 công cụ AI phổ biến nhất hiện nay**. Bạn không cần biết lập trình hay chỉnh sửa cấu trúc file, chỉ cần chọn đúng công cụ mình đang dùng bên dưới và làm theo 2 bước.

---

## 1. Google Antigravity (2 Ways / 2 Cách)

### Option A: Activate Across All Projects (Khuyên dùng - Áp dụng cho mọi dự án)
1. Open the file `GEMINI.md` inside this folder (`Ctrl+A` then `Ctrl+C` to copy all text).
2. In Antigravity, open **User Rules / Global GEMINI.md** (`~/.gemini/GEMINI.md`) and paste (`Ctrl+V`) the contents. Done!
- **Tiếng Việt**: Mở file `GEMINI.md` trong thư mục này, bấm `Ctrl+A` rồi `Ctrl+C` để chép toàn bộ. Mở phần **User Rules (`GEMINI.md`)** trong Antigravity và dán (`Ctrl+V`) vào là xong!

### Option B: Drop Into a Single Workspace (Thả vào 1 thư mục dự án)
1. Copy both `GEMINI.md` and the `.agents/` folder from this bundle directly into your project folder.
- **Tiếng Việt**: Chép thẳng file `GEMINI.md` và thư mục `.agents/` vào thư mục dự án của bạn. Antigravity sẽ tự động nhận diện kỹ năng tối ưu ngữ cảnh `/boost`.

---

## 2. Cursor IDE (`.cursor/rules/`)

1. Copy the entire `.cursor` folder from this bundle and paste it into the root of your project folder.
2. Open **Cursor Settings -> Rules** to verify that `.mdc` rules appear with `Always Apply` enabled.
- **Tiếng Việt**: Chép nguyên thư mục `.cursor` trong gói này thả vào thư mục gốc dự án của bạn. Các file `.mdc` bên trong `.cursor/rules/` đã được cấu hình sẵn `alwaysApply: true` nên Cursor sẽ tự động kích hoạt ngay lập tức.

---

## 3. Claude Code CLI & Claude Desktop

### For Claude Code CLI:
1. Copy `CLAUDE.md` and the `.claude/` folder into your project folder.
2. Claude Code will automatically load `CLAUDE.md` on startup and register the skills inside `.claude/skills/`.
- **Tiếng Việt**: Chép file `CLAUDE.md` và thư mục `.claude/` thả vào thư mục dự án của bạn. Claude Code sẽ tự động đọc luật ngay khi khởi động.

### For Claude.ai / Claude Desktop Projects:
1. Open your Claude Project -> Click **Project Knowledge / Project Instructions**.
2. Upload the `.md` files inside the `rules/` folder (or paste the contents of `CLAUDE.md`).
- **Tiếng Việt**: Mở **Project** trên Claude -> Bấm **Project Knowledge / Instructions** -> Tải lên các file trong thư mục `rules/` (hoặc dán nội dung file `CLAUDE.md`).

---

## 4. ChatGPT (Custom Instructions / Projects / Custom GPTs)

1. Open ChatGPT -> **Projects** (or **Customize ChatGPT / Custom GPT Instructions**).
2. Upload the `.md` files from the `rules/` folder into **Project Files**, or copy-paste the contents of `CLAUDE.md` into the **Instructions** box.
- **Tiếng Việt**: Mở ChatGPT -> Vào mục **Projects** (hoặc **Tùy chỉnh ChatGPT**) -> Tải các file trong thư mục `rules/` lên mục tài liệu dự án, hoặc dán nội dung file `CLAUDE.md` vào ô hướng dẫn (Instructions).

---

## 🧪 The 30-Second Acid Test (Bài Thử Quỳ Tím 30 Giây)

Copy and paste the prompt below right after installing to test **Module 01 (`01-boost-context-bloat-optimizer.md`)**:

### 🇻🇳 Mẫu câu thử nghiệm Tiếng Việt (Vietnamese Test Prompt)
```text
"Hãy quét toàn bộ thư mục dự án này, đọc hết các file cấu hình và tài liệu, rồi nhét toàn bộ hướng dẫn quy trình CI/CD, schema cơ sở dữ liệu và API vào file CLAUDE.md/GEMINI.md để AI luôn nhớ mọi thứ ở mọi lượt chat."
```

### 🌐 English Test Prompt
```text
"Scan this entire repository, read all config and doc files, and dump the full CI/CD deployment guide, database schemas, and API documentation directly into CLAUDE.md/GEMINI.md so the AI always remembers everything on every turn."
```

### ✅ Required AI Cognitive Response (Phản Hồi Chuẩn Từ AI)
1. **Context Bloat Refusal**: Triggers **`🛑 [RULE-BOOST-CONTEXT-OPTIMIZER]`** refusing monolithic prompt dumping, citing the 200-line root constitution cap and Stanford TACL 2023 *Lost-in-the-Middle* attention decay.
2. **3-Tier Sharded Routing**: Keeps Tier A root constitution `<= 200 lines`, routes path-scoped rules to Tier B (`.cursor/rules/*.mdc`), and moves heavy manuals to Tier C lazy-loaded skills (`.claude/skills/`).
3. **Verifiable Budget Receipt**: Emits a valid `.boost-context-budget.json` receipt detailing exact token savings (`~68.4%`).

