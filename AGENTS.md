# Agent instructions — avas-core

## Purpose

This private repo is Ava Ivy’s durable core + history vault. Agents must enrich it without destroying identity locks or committing secrets.

## Never commit

- `.env`, tokens, keystores, live `cloud.yml` SQL passwords
- Anything under a real `07-secrets-LOCAL-ONLY` dump
- Binary Electron builds (`Ava Ivy.exe` / whole `AvaIvy` runtime folders > GitHub limits)

## When contributing history

Create dated files under `history/contributions/`:

```text
history/contributions/YYYY-MM-DD-<short-slug>/
  MANIFEST.md          # what you found + source chat IDs
  notes.md             # durable personality/ops facts (prose)
  excerpts/            # scrubbed quotable bits (no secrets)
  files/               # optional copies of plans/notes you recovered
```

Update `history/INDEX.md` with one bullet linking your folder.

## Prefer

- Scrub tokens/URLs with secrets before writing
- Merge lore into `03-handoff-Ava-Ivy/notes/` only if it is lasting (dated note file)
- Keep chat archaeology under `history/` or `10-build-context/agent-transcripts/` — don’t paste full JSONL dumps of secrets

## Identity

Read `01-personality-src/src/persona.mjs`, `people.mjs`, and `10-build-context/docs-persona/` before changing voice.
