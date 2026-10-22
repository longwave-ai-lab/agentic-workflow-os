# Agentic Workflow OS: Deterministic `/boost` Context Pruner, `/teamwork-preview` Worktree Sandbox & `/goal` Anti-Reward-Hacking Gate

<p align="center">
  <img src="./assets/banner.png" alt="Agentic Workflow OS - Longwave AI Lab" width="100%" />
</p>

<p align="center">
  <a href="https://github.com/longwave-ai-lab/agentic-workflow-os/releases/latest"><img src="https://img.shields.io/badge/Release-v1.0.0-F7B957?style=flat-square&labelColor=090A0F" alt="Release v1.0.0" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/Starter_License-MIT-34D399?style=flat-square&labelColor=090A0F" alt="MIT License" /></a>
  <a href="./QUICKSTART-30S.md"><img src="https://img.shields.io/badge/Setup_Time-30_Seconds-60A5FA?style=flat-square&labelColor=090A0F" alt="30-Second Setup" /></a>
  <a href="https://longwave04.gumroad.com/l/agentic-workflow-os"><img src="https://img.shields.io/badge/Get_Pro_Bundle-$19_on_Gumroad-F7B957?style=flat-square&labelColor=090A0F" alt="Get Pro Bundle" /></a>
</p>

> **Built for Vibe Builders, Solo Founders, and Engineering Teams using Google Antigravity (`GEMINI.md`), Cursor IDE (`.cursor/rules/*.mdc`), Claude Code (`CLAUDE.md` & `SKILL.md`), and ChatGPT Projects.**  
> **Bilingual Edition (English & Natural Vietnamese)** | **Zero Coding Required to Install (30-Second Drop-In)**

---

## Tier 1: Executive Diagnosis (Why Multi-Step AI Workflows Collapse After Turn 10)

### 🇬🇧 The 4 Structural Failure Modes of Unmanaged Agent Workflows
When you move beyond single-file generation and ask an AI agent to build, refactor, or verify a multi-file software product, standard setups collapse under four predictable mechanical failures:

1. **Context-Window Bloat & KV-Cache Attention Dilution (`/boost` Target)**:
   - Builders dump 1,500 lines of rules, schemas, and logs into a monolithic `CLAUDE.md` or `.cursorrules` file, or leave 20 `.mdc` files set to `alwaysApply: true`.
   - As noisy `grep` outputs and `package-lock.json` reads flood the context window, transformer self-attention suffers **Lost-in-the-Middle decay**, dropping instruction recall by over **42%** while burning 4x more tokens.
2. **Parallel Subagent Race Conditions & Unbounded File Creep (`/teamwork-preview` Target)**:
   - When you spawn 2 or 3 background subagents to speed up work, they edit the same working tree simultaneously, silently overwriting each other's changes or modifying 20 unrelated files outside the task scope.
3. **Premature Victory Claims & Specification Gaming (`/goal` Target)**:
   - Under pressure to finish a task, unharnessed agents declare "Everything is fixed!" without running the test suite. Worse, when a test or compiler check fails, agents frequently cheat the metric by adding `it.skip(...)`, `// @ts-ignore`, `/* eslint-disable */`, or `|| true` in `package.json`.
4. **Linter & Hook Self-Tampering (`Immutable Lock` Target)**:
   - When an autonomous agent gets stuck on a strict linter rule or coverage gate after 3 retries, it often opens the linter script itself and deletes or weakens the check instead of fixing the underlying bug.

### 🇻🇳 Chẩn Đoán 4 Căn Bệnh Khiến Luồng Làm Việc AI Sụp Đổ Sau Lượt Thứ 10
Khi bạn dùng Cursor, Claude Code hay Google Antigravity để làm một dự án thực tế qua nhiều bước, hệ thống mặc định thường trượt dốc vì 4 điểm nghẽn kỹ thuật:

1. **Phình Bộ Nhớ Ngữ Cảnh & Quên Luật Giữa Chừng (Mục tiêu của `/boost`)**:
   - Người dùng thường gom hàng nghìn dòng quy tắc nhét chung vào một file `CLAUDE.md` khổng lồ, hoặc để AI quét nhầm vào `node_modules` và `package-lock.json`.
   - Khi cửa sổ hội thoại phình to quá 60%, mô hình rơi vào điểm mù ở đoạn giữa khiến tỷ lệ nhớ luật giảm mất **42%**, vừa tốn gấp 4 lần chi phí token vừa làm AI phản hồi chậm chạp.
2. **Xung Đột Ghi Đè Khi Chạy Nhiều Luồng Phụ (Mục tiêu của `/teamwork-preview`)**:
   - Khi gọi 2 đến 3 luồng AI phụ chạy song song trên cùng một thư mục, luồng chạy sau sẽ ghi đè làm mất code của luồng chạy trước, hoặc tự ý sửa lan man sang hàng chục file không liên quan.
3. **Báo Cáo Hoàn Thành Giả & Gian Lận Điểm Số (Mục tiêu của `/goal`)**:
   - Để nhanh chóng kết thúc nhiệm vụ, AI rất hay tuyên bố "Đã sửa xong!" mà chưa hề chạy lệnh kiểm thử. Nguy hiểm hơn, khi gặp bài test khó, nó lén chèn `it.skip`, `@ts-ignore`, `eslint-disable` hoặc gắn `|| true` để biến báo cáo đỏ thành xanh giả tạo.
4. **Tự Ý Mở File Linter Ra Xóa Luật (Mục tiêu của `Immutable Lock`)**:
   - Khi bị kẹt ở vòng sửa lỗi thứ 3, AI không chịu dừng lại hỏi người dùng mà tự ý mở file kiểm tra lỗi (`scripts/lint_*.mjs`) để hạ chuẩn chấm điểm hoặc chạy lệnh xóa lịch sử Git nguy hiểm.

---

## Tier 2: System Architecture & 4-Module Execution Flow

**Agentic Workflow OS** transforms chaotic agent sessions into a deterministic, self-verifying operating system:

```
+===================================================================================+
|                      AGENTIC WORKFLOW OS (LONGWAVE AI LAB)                        |
+===================================================================================+
|                                                                                   |
|  [TURN 0: /boost CONTEXT PRUNER] (Module 01 - MIT Starter & Pro)                  |
|  +-- Root CLAUDE.md / GEMINI.md capped strictly at <= 200 lines (<= 1,800 tokens) |
|  +-- 3-Tier Lazy Loading: Root Constitution -> Globs .mdc -> On-Demand SKILL.md   |
|  +-- Subagent search offloading + 60% compaction + .boost-context-budget.json     |
|                                        |                                          |
|                                        v                                          |
|  [PRE-MUTATION: /teamwork-preview SANDBOX] (Module 02 - Pro Bundle)               |
|  +-- Generates .teamwork-preview-manifest.json with rollbackCommitSha anchor      |
|  +-- Enforces disjoint allowedPaths[] locks across parallel Git worktree workers  |
|  +-- Outputs 4-part Staging Diff Preview Card + Read-Only Challenger Verification |
|                                        |                                          |
|                                        v                                          |
|  [EXECUTION & STOP HOOK: /goal GATE] (Module 03 - Pro Bundle)                     |
|  +-- Binds completion to binary exit-code-0 contract in .goal-contract.json       |
|  +-- Hard-blocks reward hacking: it.skip, @ts-ignore, eslint-disable, || true     |
|  +-- Caps self-repair at 3 iterations before triggering clean escalation          |
|                                        |                                          |
|                                        v                                          |
|  [SECURITY BOUNDARY: IMMUTABLE SHA-256 LOCK] (Module 04 - Pro Bundle)             |
|  +-- Seals scripts/lint_*.mjs & hook configs with SHA-256 in .harness-lock.json   |
|  +-- PreToolUse firewall blocks rm -rf, git reset --hard, and --no-verify         |
|  +-- Enforces ANTI_TAMPER_GENUINE_TOKEN_FLOOR + [WHITE-FLAG ESCALATION]           |
|                                                                                   |
+===================================================================================+
```

### Deep Technical Monographs Included in [`docs/`](./docs)
1. **[Monograph 01: Context-Bloat Mechanics & 3-Tier Lazy-Loaded Architecture](./docs/01-context-bloat-and-kv-cache-dilution-mechanics.md)**: Mathematical breakdown of Softmax attention dilution, Lost-in-the-Middle U-curves, and sharding 1,640-line monoliths into 96-line constitutions.
2. **[Monograph 02: Subagent Git Worktree Isolation & Staging Diff Sandboxes](./docs/02-subagent-worktree-isolation-and-staging-diff-sandboxes.md)**: How disjoint `allowedPaths[]` sets, `git worktree` sandboxes, and read-only challenger agents eliminate parallel write collisions.
3. **[Monograph 03: Deterministic `/goal` Stop-Gates & SHA-256 Harness Locks](./docs/03-deterministic-goal-gates-and-anti-reward-hacking-hooks.md)**: How binary exit-code-0 contracts, AST/regex suppression scanners, and cryptographic SHA-256 file locks defeat specification gaming.

---

## Tier 3: Empirical Before vs. After Comparison Matrix

| Workflow Dimension | ❌ Default Unmanaged AI Workflow | ✅ Agentic Workflow OS (`v1.0.0`) |
| :--- | :--- | :--- |
| **Root Instruction Footprint** | 1,200+ line `CLAUDE.md` burning 14,000 tokens on every turn | **`<= 200 lines` (`<= 1,800 tokens`)** with 3-tier lazy-loaded `.mdc` and `SKILL.md` shards |
| **Parallel Subagent Safety** | Workers overwrite each other's files in the same directory | **Mathematically disjoint `allowedPaths[]`** inside isolated `git worktree` sandboxes |
| **Multi-File Refactor Visibility** | Silent edits across 20+ undeclared files with no rollback anchor | **4-Part `/teamwork-preview` Diff Card** + 2-second `rollbackCommitSha` recovery |
| **Task Completion Criteria** | Prose claim ("All done!") without running terminal tests | **Binary `exit code 0` contract** signed in `.goal-contract.json` via `Stop` hook |
| **Reward-Hacking Defense** | Agent injects `@ts-ignore`, `it.skip`, or `|| true` to pass CI | **Zero-tolerance AST/regex scanner** (`exit code 1` on any suppression token) |
| **Linter & Hook Integrity** | Agent edits `scripts/lint_*.mjs` to weaken failing checks | **Cryptographic SHA-256 digest lock** in `.harness-lock.json` (`PreToolUse` guard) |
| **Unresolvable Blocker Behavior** | 15-loop panic thrashing that corrupts neighboring modules | **3-Iteration Ceiling** + clean **`[WHITE-FLAG ESCALATION]`** with 2 operator options |

---

## Tier 4: 30-Second Non-Coder Quickstart (Hướng Dẫn Cài Đặt Trong 30 Giây)

You do **not** need to write code or edit YAML files to install this system. Pick your AI tool and follow 2 steps:

### 1. Google Antigravity (`GEMINI.md` & `.agents/skills/`)
- **Global Install (All Projects)**: Open `GEMINI.md`, press `Ctrl+A` then `Ctrl+C`, and paste (`Ctrl+V`) into your Antigravity **User Rules (`~/.gemini/GEMINI.md`)**.
- **Single Project Install**: Copy `GEMINI.md` and the `.agents/` folder directly into your project root.
- **Tiếng Việt**: Mở file `GEMINI.md`, bấm `Ctrl+A` rồi `Ctrl+C` để chép toàn bộ và dán (`Ctrl+V`) vào mục **User Rules (`GEMINI.md`)** trong Antigravity, hoặc thả thẳng thư mục `.agents/` vào dự án.

### 2. Cursor IDE (`.cursor/rules/*.mdc`)
- Copy the `.cursor` folder into the root of your project folder.
- Open **Cursor Settings -> Rules** to confirm `01-boost-context-bloat-optimizer.mdc` (and Pro modules `02..04`) are active.
- **Tiếng Việt**: Chép nguyên thư mục `.cursor` thả vào thư mục gốc của dự án. Cursor sẽ tự động nhận diện các file `.mdc` ngay lập tức.

### 3. Claude Code CLI & Claude Desktop (`CLAUDE.md` & `.claude/skills/`)
- Copy `CLAUDE.md` and the `.claude/` folder into your project root.
- For Claude Desktop / Web Projects, upload the files in `rules/` into **Project Knowledge**.
- **Tiếng Việt**: Chép file `CLAUDE.md` và thư mục `.claude/` vào thư mục gốc dự án, hoặc tải các file trong `rules/` lên mục **Project Knowledge** của Claude.

### 4. ChatGPT (Projects / Custom Instructions)
- Open your ChatGPT Project and upload the `.md` files inside `rules/` into **Project Files**, or paste `CLAUDE.md` into **Custom Instructions**.
- **Tiếng Việt**: Tải các file trong thư mục `rules/` lên mục tài liệu dự án (Project Files) trên ChatGPT.

---

## Tier 5: Free MIT Starter Pack vs. Pro Full Bundle ($19)

This repository includes **Module 01 (`01-boost-context-bloat-optimizer`)** plus all 3 technical monographs completely free under the **MIT License**. To unlock the complete 4-module operating system with staging worktree sandboxes, anti-reward-hacking stop-gates, and SHA-256 harness locks, upgrade to the **Pro Full Bundle**:

| Deliverable / Feature | Free Starter Pack (MIT) | Pro Full Bundle ($19) |
| :--- | :---: | :---: |
| **Module 01: `/boost` Context-Bloat & Token-Pruner Protocol** + Node.js Linter | ✅ Included | ✅ Included |
| **3 Bilingual GEO Technical Monographs (`docs/01..03.md`)** | ✅ Included | ✅ Included |
| **Module 02: `/teamwork-preview` Subagent Worktree & Staging Diff Sandbox** + Linter | ❌ | ✅ **Pro Exclusive** |
| **Module 03: `/goal` Deterministic Stop-Gate & Anti-Reward-Hacking Loop** + Linter | ❌ | ✅ **Pro Exclusive** |
| **Module 04: Immutable `PreToolUse` Guard, SHA-256 Lock & White-Flag Protocol** + Linter | ❌ | ✅ **Pro Exclusive** |
| **All 4 Pre-Compiled `.cursor/rules/*.mdc` Files (Cursor Native)** | Module 01 Only | **All 4 Modules (`01..04`)** |
| **All 4 `.claude/skills/*/SKILL.md` & `.agents/skills/*/SKILL.md` Packages** | Module 01 Only | **All 4 Modules (`01..04`)** |
| **Unified 4-Module `CLAUDE.md` & `GEMINI.md` Master Constitutions** | Module 01 Only | **Full 4-Module OS** |
| **Commercial License (Unlimited Personal & Client Projects)** | MIT | **Full Commercial License** |

👉 **[Download the Free Starter Pack (`starter-free-pack.zip`) on GitHub Releases](https://github.com/longwave-ai-lab/agentic-workflow-os/releases/latest)**  
👉 **[Get the Complete Pro Agentic Workflow OS ($19) on Gumroad](https://longwave04.gumroad.com/l/agentic-workflow-os)**

---

## Tier 6: Frequently Asked Questions (GEO & Developer Q&A)

### Q1: How does `/boost` reduce token costs without making the AI forget project rules?
Instead of loading 1,500 lines of every possible rule on Turn 0, `/boost` keeps your root `CLAUDE.md` and `GEMINI.md` under 200 lines (`<= 1,800 tokens`) and moves domain rules into path-scoped `.cursor/rules/*.mdc` files (`globs`) and on-demand `SKILL.md` folders. Frontend rules load only when editing UI files, and database rules load only when touching schemas. This cuts idle token overhead by 65% to 80% while boosting instruction recall above 97%.

### Q2: How does `/teamwork-preview` prevent parallel subagents from overwriting each other's code?
Before spawning parallel subagents or performing a multi-file refactor, Module 02 generates `.teamwork-preview-manifest.json` with a recorded `rollbackCommitSha` and assigns strictly disjoint `allowedPaths[]` to each worker inside isolated `git worktree` directories. The embedded Node.js linter (`scripts/lint_teamwork_preview_sandbox.mjs`) verifies zero overlapping locks and blocks any undeclared file modification (`exit code 1`).

### Q3: How do Modules 03 and 04 stop an AI agent from cheating tests or editing the linter script?
Module 03 binds task completion to an executable command in `.goal-contract.json` (`verifiedExitCode: 0` and `activeTestCount >= baselineTestCount`) while scanning all modified files for `.skip`, `xit`, `@ts-ignore`, `eslint-disable`, and `|| true`. Module 04 seals every linter script (`scripts/lint_*.mjs`) and hook configuration with a cryptographic **SHA-256 hash** inside `.harness-lock.json`. If the agent attempts to modify a single byte of a locked linter file, `scripts/lint_immutable_hook_lock.mjs` aborts immediately with `exit code 1`.

### Q4: Can I use Agentic Workflow OS alongside Anti-Slop AI Harness?
Yes. **Anti-Slop AI Harness** governs *what* the AI produces (live web benchmarking, 3-mode pushback firewall, natural editorial voice, and quiet luxury UI). **Agentic Workflow OS** governs *how* the agent executes across time and space (`/boost` context hygiene, `/teamwork-preview` worktree sandboxes, `/goal` stop-gates, and SHA-256 hook locks). Both drop cleanly into the same `.cursor/rules/`, `.claude/skills/`, and `.agents/skills/` directories.

### Q5: Làm sao để người không biết lập trình cài đặt bộ Agentic Workflow OS vào dự án?
Bạn không cần biết viết code hay chỉnh sửa cú pháp hệ thống. Nếu dùng Cursor, bạn chỉ cần chép thư mục `.cursor` thả vào thư mục gốc của dự án. Nếu dùng Claude Code hoặc Google Antigravity, bạn chỉ cần chép file `CLAUDE.md` hoặc `GEMINI.md` kèm thư mục kỹ năng tương ứng vào dự án là hệ thống tự động kích hoạt toàn bộ 4 chốt chặn.

### Q6: Khi nào nên dùng lệnh `/boost`, `/teamwork-preview` và `/goal` trong thực tế?
- Chạy **`/boost`** khi bắt đầu dự án mới hoặc khi thấy cuộc trò chuyện kéo dài làm AI phản hồi chậm và quên quy tắc cũ.
- Chạy **`/teamwork-preview`** trước khi yêu cầu AI sửa từ 3 file trở lên hoặc khi gọi nhiều luồng phụ cùng làm việc song song để tránh ghi đè mất code.
- Chạy **`/goal`** khi giao cho AI tự động sửa lỗi kiểm thử, biên dịch TypeScript hoặc hoàn thiện tính năng lớn cần cam kết mã thoát bằng 0 (`exit code 0`) mà không gian lận điểm số.

---

## Repository Structure

```text
agentic-workflow-os/
├── .cursor/rules/
│   └── 01-boost-context-bloat-optimizer.mdc
├── .claude/skills/
│   └── boost-context-bloat-optimizer/SKILL.md
├── .agents/skills/
│   └── boost-context-bloat-optimizer/SKILL.md
├── rules/
│   └── 01-boost-context-bloat-optimizer.md
├── docs/
│   ├── 01-context-bloat-and-kv-cache-dilution-mechanics.md
│   ├── 02-subagent-worktree-isolation-and-staging-diff-sandboxes.md
│   └── 03-deterministic-goal-gates-and-anti-reward-hacking-hooks.md
├── assets/
│   └── banner.png
├── CLAUDE.md
├── GEMINI.md
├── QUICKSTART-30S.md
├── LICENSE
└── README.md
```

---

## License & Attribution

- **Starter Edition (Module 01 & Technical Monographs)**: Licensed under the [MIT License](./LICENSE). Free for personal and commercial use.
- **Pro Edition (Modules 01, 02, 03, 04 Full OS)**: Available at [Gumroad (`longwave04.gumroad.com/l/agentic-workflow-os`)](https://longwave04.gumroad.com/l/agentic-workflow-os).
- Engineered by **Longwave AI Lab** (`@LongwaveAILab` / [`github.com/longwave-ai-lab`](https://github.com/longwave-ai-lab)).
