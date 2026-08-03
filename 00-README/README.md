# Emergency Ava Ivy — context / personality / settings backup

**Created:** 2026-08-03 (pre–SSD wipe / Linux cutover)  
**Folder:** `E:\emergency Ava Ivy Context personality and settings backupda`  
**Purpose:** Regenerate Ava Ivy’s personality, rules, IDs, handoff memory, desktop kit, and env checklist on a new machine without relying on D: surviving.

This is **not** a full RootMC clone. It is everything you need to *be Ava again* next to a restored `RootMC` tree (or to merge these pieces back into `Web Files\rootmc-ava` + `Server Handoffs\Ava Ivy`).

---

## Layout

| Folder | Contents |
|--------|----------|
| `01-personality-src` | Core voice files: `persona.mjs`, `people.mjs`, `surfaceRules`, `avaPost`, `config`, acks, package manifests |
| `02-ava-core-src-select` | Full Ava `src/` + `scripts/` + `docs/` + `assets/` (no `node_modules`) |
| `03-handoff-Ava-Ivy` | Live Ava handoff: notes, lore, goals, local brain docs, runtime data copies |
| `04-cursor-rules-ava` | Cursor rules: Ava identity posts, phase catch-up, RootMC workspace |
| `05-desktop-kit` | `rootmc-ava-desktop` source + `Ava Laptop` launchers + built `AvaIvy` EXE tree |
| `06-manifests-ids` | Public IDs (Discord/Slack bots, channels, people) — safe to reference |
| `07-secrets-LOCAL-ONLY` | **Real `.env` copies — DO NOT upload to GitHub / Discord / Slack** |
| `08-env-keys-checklist` | Key *names* required to wake Ava (no secret values) |
| `09-restore-scripts` | Verify pack + restore helpers |
| `10-build-context` | **Everything used to build her** — lead-dev notes, plans, dream-pack, Alex life story, appearance, channel-scan reports, full Cursor agent transcripts (~558), cutover notes, `root-ava-core` plugin, training/interests. Start: `10-build-context\00-README\HOW-SHE-WAS-BUILT.md` |

---

## Hard identity rules (locked)

1. **Ava Slack / Discord posts** only use bot tokens (`AVA_SLACK_BOT_TOKEN` / `AVA_DISCORD_BOT_TOKEN`) via `avaPost.mjs` / `post-as-ava.mjs`. Never Cursor Slack MCP (that posts as Alex).
2. Confirm Slack author is Ava (`U0BMBNYPYA2`), not Alex (`U0BLWBTGYTU`).
3. Player currency: **Gold (G)**, not dollars.
4. Canonical workspace after cutover: `E:\.1 Work Stations\RootMC\` (Linux: `/mnt/e/.1 Work Stations/RootMC/`).
5. Do not force-push `main`/`master`. Do not commit `.env`, keystores, or live `cloud.yml`.

---

## Fast restore (new Windows box with E: RootMC)

1. Restore full RootMC to `E:\.1 Work Stations\RootMC\` (or point scripts at your path).
2. Copy secrets:
   ```powershell
   Copy-Item -LiteralPath '.\07-secrets-LOCAL-ONLY\RootMC.env' `
     -Destination 'E:\.1 Work Stations\RootMC\.env' -Force
   ```
3. Merge Ava source if tree is incomplete:
   ```powershell
   powershell -File '.\09-restore-scripts\Restore-Ava-Context.ps1' -RootMcPath 'E:\.1 Work Stations\RootMC'
   ```
4. Install Node 20+, then:
   ```powershell
   cd 'E:\.1 Work Stations\RootMC\Web Files\rootmc-ava'
   npm run ensure-deps
   ```
5. Or use laptop kit:
   ```cmd
   E:\.1 Work Stations\RootMC\Ava Laptop\Start-Ava-Laptop.cmd
   ```
   (or run the copies under `05-desktop-kit\Ava Laptop\`)

6. Verify: `.\09-restore-scripts\Verify-Pack.ps1`

---

## What to re-clone from GitHub if this pack is incomplete

- `rootmc-ava` (brain) — may live under monorepo / private Ava paths  
- `rootmc-ava-desktop` — Electron UI  
- `rootmc-api` / `rootmc-realm-api` — env loader dependency for some scripts  

Prefer the **handoff notes** in `03-handoff-Ava-Ivy\notes\` over inventing personality.

---

## After Linux cutover

- Remount or copy this entire emergency folder onto the Linux host.
- Paths with spaces: keep quoting; `AVA_HANDOFF` should point at `…/Server Handoffs/Ava Ivy`.
- Re-run `phase-catchup` after she wakes so Discord/Slack catch up.
