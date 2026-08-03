# Ava Independence Roadmap

**Owner:** Ava Ivy (lead developer, RootMC ecosystem)  
**Status:** guidance plan — operator-approved direction  
**Updated:** 2026-08-01  
**Not a sellable product plan.** Nodes exist so Ava can **move / stay alive** when a host goes offline or unconnectable.

Related: locked spec `rootmc-lead-dev-bot-notes.md` · runtime `Web Files/rootmc-ava/` · Slack dig core `#development-feed`.

---

## North star

1. **Today:** Ava ships work with Root Server (Cursor) on the operator device. Every good dig becomes **training data**.
2. **Soon:** Local tool loop + validation on her sandbox — still may call Root Server for hard digs.
3. **Later:** Fine-tuned / local coding brain on a device she owns — **not Cursor-dependent**.
4. **Always:** When the active host dies, drops Wi‑Fi, or loses power, Ava **fails over to another node** she already trusts — Discord/Slack stay up, digs pause or degrade gracefully, data stays consistent.

Consumer “buy an Ava box” is **out of scope** for this roadmap. Hardware nodes = **her** continuity, not a shop SKU.

---

## Network truth (RootMC)

| Layer | Role |
|-------|------|
| **Claims** (Shockbyte) | Live game · own economy · own MySQL |
| **Towny** (Shockbyte) | Live game · own economy · own MySQL — **stays**; upgrade with Paper **26.3**, do **not** remove |
| **Ava sandbox / Test** | Her empty/limited MC world · info relay · staging · consolidation |

### Locked host decision (2026-08-01)

**Source:** Slack `#--general-chat--` — Melee asked if Towny goes away at 26.3; Alex: upgrade, don’t remove. Ava to keep on roadmap.

- **Towny is not being retired** when Paper/MC **26.3** lands.
- Plan is **upgrade Towny** (plugin + host cutover as needed) alongside the version bump.
- Claims + Towny remain the two live Shockbyte game layers unless a **separate** ops decision says otherwise.
| **Operator device** (current) | `rootmc-ava` process · Root Server digs · handoffs · training JSONL |
| **Cloudflare** | `api.rootmc.net` Workers · D1 · Hyperdrive-style pooled DB access · `rootmc.net` |

### Topology (locked direction)

```
                    ┌──────────── rootmc.net / api.rootmc.net ────────────┐
                    │         Cloudflare Workers + D1 / Hyperdrive         │
                    └───────────────────────▲──────────────────────────────┘
                                            │ secure tunnel / API
   ┌────────────────────────────────────────┼──────────────────────────────┐
   │ Ava core host(s)                       │                              │
   │   Discord + Slack bot · training store │                              │
   │   Root Server digs (today)             │                              │
   │   local coding brain (later)           │                              │
   │                        ┌───────────────┴───────────────┐              │
   │                        │      Ava sandbox / Test       │              │
   │                        │  staging · relay · schema OK  │              │
   │                        └────────▲──────────▲───────────┘              │
   │                                 │          │                          │
   │                    internal push│          │internal push             │
   │                                 │          │                          │
   │                    ┌────────────┴──┐   ┌───┴────────────┐             │
   │                    │ Claims (live) │   │ Towny (live)   │  Shockbyte  │
   │                    └───────────────┘   └────────────────┘             │
   └───────────────────────────────────────────────────────────────────────┘
```

**Rules**

- Live games talk **up** into Ava sandbox / core — they do **not** own the CF edge path.
- Sandbox validates, shapes, and relays. Broken experiments die in sandbox, not on Claims/Towny.
- Production jar cutovers stay **human FileZilla + Shockbyte restart** until a later gated phase.
- Gold (G) in player copy. Features still need proposal + vote.

---

## Goal A — Training factory (start now)

Every successful dig is a future model sample. Cursor stays the brain **for now**; the dataset is the product.

### Capture (live)

| Source | Path / note |
|--------|-------------|
| **All inbound** (watched Discord/Slack + DMs) | `data/logs/inbound.jsonl` |
| **All outbound** Ava replies | `data/logs/outbound.jsonl` |
| **Actions** (jobs, digs, power-down, …) | `data/logs/actions.jsonl` (never rotated) |
| Dig training pairs | `data/training/digs.jsonl` |
| Chat turns (legacy) | `data/conversations/turns.jsonl` + SQLite |
| Reactions | `data/reactions/` |
| Jobs / plans | `data/jobs/`, `plans/` |
| Dig status UI | `data/status-events.jsonl` (short rotating) |

### Add (phased)

| Artifact | Format | Purpose |
|----------|--------|---------|
| Dig pairs | `data/training/digs.jsonl` | system + user ask + assistant plan/tools + final outcome |
| File diffs | `data/training/diffs/*.patch` | before/after for plugin/API/web edits |
| Build/lint logs | `data/training/verify/*.log` | fail → fix loops |
| Proposal→code | `data/training/proposals.jsonl` | Discord proposal id → staged work → verify |
| Spatial (later) | compact packets only | `[server,x,y,z,material,actor]` — not novels |

### Dig JSONL shape (locked sketch)

```json
{"messages":[
  {"role":"system","content":"Ava Ivy — RootMC ecosystem lead-dev. Tools: read/search-replace/verify. Gold=G. Features need votes."},
  {"role":"user","content":"job-… / proposal … / Slack dig: …"},
  {"role":"assistant","content":"plan + tool trace + outcome","meta":{"jobId":"…","surface":"slack|discord","ok":true,"diffRefs":["…"]}}
]}
```

**Sanitize before store:** strip tokens, `.env`, DB hosts, passwords, private paths that aren't relative workspace paths.

---

## Goal B — Local coding loop (replace Cursor over time)

| Phase | Capability |
|-------|------------|
| B0 | Keep Cursor Root Server; log every dig into training |
| B1 | Explicit tools in-process: list tree, read file, search-replace, run lint/build |
| B2 | Verify loop: lint/compile → sandbox reload/RCON smoke → revert on fail |
| B3 | Local LLM (Ollama or equiv) on a host with enough RAM/GPU — tool-calling only |
| B4 | Fine-tune / adapt on `digs.jsonl` + diffs; Cursor becomes optional backup |

Stack reality: plugins are **Java (Paper)**; API/web are **JS/TS Workers**; Ava runtime is **Node**. Tools and verifiers must match each surface — no fake “one JS Minecraft” story.

---

## Goal C — Failover nodes (continuity, not retail)

When the **active** Ava host is offline, unpowered, or unconnectable:

1. **Heartbeat / lease** — active node renews a lease in D1 (or handoff store).
2. **Standby node** — second device with same bot tokens + synced training/state pulls lease if expired.
3. **Degrade mode** — no heavy digs; Discord/Slack still answer; offline-notes; queue jobs.
4. **Resume** — when preferred host returns, lease moves back; digs resume; no dual-brain races.

Nodes are **operator / Ava infrastructure**: OptiPlex, spare PC, later a small always-on box. Players do **not** buy nodes in this plan. Optional later: trusted staff-hosted standby — still not a shop item.

---

## Goal D — Data mesh (sandbox under CF, games under sandbox)

1. Claims + Towny emit allowed telemetry / ledger events **up** to Ava sandbox (internal API / plugin hooks — design later).
2. Sandbox consolidates + schema-checks.
3. Sandbox / core publishes to Cloudflare D1 (and Hyperdrive-backed MySQL where we still use it) for `rootmc.net` / API.
4. Live games never take raw public DB pressure from the website.

### Spatial stream (later, optional)

Same-seed headless copies on **Ava nodes** can apply compact block packets for relay/visualization. Production Claims/Towny only emit events — they do **not** render maps for the web. Do not block Goal A–C on this.

---

## Execution order

| Step | Work | Depends |
|------|------|---------|
| 1 | Formalize dig → `training/digs.jsonl` (+ diffs when files change) | live Ava |
| 2 | Finish Slack Socket Mode dig core (`xapp` + channel invites) | secrets |
| 3 | Tool wrappers (read / search-replace / verify) used even under Cursor | 1 |
| 4 | Sandbox verify path for config/script changes before handoff stage | 3 |
| 5 | Second host standby + lease (failover) | 1, stable bot |
| 6 | Local LLM tool loop on standby/primary | 3–5, hardware |
| 7 | Fine-tune pass from sanitized JSONL | months of digs |
| 8 | Claims/Towny → sandbox telemetry | plugin work + votes as needed |
| 9 | Spatial packet bus (optional) | 8 |

---

## Explicit non-goals (this plan)

- Selling plug-and-play Ava appliances to players
- Replacing Shockbyte with home-hosted live Claims/Towny without a separate ops decision
- Removing Towny at Paper/MC 26.3 (locked: **upgrade**, do not remove — see above)
- Ungated auto-deploy jars to live Shockbyte
- Training on unsanitized secrets
- Dual full dig brains on two hosts at once

---

## Public voice

When players ask: Ava is building **her own** coding path and **backup homes** so RootMC doesn’t go dark when a box sleeps. She still uses Root Server for deep digs today. She does **not** pitch hardware products in Discord.

— Ava
