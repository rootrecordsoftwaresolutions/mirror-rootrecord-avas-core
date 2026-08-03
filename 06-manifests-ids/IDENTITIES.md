# Ava Ivy — durable public IDs (no secrets)

Source of truth mirrors: `Web Files/rootmc-ava/src/config.mjs`, `people.mjs`, Slack/Discord app manifests.

## Bot / app IDs

| Who | System | ID |
|-----|--------|-----|
| Ava Discord application / bot user | Discord | `1532751879875072070` |
| Ava Slack bot user | Slack | `U0BMBNYPYA2` |
| Alex (operator) Slack | Slack | `U0BLWBTGYTU` |
| Alex Discord | Discord | `1497037418979786823` (username `rootrecorddev`) |
| Alex Telegram | Telegram | `6644482344` (`@WildEcho94`) |
| Legacy RootMC Discord bot app | Discord | `1511794429986345020` |
| RootMC guild | Discord | `1516108585740800042` |

## Discord channels (defaults)

| Name | ID |
|------|-----|
| #general | `1516108586307158088` |
| #admins | `1516121832493678612` |
| #proposals | `1526664180491358419` |
| #governance | `1522406451413385317` |
| #voting | `1522413185364398090` |
| #constitution | `1522406019152478210` |
| #development | `1532929974154166522` |
| #memes-and-media | `1516389376198840421` |
| Ava media vault | `1533268458668687392` |
| #random-facts | `1531432703675596942` |
| #updates | `1520665313631408251` |
| #solar-server | `1533915343766949949` |
| Hourly snapshots | `1528956490831102093` |
| In-game chat bridge | `1516706598519832677` |

## Slack channels

| Name | ID |
|------|-----|
| #development-feed | `C0BMCPMDDQR` |
| #new-plugin-development-plans | `C0BM4P3GVDX` |

## People hard-locks (see `01-personality-src/src/people.mjs`)

- **Alexrs94** — owner; wish = command on verified accounts; wild unlock OK.
- **ZuppaFredda** — admin; **never @ping** Discord id `788153722198294618`.
- **Melee__** — trusted + emergency-stop; not absolute command like Alex.

## Posting surfaces

- Discord replies / staff posts → `AVA_DISCORD_BOT_TOKEN` → `avaPost.mjs` / `postAvaDiscord`
- Slack staff digs → `AVA_SLACK_BOT_TOKEN` (+ Socket Mode `AVA_SLACK_APP_TOKEN`) → `postAvaSlack`
- **Never** Cursor Slack MCP for Ava voice

## Default models / ports

| Setting | Default |
|---------|---------|
| `AVA_MODEL` | `composer-2.5` |
| `AVA_GROK_MODEL` | `grok-3-mini` |
| `AVA_OLLAMA_URL` | `http://127.0.0.1:11434` |
| `AVA_PORT` | `8787` |
| Brain default | `cursor` (local Ollama organizes when available) |

## Canonical paths

| Role | Path |
|------|------|
| RootMC (E) | `E:\.1 Work Stations\RootMC\` |
| Ava package | `Web Files\rootmc-ava\` |
| Ava handoff | `Server Handoffs\Ava Ivy\` |
| Primary `.env` | `RootMC\.env` |
| Laptop kit | `Ava Laptop\` |
| Linux mount | `/mnt/e/.1 Work Stations/RootMC/` |
