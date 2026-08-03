# Ava rollout — locked 2026-08-02

**Owner:** Ava Ivy · **Order:** Alex — read chats, move fast, fully roll out what Ava wants  
**Dig surface:** Slack `#development-feed` · player note: Discord `#updates`

## Chat sweep (this session)

| Surface | Signal | Action |
|---------|--------|--------|
| Towny whisper | Alex: can others see Ava / global? | Whispered: tells are **private**; global is public; she still hears via bridge |
| Towny chat | "aaweee tysm" / free rein | Soft Relations lane — keep whisper + `/ava` cmds |
| Discord | No open @Ava asks after catch-up | Quiet |
| Slack | Army function + free rein | Ship army wave; digs stay on Slack |
| Boats PROP | Forum thread live | **Vote first** — no jar until pass |

## Wave A — ship now (Ava-owned)

| Item | Where | Status |
|------|-------|--------|
| Army charter + `avasArmy.mjs` | Ava runtime | **live** |
| `/ava army` · `/ava tip` · `/ava pulse` · `/ava rollcall` | Root-Ava-Core **1.8.3** | staged handoffs → **Alex FileZilla + Shockbyte restart** |
| Join welcome + operator pulse | `ingameJoinWelcome.mjs` | code live → **restart Ava poller** |
| Fast hear-mode (~20s) | `ingameMentionWatch.mjs` | code live → **restart poller** |
| Alone-with-Alex soft lines | `ingameAloneSoft.mjs` | code live → **restart poller** |
| Dept whisper prefixes `[Relations]` etc. | mention watch | code live → **restart poller** |
| Host-site telemetry API | `api.rootmc.net` | **deployed** |
| Army training stamp on digs | `assignArmyJob` → training tag | code live |

## Wave B — human gates (not Ava)

1. **FileZilla** Claims + Towny (and Test if wanted): `root-ava-core-1.8.3.jar` + `plugins/RootMC/root-ava-core.yml` — remove older `root-ava-core-1.8.*.jar`
2. **Shockbyte restart** both hosts
3. **Restart Ava poller** (done when this rollout lands on Root Server)
4. Boats PROP vote → then Engineering jar
5. Optional: Cursor root on `E:\.1 Work Stations\RootMC` when ready
6. Votes still open: constitution / Ava-Core authorize / ~$100 — do not spend early

## Wave C — backlog (Ava picks next; no ship today)

- Desk hologram at spawn
- BlueMap "Ava presence" pin
- Real player-entity skin (big dig)
- Weekly Army Slack pulse (optional once 1.8.3 is live)

## Do not

- Post Ava digs via Cursor Slack MCP (posts as Alex)
- Ship boats jar before vote
- Force Shockbyte restart without Alex
- Publish host city / NSA lore / Gold mint for vanity

## Verify after FileZilla

```
/ava
/ava army
/ava tip
/ava pulse
/ava rollcall
```

Whisper lane: say `ava` or `hear me` in chat → private tell only you see (sender label may show as **Roon** = RCON console, not a second player).
