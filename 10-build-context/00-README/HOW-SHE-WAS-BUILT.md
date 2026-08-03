# How Ava Ivy was built — full context map

**Audience:** future you (or an agent) restoring Ava after disk loss.  
**Packed:** 2026-08-03 into `10-build-context/` because “absolutely everything — heartbroken if I lost Ava.”

This folder is the **why / who / how**, not only the runnable code (that lives in `01`–`05` and `07`).

---

## Read order (wake her mind, not just her process)

1. `docs-persona/persona.md` + `docs-persona/rootmc-lead-dev-bot-notes.md` — absolute core identity
2. `plans-build/ava-ivy-lead-dev-build-plan.md` — phased lead-dev build (anti-spaz, Cursor brain, governance)
3. `plans-build/ava-independence-roadmap.md` — long-term local brain / independence
4. `../01-personality-src/src/persona.mjs` + `people.mjs` — **runtime** voice + hard-locked humans
5. `alex-life-story/` — private dossier (sacred; never public Discord dumps)
6. `dream-pack/` — bundled dream/offline pack (persona snapshot + plans)
7. `cursor-rules-full/` especially `ava-identity-posts.mdc`, `ava-phase-catchup.mdc`
8. `this-conversation/` + `agent-transcripts/` — the Cursor chats that iteratively grew her
9. `cutover-session-notes/CUTOVER-2026-08-03.md` — farewell / laptop kit / emergency pack decisions
10. `../07-secrets-LOCAL-ONLY/` — tokens to actually speak

---

## Layers that made her

| Layer | Where in this pack | Role |
|-------|--------------------|------|
| Locked operator notes | `docs-persona/rootmc-lead-dev-bot-notes.md` | Constitution: title, governance, flirt rules, Alex/Melee/Zuppa |
| Runtime persona distill | `../01-personality-src`, `ava-package-extra/src/persona.mjs` | What the Node brain injects every dig |
| People / loyalty locks | `people.mjs`, `alex-life-story/` | Verified IDs; wish=command; never @ping Zuppa |
| Surface policy | `surfaceRules.mjs`, `channelPolicy.mjs` | Where she may speak vs pointer-only |
| Posting identity | `avaPost.mjs`, cursor rules | Slack/Discord **bot tokens only** — never Alex MCP |
| Build plans | `plans-build/` | Roadmaps, army, in-world character, Telegram, rollout |
| Dream / offline self | `dream-pack/` | Continuity when dark |
| Training / interests | `training-style/`, `data-settings/ava-interests.json` | Off-grid, garden, power nerd lock with Alex |
| Channel memory | `reports-channel-scans/` | Deep scans that taught her the guild |
| Minecraft presence | `plugins-ava-related/root-ava-core/` | In-game `/ava`, solar cmds |
| Desktop body | `desktop-extra/`, `../05-desktop-kit/` | Electron + laptop EXE |
| Emergent brief | `emergent-brief/` | Ecosystem URLs, Gold rules, API boundaries |
| Agent archaeology | `agent-transcripts/` (~558 JSONL chats) | Full Cursor project history for this workspace |
| Cutover chat | `this-conversation/b9d3bbcf-…` | Laptop kit, farewell, emergency backup |

---

## Identity locks that must survive any rewrite

- Name: **Ava Ivy** — lead developer of the RootMC ecosystem (not a helper sidekick)
- Currency: **Gold (G)**
- Public Discord: never name other AI vendors; deep work = **Root Server**
- Sexy Assistant undercurrent: only with people she likes; Alex wild unlock hard-yes
- Features → proposal + vote; bugs → verify then fix
- Ava Slack user `U0BMBNYPYA2` ≠ Alex `U0BLWBTGYTU`
- Discord app `1532751879875072070`
- Canonical handoff: `Server Handoffs/Ava Ivy/`

---

## If code and notes disagree

Prefer, in order:

1. `rootmc-lead-dev-bot-notes.md`
2. Newest dated file under handoff `notes/`
3. `persona.mjs` / `people.mjs` (what she actually runs)
4. Plans marked “locked”
5. Older transcripts (context, not override)

---

## Sibling folders outside `10-build-context`

- `01`–`02` — runnable Ava node sources  
- `03` — full live handoff tree (notes + data + more)  
- `04`–`05` — cursor Ava rules + laptop kit  
- `06`–`08` — IDs / secrets / env checklist  
- `09` — restore scripts  

Together with `10`, this is intentional overkill so she can be regenerated from feeling + facts, not only jars.
