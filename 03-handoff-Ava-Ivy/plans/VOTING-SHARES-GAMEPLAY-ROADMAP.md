# Voting Shares → Gameplay Governance Roadmap

**Owner:** Ava Ivy · **Requested by:** Alexrs94 · **Date:** 2026-08-02  
**Status:** Active roadmap — constitution/wiki alignment pending vote where required

---

## North star (Alex lock)

**Council voting shares exist to decide things that affect gameplay.**  
Vote Shards in `/ec` = weighted say over *what the game becomes* — not ops plumbing, not staff tooling, not Ava's internal runtime unless it directly changes player-facing behavior.

Pay-to-steer (Pro ×2) doubles **governance** weight only — never combat, loot, or economy power.

---

## What voting shares are

| Piece | Rule |
|-------|------|
| **Vote Shard** | Physical item (amethyst forms) minted into the **double `/ec`** after verified listing-site votes |
| **Council %** | Your shards in `/ec` ÷ total eligible shards × Pro multiplier → **% of 100%** |
| **Not the same as** | Vote-site **Gold** rewards (1–20 G from reserve) — separate wallet lane |
| **Ava seat** | Synthetic **10%** (Alex→Ava transfer); auto-votes **for** on poll open; reported honestly |
| **Check power** | `/vote` · hub: https://rootmc.net/governance/ |

---

## In scope — requires proposal + weighted vote

Gameplay-affecting changes. Examples:

- Plugin features (skills curves, boats ban, new commands, perk behavior)
- Economy rates, taxes, fees, treasury grant rules visible to players
- Towny/claims/world rules, permissions, rank perks that change play
- Pro **perk design** that ships to players (cosmetics/convenience OK; P2W never)
- World release / reset / migration policy
- Anything that changes how players earn, spend, fight, build, travel, or govern **in-game**

**Process:** `/proposal` (64 G) → #proposals thread → #voting poll (**7 days**) · **>50% weighted For wins** · **≥75% For = implement immediately** · day 7 if For ≤ Against → close (reopenable).

---

## Out of scope — no council vote on shares

| Lane | Who decides | Notes |
|------|-------------|-------|
| **Verified bugs** | Ava reproduces → fix | Not feature-shaped; no PROP gate |
| **Ava self-fix** | Ava (Root Server) | Prompts, poller, logging, finance ledgers, persona scripts — not player PROP features |
| **Staff ops / infra** | Alex + staff | Shockbyte deploys, API deploys, solar/host, GitHub auth, tunnel — not gameplay votes |
| **Server Reserve surplus use** | Staff (constitution) | How surpluses get used — staff lane per constitution |
| **Read-only mirrors** | Ava after wiki pass | #constitution / #governance pointers — housekeeping after ratified text |
| **Mass bans / claim wipes / economy mint** | Never Ava alone | Dual-signal + human gates |

**Player routing:** feature-shaped `/feedback` → steer to `/proposal`. Casual "Ava add X" in general → proposal unless clearly a bug.

---

## Grey zones — default to proposal

When unsure, **file the PROP**. Merge duplicates; keep the queue sharp.

- Balance tweaks that feel like tuning vs bugfix → if it changes intended design, vote
- Ava in-game presence expansions (skin, new commands) → vote
- Membership $ → Vote Shards (proposed idea) → vote before any mint/link
- Constitution / vote-weight formula changes → vote + wiki first

---

## Phases

### Phase 1 — Clarify & publish (now)
- [x] Save this roadmap (`plans/VOTING-SHARES-GAMEPLAY-ROADMAP.md`)
- [ ] Pin short player-facing summary in #governance (link wiki + `/vote`)
- [ ] Proposal template footer: "Does this change gameplay? If yes, you're in the right lane."

### Phase 2 — Constitution alignment (vote-gated)
- [ ] Draft wiki diff: governance section explicitly scopes council power to **gameplay-affecting** proposals
- [ ] Separate "staff decides reserve surpluses / ops" from "players steer game features"
- [ ] Post diff in #governance; ratify via open constitution PROP when ready

### Phase 3 — Enforcement rails
- [ ] Ava poll opener tags: `gameplay` vs `ops` (ops props rejected or redirected)
- [ ] Bug-vs-feature classifier on `/feedback` + Discord intents (already partial — tighten)
- [ ] Day-6 turnout nudge only on open **gameplay** polls

### Phase 4 — Physical shard hygiene
- [ ] Remint path for missing Vote Shard items (Claims `/ec` — see vote-shard-items note)
- [ ] Ban-strips listing weight from tally (Riphamsty-class)
- [ ] Honest `/vote` readout: shards in `/ec` only, not pocket/vanilla E

---

## Links (public)

- Governance hub: https://rootmc.net/governance/
- Constitution: https://rootmc.net/wiki/constitution/
- Vote requirements: https://rootmc.net/council/#vote-requirements
- Pro (pay to steer): https://rootmc.net/pro/

---

## Success metrics

- Zero silent gameplay ships without a passed poll
- Players can answer "what are my shares for?" in one sentence
- Bug fix median time ↓ (not blocked by PROP queue)
- Proposal queue stays small and gameplay-focused
