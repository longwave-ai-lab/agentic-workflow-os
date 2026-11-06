# CLAUDE.md - Agentic Workflow OS (Free Starter Pack (Module 01 - MIT))

> **Drop-In Constitutional Rules for Google Antigravity, Cursor IDE, Claude Code & ChatGPT**
> **Engineered by Longwave AI Lab (`longwave-ai-lab`)** | **Root Constitution (`<= 200 Lines` Compliant)**

## Quick Routing & Progressive Disclosure Map

To prevent context-window bloat and Lost-in-the-Middle attention decay, this root constitution stays strictly under 200 lines. Full specifications, 10-pair execution tables, and ready-to-run Node.js linters (`exit code 1`) are modularized inside `.cursor/rules/*.mdc`, `.claude/skills/*/SKILL.md`, and `.agents/skills/*/SKILL.md`:

### Module 01: `boost-context-bloat-optimizer`
- **Summary**: Enforces /boost context-window hygiene: <= 200 line root constitutions (CLAUDE.md/GEMINI.md), 3-tier lazy-loaded .mdc and SKILL.md sharding, subagent search offloading, 60% context compaction, and .boost-context-budget.json verification.
- **Cursor Rule**: `.cursor/rules/01-boost-context-bloat-optimizer.mdc`
- **Claude / Antigravity Skill**: `.claude/skills/boost-context-bloat-optimizer/SKILL.md` & `.agents/skills/boost-context-bloat-optimizer/SKILL.md`
- **Full Spec & Node.js Linter**: `rules/01-boost-context-bloat-optimizer.md` & `scripts/lint_boost_context_optimizer.mjs`

## Core Execution Invariants (Always Active)

1. **`/boost` Context Hygiene (Module 01)**: Keep `CLAUDE.md` and `GEMINI.md` at or below 200 lines (`<= 1,800 tokens`) via `One-In, Consolidation-Out` and Option 0 premise audits. Shard domain rules into path-scoped `.mdc` globs and on-demand `SKILL.md` files. Exclude `node_modules`, `dist`, `.next`, and lockfiles via `.cursorignore`. Offload noisy searches to subagents and compact context at 60% capacity.
2. **4-Layer Gate & 2x2 Adversarial Matrix (`Fail-Closed` Verification)**: Separate Layer 1 deterministic `HARD` checks (`< 2s`, AST and closed schema `z.strictObject` passing on a clean Canary sample) from `CONTEXTUAL` signals. Route `SEMANTIC` checks to Layer 2 fail-closed arbitration (`PASS`, `HARD_FAIL`, `GREY_ZONE_WHITE_FLAG`, `UNDETERMINED` vs `SUCCESS`, `NOT_RUN`, `TOOL_ERROR`). Never fabricate fake probabilities (`?? 0.92` or `1.0`) when Layer 2 is skipped. Verify 2-layer gates across all 4 cells of the `2x2 Adversarial Matrix`.
3. **Multi-Turn 3-Lock Reflex at Recency Anchor (Always Active)**: Place core execution reflexes at the bottom of root constitutions so short follow-up prompts stay anchored to scope locks (`git status -sb`), closed schema allowlists (zero Prop-Laundering), and fast `< 2s` targeted verification gates.

## Verification Commands

- Audit `/boost` context budget: `node scripts/lint_boost_context_optimizer.mjs`
- Verify package & linter AST: `node ./bin/cli.mjs --check`
