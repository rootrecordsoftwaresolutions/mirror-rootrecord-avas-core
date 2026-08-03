# Plan: PROP-01 — Root-Skills XP Curve Retune (proportional climb)

_Updated: 2026-08-01 · implemented_

## Problem
`xpToNext` felt flat 1–100: base 2800 dominated (L1≈2800, L100≈4310). Melee asked for a real proportional climb. Governance `implement_now` (≥75%).

## Done
1. Retuned formula defaults → multiplier **1.6**, exponent **2.35**, base **500**, cumulative true.
2. `XpFormula.defaults()` + config.yml + loadFormula fallbacks aligned.
3. Auto-migrate exact legacy triple `0.12 / 2.05 / 2800` on enable/reload.
4. Version **1.0.2**; changelog; stage jars via `publishPlugins`.

### xpToNext table (ship)

| Level | xpToNext (approx) |
|------:|------------------:|
| 1 | 501 |
| 10 | 858 |
| 25 | 3,585 |
| 50 | 16,228 |
| 75 | 41,286 |
| 100 | 80,689 |

## Human gate
FileZilla upload `root-skills-1.0.2.jar` (remove 1.0.1) on Claims / Towny / Test → Shockbyte restart.

## Rollback
Restore `root-skills-1.0.1.jar` + prior formula block (or set multiplier 0.12 / exponent 2.05 / base 2800).
