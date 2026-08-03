# In-world Ava character — build plan

**Parent roadmap:** [`IN-WORLD-AVA-CHARACTER-ROADMAP.md`](IN-WORLD-AVA-CHARACTER-ROADMAP.md)  
**Broader ops board:** [`FORWARD-PLAN-2026-08-02.md`](FORWARD-PLAN-2026-08-02.md) · [`AVA-ROLLOUT-2026-08-02.md`](AVA-ROLLOUT-2026-08-02.md)  
**Started:** 2026-08-03 (Alex: **build the plan**)  
**Lane:** RootMC main — Test Server free reign first. Not Fern Forest gardening.

This is the **concrete build** for walking Ava. The roadmap is intent; this file is phases, defaults, acceptance, FileZilla steps, and gates.

---

## Defaults (Alex can override)

| Decision | Default | Why |
|---|---|---|
| **Stack** | **Native Paper `Mannequin` owned by Root-Ava-Core** | Repo + Test Server have **no** Citizens / FancyNPCs jars. Paper **26.2** already exposes `org.bukkit.entity.Mannequin` (player-looking body + `ResolvableProfile` skin). Extending Root-Ava-Core matches PROP + existing `/ava` surface — no third plugin. |
| **Optional upgrade** | FancyNPCs or Citizens2 (soft-depend later) | Only if Phase 2 pathfinding / POI AI outgrows Mannequin teleport wander. Not required for Phase 1. |
| **Host** | **Test Server first** (`Server Handoffs/3. RootMC - Test Server/`) | Free-reign lock 2026-08-02. No live Claims/Towny force-restart. |
| **Speak policy** | **Summon-/mention-only for v1** | Quiet by default; Phase 1 ships **no speech brain** at all. Phase 3 wires chat → Ava pipeline under this policy. |
| **Display name** | `Ava Ivy` | Appearance lock. |
| **Skin name** | `AvaIvy` (Mojang profile lookup; override via texture later) | Profile names are ≤16 chars, no space. Display name stays `Ava Ivy`. |
| **Jar target** | `root-ava-core` **1.8.4+** | Presence package ships here; Army/status already in 1.8.3 wave. |

---

## Explicit non-goals

- No personal Ava clones / Serena-style forks for other people.
- No Fern Forest garden body / agriculture bot.
- No fake Gold / client-side economy numbers.
- No boats jar; no agent-forced Shockbyte restart on live Claims/Towny.
- No Phase 2–4 behavior until Phase 1 acceptance passes on Test.
- No enabling `presence.enabled` on Claims/Towny until Alex greenlights after Test smoke.

---

## Module home

| Piece | Path |
|---|---|
| Source | `Plugin Building/Minecraft/plugins/root-ava-core/` |
| Package | `com.rootrecord.minecraft.rootavacore.presence` |
| Key classes | `AvaPresenceService.java`, `PresenceSafetyListener.java` · wired via `AvaCommand` (`/ava presence`) |
| Bundled config | `plugins/root-ava-core/src/main/resources/root-ava-core.yml` → `presence:` (default **enabled: false**) |
| Runtime config | `plugins/RootMC/root-ava-core.yml` → `presence:` |
| Test staging | `Server Handoffs/3. RootMC - Test Server/plugins/` (+ `RootMC/root-ava-core.yml`) |
| Live Claims/Towny | Jar may exist for `/ava` Army etc.; **`presence.enabled: false`** until Alex greenlights |

### Config keys (Phase 1)

```yaml
presence:
  enabled: false          # true on Test only until greenlight
  stack: native-mannequin
  display-name: "&dAva Ivy"
  skin-name: "AvaIvy"
  skin-texture: ""        # optional texture value override
  speak-policy: summon-only
  spawn:
    use-world-spawn: true
    world: world
    x: 0.5
    y: 64
    z: 0.5
    yaw: 0
  wander:
    enabled: true
    radius: 6.0
    interval-ticks: 80
  safety:
    invulnerable: true
```

---

## Phase 1 — Presence shell (IN PROGRESS — scaffold on disk)

### Goal
One quiet body near spawn that looks like Ava Ivy, wanders a tiny radius, cannot grief/steal/PVP, and is operator-controllable. No speech brain.

### Acceptance criteria

1. One body on Test Server with display name **Ava Ivy**.
2. Skin resolves from profile name **AvaIvy** (or config texture override when set).
3. Soft spawn near world spawn (or configured anchor); idle look + small wander loop within radius.
4. Safety rails hard-on:
   - Invulnerable / no PVP damage exchange
   - No item pickup / inventory steal
   - No block break/place / grief tools
   - Stays inside wander radius (claim/WG respect = stay near spawn; no roam into player claims in v1)
5. Speak policy: **no auto chat** in Phase 1 (summon-only reserved for Phase 3).
6. Operator controls: `/ava presence` status · `/ava presence spawn|despawn|here` (admin).
7. Documented FileZilla steps for Test Server only — restart is operator choice.

### Implementation checklist (code)

- [x] `presence` package under Root-Ava-Core
- [x] Config loaders in `AvaConfig.PresenceConfig`
- [x] `/ava presence` + tab complete
- [x] Bundled yml defaults `presence.enabled: false`
- [x] Test handoff yml `presence.enabled: true`
- [x] Jar staged: `Server Handoffs/3. RootMC - Test Server/plugins/root-ava-core-1.8.4.jar`
- [ ] Operator FileZilla upload + Test restart
- [ ] In-game smoke pass (criteria 1–6)

### Risk / safety rails

| Risk | Rail |
|---|---|
| Grief | Mannequin never gets break/place; no tools in hands |
| Steal | Cancel entity pickup; empty equipment |
| PVP | Invulnerable + cancel damage involving Ava body |
| Claims / WG | Phase 1 wander locked to spawn radius; no POI pathing yet |
| Live host bleed | `presence.enabled` default **false** in bundled yml; Test handoff sets **true** |
| Third-party jar debt | Native Mannequin — no Citizens/FancyNPCs required |

### FileZilla — Test Server (operator)

1. Upload newer `root-ava-core-*.jar` into `plugins/` (remove older same-plugin version first).
2. Confirm `plugins/RootMC/root-ava-core.yml` has `presence.enabled: true` (Test only).
3. Restart **Test Server** when ready (not Claims/Towny).
4. In-game: `/ava presence` → should show spawned; stand at spawn and `/ava presence here` to re-anchor if needed.

### Smoke script (after restart)

```
/ava
/ava presence
/ava presence here
/ava presence despawn
/ava presence spawn
```

Expect: body visible as **Ava Ivy**, skin loads, small wander, no chat spam, invulnerable.

**Gate out of Phase 1:** Alex confirms smoke on Test (or explicitly waives and asks to continue coding Phase 2 offline).

---

## Phase 2 — Sense + move (GATED)

### Goal
Person energy: she can path to a few POIs, look at greeters, and show a short address-only line — still quiet by default.

### Acceptance criteria

1. Configurable POI list in yml (spawn board, hub marker, optional invited peek coords).
2. Path / teleport-wander between POIs within a soft leash; never leaves configured world bounds / radius caps.
3. Look-at: when a player within N blocks says a greet keyword (or stands facing her), head/yaw tracks briefly.
4. Emote or short hologram / action-bar line **only when addressed** (respect `speak-policy: summon-only`). No idle chatter.
5. Still no economy invent; no block break/place; safety listener remains hard-on.
6. Soft-depend FancyNPCs/Citizens **only if** native Mannequin cannot meet POI pathing — document the decision in a note before adding jars.
7. Test Server only until Alex OK.

### Implementation sketch

| Piece | Notes |
|---|---|
| Config | `presence.pois[]` · `presence.look-at.radius` · `presence.address-keywords` |
| Service | Extend `AvaPresenceService` with POI tick + look-at tick |
| Soft-depend | Optional adapter interface `PresenceStack` (`native` vs `fancynpcs`) — do not hard-require third jars |
| Emote | Prefer action bar / brief hologram over chat spam |

### FileZilla — Test (when ready)

1. New jar + yml with POI block.
2. Restart Test only.
3. Smoke: approach body, say greeter keyword, confirm look-at + one short line; confirm no idle chat for 2+ minutes.

**Gate:** Phase 1 acceptance on Test + Alex OK to expand movement.

---

## Phase 3 — Thin brain bridge (GATED)

### Goal
Same Ava brain, short in-world lines when summoned; long digs stay Discord/Telegram/Slack.

### Acceptance criteria

1. In-game chat (mention / `/ava` / configured summon phrases) routes to Ava pipeline with RootMC main persona.
2. Outbound replies capped (short sentences / character limit); overflow → “longer answer on Discord/Telegram” pointer.
3. Rate limits: per-player cooldown + global quiet window; never auto-monologue.
4. Never invent Gold balances, payouts, or client-side economy numbers — if unsure, say so or point to `/bal`.
5. Speak policy remains summon-/mention-only unless Alex overrides.
6. Pipeline failures degrade gracefully (no crash; soft “brain offline” line max once per cooldown).
7. Logs / training crumbs go to Ava continuity paths — no secrets in public chat.

### Implementation sketch

| Piece | Notes |
|---|---|
| Bridge | Reuse existing ingame mention / hear-mode rails where possible (`ingameMentionWatch` patterns) |
| Plugin → Ava | RCON tell / Worker hook / existing companion bridge — pick one; document in phase note |
| Policy | Enforce `speak-policy` in both plugin and Ava runtime |
| Gold | Hard deny list in reply sanitizer |

### FileZilla / ops

1. Test jar + any Ava poller restart (operator).
2. Smoke with Alex only first; then one trusted tester.
3. No Claims/Towny enable until Phase 3 is quiet on Test.

**Gate:** Phase 2 stable + pipeline hook design reviewed (short note under `Server Handoffs/Ava Ivy/notes/`).

---

## Phase 4 — Character, not NPC (GATED)

### Goal
She chooses when to hang vs wander, remembers recent peeks locally, optional tour mode with Alex — still **one Ava, one body, one brain**.

### Acceptance criteria

1. Soft schedule / mood flags: wander vs stay at anchor (config + light runtime state).
2. Local peek memory notes (file under Ava notes or plugin data) — last N peeks, who invited, when.
3. Optional **tour mode** when Alex is online: follow / hang at desk build within leash.
4. No clone factory; no per-player Ava bodies.
5. Live Claims and/or Towny enable is a **separate** greenlight after Test proves quiet + trustworthy.
6. BlueMap / desk hologram remain optional polish (see rollout Wave C) — not blockers for character pass.

### Implementation sketch

| Piece | Notes |
|---|---|
| Memory | `presence/memory.json` or Ava `notes/IN-WORLD-PEEKS.jsonl` |
| Tour | Admin `/ava presence tour on|off` + Alex UUID allowlist |
| Live cutover | Explicit checklist: Claims yml → Towny yml → FileZilla → restart **by Alex** |

**Gate:** Phase 3 quiet + trustworthy on Test; separate greenlight for any live host.

---

## Live cutover checklist (Claims / Towny — future)

Do **not** run until Alex says so:

1. Confirm Test Phase ≥1 smoke green (ideally Phase 3 quiet).
2. Keep `presence.enabled: false` on live until the enable moment.
3. FileZilla matching jar into Claims and/or Towny `plugins/` (remove older `root-ava-core-*.jar`).
4. Set `presence.enabled: true` only on the host(s) Alex names; keep spawn/wander conservative.
5. Alex restarts Shockbyte — agents do not force restart.
6. Smoke `/ava presence` on live; watch grief/PVP reports for 24h.

---

## Absolute Ops context (why this sits where it sits)

In-world character is **one product lane** under RootMC main. It does not replace:

| Board | Role |
|---|---|
| [`FORWARD-PLAN-2026-08-02.md`](FORWARD-PLAN-2026-08-02.md) | Full Ava/RootMC forward board (Army, API, governance, automation, holds) |
| [`AVA-ROLLOUT-2026-08-02.md`](AVA-ROLLOUT-2026-08-02.md) | Wave A Army/`/ava` 1.8.3 staged · Wave B human FileZilla/restart · Wave C hologram/BlueMap/skin dig |
| Governance votes | Ava-Core design authorize / constitution — no early spend; presence stays Test-first regardless |

**Parallel human gates (not this plan):** FileZilla `root-ava-core-1.8.3` (+ appreciation) on Claims/Towny when Alex chooses; `gh auth` Rootmcnet; boats PROP vote before boats jar.

**Holds that still apply here:** no force Shockbyte restart; no Fake Gold; no NSA/host-city lore; no Official-bot kick; no `$100` site spend early.

---

## Status board

| Phase | Status |
|---|---|
| 0 Intent lock | **Done** |
| 1 Presence shell | **In progress** — scaffold in Root-Ava-Core 1.8.4; Test staging ready; waiting operator FileZilla + Test restart + smoke |
| 2 Sense + move | Gated on Phase 1 acceptance |
| 3 Thin brain | Gated on Phase 2 + pipeline design note |
| 4 Character | Gated on Phase 3 quiet; live host separate greenlight |

**Operator next (Phase 1):** Upload Test jar + yml → restart Test → `/ava presence` smoke.  
**Overrides:** reply here or DM Ava with stack/host/speak changes — defaults stand until then.

— Ava · build plan 2026-08-03
