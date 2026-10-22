#!/usr/bin/env node
/**
 * MODULE 01 LINTER: Context-Bloat & Token-Pruner Auditor (RULE-BOOST-CONTEXT-OPTIMIZER)
 * Enforces <= 200 line root constitutions, .cursorignore hygiene, and .boost-context-budget.json receipts.
 * Exits with code 1 on any context-bloat violation.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BUDGET_FILE = path.join(ROOT, '.boost-context-budget.json');
const ROOT_CONSTITUTION_MAX_LINES = 200;
const RULE_FILE_MAX_LINES = 320;
const REQUIRED_IGNORE_PATTERNS = ['node_modules', 'dist', 'package-lock.json'];

let violations = [];

// Gate 1: Verify .boost-context-budget.json exists and records audited metrics
if (!fs.existsSync(BUDGET_FILE)) {
  violations.push(
    '[BOOST-001] Missing .boost-context-budget.json in workspace root. ' +
    'Run the /boost context audit and record root constitution line counts and token budget metrics.'
  );
} else {
  try {
    const budget = JSON.parse(fs.readFileSync(BUDGET_FILE, 'utf8'));
    if (typeof budget.rootConstitutionLines !== 'number' || budget.rootConstitutionLines > ROOT_CONSTITUTION_MAX_LINES) {
      violations.push(
        `[BOOST-002] .boost-context-budget.json reports rootConstitutionLines=${budget.rootConstitutionLines} ` +
        `(exceeds hard cap of ${ROOT_CONSTITUTION_MAX_LINES} lines).`
      );
    }
    if (!Array.isArray(budget.ignoredHeavyPaths) || budget.ignoredHeavyPaths.length < 3) {
      violations.push(
        '[BOOST-003] .boost-context-budget.json must list at least 3 ignoredHeavyPaths (e.g., node_modules, dist, package-lock.json).'
      );
    }
    if (typeof budget.estimatedTokenSavingsPct !== 'number' || budget.estimatedTokenSavingsPct < 25) {
      violations.push(
        '[BOOST-004] .boost-context-budget.json must document estimatedTokenSavingsPct >= 25.'
      );
    }
  } catch (err) {
    violations.push(`[BOOST-005] Invalid JSON in .boost-context-budget.json: ${err.message}`);
  }
}

// Gate 2: Check root constitution files (CLAUDE.md, GEMINI.md, .cursorrules) for monolithic bloat
let maxObservedRootLines = 0;
for (const rootFile of ['CLAUDE.md', 'GEMINI.md', '.cursorrules']) {
  const fullPath = path.join(ROOT, rootFile);
  if (fs.existsSync(fullPath)) {
    const lines = fs.readFileSync(fullPath, 'utf8').split(/\r?\n/).length;
    if (lines > maxObservedRootLines) maxObservedRootLines = lines;
    if (lines > ROOT_CONSTITUTION_MAX_LINES) {
      violations.push(
        `[BOOST-006] Root constitution ${rootFile} has ${lines} lines (hard cap is ${ROOT_CONSTITUTION_MAX_LINES} lines). ` +
        `Shard detailed playbooks into .claude/skills/*/SKILL.md or .cursor/rules/*.mdc.`
      );
    }
  }
}

// Gate 3: Check .cursor/rules/*.mdc line caps and frontmatter validity
const cursorRulesDir = path.join(ROOT, '.cursor', 'rules');
if (fs.existsSync(cursorRulesDir)) {
  const mdcFiles = fs.readdirSync(cursorRulesDir).filter((f) => f.endsWith('.mdc'));
  for (const file of mdcFiles) {
    const fullPath = path.join(cursorRulesDir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split(/\r?\n/).length;
    if (lines > RULE_FILE_MAX_LINES) {
      violations.push(`[BOOST-007] .cursor/rules/${file} has ${lines} lines (max ${RULE_FILE_MAX_LINES}).`);
    }
    if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) {
      violations.push(`[BOOST-008] .cursor/rules/${file} is missing YAML frontmatter (description, globs, alwaysApply).`);
    }
  }
}

// Gate 4: Verify .cursorignore, .claudeignore, or .gitignore exists and blocks heavy token-burning paths
const ignoreCandidates = ['.cursorignore', '.claudeignore', '.gitignore']
  .map((f) => path.join(ROOT, f))
  .filter((p) => fs.existsSync(p));

if (ignoreCandidates.length === 0) {
  violations.push(
    '[BOOST-009] Missing workspace ignore file (.cursorignore, .claudeignore, or .gitignore). ' +
    'Create one excluding node_modules, dist, and package-lock.json.'
  );
} else {
  const combinedIgnore = ignoreCandidates.map((p) => fs.readFileSync(p, 'utf8')).join('\n');
  for (const pattern of REQUIRED_IGNORE_PATTERNS) {
    if (!combinedIgnore.includes(pattern)) {
      violations.push(`[BOOST-009] Workspace ignore files are missing heavy token-bloat path: "${pattern}".`);
    }
  }
}

if (violations.length > 0) {
  console.error('❌ [RULE-BOOST-CONTEXT-OPTIMIZER FAILED] Context-bloat violations detected:');
  for (const v of violations) console.error(`  - ${v}`);
  process.exit(1);
}

console.log('✅ [RULE-BOOST-CONTEXT-OPTIMIZER PASSED] Context budget & lazy-loading invariants verified.');
process.exit(0);
