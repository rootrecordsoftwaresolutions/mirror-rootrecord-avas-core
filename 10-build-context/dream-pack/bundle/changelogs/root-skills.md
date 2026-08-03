# Root-Skills

## 1.0.2 — PROP-01 proportional XP climb

- Retuned `RETRO_EXPONENTIAL` so 1–100 actually ramps (Melee ask / governance implement_now).
- New defaults: multiplier **1.6**, exponent **2.35**, base **500** (was 0.12 / 2.05 / 2800 — almost flat).
- Approx `xpToNext`: L1≈500 · L10≈860 · L25≈3.6k · L50≈16k · L75≈41k · L100≈81k.
- Auto-migrates live configs that still have the exact legacy triple on enable/reload.
- Prestige / anti-farm / talents unchanged.

**Deploy:** `root-skills-1.0.2.jar` → Claims/Towny/Test handoffs; remove `1.0.1`; FileZilla + restart (or `/rootskills reload` after jar swap if already live).

## 1.0.1 — v1 content ship

- Filled all **21** skill YAML defs (XP tables aligned toward live mcMMO Retro values where practical).
- **21** default talents (one signature talent per skill) — SHIFT+F loadout.
- `SkillCatalog` loads `skills/*.yml`; listeners use catalog XP (blocks / combat / action).
- Salvage XP via grindstone result clicks; PAPI: `%rootskills_power%`, `%rootskills_<skill>_level|xp|prestige%`, `%rootskills_mana%`, `%rootskills_class%`.
- Added to heartbeat / `manifest.json` publish set.
- Still **stage-only** for live cutover — migrate mcMMO with `/rootskills migrate`, then remove mcMMO after verify (see `CUTOVER.md`).

## 1.0.0 — scaffold

- Engine, MySQL schema, mcMMO migrator, Retro curve, hub GUI, mana/classes/prestige/boosters/parties stubs wired.
