# Ava full logs + training

## Live now

| File | What |
|------|------|
| `logs/inbound.jsonl` | Every watched Discord/Slack (+ DM) message Ava sees |
| `logs/outbound.jsonl` | Every Ava utterance (pipeline, follow-up scan, agent-directed, boot posts) |
| `logs/actions.jsonl` | Jobs, digs, power-down, `ava.utterance`, … (append-only) |
| `training/utterances.jsonl` | All Ava posts for future training (incl. operator/agent-directed) |
| `training/digs.jsonl` | Dig Q&A pairs (system/user/assistant) for local brain |
| `conversations/turns.jsonl` | Dig Q&A (legacy + still written on full digs) |
| `reactions/` | Feedback on Ava’s posts |
| `slack/channels/` | Full channel archives when she joins |

Token-looking strings are redacted in inbound/outbound/utterance content.

## Sources (must all log)

| Source | How it logs |
|--------|-------------|
| Live pipeline replies | `recordAvaUtterance` via pipeline `reply` wrapper |
| Follow-up scanner | `recordAvaUtterance` after each catch-up reply |
| Agent / “tell Ava to…” posts | `src/avaPost.mjs` (`postAva` / `postAvaDiscord` / `postAvaSlack`) |
| Boot / file posts | `postWithFiles` → `recordAvaUtterance` |
| Slack gateway direct posts | logs unless `skipLog: true` (pipeline uses skip to avoid doubles) |

**Operator rule:** when Cursor/agents post as Ava, use `avaPost.mjs` — never raw Discord/Slack fetch without it.

## Not yet (still gaps)

- Cursor tool transcripts / raw agent traces
- RCON command+output pairs
- File edit diffs as separate patch files
- Historical one-shots from before universal logging (cannot backfill text we never stored)

See `plans/ava-independence-roadmap.md`.
