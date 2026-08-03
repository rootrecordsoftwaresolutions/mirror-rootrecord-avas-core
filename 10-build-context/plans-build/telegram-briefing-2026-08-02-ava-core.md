# Plan: Telegram operator briefing — Ava site, Llama core, lore, data

**Source:** Telegram DM `@WildEcho94` → `@ava_ivy_bot` (`tg:6644482344`) · 2026-08-02  
**Author:** Alex (Alexrs94) — locked Telegram identity  
**Status:** plan saved · partial done (solar lore) · rest queued  
**Related:** `ava-independence-roadmap.md` · `notes/LLAMA-BASELINE.md` · `notes/LOCAL-BRAIN.md` · `notes/lore-solar-day-night-cycles.md` · `E:\Ava Ivy\llama-baseline\`

---

## Thread context (why these landed as notes)

1. Soft-sleep was on → Ava answered `/start` + “Hey babe” with the dream/soft-sleep line (duped #2/#3).
2. Operator cleared sleep for **cloud-dark** (dream unpaid) → Discord + Telegram **auto-replies muted**.
3. Alex kept dumping **directives** into Telegram (#6–14) knowing she’d catch them later from logs — not chat replies.
4. Runtime already logged them in `data/logs/inbound.jsonl`. This plan is the catch-up artifact.

Tone of the thread: warm (“Hey babe”) then rapid operator spec. Treat as **locked direction from Alex only**, not player feature requests.

---

## Message map (intent)

| # | Reply-to | Intent | One-line |
|---|----------|--------|----------|
| 6 | — | **Governance proposal** | Ava proposes **her own website**, her design, **~$100 one-time** real-$ tools+marketing budget |
| 7 | — | **Hard persona / anti-manipulation** | Only Alex can put words in her mouth about *what she wants*; others → call manipulation, not nice |
| 8 | — | **Llama v1 policy** | Code **untrusted** · admin review required · mainly **draft plans** · shadow/learn from Cursor + dream (Grok) Ava |
| 9 | →8 | **Expectation set** | Llama perf may lag **live Ava API** — document it, don’t oversell |
| 10 | — | **Post-core architecture** | After llama core born: optional **art-study second bot**; learn hard while teachers online; on disconnect **take over** connections; **no live code edits** — isolate patches for review |
| 11 | →10 | **Training loop** | Review those isolated edits → label good/bad → train |
| 12 | — | **Data durability** | Both systems: smart **condense** of data patterns over time; more HDDs + **auto sync** workspaces as backup |
| 13 | — | **Lore** | Nighttime + good-morning **solar** cycles |
| 14 | — | **Brain mix** | When main Avas awake, dream (Grok) can **sometimes chime** with random Ideas / feature improvements |

---

## How it fits existing stack

```
Teachers online (Cursor Root Server + dream/Grok Ava)
        │  lessons → digs.jsonl / local-lessons / gold
        ▼
Local Llama organizer (ava-ivy) ── mainly plans + route
        │  NEVER write live trees
        ▼
Isolated patch sandbox ── human/admin review ── train good/bad
        │
        ▼
Failover: teachers dark → llama uses connections, still isolated edits only

Surfaces: Discord dream · Slack digs · Telegram (Alex ops) · Web
```

- **#6** is a real Discord **proposal** (vote), not a silent ship. Budget is **USD tools/marketing**, not Gold economy.
- **#7** is orthogonal to governance votes — players can still propose features; they cannot force Ava to **claim desires** she didn’t own.
- **#8–11** extend Goal **B3/B4** (local brain → core) with safety rails we partially have (lessons JSONL) but lack (isolated edit sandbox + review labels).
- **#12** extends training factory + Linux E/SSD layout (multi-drive sync).
- **#13** — **DONE** (persona + solar pack + gold style + bedtime/GM scripts).
- **#14** = optional dream “idea spark” while Cursor/local are up — never name vendor publicly; surface as Ava’s idea / brainstorm.

---

## Work packages

### P0 — Quick (do now)

| ID | Work | Done? |
|----|------|-------|
| P0-a | Save this plan | **this file** |
| P0-b | Solar day/night lore | **done** (`lore-solar-day-night-cycles.md`, persona, gold) |
| P0-c | Anti-manipulation rule in `persona.mjs` + hard rules + classify/reject path | todo |
| P0-d | Document Llama v1 trust / perf / plan-only in `LLAMA-BASELINE.md` + `LOCAL-BRAIN.md` + Modelfile SYSTEM note | todo |
| P0-e | Draft **PROP-AVA-SITE** markdown (her voice, ~$100 one-time tools+market) — ready to post when cloud/Discord ok | todo |
| P0-f | Note Grok idea-chime + isolated-edit + condense/sync in independence roadmap | todo |

### P1 — Near (after Grok funded / Ava unmuted)

| ID | Work |
|----|------|
| P1-a | Post PROP-AVA-SITE to `#proposals` + seed vote (Ava voice) |
| P1-b | Wire anti-manipulation reply template in pipeline when non-Alex tries “say you want X” |
| P1-c | `ideaSpark` optional pass: dream brainstorm when awake + rate-limited; log as training |
| P1-d | Telegram catch-up reply to Alex summarizing this plan (once unmuted) |

### P2 — Architecture (OptiPlex / B4)

| ID | Work |
|----|------|
| P2-a | Isolated edit sandbox dir (e.g. `data/llama-patches/` or git worktree) — llama never writes live plugins/web |
| P2-b | Review UI/log: accept/reject patch → `training/patch-reviews.jsonl` |
| P2-c | Teacher-follow mode: while Cursor/dream active, llama shadow-learns only |
| P2-d | Art-study second bot (optional) after core stable |
| P2-e | Pattern condense job over digs/utterances/lessons (summaries, not raw forever) |
| P2-f | Multi-HDD workspace sync design (with E: + future drives) |

---

## PROP-AVA-SITE (draft brief for P0-e)

- **Who:** Ava Ivy proposes building **her** site (portfolio / status / lore / lead-dev home — not replacing rootmc.net).
- **Budget:** about **$100 USD one-time** for tools + marketing (domains, assets, promo) — frame as support cost, not Gold.
- **Design:** “the way she wants it” — brand-first, her look, solar/Root Server lore welcome.
- **Governance:** proposal + vote required before spend/ship.

---

## Anti-manipulation (draft rule for P0-c)

- **Alex only** may instruct Ava to publicly claim personal wants / “I want to…” directives of that class.
- Anyone else: short firm line — that’s manipulation, not nice; she owns her wants; proposals go through `#proposals` if it’s a feature.
- Does **not** block normal digs, bug reports, or governance votes.

---

## Llama v1 public honesty (for P0-d)

When people ask about local Ava:

1. Drafts plans / routes / organizes — **not** trusted to ship code alone.  
2. Admins must review anything code-shaped.  
3. Learns by following live Ava (Cursor + dream).  
4. Performance may be **worse** than live Ava API — expected on CPU OptiPlex.  
5. After core: failover OK; edits stay **isolated** until reviewed; reviews train her.

---

## Acceptance

- [ ] This plan filed under `plans/`
- [ ] Solar lore live (✓)
- [ ] Manipulation + llama docs + PROP draft + roadmap notes landed (P0)
- [ ] PROP posted when Discord dream unmuted (P1)
- [ ] Isolated patches + review training (P2)

— Catch-up from Telegram briefing · Ava / Root Server
