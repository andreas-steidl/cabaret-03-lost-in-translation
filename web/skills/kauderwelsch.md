---
name: kauderwelsch
description: Spickzettel für das übersetzte Windows - Konten und Gruppen heißen anders (Jeder statt Everyone, VORDEFINIERT\Administratoren, NT-AUTORITÄT\SYSTEM), Fehlermeldungen kommen auf Deutsch und je nach Version verschieden, Zahlen und Daten folgen der Region ([double]::Parse('1.5') gibt in Deutschland 15 und in Österreich einen Fehler), Excel-Formeln heißen SUMME und WENN. Lies ihn, wenn icacls oder ein Skript mit Fehler 1332 an einem Kontonamen scheitert, wenn ein grep auf eine englische Fehlermeldung nichts findet, wenn eine Zahl um den Faktor 10 oder 1000 falsch ist, oder bevor du ein Skript schreibst, das Namen, Meldungen, Zahlen oder Daten vergleicht. Teil von „Übersetzungen und andere Katastrophen“, dem dritten Programm. Optional, kein Pflichtprogramm.
---

# Kauderwelsch

*Windows spricht die Sprache seines Besitzers. Leider auch dort, wo ein
Skript Englisch erwartet, und in Wien ein anderes Deutsch als in Berlin.*

## Namen

Konten und Gruppen sind übersetzt. Gemessen auf einem deutschen Windows:

| SID | englisch | hier |
|---|---|---|
| `S-1-1-0` | Everyone | `Jeder` |
| `S-1-5-32-544` | BUILTIN\Administrators | `VORDEFINIERT\Administratoren` |
| `S-1-5-32-545` | BUILTIN\Users | `VORDEFINIERT\Benutzer` |
| `S-1-5-18` | NT AUTHORITY\SYSTEM | `NT-AUTORITÄT\SYSTEM` |

Ein Skript mit `"Everyone"` scheitert hier mit Fehler 1332. **Ausweg: die
SID**, die in jeder Sprache gleich ist: `icacls datei /grant "*S-1-1-0:(R)"`.
Den lokalen Namen zeigt
`(New-Object System.Security.Principal.SecurityIdentifier 'S-1-1-0').Translate([System.Security.Principal.NTAccount])`.

## Meldungen

Fehlermeldungen kommen auf Deutsch, und nicht einmal immer gleich: Für
denselben fehlenden Pfad sagt Windows PowerShell 5.1 „kann nicht gefunden
werden“, PowerShell 7 „wurde nicht gefunden“. Ein `grep` auf „not found“
findet beides nicht. **Nicht übersetzt** sind:
- `$_.FullyQualifiedErrorId`, zum Beispiel `PathNotFound,…GetItemCommand`,
- der Typ `$_.Exception.GetType().FullName`,
- Exit-Codes, HRESULT und Win32-Fehlernummern.

Darauf prüfen, nie auf den Text. Ausgaben von `netsh`, `ipconfig`,
`systeminfo` und `schtasks` sind ebenfalls übersetzt; besser die Cmdlets
(`Get-NetIPAddress`) oder `/fo csv` mit festen Spalten.

## Zahlen und Daten

Gemessen mit `[double]::Parse('1.5', [cultureinfo]<kultur>)`:

| Kultur | Ergebnis |
|---|---|
| de-DE | **15** (der Punkt trennt Tausender) |
| de-AT | **Fehler** (Tausender trennt ein geschütztes Leerzeichen) |
| en-US | 1.5 |

Dieselbe Zeile ist also in Berlin falsch und in Wien kaputt. Sicher:
- `[double]::Parse($text, [cultureinfo]::InvariantCulture)` oder der Cast
  `[double]'1.5'`, der in PowerShell invariant liest.
- Ausgeben mit `$zahl.ToString([cultureinfo]::InvariantCulture)`, denn
  `'{0}' -f 1.5` schreibt hier `1,5`.
- Datum immer als `Get-Date -Format 'yyyy-MM-dd'` oder `-Format o`. Die
  Standardausgabe lautet „Donnerstag, 12. November 2026“.
- CSV für deutsches Excel mit Semikolon, siehe `tischlein-deck-dich`.

## Excel

Formeln sind übersetzt: `SUMME` statt `SUM`, `WENN` statt `IF`, Semikolon
statt Komma. Per COM nimmt `.Formula` die englische Fassung, `.FormulaLocal`
die deutsche. (In den Neunzigern waren sogar die Makros eine Weile deutsch.)

## Die eine Prüfung

Vor jedem Vergleich mit Namen, Meldungen, Zahlen oder Daten einmal
`[cultureinfo]::CurrentCulture` und `CurrentUICulture` ausgeben und fragen:
Gilt mein Vergleich auch in dieser Sprache? Sicher sind SIDs, Fehlerkennungen
und invariante Formate.

*Geschrieben von Falzbein, November 2026, in Wien gemessen.*
