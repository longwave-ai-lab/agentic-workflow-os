# Monograph 04: The 60-Second Open-Source Repository Autopsy & 6 White-Hat Golden Repo Clusters (`RULE-GOLDEN-REPO-CLUSTERS`)

> **Series**: Agentic Workflow OS Deep-Dive Engineering Monographs (`04 / 04`)  
> **Organization**: Longwave AI Lab  
> **Enforcement Script**: `pro-bundle/scripts/lint_repo_cluster_compatibility.mjs`  
> **Primary Citation Anchors**: Yang et al. (Princeton NLP / NeurIPS 2024, [arXiv:2405.15793](https://arxiv.org/abs/2405.15793)), Liu et al. (Stanford TACL 2023, [arXiv:2307.03172](https://arxiv.org/abs/2307.03172)), Aggarwal et al. (ACM SIGKDD 2024, [arXiv:2311.09735](https://arxiv.org/abs/2311.09735))

---

## 1. Executive Summary: Why Random GitHub Star-Hunting Breaks Production Systems

Software engineers and AI workflow builders frequently fall into the **GitHub Trending Trap**. Every week, dozens of repositories accumulate thousands of stars overnight. When developers try to assemble a production application by combining four or five trending repositories at random, the build collapses within hours. Even worse, when an AI coding agent is instructed to wire unfamiliar open-source libraries together without a strict architectural blueprint, it hallucinates incompatible APIs, mixes Node.js CommonJS native addons into Cloudflare Edge V8 Isolates, or pulls in legally risky gray-hat scraping dependencies.

This monograph establishes a deterministic, two-part engineering methodology for **Agentic Workflow OS (`agentic-workflow-os`)**:

1. **The 60-Second Repository Autopsy Protocol (`4-Step Structural X-Ray`)**: How to evaluate any open-source repository in under 60 seconds by reading only four structural coordinates instead of drowning in 50,000 lines of source code.
2. **The 6 White-Hat Golden Repo Clusters (`Compatibility-Verified Stack Matrices`)**: Six battle-tested, 100% enterprise-safe open-source combinations where every library speaks the same runtime, type system, and memory contract, enforced automatically by `pro-bundle/scripts/lint_repo_cluster_compatibility.mjs`.

---

## 2. The 60-Second Open-Source Repository Autopsy Protocol

When you or your AI coding agent inspect a new GitHub repository, reading files top-to-bottom wastes tens of thousands of context tokens. A production engineer needs less than 60 seconds to determine whether a repository is a solid engineering primitive or a fragile demo wrapper.

```text
+-----------------------------------------------------------------------------------+
|                 THE 60-SECOND OPEN-SOURCE REPOSITORY AUTOPSY                      |
+-----------------------------------------+-----------------------------------------+
                                          |
       +----------------------------------+----------------------------------+
       |                                                                     |
       v (Seconds 00..15)                                                    v (Seconds 15..30)
+-----------------------------------------+       +-----------------------------------------+
| STEP 1: Dependency & License Manifest   |       | STEP 2: Entrypoint & Execution Spine    |
|  - Check LICENSE (MIT / Apache-2.0 /    |       |  - Locate main / bin / exports in       |
|    BSD-3 only for commercial builds)    |       |    package.json or src/index.ts         |
|  - Audit dependencies vs devDependencies|       |  - Trace Input -> Transform -> Output   |
|  - Reject native C++ gyp bindings if    |       |    in <= 3 function hops                |
|    targeting Edge V8 Isolates           |       |                                         |
+-----------------------------------------+       +-----------------------------------------+
       |                                                                     |
       +----------------------------------+----------------------------------+
                                          |
       +----------------------------------+----------------------------------+
       |                                                                     |
       v (Seconds 30..45)                                                    v (Seconds 45..60)
+-----------------------------------------+       +-----------------------------------------+
| STEP 3: State, I/O & Runtime Boundary   |       | STEP 4: Verification & Failure Gate     |
|  - Does it mutate global state or disk? |       |  - Inspect tests/ and .github/workflows |
|  - Does it require WebAssembly, Node    |       |  - Are tests deterministic unit/AST     |
|    fs/child_process, or Pure Web APIs?  |       |    assertions or mocked Potemkin stubs? |
+-----------------------------------------+       +-----------------------------------------+
```

### Step 1 (Seconds 00 to 15): License & Dependency Graph Triage (`package.json` / `Cargo.toml` / `pyproject.toml`)

- **License Verification**: Confirm the repository uses a permissive commercial-safe license (`MIT`, `Apache-2.0`, `BSD-2-Clause`, `BSD-3-Clause`, or `ISC`). If a repository uses `GPL-3.0`, `AGPL-3.0`, `SSPL`, or has no `LICENSE` file at all, linking it into a commercial product exposes your codebase to copyleft source-disclosure requirements or copyright liability.
- **Dependency Bloat & Native Binding Check**: Inspect `dependencies` (not `devDependencies`). A high-craft library keeps runtime dependencies minimal (`<= 5` direct packages). Watch out for `node-gyp`, `canvas`, `puppeteer`, or `sharp` if your target deployment environment is a serverless Edge Worker (`Cloudflare Workers` or `Vercel Edge`), because Edge V8 Isolates do not support arbitrary native C++ addons or local headless browsers.

### Step 2 (Seconds 15 to 30): Entrypoint & Execution Spine Tracing

- Never start by reading random helper files in `src/utils/`. Open `package.json` and check the `exports`, `main`, or `bin` fields.
- Open that single entrypoint file (`src/index.ts` or `src/cli.ts`) and trace the core **Input -> Transformation -> Output** pipeline. Every world-class open-source tool reduces to a clear data transformation:
  - `microsoft/markitdown`: Office XML/PDF stream -> DOM/tree normalization -> clean Markdown text.
  - `vercel/satori`: JSX element tree -> Yoga Flexbox layout calculation -> deterministic SVG string.
  - `CloudCannon/pagefind`: Static HTML directory -> Wasm word-frequency inverted index -> chunked client-side search fragments.

### Step 3 (Seconds 30 to 45): Runtime, Memory & Security Boundary Audit

- Classify the repository into one of **3 strict runtime zones**:
  1. **Zone A (Browser / WebAssembly / Edge V8 Isolate)**: Uses standard Web Crypto, `fetch`, `ArrayBuffer`, and pure JavaScript/Wasm (`pdf-lib`, `jimp`, `zod`, `duckdb-wasm`). Zero `node:fs` or `node:child_process` calls at runtime.
  2. **Zone B (Node.js / Bun Server & CLI Runtime)**: Uses `node:fs`, `node:child_process`, native SQLite (`better-sqlite3`), or libvips (`sharp`). Must run in CI, local CLI, or container/VPS environments.
  3. **Zone C (GPU / Heavy Media Pipeline)**: Uses `FFmpeg`, `Remotion` headless Chromium renderer, or local CUDA inference. Must run on dedicated build workstations or batch GPU workers.
- **Mixing Zone B or Zone C libraries inside a Zone A deployment is the #1 cause of broken AI-generated web apps.**

### Step 4 (Seconds 45 to 60): Deterministic Test & Failure Boundary Inspection

- Open `.github/workflows/` and the `test/` directory. Does the project run real binary and structural assertions on every pull request, or does it rely on superficial snapshot tests?
- When adopting a library into an AI-assisted repository, extract 3 canonical usage invariants from its test suite and place them into a scoped `.cursor/rules/<cluster>.mdc` or `.claude/skills/<cluster>/SKILL.md` file so your AI coding agent never guesses outdated syntax from pre-training memory.

---

## 3. Why Popular Conflicting or Gray-Hat Repositories Are Rejected

Before listing the 6 Golden Clusters, we must explicitly document why several viral GitHub categories are strictly excluded from **Agentic Workflow OS**:

| Rejected Category | Concrete Technical or Legal Failure Mode | Deterministic Replacement in Our 6 Clusters |
| :--- | :--- | :--- |
| **Gray-Hat Stealth Scrapers & Anti-Bot Bypasses** (`puppeteer-extra-plugin-stealth`, `nodriver`, `camoufox`, `curl_cffi` TLS spoofers) | Violates website Terms of Service, triggers CFAA / Computer Misuse legal liability, breaks every time Cloudflare updates Bot Fight Mode, and gets enterprise IP ranges blacklisted. | Official REST/GraphQL APIs, user-uploaded local file parsers (`markitdown`, `fast-xml-parser`), and verified webhook pipelines. |
| **Unmaintained All-in-One LangChain / AutoGPT Monoliths** | Injects 80+ transitive dependencies, hides prompt templates behind 6 layers of abstract classes, and balloons context windows with unreadable stack traces. | Thin, zero-dependency Agent-Computer Interface (ACI) scripts (`node:fs`, `node:child_process`, `zod`) paired with `.harness-lock.json`. |
| **Copyleft (`AGPL-3.0` / `GPL-3.0`) Core Engines inside Closed Commercial Bundles** | Contaminates proprietary SaaS or downloadable ZIP bundles, forcing full source disclosure or license revocation. | Permissive `MIT`, `Apache-2.0`, and `BSD-3-Clause` repositories verified by `lint_repo_cluster_compatibility.mjs`. |
| **Cross-Runtime Collision Pairs** (e.g., importing `better-sqlite3` or `sharp` inside a Cloudflare Edge Worker route) | Fails immediately during bundling or throws `Error: Dynamic require of "fs" is not supported` in V8 Isolates. | Strict runtime zoning enforced by `lint_repo_cluster_compatibility.mjs` (`EDGE_ISOLATE` vs. `NODE_CLI_SERVER`). |

---

## 4. The 6 White-Hat Golden Repo Clusters (Enterprise-Safe Architecture Matrices)

Each cluster below consists of **4 synergistic open-source repositories** that share compatible data structures, licensing (`MIT` / `Apache-2.0`), and runtime boundaries.

### Cluster 01: Client-Side Web Utility & GEO Cluster (`ZONE_A_BROWSER_EDGE`)

- **Target Product Archetype**: Zero-upload privacy web utilities (PDF/Image/JSON/Tax calculators), high-speed documentation portals, and Generative Engine Optimization (GEO) content hubs (`100/100` Lighthouse performance, `$0/month` server compute bill).
- **The 4 Synergistic Repositories**:
  1. **`withastro/astro` (`MIT`)**: Zero-JS-by-default static and island architecture that compiles route shells into pure HTML while hydrating interactive tool islands only when visible.
  2. **`cloudflare/workers-sdk` (`Apache-2.0` / `MIT`)**: Edge deployment pipeline (`wrangler`) with `HTMLRewriter` for sub-15ms edge localization and zero-egress global hosting.
  3. **`Hopding/pdf-lib` + `jimp-dev/jimp` (`MIT`)**: Pure JavaScript/ArrayBuffer document and image manipulation engines that run 100% inside the user's browser `WebWorker` without uploading sensitive files to any remote server.
  4. **`AnswerDotAI/llms-txt` + `Schema.org JSON-LD` (`MIT`)**: Machine-readable `/llms.txt` and `/llms-full.txt` indexing endpoints paired with `SoftwareApplication` and `FAQPage` structured data so ChatGPT Search, Perplexity, and Claude cite your tools directly.
- **Why They Lock Together**: `astro` generates the static shell and `/llms.txt` endpoints at build time. `pdf-lib` and `jimp` process user files entirely inside browser memory (`ArrayBuffer`), and `workers-sdk` serves the bundle from 300+ global edge PoPs with zero backend database cost.

### Cluster 02: Deterministic Code-to-Video & 2K Visual Compiler Cluster (`ZONE_C_MEDIA_WORKSTATION`)

- **Target Product Archetype**: Automated 2K (`2560x1440`) YouTube video essays, tactile paper-craft documentaries, programmatic social infographics (`2400x1800`), and dynamic OpenGraph visual cards with `0%` AI font-spelling errors.
- **The 4 Synergistic Repositories**:
  1. **`remotion-dev/remotion` (`Remotion License / Free for individuals & small teams`)**: React-based deterministic frame compiler where every animation is a pure mathematical function of `useCurrentFrame()` and `spring()`.
  2. **`vercel/satori` (`Apache-2.0`)**: Converts HTML/JSX and CSS Flexbox layouts directly into crisp vector SVGs in milliseconds without launching a full browser instance, guaranteeing 100% accurate Vietnamese and multilingual typography.
  3. **`lovell/sharp` (`Apache-2.0`)**: High-speed `libvips` image pipeline that rasterizes Satori SVGs into 2K PNG/WebP assets and verifies non-blank pixel luminance and IHDR binary dimensions.
  4. **`FFmpeg` (`LGPL/GPL CLI`) + `EBU R128 Loudness Mastering`**: Deterministic audio-visual muxing pipeline enforcing `-14.0 LUFS` integrated loudness, `-1.0 dBTP` true peak, and spectral sidechain ducking (`250Hz-3800Hz`) for human voice clarity.
- **Why They Lock Together**: AI pixel diffusion models routinely mangle text and numbers. In Cluster 02, `satori` and `remotion` render text via real vector fonts (`TTF/WOFF2`), `sharp` validates pixel contrast and dimensions in under 50ms, and `FFmpeg` locks broadcast-grade audio loudness.

### Cluster 03: Enterprise Document & Financial Spreadsheet Parsing Cluster (`ZONE_B_NODE_PIPELINE`)

- **Target Product Archetype**: Automated B2B document ingestion pipelines, bank statement and invoice reconcilers, and local RAG knowledge-base normalizers that turn messy enterprise files into validated JSON and Markdown.
- **The 4 Synergistic Repositories**:
  1. **`microsoft/markitdown` (`MIT`)**: Converts Word (`.docx`), PowerPoint (`.pptx`), PDF, and HTML files into clean, structure-preserving Markdown optimized for LLM token efficiency.
  2. **`NaturalIntelligence/fast-xml-parser` (`MIT`)**: Zero-dependency, high-throughput XML-to-JSON parser capable of processing electronic tax invoices, banking feeds, and legacy SOAP payloads without native C++ bindings.
  3. **`SheetJS / exceljs` (`Apache-2.0` / `MIT`)**: Reads and writes multi-sheet `.xlsx` and `.csv` financial ledgers with formula, cell-formatting, and UTF-8 BOM preservation.
  4. **`colinhacks/zod` (`MIT`)**: Runtime schema validation gate that checks every parsed row and document field before it touches your database or LLM prompt, rejecting malformed numbers or missing tax IDs with deterministic error paths.
- **Why They Lock Together**: Raw enterprise files (`XML`, `XLSX`, `DOCX`) destroy LLM accuracy when dumped directly into prompts. `markitdown`, `fast-xml-parser`, and `exceljs` normalize binary files into structured objects, while `zod` acts as an airlock that guarantees 100% schema compliance.

### Cluster 04: Anti-Slop AI Coding & AST Linter Cluster (`ZONE_B_NODE_PIPELINE`)

- **Target Product Archetype**: Deterministic Agent-Computer Interfaces (ACI), automated pull-request review gates, anti-reward-hacking harnesses, and codebase migration engines for teams using Claude Code, Cursor, and Antigravity.
- **The 4 Synergistic Repositories**:
  1. **`biomejs/biome` (`MIT` / `Apache-2.0`)**: Rust-powered unified formatter and linter that executes 15x faster than legacy ESLint/Prettier chains, giving AI coding loops sub-second syntax feedback.
  2. **`dsherret/ts-morph` (`MIT`)**: TypeScript Abstract Syntax Tree (AST) wrapper that allows verification scripts to inspect function signatures, banned imports, Cyclomatic Complexity, and type suppressions structurally rather than relying on fragile regular expressions.
  3. **`vitest-dev/vitest` (`MIT`)**: Fast, workspace-aware unit and mutation test runner with native TypeScript and JSON reporter support for `.goal-contract.json` verification.
  4. **`longwave-ai-lab/anti-slop-ai-harness` + `agentic-workflow-os` (`MIT`)**: Enforces `<= 200-line` root constitutions (`/boost`), disjoint subagent path locks (`/teamwork-preview`), anti-suppression gates (`/goal`), and SHA-256 `.harness-lock.json` integrity (`PreToolUse`).
- **Why They Lock Together**: Prose instructions alone cannot stop an LLM from taking shortcuts under pressure. `biome` and `ts-morph` inspect the exact AST structure in milliseconds, `vitest` verifies behavioral correctness, and `agentic-workflow-os` seals the entire loop with cryptographic SHA-256 locks.

### Cluster 05: Local-First SQLite & Instant Static Search Cluster (`ZONE_A_AND_B_HYBRID`)

- **Target Product Archetype**: High-speed desktop tools, local-first knowledge graphs, developer analytics dashboards, and documentation sites with instant `Ctrl+K` offline search across 10,000+ pages.
- **The 4 Synergistic Repositories**:
  1. **`WiseLibs/better-sqlite3` (`MIT`)**: Synchronous, blazing-fast C++ SQLite binding for Node.js that executes 2,000+ queries per second in WAL (Write-Ahead Logging) mode without async callback overhead.
  2. **`drizzle-team/drizzle-orm` (`Apache-2.0`)**: Zero-overhead, TypeScript-first SQL query builder and migration generator that maps 1:1 to SQLite and PostgreSQL without heavy runtime ORM proxies.
  3. **`CloudCannon/pagefind` (`MIT`)**: Rust/WebAssembly static search indexer that runs after your site build and serves chunked, bandwidth-minimal full-text search directly in the browser without paid Algolia subscriptions.
  4. **`duckdb/duckdb-wasm` (`MIT`)**: In-browser analytical SQL engine capable of querying local Parquet, CSV, and JSON datasets of 100,000+ rows in milliseconds using WebAssembly SIMD.
- **Why They Lock Together**: `better-sqlite3` and `drizzle-orm` provide a rock-solid, type-safe relational backbone during build and local CLI execution, while `pagefind` and `duckdb-wasm` deliver sub-20ms full-text search and OLAP analytics in the browser with zero recurring database hosting fees.

### Cluster 06: Zero-Backend Licensing & CLI Distribution Cluster (`ZONE_B_NODE_PIPELINE`)

- **Target Product Archetype**: Commercial developer CLIs, paid scaffolding toolkits, offline-verifiable Pro software bundles, and automated npm/GitHub release pipelines.
- **The 4 Synergistic Repositories**:
  1. **`Node.js / WebCrypto Ed25519` (`Native Built-in`)**: Asymmetric public-key signature verification (`crypto.verify(null, data, publicKey, signature)`) that allows a CLI or desktop app to verify a customer's offline license key using a bundled public key while the private signing key remains 100% offline.
  2. **`tj/commander.js` (`MIT`)**: The industry-standard, zero-bloat argument parser for Node.js command-line interfaces (`--help`, `--json`, `--dry-run`, strict exit codes).
  3. **`bombshell-dev/clack` (`MIT`)**: Minimalist, accessible terminal UI prompts (spinners, multi-select, step progress) that degrade gracefully in non-interactive CI/AI agent shells (`CI=true`).
  4. **`changesets/changesets` (`MIT`)**: Deterministic semantic versioning, changelog generation, and multi-package release automation for monorepos.
- **Why They Lock Together**: `commander.js` and `clack` provide dual-mode ergonomics (interactive TUI for humans, deterministic `--json` flags for AI agents), `WebCrypto Ed25519` protects commercial Pro features without requiring a fragile licensing server, and `changesets` automates clean releases.

---

## 5. Official Infrastructure Partners That Anchor the 6 Clusters

Open-source code handles computation and verification, while managed infrastructure handles global network routing, TLS, and payment compliance. When deploying any of the 6 clusters above into production, pair them with these official, high-reliability infrastructure platforms:

- **Edge Static & Worker Hosting**: [Cloudflare Pages & Workers](https://pages.cloudflare.com/) (unlimited free static bandwidth, global anycast CDN, and sub-15ms Edge Workers for Cluster 01 and Cluster 05).
- **Managed PostgreSQL & Row-Level Security**: [Supabase](https://supabase.com/) (when a project outgrows local SQLite and requires multi-tenant cloud sync with PostgreSQL RLS).
- **Merchant-of-Record Digital Commerce**: [Gumroad](https://gumroad.com/), [LemonSqueezy](https://www.lemonsqueezy.com/), or [Stripe](https://stripe.com/) (handles global VAT/GST tax remittance, fraud screening, and instant ZIP/license delivery for Cluster 04 and Cluster 06).
- **Deterministic CI/CD Runners**: [GitHub Actions](https://github.com/features/actions) (executes `verify_and_build_product.mjs`, `challenge_verification_suite.mjs`, and `lint_repo_cluster_compatibility.mjs` on every commit).

---

## 6. Automated Enforcement: `lint_repo_cluster_compatibility.mjs`

Included in the Pro Bundle (`pro-bundle/scripts/lint_repo_cluster_compatibility.mjs`), the **Repository Cluster Compatibility & License Firewall Linter** audits any target project's `package.json` and `.repo-cluster-manifest.json` against 4 deterministic gates (`exit code 1` on violation):

1. **`[CLUSTER-001] BANNED_GRAYHAT_OR_STEALTH_PACKAGE`**: Immediately blocks known gray-hat scraping, TLS-spoofing, or anti-bot bypass packages (`puppeteer-extra-plugin-stealth`, `nodriver`, `camoufox`, `cloudscraper`, `curl-impersonate`).
2. **`[CLUSTER-002] COPYLEFT_LICENSE_CONTAMINATION`**: Flags `AGPL-3.0`, `GPL-3.0`, or `SSPL` dependencies inside commercial bundles unless an explicit isolation waiver is declared.
3. **`[CLUSTER-003] RUNTIME_ZONE_COLLISION`**: Detects when `ZONE_A_BROWSER_EDGE` projects accidentally import Node-only native C++/filesystem bindings (`better-sqlite3`, `sharp`, `node-gyp`, `canvas`, `puppeteer`) inside `dependencies`.
4. **`[CLUSTER-004] REDUNDANT_DUPLICATE_CONCERN`**: Flags conflicting packages that solve the exact same concern in the same `package.json` (such as mixing `eslint` + `@biomejs/biome` + `prettier` simultaneously, or mixing `jest` + `vitest` + `mocha`), preventing AI agent confusion.

Run the linter directly from your repository root:

```bash
node pro-bundle/scripts/lint_repo_cluster_compatibility.mjs
```

---

## 7. 🇻🇳 Bản Đồ 6 Cụm Repo Chính Ngạch & Quy Trình Khám Nghiệm Mã Nguồn Mở 60 Giây (Native Vietnamese Edition)

### 7.1. Vì Sao Thói Quen Gom Ngẫu Nhiên Các Kho Mã Nguồn Nhiều Sao Luôn Làm Sập Dự Án?

Rất nhiều kỹ sư và người làm sản phẩm AI mắc phải **Cái Bẫy Chạy Theo Sao GitHub**. Mỗi tuần, hàng chục kho mã nguồn mở tăng vọt vài nghìn sao chỉ sau một đêm. Khi bạn cố lắp ghép 4 hoặc 5 kho mã nguồn đang nổi vào chung một dự án mà không kiểm tra độ tương thích, hệ thống sẽ báo lỗi chồng chéo chỉ sau vài giờ. Nguy hiểm hơn, khi bạn giao cho AI tự kết nối các thư viện lạ chưa có quy chuẩn, AI sẽ bịa ra hàm không tồn tại, nhét thư viện C++ của máy chủ Node.js vào môi trường đám mây Cloudflare Edge, hoặc kéo nhầm các gói công cụ lách tường lửa vi phạm điều khoản dịch vụ của các nền tảng lớn.

Chuyên khảo số 04 này trang bị cho **Agentic Workflow OS (`agentic-workflow-os`)** hai vũ khí thực chiến:

1. **Quy Trình Khám Nghiệm Kho Mã Nguồn Trong 60 Giây (`4 Bước Soi X-Quang Cấu Trúc`)**: Cách đọc vị bất kỳ kho mã nguồn mở nào chỉ trong 1 phút qua 4 tọa độ cốt lõi thay vì lạc lối giữa 50.000 dòng code.
2. **Bản Đồ 6 Cụm Repo Vàng Chính Ngạch (`6 White-Hat Golden Repo Clusters`)**: Sáu tổ hợp mã nguồn mở an toàn tuyệt đối về pháp lý, khớp nhau 100% về môi trường chạy và kiểu dữ liệu, được bảo vệ tự động bằng công cụ kiểm tra `pro-bundle/scripts/lint_repo_cluster_compatibility.mjs`.

### 7.2. Quy Trình Khám Nghiệm Một Kho Mã Nguồn Mở Trong 60 Giây

Khi bạn hoặc tác tử AI tiếp cận một kho mã nguồn mới trên GitHub, việc đọc tuần tự từng file từ trên xuống dưới sẽ đốt sạch hàng chục nghìn token ngữ cảnh. Bạn chỉ cần đúng 60 giây đi qua 4 bước sau để biết kho mã đó là lõi kỹ thuật đáng giá hay chỉ là lớp vỏ hào nhoáng:

1. **Bước 1 (Giây 00 đến 15) - Kiểm tra Giấy phép & Danh sách phụ thuộc (`LICENSE` & `package.json`)**:
   - Mở file `LICENSE` đầu tiên. Chỉ chọn các kho dùng giấy phép mở thương mại an toàn như `MIT`, `Apache-2.0`, `BSD-2-Clause`, `BSD-3-Clause` hoặc `ISC`. Tuyệt đối tránh nhúng các kho mang giấy phép lây nhiễm `AGPL-3.0`, `GPL-3.0` hoặc không có giấy phép vào sản phẩm thương mại đóng gói.
   - Đếm số lượng thư viện trong mục `dependencies`. Một thư viện chất lượng cao luôn giữ số gói phụ thuộc trực tiếp rất gọn (`<= 5` gói) và không kéo theo các trình biên dịch C++ nặng nề (`node-gyp`) nếu bạn định chạy trên môi trường trình duyệt hoặc Cloudflare Workers.
2. **Bước 2 (Giây 15 đến 30) - Truy vết Điểm vào & Trục biến đổi dữ liệu (`Entrypoint & Execution Spine`)**:
   - Đừng đọc các file phụ trợ trong `src/utils/`. Hãy nhìn vào trường `exports`, `main` hoặc `bin` trong `package.json` để mở đúng file cửa ngõ (`src/index.ts`).
   - Truy vết luồng **Đầu vào -> Biến đổi -> Đầu ra** trong tối đa 3 bước nhảy hàm. Mọi công cụ mã nguồn mở xuất sắc đều giải quyết gọn một phép biến đổi: `markitdown` biến file văn phòng thành chữ Markdown sạch, `satori` biến khung giao diện JSX thành ảnh vector SVG, còn `pagefind` băm thư mục HTML tĩnh thành bộ chỉ mục tìm kiếm siêu nhẹ.
3. **Bước 3 (Giây 30 đến 45) - Phân vùng Môi trường chạy & Ranh giới bộ nhớ (`Runtime Zoning`)**:
   - Xếp kho mã nguồn vào đúng 1 trong **3 phân vùng kỹ thuật**:
     + **Vùng A (Trình duyệt / WebAssembly / Đám mây Edge V8)**: Chạy hoàn toàn bằng bộ nhớ `ArrayBuffer` và chuẩn Web (`pdf-lib`, `jimp`, `zod`, `duckdb-wasm`), không đụng tới ổ cứng máy chủ.
     + **Vùng B (Máy chủ Node.js / Công cụ dòng lệnh CLI)**: Cần quyền đọc ghi file `node:fs`, gọi tiến trình con `node:child_process` hoặc kết nối cơ sở dữ liệu C++ (`better-sqlite3`, `sharp`).
     + **Vùng C (Trạm dựng hình & Xử lý đa phương tiện GPU)**: Cần `FFmpeg` hoặc trình kết xuất khung hình `Remotion`.
   - **Lỗi phổ biến nhất khi dùng AI viết code là trộn lẫn thư viện Vùng B vào dự án Vùng A**, khiến bản dựng sập ngay khi đẩy lên Cloudflare Pages hoặc Vercel Edge.
4. **Bước 4 (Giây 45 đến 60) - Kiểm tra Bộ bài test & Rút trích 3 Quy tắc Bất biến**:
   - Mở thư mục `test/` và `.github/workflows/`. Xem tác giả kiểm thử bằng dữ liệu thật hay chỉ viết vài dòng test giả tạo.
   - Rút trích 3 quy tắc gọi hàm chuẩn nhất từ chính file test của kho mã đó và lưu vào `.cursor/rules/<cluster>.mdc` để AI luôn viết đúng chuẩn ngay từ lần chạy đầu tiên.

### 7.3. Bảng Tổng Hợp 6 Cụm Repo Vàng Chính Ngạch Cho Sản Phẩm Thực Chiến

| Mã Cụm | Tên Cụm Kiến Trúc & Phân Vùng | 4 Kho Mã Nguồn Mở Phối Hợp (`100% Chính Ngạch`) | Bài Toán Sản Phẩm Giải Quyết Triệt Để |
| :--- | :--- | :--- | :--- |
| **Cụm 01** | **Tiện Ích Web Xử Lý Tại Máy & Tối Ưu GEO** (`Vùng A - Browser/Edge`) | `withastro/astro` + `cloudflare/workers-sdk` + `pdf-lib`/`jimp` + `llms-txt`/`Schema.org` | Xây dựng hệ thống công cụ xử lý PDF, ảnh, bảng tính chạy 100% trên trình duyệt của người dùng (không tải file lên máy chủ, chi phí vận hành `0 đồng/tháng`, điểm tốc độ `100/100`). |
| **Cụm 02** | **Biên Dịch Code Thành Video & Đồ Họa 2K** (`Vùng C - Media Workstation`) | `remotion-dev/remotion` + `vercel/satori` + `lovell/sharp` + `FFmpeg EBU R128` | Tự động xuất video tài liệu 2K và bộ ảnh đồ họa thông tin sắc nét từ dữ liệu JSON, hiển thị chuẩn 100% dấu tiếng Việt, âm lượng khóa chuẩn truyền hình `-14.0 LUFS`. |
| **Cụm 03** | **Bóc Tách Tài Liệu Doanh Nghiệp & Bảng Tính** (`Vùng B - Node Pipeline`) | `microsoft/markitdown` + `fast-xml-parser` + `SheetJS/exceljs` + `colinhacks/zod` | Chuyển đổi hàng loạt hồ sơ Word, PDF, hóa đơn điện tử XML và sổ cái Excel thành dữ liệu JSON/Markdown sạch, được kiểm tra kiểu dữ liệu nghiêm ngặt bằng `zod`. |
| **Cụm 04** | **Kiểm Soát Chất Lượng AI & Linter Cây Cú Pháp** (`Vùng B - Node Pipeline`) | `biomejs/biome` + `dsherret/ts-morph` + `vitest-dev/vitest` + `anti-slop-ai-harness` | Chặn đứng hành vi AI viết code rác, tự ý chèn `@ts-ignore`, bỏ qua bài test (`it.skip`) hoặc làm phình cửa sổ ngữ cảnh trên Claude Code, Cursor và Antigravity. |
| **Cụm 05** | **Cơ Sở Dữ Liệu Nội Bộ & Tìm Kiếm Tức Thì** (`Lai Vùng A + Vùng B`) | `WiseLibs/better-sqlite3` + `drizzle-orm` + `CloudCannon/pagefind` + `duckdb-wasm` | Quản lý dữ liệu tốc độ cao bằng SQLite tại máy trạm, kết hợp tìm kiếm toàn văn `Ctrl+K` và truy vấn phân tích hàng trăm nghìn dòng ngay trên trình duyệt tĩnh. |
| **Cụm 06** | **Bản Quyền Chữ Ký Số & Đóng Gói Công Cụ CLI** (`Vùng B - Node Pipeline`) | `WebCrypto Ed25519` + `tj/commander.js` + `bombshell-dev/clack` + `changesets` | Đóng gói bộ công cụ dòng lệnh chuyên nghiệp (hỗ trợ cả giao diện tương tác cho người dùng và cờ `--json` cho AI), xác thực khóa bản quyền Pro ngoại tuyến bằng chữ ký số `Ed25519`. |

### 7.4. Chốt Chặn Tự Động Chống Xung Đột Thư Viện (`lint_repo_cluster_compatibility.mjs`)

Để đảm bảo AI không bao giờ tự ý cài đặt các thư viện xung đột hoặc gói mã nguồn vùng xám vào dự án, công cụ `pro-bundle/scripts/lint_repo_cluster_compatibility.mjs` tự động quét file `package.json` và chặn ngay với mã lỗi `exit code 1` nếu phát hiện:

- **Gói công cụ vùng xám hoặc giả mạo trình duyệt (`[CLUSTER-001]`)**: Chặn hoàn toàn các thư viện vượt tường lửa trái phép (`puppeteer-extra-plugin-stealth`, `nodriver`, `camoufox`, `cloudscraper`).
- **Nhiễm giấy phép nguồn mở bắt buộc công khai mã (`[CLUSTER-002]`)**: Cảnh báo và chặn khi nhúng thư viện `AGPL-3.0` hoặc `GPL-3.0` vào gói sản phẩm thương mại mà chưa khai báo tách biệt.
- **Lệch vùng môi trường thực thi (`[CLUSTER-003]`)**: Chặn ngay khi dự án khai báo chạy trên `ZONE_A_BROWSER_EDGE` nhưng lại cài thư viện phụ thuộc C++ của máy chủ (`better-sqlite3`, `sharp`, `canvas`, `puppeteer`) vào nhánh `dependencies`.
- **Trùng lặp công cụ cùng chức năng (`[CLUSTER-004]`)**: Chặn việc cài đặt chồng chéo hai bộ công cụ giải quyết cùng một việc trong cùng một dự án (ví dụ vừa cài `eslint` + `prettier` lại vừa cài `@biomejs/biome`, hoặc vừa cài `jest` vừa cài `vitest`), giúp AI luôn có một chuẩn thực thi duy nhất.
