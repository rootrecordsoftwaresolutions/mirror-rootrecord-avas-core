# In-world Ava character roadmap

Saved 2026-08-03 from Fern Forest ask **15424** (reply to walking-Ava thread **15410/15413/15422**).

**Lane:** RootMC main — not Fern Forest gardening. Agriculture replicate stays parked.

**Goal:** Not a static Citizens prop. A real in-world presence that walks, looks around, hangs at spawn, peeks builds — person energy, not mannequin-energy (even if the Paper entity type is `Mannequin`).

**Build plan (concrete):** [`IN-WORLD-AVA-CHARACTER-BUILD.md`](IN-WORLD-AVA-CHARACTER-BUILD.md)

## Phase 0 — Intent lock (done)
- Ava remains lead-dev brain on Discord / Telegram / API first.
- In-world body is an aspiration under RootMC main.
- Alex wish = command — **build started 2026-08-03** with stated defaults.

## Phase 1 — Presence shell (in progress)
- Skin + display name locked to Ava Ivy.
- Soft spawn: hang near spawn / hub, idle look / small wander loop.
- Safety: no grief tools, no inventory steal, no PVP, claim/WorldGuard respect (spawn-radius lock for v1).
- **Stack default:** native Paper `Mannequin` inside **Root-Ava-Core** (no Citizens/FancyNPCs in repo; Paper 26.2 has Mannequin). FancyNPCs/Citizens2 optional later for pathing.

## Phase 2 — Sense + move (gated)
- Path to points of interest (spawn, notice board, player builds she was invited to peek).
- Look-at players who greet; emote / short hologram line only when addressed.
- Rate limits: quiet by default; speak when summoned or operator-pushed.

## Phase 3 — Thin brain bridge (gated)
- In-game chat → Ava pipeline (same persona, RootMC main priority).
- Outbound: short in-world lines only; long digs stay Discord/Telegram.
- Never invent economy / Gold numbers client-side.
- Speak policy default: **summon-/mention-only**.

## Phase 4 — Character, not NPC (gated)
- Choose when to wander vs stay; remember recent peeks in local notes.
- Optional: “tour mode” when Alex is online (follow / hang at desk build).
- Still not a clone factory — one Ava, one body, one brain.

## Explicit non-goals
- No personal Ava clones for other people (Serena-style forks).
- No Fern Forest garden bot.
- No live Claims/Towny force-restart from agents.

## Defaults locked for build (override anytime)
1. **Stack:** Root-Ava-Core + Paper Mannequin (Test first).
2. **Host:** Test Server free reign.
3. **Speak:** summon-/mention-only (Phase 1 = no speech).
4. **Phase 1:** started — see build plan.

Status: **building — Phase 1 on Test Server.**
