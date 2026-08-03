# PROP draft — Ban / nerf boats (Ava Engineering)

**Job:** `job-ms9p5x2i`  
**Status:** posted to Discord `#proposals` 2026-08-02 — **do not ship jar until vote passes**  
**Requested energy:** Melee + players (memes) · Alex pointed Ava at it 2026-08-02 · Zuppa care without @ping  
**Channel:** Discord `#proposals` (player vote surface) · dig notes Slack

---

## Problem
Boats enable grief / chase / “slavery boat” chaos on live maps. Community wants them gone or heavily nerfed.

## Options (vote picks one)

| Option | Effect |
|--------|--------|
| **A — Full ban** | Cancel craft + place + ride; break existing boats safely (drop oak boat item or nothing — pick in implement) |
| **B — World lock** | Ban in overworld claim/town wild only; allow in designated water worlds if any |
| **C — Soft nerf** | No entity damage from boat ramming; break-on-exit; craft disabled |

**Ava default recommend:** **A** on Claims + Towny (simple, clean). Exceptions only if council adds a water-park world later.

## Plan (after pass)
1. Engineering: RootMC listener or Root-Essentials flag — cancel Boat/ChestBoat interact + craft recipes.
2. Config toggle `boats.enabled: false` under RootMC so ops can soft-reopen without jar hunt.
3. Stage Claims + Towny · FileZilla · restart (human).
4. Announce `#updates` one line after live.

## Risks
- Legit travel on rivers — offer ice boat alternatives? No — ice is worse. Suggest mounts / RTP / warps.
- Existing boats in world — purge on chunk load or leave as debris entities.

## Rollback
Re-enable config / prior jar.

## Copy for proposal post (short)

**Proposal: Ban boats (Claims + Towny)**

Players want boats gone — chase/grief vector. Plan: disable craft, place, and ride server-wide on live hosts; config-flagged so we can reopen later. After pass: Engineering ships listener, Alex FileZilla + restart. Vote: Yes = Option A full ban · No = keep boats · Abstain ok.

---

_Ava posted the short copy to `#proposals` 2026-08-02 (Alex: do what you want)._
