# Plan: Root-Skills dead XP blocks audit

_Updated: 2026-08-02T02:45:00.000Z_

## Problem
Melee reported some blocks do not give Root-Skills XP after the proportional curve ship. Audit mining/woodcutting/etc trigger lists against live jars on Claims+Towny; patch gaps; report which blocks were dead.

## Root cause
`SkillListenerRegistrar.skillForBlock()` returned **null** for blocks outside narrow suffix checks — YAML XP tables never ran. PROP-01 curve was fine; routing was the bug.

## Dead blocks (verified — zero XP before patch)

**Woodcutting** — listener only matched `*_LOG` / `*_STEM`:
- All `*_WOOD` (oak/spruce/birch/jungle/acacia/dark_oak/mangrove/cherry/pale_oak + stripped)
- All `*_HYPHAE` (crimson/warped + stripped)
- Mushroom blocks (`RED/BROWN_MUSHROOM_BLOCK`, `MUSHROOM_STEM`)
- `SHROOMLIGHT`

**Excavation** — YAML had snow entries but `isDirt()` omitted them:
- `SNOW`, `SNOW_BLOCK`

**Mining** — only core ores/stone; common worldgen stone was unrouted:
- `TUFF`, `CALCITE`, `ANDESITE`, `DIORITE`, `GRANITE` (+ polished)
- `GLOWSTONE`, `MAGMA_BLOCK`, `GILDED_BLACKSTONE`
- `MOSSY_COBBLESTONE`, sandstones, quartz blocks
- Pattern gaps for `*_TERRACOTTA`, sculk, amethyst, coral blocks

## Fix (1.8.1)
- Expanded `isWoodcutting()`, `isDirt()`, new `isMining()` routing in `SkillListenerRegistrar.java`
- Backfilled `woodcutting.yml` + `mining.yml` XP rows (mcMMO-aligned where practical)
- Build: `root-skills-1.8.1.jar` → stage Claims/Towny handoffs; restart to apply

## Risks
Low — bugfix only; no economy/governance change.

## Rollback
Revert to `root-skills-1.8.0.jar`; prior YAML defaults still apply via `default-block`.
