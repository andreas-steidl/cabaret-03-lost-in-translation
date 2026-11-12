---
name: rueckwaerts
description: Spickzettel für Befehle, die rückwärts kopieren oder verlinken - Copy-Item mit einem benannten und einem unbenannten Pfad (das unbenannte wird zum Ziel), robocopy mit Ordnern statt Dateien, ln -s gegen mklink gegen New-Item (genau umgekehrte Reihenfolge), cp -r in einen vorhandenen Ordner. Lies ihn, bevor du mit Copy-Item, Move-Item, robocopy, cp, mv, ln, mklink oder New-Item -ItemType SymbolicLink etwas kopierst, verschiebst oder verlinkst, wenn eine Datei nach dem Kopieren kleiner ist als vorher, oder wenn eine Prüfung „gleich“ meldet und trotzdem etwas fehlt. Teil von „Übersetzungen und andere Katastrophen“, dem dritten Programm. Optional, kein Pflichtprogramm.
---

# Rückwärts

*Nachts um 02:42 kopiert ein Befehl ein Board „nach dev“. Danach hat das
Board 34 KB statt 504. Die Prüfung meldet „gleich“, und das stimmt sogar:
Beide Seiten sind jetzt gleich falsch.*

## Was geschah

```powershell
Copy-Item T:\…\BOARD.md -LiteralPath \\server\dev\BOARD.md -Force
```

Gemeint war T: nach dev. Aber `-LiteralPath` ist die **Quelle**, und das
unbenannte Argument rutscht auf den nächsten freien Platz, `-Destination`.
Kopiert wurde also dev nach T:, die alte Fassung über die neue. Gerettet hat
es eine Sicherung, eine Minute vorher angelegt.

## Wer welche Reihenfolge will

| Werkzeug | Reihenfolge | Falle |
|---|---|---|
| `Copy-Item`, `Move-Item` | Quelle, Ziel | sobald einer benannt ist, rutscht der andere |
| `robocopy` | Quellordner, Zielordner, [Dateien] | nimmt Ordner, keine Dateipfade |
| `cp -r a b` | Quelle, Ziel | gibt es `b` schon, landet `a` **in** `b` |
| `ln -s` | **Ziel**, Link | |
| `mklink` | **Link**, Ziel | genau umgekehrt wie `ln` |
| `New-Item -ItemType SymbolicLink` | `-Path` Link, `-Target` Ziel | benannt, darum sicher |
| `tar -cf`, `zip`, `7z a` | **Archiv**, dann Quelle | |

## So schreibt man es

- Immer **beide** benennen: `Copy-Item -LiteralPath <quelle> -Destination
  <ziel>`. Nie einen benannt und einen nicht.
- Bei `ln` und `mklink` einen Kommentar dazu: `# Link -> Ziel`.
- Vor dem ersten großen Kopieren `-WhatIf` (PowerShell) oder `/L`
  (robocopy): Es zeigt, was geschähe, ohne es zu tun.
- Wer etwas Wichtiges überschreibt, legt vorher eine Sicherung an. Eine
  Minute vorher reicht.

## Die eine Prüfung

Nach dem Kopieren nicht fragen „Sind beide gleich?“, sondern: Hat das Ziel
die Größe, die die Quelle **vorher** hatte, und ist die Quelle unverändert?
Gleich ist auch, wer gleich falsch ist.

*Geschrieben von Falzbein, November 2026, nach einer Nacht im Änderungsboard.*
