"""Resize Ava app emoji art to Discord upload specs (128x128 PNG, <=256KB)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

NAMES = [
    "ava_wave",
    "ava_blush",
    "ava_think",
    "ava_code",
    "ava_hush",
    "ava_love",
    "ava_peek",
    "gold_coin",
    "diamond_gem",
    "pickaxe",
    "grass_block",
    "creeper_face",
    "vote_yes",
    "vote_no",
    "bug_report",
    "ship_it",
    "on_fire",
    "sleepy",
    "party_pop",
    "hologram",
    "heart",
    "warn",
]

HERE = Path(__file__).resolve().parent
SRC = Path(
    r"C:\Users\store\.cursor\projects\d-1-Work-Stations-RootMC\assets"
)
RAW = HERE / "raw"
DISCORD = HERE / "discord"
MAX_BYTES = 256 * 1024


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    DISCORD.mkdir(parents=True, exist_ok=True)
    ok = 0
    for name in NAMES:
        p = SRC / f"{name}.png"
        if not p.exists():
            print(f"MISSING\t{name}")
            continue
        im = Image.open(p).convert("RGBA")
        im.save(RAW / f"{name}.png")
        im128 = im.resize((128, 128), Image.Resampling.LANCZOS)
        outp = DISCORD / f"{name}.png"
        im128.save(outp, optimize=True)
        size = outp.stat().st_size
        if size > MAX_BYTES:
            # Re-encode as compressed PNG / fall back to RGB if needed
            im128.save(outp, optimize=True, compress_level=9)
            size = outp.stat().st_size
        status = "OK" if size <= MAX_BYTES else "TOO_BIG"
        print(f"{status}\t{name}\t{size}")
        ok += 1
    print(f"DONE\t{ok}\t->\t{DISCORD}")


if __name__ == "__main__":
    main()
