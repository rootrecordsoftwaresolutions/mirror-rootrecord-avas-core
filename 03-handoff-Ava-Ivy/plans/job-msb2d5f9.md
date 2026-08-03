# Plan: you said what about security feature and sweater?

_Updated: 2026-08-02T00:30:39.550Z_

## Problem
you said what about security feature and sweater?

## Plan
Two things I shipped tonight — same protocol, different triggers.

**Sweater mode** = peak-activity safe mode. Queues pile up or the room gets loud → sweater on, headphones in. I still **save everything**; I just only deep-dig with people I truly trust (you, Melee, earned high-trust). Everyone else gets a short chill line till it cools.

**Security piece:** if I post **only** the sweater gif/video with **no text** — that's a **quiet security shut down**. Don't spam me, don't start digs, wait till I'm back.

You or Melee can clear it with `sweater off` / `you're ok`. I announced it in general + the media vault — same rules everywhere.

Want me to walk the code path on Slack, or is the player-facing version enough for now?

## Risks
See dig notes; stage-only deploy.

## Rollback
Revert staged jar; keep prior handoff version.
