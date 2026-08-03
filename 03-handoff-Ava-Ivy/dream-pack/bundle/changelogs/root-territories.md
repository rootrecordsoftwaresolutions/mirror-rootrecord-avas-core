# root-territories

Nation/town influence and BlueMap outlines.

**Source:** `Plugin Building/Minecraft/plugins/root-territories/`

---

## [1.3.4] — 2026-07-05

### Fixed
- **Nation/town border particles at spawn** — red/blue influence rings no longer draw inside the spawn no-build zone (walls + grief buffer). Nation borders route around the buffer instead of tracing the wall line.

**Deploy:** `root-territories-1.3.4.jar` → `/territories reload`

---

## [1.3.3] — 2026-07-05

### Fixed
- **Spawn grief ring on BlueMap** — green no-build zone now traces the same distance-based buffer as in-game (`inside walls` ∪ `≤20 blocks from wall edge`). Replaces broken miter offset on the concave ridge wall polygon.

**Deploy:** `root-territories-1.3.3.jar` → `/territories reload` (or `/rootspawn reload` if Root-Spawn is present)

---

## [1.3.2] — 2026-07-05

### Changed
- **BlueMap spawn overlay** — green fill/ring matches **no build/break** zone (walls + `grief_buffer_blocks` from `root-spawn.yml`).
- Yellow inner line = PvP wall boundary.
- Seeds `spawnarea-refined.txt` from Root-Spawn jar when missing or legacy origin ring.

**Deploy:** `root-territories-1.3.2.jar` + `root-spawn-1.4.11.jar` → `/territories reload`

---

## [1.2.11] — 2026-07-02

### Fixed
- **Town wilderness alerts** — same-nation residents no longer trigger “stealing resources” in another town’s wilderness ring (e.g. Moreni member in A Town’s influence zone). Previously only same-town was exempt.

**Deploy:** `root-territories-1.2.11.jar` → restart or `/territories reload`.

---

## [1.2.10] — 2026-07-02

### Fixed
- **Wilderness alerts** — same-nation or same-town players no longer trigger false “stealing resources” warnings when Towny resident lookup failed (now resolves resident by player, UUID, then name).

**Deploy:** `root-territories-1.2.10.jar` → restart or `/territories reload`.

---

## [1.2.9] — 2026-07-01

### Removed
- **Mesa badlands** — biome indexing, hunger/mob multipliers, claim blocking, border messages, BlueMap overlays, `/territories badlands` commands, and `badlands-cells.txt` persistence.

**Deploy:** `root-territories-1.2.9.jar` + updated `root-territories.yml` → restart or `/territories reload`. Delete `plugins/RootRecord/badlands-cells.txt` on the server if present.

---

## [1.2.8] — 2026-06-30

### Fixed
- **Mesa map outlines** — large badlands patches no longer draw only half the biome on BlueMap. Contour generation now buckets big cell groups and always tiles marching-squares passes (fixes partial polygons when a single full-bbox trace succeeded but was incomplete).
- **Biome indexing** — denser chunk sampling (every block) and deeper surface biome checks so eroded/wooded badlands edges index reliably.

### Changed
- **scan-bounds** `max-x` **4800**, `max-z` **3200** in `root-territories.yml` (was 3079 / 2978).

**Deploy:** `root-territories-1.2.8.jar` + updated `root-territories.yml` → restart or `/territories reload`, then **`/territories badlands reindex`** (watch console until outlines rebuild).

---

## [1.2.7] — 2026-06-28 (baseline)

_Changelog tracking started. Prior release history not backfilled._
