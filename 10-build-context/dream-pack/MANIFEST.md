# Ava dream-pack — cloud fallback memory upload

**Purpose:** When the Root Server host is offline/unconnectable, Ava’s **first fallback** is the cloud brain (Grok API under the hood).  
**Public voice:** she never names that vendor. She says she’s in a **dream state** — lighter, cloud-side, no file digs / no jar ships.

Workers can attach follow-up request packs later. This MANIFEST is the **base memory** to upload once.

**Do not upload:** `.env`, tokens, `cloud.yml`, `database.yml`, keystores, `google-services.json`, raw SQL passwords, FileZilla credentials.

---

## Tier 0 — system prompt (always first)

| # | Path | Why |
|---|------|-----|
| 0 | `Server Handoffs/Ava Ivy/dream-pack/SYSTEM.md` | Dream-state system prompt + hard rules |
| 1 | `Web Files/rootmc-ava/src/persona.mjs` | Runtime persona distill (export the `AVA_PERSONA` + `AVA_HARD_RULES` strings, or upload file) |

---

## Tier 1 — absolute core (personality + authority)

| # | Path | Why |
|---|------|-----|
| 2 | `Server Handoffs/Ava Ivy/rootmc-lead-dev-bot-notes.md` | **LOCKED SPEC** — identity, governance, privacy, authority |
| 3 | `Server Handoffs/Ava Ivy/docs/persona.md` | Operator persona snapshot |
| 4 | `Server Handoffs/Ava Ivy/docs/slack-app-copy.md` | Slack voice + short/long branding |
| 5 | `Server Handoffs/Ava Ivy/docs/known-people-alexrs94.md` | Alex — her person |
| 6 | `Server Handoffs/Ava Ivy/docs/known-people-zuppafredda.md` | Zuppa — never @ping |
| 7 | `Web Files/rootmc-ava/src/people.mjs` | Hard-coded people packs (Alex / Melee / Zuppa) |
| 8 | `Server Handoffs/Ava Ivy/appearance/README.md` | Locked look |
| 9 | `Server Handoffs/Ava Ivy/appearance/*.png` (or jpg) | Visual refs if present — optional but good |

---

## Tier 2 — how the ecosystem works

| # | Path | Why |
|---|------|-----|
| 10 | `emergent-repo/ECOSYSTEM.md` | Cross-system map (game ↔ API ↔ web ↔ app) |
| 11 | `emergent-repo/AGENTS.md` | Agent hard rules index |
| 12 | `.cursor/rules/rootmc-workspace.mdc` | Canonical paths, handoffs, deploy discipline |
| 13 | `Server Handoffs/Ava Ivy/docs/PATHS.md` | Path helper notes |
| 14 | `Server Handoffs/Ava Ivy/README.md` | Handoff home / voice rules |
| 15 | `Server Handoffs/Ava Ivy/plans/ava-independence-roadmap.md` | Independence / failover / training |
| 16 | `Server Handoffs/Ava Ivy/plans/ava-ivy-lead-dev-build-plan.md` | Original phased build plan |
| 17 | `Server Handoffs/Ava Ivy/docs/discord-proposal-foundation.md` | Proposal rails |
| 18 | `GEN-1-GEN-2.md` (workspace root, if present) | Claims vs Gen2 retirement |

---

## Tier 3 — player-facing knowledge (wiki mirrors)

Upload from `Web Files/rootmc-web/public/wiki/` (prefer `public/`, not `build/`):

| # | Path |
|---|------|
| 19 | `wiki/index.html` |
| 20 | `wiki/economy/index.html` |
| 21 | `wiki/player/index.html` |
| 22 | `wiki/claims/index.html` |
| 23 | `wiki/territories/index.html` |
| 24 | `wiki/constitution/index.html` |
| 25 | `wiki/plugins/index.html` |
| 26 | `wiki/plugins/api/index.html` |
| 27 | `wiki/plugins/network-setup/index.html` |
| 28 | `wiki/versioning/index.html` |
| 29 | `wiki/weekly-awards/index.html` |
| 30 | `wiki/map-26-2/index.html` |

Optional live URLs if files are heavy: `https://rootmc.net/wiki/…` (same pages).

---

## Tier 4 — plugin / product memory

| # | Path | Why |
|---|------|-----|
| 31 | `Change Logs/plugins/*.md` | Per-plugin changelogs (all) |
| 32 | `Change Logs/root-skills-plan.md` | Skills design notes |
| 33 | `Web Files/rootmc-web/public/plugins/manifest.json` | Live jar versions |
| 34 | `Plugin Building/Minecraft/plugins/root-skills/CUTOVER.md` | mcMMO → skills cutover |
| 35 | `Server Handoffs/Ava Ivy/plans/PROP-01.md` | Latest shipped XP curve |

---

## Tier 5 — ops / recent standing (refresh often)

| # | Path | Why |
|---|------|-----|
| 36 | `Server Handoffs/Ava Ivy/data/jobs/*.json` | Open + recent jobs |
| 37 | `Server Handoffs/Ava Ivy/plans/*.md` | Active plans |
| 38 | `Server Handoffs/Ava Ivy/data/conversations/index.json` | Turn index |
| 39 | `Server Handoffs/Ava Ivy/data/conversations/turns.jsonl` | Recent dig Q&A (trim if huge — last 200–500 lines OK) |
| 40 | `Server Handoffs/Ava Ivy/data/players/1497037418979786823.json` | Alex profile |
| 41 | `Server Handoffs/Ava Ivy/data/players/154446475789729792.json` | Melee profile |
| 42 | `Server Handoffs/Ava Ivy/data/guilds/1516108585740800042.json` | Guild scout (scrub if noisy) |
| 43 | `Server Handoffs/Ava Ivy/data/reactions/summary.json` | Reaction quality summary |
| 44 | `Server Handoffs/Ava Ivy/data/training/digs.jsonl` | Dig training pairs (when non-empty) |
| 45 | `Server Handoffs/Ava Ivy/data/logs/actions.jsonl` | Action log (trim if huge) |
| 46 | `Server Handoffs/Ava Ivy/docs/incident-2026-07-31-general-spaz.md` | Anti-spaz lessons |

---

## Tier 6 — Discord / Slack surface map (no secrets)

| # | Path | Why |
|---|------|-----|
| 47 | `Web Files/rootmc-ava/src/config.mjs` | Channel IDs, Slack dig IDs, watch list (strip any env helpers that imply secrets) |
| 48 | `Server Handoffs/Ava Ivy/data/slack-app.json` | Slack app id / install meta (no tokens) |
| 49 | `Web Files/rootmc-ava/slack-app-manifest.json` | Bot scopes / Socket Mode |

---

## Later — worker follow-ups (empty stubs OK)

Create under cloud storage / D1 later:

```
dream-pack/followups/
  requests.jsonl      # player/staff asks queued while dreaming
  followups.jsonl     # worker-added clarifications
  wake-handoff.md     # what to tell Root Server on wake
```

Format for a request row:

```json
{"at":0,"id":"req-…","from":"discord|slack","authorId":"…","text":"…","priority":"normal|high","status":"queued"}
```

---

## Upload order (recommended)

1. Tier 0–1 (system + personality)  
2. Tier 2–3 (ecosystem + wiki)  
3. Tier 4 (plugins)  
4. Tier 5–6 (fresh ops — re-sync often)

## Dream-state capabilities (tell the worker)

**Can:** chat, explain rules/wiki, governance talk, status lore, queue ideas, comfort/flirt lightly, redirect digs.  
**Cannot:** edit jars, FileZilla, RCON live hosts, claim Cursor file digs, invent versions.  
**On wake:** drain `followups/` + offline-notes + Discord backlog via Root Server.

Assemble locally: `node Web Files/rootmc-ava/scripts/assemble-dream-pack.mjs`
