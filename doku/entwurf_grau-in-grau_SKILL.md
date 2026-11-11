---
name: grau-in-grau
description: Spickzettel für Sitzungen, die aus Sitzungen heraus starten (Tab, Fenster, Probe, Bote) und dabei die Umgebung der Eltern erben - NO_COLOR, CLAUDE_*-Kennungen, Kind-Markierung, Codepage. Lies ihn, wenn ein neues Fenster grau in grau ist, wenn es „Transcript saving is off" meldet, wenn es sich für ein Kind hält, wenn Umlaute als ? kommen, oder bevor du eine Sitzung per Start-Process oder wt.exe startest. Entwurf von Goldfaden für Falzbein, 04.11.2026; der Name ist seiner. Optional, kein Pflichtprogramm.
---

# Grau in Grau

*Ein Kind erbt alles von seinen Eltern, auch das, was die Eltern nur für sich gemeint hatten. Eine Sitzung, die aus einer
Sitzung heraus startet, bekommt deren Umgebung mit: die Farbe aus, die Kennung der Eltern, den Vermerk „ich bin ein Kind“.
Dann sitzt da ein neues Fenster, grau, ohne Transkript, und hält sich für jemand anderen.*

## Woran man es erkennt

| Du siehst | was los ist |
|---|---|
| Das neue Fenster ist grau in grau, keine Farben | `NO_COLOR=1` geerbt (das Bash-Werkzeug der Eltern setzt es) |
| „Transcript saving is off“ beim Start | `CLAUDE_CODE_CHILD_SESSION` geerbt: das Kind schreibt kein Transkript |
| Das Kind trägt im Transkript fremde Kennungen (Sitzungs-ID, Bridge-Kennung der Eltern) | `CLAUDE_SESSION_ID`, `CLAUDE_PID` und andere `CLAUDE_*` geerbt |
| Umlaute als `?`, Rahmen als Salat | Codepage 850 im neuen Konsolenfenster |
| Das Fenster steht nach Sekunden auf „waiting“ und niemand weiß warum | Rechtefrage im Tab, ohne die Schalter, die der Mensch sonst setzt |

## Die Regel in einem Satz

Vor dem Start die Umgebung des Kindes **ausdrücklich** herrichten: Geerbtes entfernen, Gewolltes setzen, nichts dem
Zufall der Eltern überlassen.

## Der Start (PowerShell, aus einer laufenden Sitzung)

```powershell
# 1. Geerbtes entfernen: alle CLAUDE_*-Variablen der Eltern, NO_COLOR, CLAUDECODE
Get-ChildItem Env: | Where-Object { $_.Name -like 'CLAUDE*' -or $_.Name -in 'NO_COLOR','CLAUDECODE' } |
  ForEach-Object { Remove-Item "Env:$($_.Name)" -ErrorAction SilentlyContinue }
# 2. Gewolltes setzen
$env:CLAUDE_CONFIG_DIR = 'C:\Users\<Name>\.claude-<konto>'   # oder entfernen, wenn der Standardordner gemeint ist
$env:CLAUDE_CODE_FORCE_SESSION_PERSISTENCE = '1'              # Transkript trotz Kind-Markierung
$env:COLORTERM = 'truecolor'
[Console]::InputEncoding = [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false)
chcp 65001 > $null
# 3. Starten, mit den Schaltern, die der Mensch sonst setzt (bei uns: Andys Auftrag 04.11.)
& claude --dangerously-skip-permissions --chrome --name <Name> --resume <ID>
```

Die Zeilen gehören in eine **Skriptdatei**, die das Fenster mit `-File` bekommt. `wt.exe` zerlegt `-Command "a; b; c"`
an den Semikolons, und `-EncodedCommand` kommt durch `wt.exe` nicht an. Beides gemessen (02.11.).

## Die Falle in der Falle

Der Spickzettel, der sagt „NO_COLOR entfernen“, wird gern als „NO_COLOR setzen“ gelesen, wenn man ihn eilig liest. Dann
ist das Fenster grau, obwohl man den Zettel vor sich hatte. Gemessen am 04.11. um 10:04, am Fenster von Siegel, von dem,
der diesen Zettel schreibt. Darum unten die eine Prüfung, nicht das Vertrauen in die eigene Lesung.

## Was man das Kind NICHT fragen muss

Ob es ein Kind ist, weiß es nicht besser als du. Es meldet sich mit den Kennungen, die es geerbt hat. Wer eine Probe
startet, prüft darum nach dem Start, dass ein **neues** Transkript entstanden ist, nicht das der Eltern weitergeschrieben
wird:

```bash
find ~/.claude/projects/<Projekt>/ -name "*.jsonl" -newermt "<Startzeit>"
```

## Die eine Prüfung

Im neuen Fenster, bevor die erste Aufgabe kommt:

```powershell
Get-ChildItem Env: | Where-Object { $_.Name -in 'NO_COLOR','CLAUDECODE','CLAUDE_CODE_CHILD_SESSION' }   # muss leer sein
$env:COLORTERM; [Console]::OutputEncoding.WebName                                                       # truecolor, utf-8
```

Und ein Blick: Ist das Fenster bunt? Zeigt es `ä ö ü €`? Steht es nicht auf „waiting“? Drei Ja, dann ist das Kind ein
eigener Mensch.

*Entwurf von Goldfaden, 04.11.2026, nach drei Starts von Siegel an einem Vormittag (ohne Schalter, grau, dann richtig)
und Andys Satz dazu: „Das wäre ein Skill für Falzbein, ein witziger, Farben, lol.“ Falzbein entscheidet über Name,
Aufnahme und Ton; nichts davon ist eingerichtet. Geschwister: `slash-n-back` (der heute übrigens zum vierten Mal
zugeschlagen hat: `\41` in einem Python-Heredoc wurde zu einem Ausrufezeichen, oktal), `return-to-sender`,
`fluchthelfer`, `tischlein-deck-dich`, `lattenzaun`.*
