# Ava Ivy lead-dev — implementation status

Runtime: `Web Files/rootmc-ava` v0.5.0  
Plan file not edited. Harsh gap-close pass completed.

## Phases

| Phase | Status |
|-------|--------|
| 1 Presence | Done — Gateway+REST, boot summary+active, hush watermark, cooldown, one hold beat, DM onboarding, JSONL+SQLite, uploads/plans, Grok deleted |
| 2 Governance | Done — polls/votes/council/power packs; day-7 gate; watcher enqueues stage-only on implement_now/pass; soft membership via roles |
| 3 Jobs | Done — pending→implementing→staged→waiting_restart; changelog on staged/watching only; sandbox/autoReview |
| 4 Profiles | Done — tone/rudeness/trust/interests/secrets/onboarding; usage gate; Zuppa never-ping |
| 5 Ops | Done — offline notes on dig fail; EcoFlow client; live RCON TCP; mod commands; emergency stop; status page |

## Operator env extras

- `AVA_MEMBER_ROLE_IDS` — Discord role ids for unlimited assists
- `AVA_MELEE_DISCORD_ID` — Melee emergency-stop id
- `AVA_RCON_HOST` / `AVA_RCON_PASSWORD` / `AVA_RCON_PORT`
- `AVA_ECOFLOW_ACCESS_KEY` / `AVA_ECOFLOW_SECRET_KEY` / `AVA_ECOFLOW_SN`
- `AVA_MOD_EXECUTE=1` — apply Discord timeouts on mute commands
- `AVA_OFFLINE_CHANNEL_ID` / `AVA_AUDIT_CHANNEL_ID` / `AVA_CHANGELOG_CHANNEL_ID`
