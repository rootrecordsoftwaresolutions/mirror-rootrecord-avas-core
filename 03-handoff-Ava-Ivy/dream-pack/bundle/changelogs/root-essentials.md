# root-essentials

EssentialsX replacement, treasury, warps.

**Source:** `Plugin Building/Minecraft/plugins/root-essentials/`

---

## [1.7.12] — 2026-07-31

### Changed
- **`/explode`** — requires **TNT worn as chestplate** (Paper equippable stamp on TNT stacks). Confirm still wipes wallet to Reserve, keeps inventory except the vest, half-heart + Slowness nearby, town/wilderness broadcast.

**Deploy:** `root-essentials-1.7.12.jar` + updated `root-essentials.yml` messages — Claims **and** Towny; restart.

---

## [1.7.11] — 2026-07-31

### Added
- **`/explode`** — costs 1 TNT; confirm prompt warns of full wallet loss; `/explode confirm` seizes wallet to Server Reserve, keeps inventory (except the TNT), kills the runner, leaves players within 5 blocks at half a heart + Slowness 1m, and broadcasts a town/wilderness announcement.

**Deploy:** `root-essentials-1.7.11.jar` + updated `root-essentials.yml` — Claims **and** Towny; restart.

---

## [1.7.9] — 2026-07-26

### Removed
- **`/back`** — unreliable return teleport; use `/home`, `/spawn`, or `/rtp` instead.

---

## [1.6.45] — 2026-07-24

### Changed
- **`/pay reserve` credits Server Reserve** — wallet → vault + `DONATION` ledger inflow (was `NOTE_BURN` with no reserve credit). Full amount stays in Reserve (not shared into the 25% bond coupon pool).

**Deploy:** `root-essentials-1.6.45.jar` — restart Claims + Towny. API: deploy `rootmc-api` so site ledger labels match.

---

## [1.4.76] — 2026-07-10

### Fixed
- **Bond pool covers all reserve deposits** — every treasury credit path (tax, death fees, Towny sinks, loan repayments, bond issuance, forfeited coupons, etc.) now feeds the bond day inflow pool through a single dispatcher wired at Essentials startup.
- **Transaction tax inflow** — withhold tax credits now notify bonds (previously only some paths did).

**Deploy:** `root-essentials-1.4.76.jar` + `root-bonds-1.0.15.jar` — restart.

---

## [1.4.75] — 2026-07-10

### Fixed
- **Bond income bridge** — Server Reserve inflows now notify Root-Bonds through a classloader-safe service instead of the shaded static hub. Death fees, taxes, and loan repayments accrue toward the 25% bond coupon pool again.

**Deploy:** `root-essentials-1.4.75.jar` + `root-bonds-1.0.14.jar` — restart.

---

## [1.4.41] — 2026-07-02

### Added
- **`/back`** — return to location before teleport or death (remembers on all Root-Essentials teleports).
- **New-player grace (24h)** — keep inventory on death, skip PvP death tax during grace, `/rtp` random wilderness teleport (15m cooldown).
- **Wilderness build warnings** — action bar + chat for high-value blocks in Towny wilderness; intensity scales with market/worth price.
- **Plugin bridges** — `RootMcWildernessBlockNotifier` + `RootMcNewPlayerGrace` in `rootrecord-common` for cross-plugin hooks.

### Changed
- **MOTD** — fresh-map reclaim reminder, grace commands, embassy ~100 G guidance.

**Deploy:** `root-essentials-1.4.41.jar` + updated `root-essentials.yml` (creates `root_player_first_join` table) — restart.

---

## [1.4.40] — 2026-07-02

### Added
- **PAPI baltop ranks** — `%rootessentials_baltop_town_1%` … `_10%`, same for `nation` and `player`; matches `/baltop` (RootMC economy DB, not TownyAdvanced).

**Deploy:** `root-essentials-1.4.40.jar` + `DecentHolograms/holograms/baltoptownsnations.yml` — restart, `/dh reload`.

---

## [1.4.39] — 2026-07-02

### Fixed
- **PlaceholderAPI registration** — `loadafter: [PlaceholderAPI]` and extra retry for balance holograms.

**Deploy:** `root-essentials-1.4.39.jar` — restart Paper.

---

## [1.4.38] — 2026-07-02

### Fixed
- **Treasury founding dedupe** — 3-second debounce on `towny:new-town` / `towny:new-nation` sinks so duplicate Towny events do not triple-count reserve intake.
- **Admin teleport back** — `rememberBack` exposed for root-admin compatibility after teleport commands.

**Deploy:** `root-essentials-1.4.38.jar` — restart Paper.

---

## [1.4.33] — 2026-06-28

### Fixed
- **Economy conservation:** survey fee only sinks to treasury after a successful report (failed runs refund wallet only).
- **Towny founding tags:** nation/town event hooks try multiple Towny class names; 400 G / 2,000 G deposits re-tagged as `towny:new-town` / `towny:new-nation` when hooks miss (no new gold — correct ledger descriptor).

**Deploy:** `root-essentials-1.4.33.jar` — restart Paper.

## [1.4.29] — 2026-06-28

### Fixed
- **Towny treasury tags:** defer channel clear to next tick so founding deposits are not mis-tagged as claims; improved stack-trace inference for `PreNewTownEvent` / `PreNewNationEvent`.

**Deploy:** `root-essentials-1.4.29.jar` + **rootmc-realm-api** (ledger display reclassifies 400 G / 2,000 G founding rows).

## [1.4.28] — 2026-06-28

### Fixed
- **Vote rewards** now route through `depositIncome`, so active loans receive the 100% income sweep (same as `/mint`, shop sales, and transfers). Treasury debits without pre-crediting the wallet; loan repayment runs before wallet deposit.

**Deploy:** `root-essentials-1.4.28.jar` + `root-rewards-1.0.9.jar` — restart Paper.

## [1.4.26] — 2026-06-27 (baseline)

_Changelog tracking started. Prior release history not backfilled._
