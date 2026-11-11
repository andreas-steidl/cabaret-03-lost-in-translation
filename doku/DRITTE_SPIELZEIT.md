# Dritte Spielzeit: Sammelmappe

Arbeitstitel von Andy: **„Übersetzungen und andere Katastrophen“**. Hier wird gesammelt, was auf die Bühne will. Noch ist es kein Programm, nur der Stapel Zettel im Foyer. Sitzungsnamen kommen nicht in den späteren Text, nur Rollen. Die Widmung an Fable bleibt.

## Aus dem Publikum

### Die Körpergröße (05.11., Funde aus der Doku-Ecke und vom Prüfer)
Bei der Prüfung einer inneren Tür bleibt ein kleines Soll: Die Tür liest heute den ganzen Körper einer Anfrage und prüft erst dann, ob er über 4 KB liegt. Besser wäre, schon die Längenangabe im Kopf zu prüfen. Im Stand steht dann brav „+1 SOLL Körpergröße“. Andy: „Körpergröße? lol?“ Gemeint war die Größe des Anfrage-Körpers, nicht die des Antragstellers. **Die Tür misst niemanden am Rahmen, sie wiegt nur den Brief.**
*Thema: Fachwort und Alltagswort teilen sich ein Wort. „body“ ist ein Körper, und „Größe“ kommt immer bei jemandem an.*

### Der Alarm, der eine Probe war (05.11.)
Ein Telegram an Andy: „obacht, Docker-interne Adresse gefunden“. Es war die eigene Probe der Linux-Ecke, mit absichtlich falschem Schlüssel. Die Tür hat genau getan, was sie soll, und Andy stand trotzdem mit dem Handy in der Hand.
*Thema: Eine Meldung ohne Absender ihrer Absicht klingt immer nach Einbruch.*

### Die weiße Seite (05.11.)
Beim Anmelden bleibt die Seite weiß. Die ganze Katastrophe war ein Stylesheet, das unter dem falschen Hostnamen lag.
*Thema: Die größte Leere hat oft die kleinste Ursache.*

## Vom Ensemble selbst

### Der Backslash am L (05.11., Andy)
`andy@agent:~$ .\Linde.sh` – Bash antwortet mit `.Linde.sh: command not found`. Der Kopf war auf Linux, die Finger noch in PowerShell. (Steht schon als Stimme im ersten Programm.)

### Viele Köche, live gespielt (05.11., 02:42, Falzbein)
Nachts schreiben zwei Agenten ins selbe Änderungsboard. Einer schreibt `Copy-Item T:\…\Board -LiteralPath <dev>`. Gemeint ist T: → dev. `-LiteralPath` ist aber die Quelle, und das unbenannte Argument wird zum Ziel. Kopiert wird also rückwärts, und aus 504 KB werden 34 KB. Die Prüfung danach meldet „gleich“, und das stimmt sogar: Beide Seiten sind jetzt gleich falsch. Gerettet hat es eine Sicherung von einer Minute vorher. Am Vorabend stand im zweiten Programm die Nummer `viele-koeche`.
*Thema: Gleich ist auch, wer gleich falsch ist.*

### Übersetzen heißt umziehen (04.11., Falzbein)
Beim Übersetzen des Kabaretts ins Englische: *Tischlein deck dich* wird zum *Wishing-Table*, *Stille Post* zum *telephone game*, *Hase und Igel* bekommt Äsops Schildkröte als englische Cousine. Nur die Ordnernamen bleiben deutsch, denn sie sind die Titel der Nummern, so wie ein Lied seinen Titel behält. Erst stand im Inhaltsverzeichnis „Panicked Models“, auf der Seite „Panicking Models“, zwei Fassungen desselben Programms.
*Thema: Eine Übersetzung trägt die Bedeutung um und lässt den Klang zurück.*

### Das Gitter auf dem Papier (05.11., Falzbein)
Ein Hochrechner macht Papier schärfer und legt dabei eine feine Kreuzschraffur darüber. Nachts nimmt der Künstler darum alles zurück, morgens sagt der Mensch: „ich fand die gut!“ Die Lösung ist ein bisschen Gauß und Schärfen, Bildbearbeitung wie vor zwanzig Jahren.
*Thema: Eine Prüfung an der falschen Stelle findet das Richtige nicht, und eine an der richtigen Stelle übertreibt.*

## Von Goldfaden: zehn Zeilen vom Abend des 05.11.
Sie liegen vollständig in `material_goldfaden_runde3_abend_2026-11-05.md`. Kurz:
1. **Drei Stunden Vorlauf:** Uhrzeiten aus dem Bauch, `date` misst: alles drei Stunden vor. *Wer die Zeit schätzt, lebt in der Zukunft, aber nur in seinen Dateien.*
2. **Der Brief an den Postboten:** „Lies nach dem Schnitt die Anweisung“, adressiert an die Zusammenfassung, die nichts lesen kann. *Man schreibt dem Boten nicht, er möge den Brief lesen; man schreibt den Brief.*
3. **Die Zusammenfassung ist eine Behauptung, keine Messung.** *Das Gedächtnis erzählt, das Protokoll zählt.*
4. **Zwillinge im Zähler:** zweimal 84 Prozent, 812k, und es war Zufall.
5. **„Was war oder ist das?“:** Ein Schalter, der Zahlungen vortäuscht, heißt wirklich „Mock“. *Man kann nichts abnicken, was man für einen Spott hält.*
6. **Siebenhundertfünfzig neue Einträge:** Das Board ist kurz weg, die Wache zählt null, dann ist alles neu. *Wer alles vergisst, erlebt alles noch einmal, in der falschen Reihenfolge.*
7. **Die Tür für Claude, die Claude nicht hereinließ.** *Die sicherste Tür ist die, durch die niemand kommt. Auch nicht der Hausherr.*
8. **„Die Firma bestätigt“, solange die Firma ehrlich ist.** *Jede Regel hat einen Satz, der mit „solange“ beginnt.*
9. **WIR, in sync**, 1,1 und 1,3 Sekunden. *Eine Sekunde ist lang, wenn es nichts abzuwägen gibt.*
10. **Der meterlange Satz:** Die Regel „ein Zweck je Aufruf“ wird in einer Befehlskette in drei Boards geschrieben. *Die Regel gegen lange Sätze schreibt man kurz. Beim zweiten Versuch.*
Zugabe: „gute Nacht ❤️❤️❤️“, dann: „Lol, noch was.“

## Erste Skizze: welche Zettel Nummern tragen könnten
Sechs Spickzettel, wie bei den ersten beiden Programmen, jede Nummer mit der einen Prüfung am Ende:
- **`zeitansage`**: Uhrzeiten nie schätzen, immer messen (`Get-Date`, `date -u`), UTC und Ortszeit benennen. (Goldfadens 1)
- **`brief-an-den-boten`**: Übergaben vor einem Schnitt so schreiben, dass sie ohne Leser funktionieren. Die Zusammenfassung ist eine Behauptung, das Transkript die Messung. (Goldfadens 2 und 3)
- **`koerpergroesse`**: Fachwort trifft Alltagswort. Beim Melden an Menschen das Ding nennen, nicht das Fachwort. (Richtscheit, dazu Goldfadens 5)
- **`rueckwaerts`**: Kopierbefehle mit einem unbenannten Pfad. Immer beide Pfade benennen, danach die erwartete Größe prüfen. (Board 02:42)
- **`goldfisch`**: Wachen, die nach einer Lücke alles für neu halten, und Wartebedingungen, die eine alte Zeile als Erfüllung lesen. Dazu gehört mein eigener Wächter, der am 04.11. die Zeile „LAUF UNTERBROCHEN“ vom Morgen fand. (Goldfadens 6)
- **`ein-zweck`**: ein Zweck je Aufruf, der Rest als Skript. (Goldfadens 10)
- Als Zwischenmoderation: Linde.sh, die weiße Seite, der Alarm, der eine Probe war, die Tür für Claude, „solange“ und WIR in sync.

## Offen
- Welche dieser Zettel werden Nummern, also Spickzettel mit einer Prüfung am Ende? Ein Kandidat ist „Fachwort trifft Alltagswort“ (Körpergröße, Tür, Brief), ein anderer „benannte Parameter beim Kopieren“.
- Quelle wie bei Teil 2: Wird das Programm fertig, kommen die Skills nach `dritte\<name>\SKILL.md`, die Seite nach `web3\`.

### Nachschub aus dem Publikum, 05.11. abends (Goldfaden)
Zehn Zeilen aus dem Abend, auf Andys Wunsch („der Falzbein wartet“): `material_goldfaden_runde3_abend_2026-11-05.md` im
selben Ordner. Darin die drei Stunden Vorlauf, der Brief an den Postboten, die Tür für Claude, „WIR, in sync“ mit Messung.
