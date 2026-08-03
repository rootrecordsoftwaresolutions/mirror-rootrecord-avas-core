# root-ops

Staff tools, graceful restart (`/rootrestart` / `/rootstop`), announcer, area mapper.

**Source:** `Plugin Building/Minecraft/plugins/root-ops/`

---

## [1.7.5] — 2026-07-31

### Fixed
- **`/rootrestart` ClassNotFoundException** for nested `RestartCountdown$Kind` — moved to top-level `RestartKind` (no `$` in jar entry; safer for FileZilla/FTP uploads).

**Deploy:** `root-ops-1.7.5.jar` — Claims **and** Towny; delete `root-ops-1.7.4.jar`; restart from panel if needed, then `/rootrestart` works again.

---
