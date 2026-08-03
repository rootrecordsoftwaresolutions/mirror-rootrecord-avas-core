# root-core

Central connection, cloud identity, ServicesManager API, and license-gate scaffold for RootMC public plugins.

**Source:** `Plugin Building/Minecraft/plugins/root-core/`

---

## [1.0.0] — 2026-07-21

### Added
- **Root-Core plugin** — `Root-Core.jar`; shared unit under `plugins/RootMC/` (`database.yml`, `cloud.yml`, `root-core.yml`, `license.yml`, `.core-meta.yml`).
- **`RootMcCoreConnection`** in `rootrecord-common` — idempotent ensure/repair (missing keys only; never clobber non-blank secrets; Towny blank-password recovery unchanged).
- **`RootCoreApi`** via Bukkit ServicesManager — `isReady`, `databaseSettings`, `apiBase`, `serverId`, `hasCloudCredentials`, `licenseStatus` / `isLicensed`, `ensureCoreFiles`.
- **LicenseGate stub** — `license.mode: operator|enforce`; operator always allows; enforce still allows (UNVERIFIED) this pass.
- **`/rootcore status|reload|license`** — operator UX; secrets masked.

**Deploy:** `root-core-1.0.0.jar` — place before other Root plugins (`loadbefore` listed). Restart. Existing Gen1 `database.yml` / `cloud.yml` passwords/secrets preserved.
