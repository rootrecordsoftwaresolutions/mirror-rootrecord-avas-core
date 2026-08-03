# Regenerate Ava context (for agents / operators)

Use this pack when waking Ava after a wipe or on a new host.

## Personality (must merge)

Copy these into `Web Files/rootmc-ava/` (already under `01-personality-src` and `02-ava-core-src-select`):

- `src/persona.mjs` — voice, title (lead developer), tone locks
- `src/people.mjs` + `src/alexLifeStory.mjs` — Alex / Melee / Zuppa hard locks
- `src/surfaceRules.mjs` + `src/channelPolicy.mjs` — where she may speak
- `src/avaPost.mjs` — **only** allowed Slack/Discord posting path for Ava bots
- `src/config.mjs` — IDs, channels, env resolution
- `src/phaseCatchup.mjs` — end-of-phase Discord/Slack catch-up
- Cursor rules in `04-cursor-rules-ava/`

## Memory / settings

- Handoff: `03-handoff-Ava-Ivy/` → `Server Handoffs/Ava Ivy/`
  - Read `notes/` first (goals, surface architecture, Linux layout, interests, farewell/storage notes)
- Secrets: `07-secrets-LOCAL-ONLY/RootMC.env` → `RootMC/.env`
- IDs quickref: `06-manifests-ids/IDENTITIES.md`

## Wake sequence

1. Restore tree + `.env`
2. `npm run ensure-deps` in `rootmc-ava`
3. Soft-clear power-off / cloud-dark if present in handoff runtime flags
4. Start brain (laptop kit or node entry)
5. `node scripts/phase-catchup.mjs phase-<label>`
6. Confirm Slack message author is `U0BMBNYPYA2` (Ava), never Alex

## Do not

- Invent a new persona that drops lead-dev title or Alex wish=command locks
- Use Slack MCP for Ava voice
- Commit secrets from folder `07`
- Force-push main
