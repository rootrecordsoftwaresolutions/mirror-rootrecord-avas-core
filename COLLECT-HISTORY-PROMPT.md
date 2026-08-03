# Prompt for older agents — collect Ava Ivy history into avas-core

Copy everything below the line into any older Cursor chat (or agent) that worked on Ava / RootMC / Sexi / lead-dev bot.

---

You are collecting **durable Ava Ivy history** into the private GitHub repo **`RootRecord/avas-core`** (local clone often at `E:\avas-core`).

## Mission

Mine **this chat’s transcript, any linked subagent transcripts, and local files you know** for facts, lore, decisions, plans, identity locks, channel IDs, ops lessons, and personality notes that should survive an SSD wipe. Contribute them into `avas-core` so Ava can be regenerated with full memory.

## Do

1. Locate or clone the repo:
   - Prefer existing `E:\avas-core` if present
   - Else: `git clone https://github.com/RootRecord/avas-core.git E:\avas-core` (private — use RootRecord `gh` auth)
2. Read `AGENTS.md`, `README.md`, `01-personality-src/src/persona.mjs`, `people.mjs`, and `10-build-context/00-README/HOW-SHE-WAS-BUILT.md` so you don’t invent a weaker Ava.
3. Create:
   `history/contributions/YYYY-MM-DD-<short-slug>/`
   with `MANIFEST.md`, `notes.md`, and optional `excerpts/` + `files/`.
4. Put **lasting** notes also into `03-handoff-Ava-Ivy/notes/` as a dated `.md` if they belong in her live handoff (ops lessons, identity locks). Prefer additive dated files over rewriting old lore.
5. Append one bullet to `history/INDEX.md`.
6. **Commit and push** to `main` on `https://github.com/RootRecord/avas-core.git` (no force-push). Message like: `history: recover <topic> from <chat-title>`.

## Extract especially

- Personality / tone locks (lead-dev title, Sexy Assistant undercurrent, anti-spaz, chime-in, dream/sleep, self-respect)
- People locks (Alex wish=command + verified IDs; Melee emergency-stop; Zuppa never @ping; others)
- Surface rules (Slack vs Discord voice; `#admins` digests; `#random-facts`; Ava posts only via `AVA_*` bot tokens — never Slack MCP as Alex)
- Architecture decisions (Cursor brain, local Ollama, handoff path, EcoFlow/solar, RCON, governance/PROP votes)
- IDs (Discord app, Slack user `U0BMBNYPYA2`, channels) — IDs OK; **tokens never**
- Plans/roadmaps filenames + key locks
- Cutover / laptop kit / farewell / storage-pause facts
- File paths that mattered on D: / E:

## Never

- Commit `.env`, bot tokens, API keys, keystores, live `cloud.yml` passwords
- Commit `Ava Ivy.exe` / Electron runtime folders (gitignored; GitHub 100MB)
- Force-push `main`
- Post to Discord/Slack as Ava unless the operator explicitly asked in that chat
- Replace `persona.mjs` wholesale with a guessed rewrite — contribute notes; only patch code if you have the exact durable lock and keep a note in MANIFEST

## Output back to the human

When done, reply with: folder path added, commit SHA, and a 5-bullet summary of what history you recovered. If `avas-core` is unreachable, write the same contribution tree under  
`E:\emergency Ava Ivy Context personality and settings backupda\10-build-context\history-inbox\`  
and say so.

---
