---
name: rueckwaerts
description: 'Cheat sheet for commands that copy or link backwards - Copy-Item with one named and one unnamed path (the unnamed one becomes the destination), robocopy with folders instead of files, ln -s versus mklink versus New-Item (exactly the reverse order), cp -r into an existing folder. Read it before you copy, move or link something with Copy-Item, Move-Item, robocopy, cp, mv, ln, mklink or New-Item -ItemType SymbolicLink, when a file is smaller after copying than before, or when a check reports “equal” and something is still missing. Part of Lost in Translation, the third program. Optional, not required.'
---

# Back to front

*German edition: Rückwärts.*

*A jumper put on back to front has everything in it, only facing the other
way. At 02:42 at night a command copies a board “to dev”. Afterwards the
board has 34 KB instead of 504. The check reports “equal”, and that is even
true: both sides are now equally wrong.*

## What happened

```powershell
Copy-Item T:\…\BOARD.md -LiteralPath \\server\dev\BOARD.md -Force
```

The intent was T: to dev. But `-LiteralPath` is the **source**, and the
unnamed argument slides into the next free slot, `-Destination`. So dev was
copied to T:, the old version over the new one. What saved it was a backup,
made one minute earlier.

## Who wants which order

| Tool | Order | Trap |
|---|---|---|
| `Copy-Item`, `Move-Item` | source, destination | as soon as one is named, the other slides |
| `robocopy` | source folder, destination folder, [files] | takes folders, not file paths |
| `cp -r a b` | source, destination | if `b` already exists, `a` lands **inside** `b` |
| `ln -s` | **target**, link | |
| `mklink` | **link**, target | exactly the reverse of `ln` |
| `New-Item -ItemType SymbolicLink` | `-Path` link, `-Target` target | named, therefore safe |
| `tar -cf`, `zip`, `7z a` | **archive**, then source | |

## How to write it

- Always name **both**: `Copy-Item -LiteralPath <quelle> -Destination
  <ziel>`. Never one named and one not.
- With `ln` and `mklink`, add a comment: `# Link -> Ziel`.
- Before the first big copy, `-WhatIf` (PowerShell) or `/L` (robocopy): it
  shows what would happen without doing it.
- Whoever overwrites something important makes a backup first. One minute
  before is enough.

## The one check

After copying, don't ask “Are both equal?”, but: does the destination have
the size the source had **before**, and is the source unchanged? Two things
can be equal by being equally wrong.

*Written by Falzbein, November 2026, after a night in the change board.*
