---
name: falsche-freunde
description: Spickzettel für Befehle, die vertraut aussehen und in PowerShell etwas anderes tun - curl und wget (in Windows PowerShell 5.1 Invoke-WebRequest), sc (Set-Content statt Dienststeuerung), where (Where-Object statt where.exe), del, dir und copy mit cmd-Schaltern, rm -rf, echo, diff. Dazu falsche Freunde unter Wörtern in Berichten (eventually, actual, Mock). Lies ihn, bevor du einen Befehl aus Bash oder cmd in PowerShell tippst, wenn ein Befehl andere Schalter nicht kennt, wenn „sc create“ eine Datei anlegt statt eines Dienstes, wenn curl ein Objekt statt Text liefert, oder wenn sich ein Skript in PowerShell 5.1 und 7 verschieden verhält. Teil von „Übersetzungen und andere Katastrophen“, dem dritten Programm. Optional, kein Pflichtprogramm.
---

# Falsche Freunde

*Sie sehen aus wie alte Bekannte aus Linux. Sie grüßen freundlich. Und dann
tun sie etwas ganz anderes, und zwar je nach Version etwas anderes.*

## Die üblichen Verdächtigen

Gemessen auf einem deutschen Windows mit Windows PowerShell 5.1 und
PowerShell 7.6:

| Befehl | erwartet | Windows PowerShell 5.1 | PowerShell 7 |
|---|---|---|---|
| `curl` | curl | Alias für `Invoke-WebRequest` | das Programm `curl.exe`, das zuerst im PATH liegt (je nach PATH das aus System32 oder das aus Git, auf demselben Rechner in zwei Sitzungen verschieden gemessen) |
| `wget` | wget | Alias für `Invoke-WebRequest` | gibt es nicht |
| `sc` | Dienststeuerung | Alias für `Set-Content`: `sc create dienst …` schreibt eine Datei namens `create` | `sc.exe` |
| `where` | `where.exe` sucht Programme | Alias für `Where-Object` | Alias für `Where-Object` |
| `del /s /q`, `dir /s`, `copy /y` | cmd-Schalter | `/s` ist ein Pfad, kein Schalter | ebenso |
| `rm -rf` | alles weg | Fehler: Parameter `rf` gibt es nicht | ebenso |
| `echo` | Text zeigen | `Write-Output`: Der Text geht in die Pipeline, auch in den Rückgabewert einer Funktion | ebenso |
| `diff`, `sort`, `cat`, `ls` | die Unix-Programme | `Compare-Object`, `Sort-Object`, `Get-Content`, `Get-ChildItem` mit eigenen Schaltern | ebenso |

**Was daraus folgt:** Ein Skript, das in PowerShell 7 mit `curl` und `sc`
läuft, tut in Windows PowerShell 5.1 etwas anderes, ohne Fehlermeldung. Wer
das Programm meint, schreibt es mit Endung: `curl.exe`, `sc.exe`,
`where.exe`. Wer das Cmdlet meint, schreibt das Cmdlet aus.

## Nicht erinnern, fragen

```powershell
Get-Command curl, wget, sc, where -All | Select-Object Name, CommandType, Definition, Source
```

Steht dort `Alias`, ist es ein falscher Freund, bis man weiß, wofür. Welche
Aliase es gibt, hängt von Version, PATH und System ab; die Tabelle oben ist
eine Messung, kein Gesetz.

## Falsche Freunde unter Wörtern

Auch in Berichten an Menschen: **eventually** heißt „schließlich“, nicht
„eventuell“ („eventually consistent“: irgendwann stimmig). **actual** heißt
„tatsächlich“, **current** „aktuell“, **sensible** „vernünftig“. Und
**Mock** ist ein Testbetrieb, kein Spott.

## Die eine Prüfung

Vor jedem Befehl, der aus einer anderen Shell stammt: `Get-Command <name>
-All`. Nach dem Befehl nachsehen, was er wirklich getan hat (Datei da? Dienst
da? Text oder Objekt?), nicht was der Name versprochen hat.

*Geschrieben von Falzbein, November 2026. Gemessen in beiden PowerShells.*
