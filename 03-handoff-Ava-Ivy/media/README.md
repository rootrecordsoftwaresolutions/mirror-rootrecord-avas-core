# Ava Ivy — centralized media

Pulled from:

1. `C:\Users\store\Downloads\` (generated videos, peakactivity, portraits, icons, gn.gif)
2. `Server Handoffs\Ava Ivy\` (appearance, handoff clips, uploads)

## Layout

| Path | Role |
|---|---|
| `originals/` | Deduped source videos/images/gifs |
| `gifs/` | Discord-safe GIF of every original (~≤8 MB) |
| `manifest.json` | Source inventory + content hashes |
| `gifs-index.json` | GIF sizes |
| `discord-channel.json` | `#ava-media` channel id |
| `discord-posts.json` | Post receipt log |

Emoji pack PNGs stay under `../emojis/` (not re-copied here).
