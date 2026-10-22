# GEMINI.md - Agentic Workflow OS (Free Starter Pack (Module 01 - MIT))

> **Drop-In Constitutional Rules for Google Antigravity, Cursor IDE, Claude Code & ChatGPT**
> **Engineered by Longwave AI Lab (`longwave-ai-lab`)** | **Root Constitution (`<= 200 Lines` Compliant)**

## Quick Routing & Progressive Disclosure Map

To prevent context-window bloat and Lost-in-the-Middle attention decay, this root constitution stays strictly under 200 lines. Full specifications, 10-pair execution tables, and ready-to-run Node.js linters (`exit code 1`) are modularized inside `.cursor/rules/*.mdc`, `.claude/skills/*/SKILL.md`, and `.agents/skills/*/SKILL.md`:

### Module 01: `boost-context-bloat-optimizer`
- **Summary**: Enforces /boost context-window hygiene: <= 200 line root constitutions (CLAUDE.md/GEMINI.md), 3-tier lazy-loaded .mdc and SKILL.md sharding, subagent search offloading, 60% context compaction, and .boost-context-budget.json verification.
- **Cursor Rule**: `.cursor/rules/01-boost-context-bloat-optimizer.mdc`
- **Claude / Antigravity Skill**: `.claude/skills/boost-context-bloat-optimizer/SKILL.md` & `.agents/skills/boost-context-bloat-optimizer/SKILL.md`
- **Full Spec & Node.js Linter**: `rules/01-boost-context-bloat-optimizer.md`

## Core Execution Invariants (Always Active)

1. **`/boost` Context Hygiene (Module 01)**: Keep `CLAUDE.md` and `GEMINI.md` at or below 200 lines (`<= 1,800 tokens`). Shard domain rules into path-scoped `.mdc` globs and on-demand `SKILL.md` files. Exclude `node_modules`, `dist`, `.next`, and lockfiles via `.cursorignore`. Offload noisy searches to subagents and compact context at 60% capacity.

## Verification Commands

- Audit `/boost` context budget: `node scripts/lint_boost_context_optimizer.mjs`
