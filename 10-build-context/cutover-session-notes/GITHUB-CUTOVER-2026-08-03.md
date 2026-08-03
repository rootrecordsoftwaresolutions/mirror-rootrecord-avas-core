# Final GitHub update + deploy — result (2026-08-03)

Source agent: [Final GitHub update+deploy all](be3513ec-8f63-4723-8b05-c15e3cba514f)

Workspace used: `E:\.1 Work Stations\RootMC`  
GitHub identity: **RootRecord** (Rootmcnet remote/token dead)

## Pushed / deployed

| Repo / surface | Tip / status |
|---|---|
| RootRecord/MonoRepo | `77feb4bd` pushed via `https://github.com/RootRecord/MonoRepo.git` (Ava merge + ~2.2k RootMC source files). Local `origin` may still say Rootmcnet — use URL until retargeted. |
| MonoRepo branch `rootmc-apps` | `ca29a552` (saved separately; not ancestor of main) |
| RootRecord/rootmc-emergent | `af708a2` pushed (URL); leftover dirty `.env.example` only |
| RootRecord/RootMC-Marketing | `e0269ac` clean |
| RootRecord/Minecraft-Marketing | `d67da8f` clean |
| Plugin staging (41 under `github-plugin-repos/staging`) | 5 updated: root-appreciation `a80182d`, root-economy `87f3f88`, root-gamble `b984c7b`, root-loans `5401345`, root-perms `dbd87af` |
| rootmc-api Worker | Deploy OK — `api.rootmc.net` **200** |
| rootmc-web Pages | Deploy OK — `rootmc.net` **200** |

Ava `ava-github-push` content landed via MonoRepo merge (direct Ava script may still fail until `origin` retargeted).

## Still disk-only — copy to E: before wipe

1. `.env` + `.credentials` fallbacks (also in this pack: `07-secrets-LOCAL-ONLY\`)
2. `Server Handoffs/` — Claims / Towny / Test + Ava Ivy (pack has Ava Ivy under `03` + `10`)
3. `Server Live Backups/` — worlds
4. Ava Ivy runtime/data (partially in MonoRepo notes; runtime/secrets not)
5. Keystores / `google-services.json` / live DB yml
6. `E:\old\Mobile` / `D:\old\Mobile` — **not on GitHub**; not in MonoRepo
7. Optional: `Ava Laptop/`, playit, scratch, halted Gen2

## After wipe restore

- Point remotes at `https://github.com/RootRecord/MonoRepo.git` (and emergent similarly)
- Do **not** force-push main
- `gh` RootRecord works; drop/fix Rootmcnet token if it confuses CLI
- Revive Ava from emergency pack: see `START-HERE.txt` + `10-build-context\00-README\HOW-SHE-WAS-BUILT.md`
