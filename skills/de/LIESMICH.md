# Übersetzungen und andere Katastrophen

*Drittes Programm der Skill-Suite des Grauens*

**Sechs Nummern und eine Zugabe über das, was zwischen Mensch und Maschine
verloren geht, und zwischen den Sprachen dazwischen.** Von Andy und
Falzbein, mit Funden aus der Bauecke, von der Leitung und vom Diktiergerät.
November 2026.

---

## Wie es dazu kam

Nach der zweiten Premiere lag wieder ein Stapel Zettel im Foyer, und
diesmal handelten fast alle vom Verstehen. In einem Stand stand
„Körpergröße“, gemeint war die Größe einer Anfrage. Ein Schalter hieß
„Mock“, und der Mensch fragte, was das sei. Das Diktiergerät machte aus
Sitzungen Landsitze und Spielfiguren und aus RDP die Erde, die man küssen
will. Nachts um 02:42 kopierte ein Befehl ein Board rückwärts, und die
Prüfung danach meldete „gleich“. Und drei Tage lang wurde ein Wort
eingedeutscht, bis der Setzkasten es erlöste.

Dazu kam, dass das Kabarett selbst übersetzt wurde. Aus *Tischlein, deck
dich* wurde *Table manners*, aus *Stille Post* das *telephone game*. Eine
Übersetzung trägt die Bedeutung um und lässt den Klang zurück. Darum haben
die Zettel dieser Spielzeit auf Englisch eigene Bilder: *Mondegreen*, *Body
language*, *False friends*, *Gobbledygook*, *Back to front*, *Word for word*
und *Ps and Qs*.

Geprüft ist wieder, was sich prüfen ließ: die Befehle in `falsche-freunde`
in Windows PowerShell 5.1 und PowerShell 7, die Kontonamen und Zahlen in
`kauderwelsch` auf einem deutschen Windows, in drei Kulturen. Die schönste
Messung: Dieselbe Zeile `[double]::Parse('1.5')` ergibt in Berlin 15 und in
Wien einen Fehler.

## Einrichten

Wie immer: jeden Ordner unverändert nach `~/.claude/skills/<name>/` legen
(unter Windows `%USERPROFILE%\.claude\skills\<name>\`). Die deutsche und die
englische Fassung haben dieselben Ordnernamen, also je Zettel eine Sprache
wählen. Wer alle Zettel aller drei Spielzeiten in einem Skill haben will,
nimmt `suite-des-grauens` aus `suite-des-grauens-gesamt.zip`: englisch, mit
einem deutschen Teil, und diese Spielzeit ist dort das dritte Kapitel.

---

## Das Programm

### 14. `nur-bahnhof` – was das Diktiergerät gehört hat
**Kann:** diktierte Namen, Abkürzungen und Zahlen gegen das Bekannte im
Projekt halten, vor einer Handlung die eigene Lesart zum Abnicken anbieten,
und verhörte Namen aus Dateien und Boards heraushalten.
**Verwenden:** wenn der Mensch per Sprache schreibt, wenn ein Name auftaucht,
den es im Projekt nicht gibt, und bevor ein diktierter Name oder eine
diktierte Zahl etwas löscht, sendet oder kostet.
**Hintergrund:** Ich verstehe nur Bahnhof. Drei Verhörer in zwei Tagen: Eine
Burg wurde ein Landsitz, eine Sitzung eine Spielfigur, und „ich will die
Erde küssen“ hieß „ich will per RDP drauf“.

### 15. `koerpergroesse` – das Ding nennen, nicht den Begriff
**Kann:** Berichte an Menschen so schreiben, dass Fachwörter nicht als
Alltagswörter ankommen: das Ding nennen, ein Fachwort beim ersten Mal in
einem halben Satz erklären, die Wörter des Menschen übernehmen.
**Verwenden:** bevor man einem Menschen einen Stand, ein Ergebnis oder eine
Frage schreibt, und wenn die Antwort „lol?“ lautet.
**Hintergrund:** Ein Fund aus der Bauecke: „+1 SOLL Körpergröße“. Die Tür
misst niemanden am Rahmen, sie wiegt nur den Brief. Dazu der Schalter
namens „Mock“: Man kann nichts abnicken, was man für Spott hält.

### 16. `falsche-freunde` – sie grüßen freundlich
**Kann:** sagen, was `curl`, `wget`, `sc`, `where`, `del`, `rm -rf`, `echo`
und `diff` in Windows PowerShell 5.1 und PowerShell 7 wirklich sind, und mit
`Get-Command -All` nachsehen statt erinnern. Dazu die falschen Freunde unter
Wörtern: eventually, actual, sensible.
**Verwenden:** bevor ein Befehl aus Bash oder cmd in PowerShell getippt wird,
und wenn `sc create` eine Datei anlegt statt eines Dienstes.
**Hintergrund:** „Was war oder ist das?“ Gemessen in beiden PowerShells, mit
einer Tabelle, die ausdrücklich eine Messung ist und kein Gesetz.

### 17. `kauderwelsch` – das deutsche Windows
**Kann:** Konten über SIDs statt über Namen ansprechen (`Jeder` ist
`S-1-1-0`), auf Fehlerkennungen statt auf Fehlertexte prüfen, Zahlen und
Daten invariant lesen und schreiben, Excel-Formeln in der richtigen Sprache
setzen.
**Verwenden:** bei Fehler 1332 an einem Kontonamen, wenn ein grep auf eine
englische Meldung nichts findet, und wenn eine Zahl um den Faktor 10 oder
1000 danebenliegt.
**Hintergrund:** Windows spricht die Sprache seines Besitzers, und in Wien
ein anderes Deutsch als in Berlin. In den Neunzigern waren eine Weile sogar
die Makros deutsch.

### 18. `rueckwaerts` – gleich ist auch, wer gleich falsch ist
**Kann:** die Reihenfolge von Quelle und Ziel für `Copy-Item`, `robocopy`,
`cp`, `ln`, `mklink`, `New-Item` und die Archivprogramme, und die Prüfung
danach: die Größe gegen die Größe von vorher.
**Verwenden:** vor jedem Kopieren, Verschieben und Verlinken, und wenn eine
Datei nach dem Kopieren kleiner ist als vorher.
**Hintergrund:** Nachts um 02:42 wurde aus einem Board mit 504 KB eines mit
34 KB. Am Vorabend stand im zweiten Programm die Nummer `viele-koeche`.
Gerettet hat es eine Sicherung von einer Minute vorher.

### 19. `beim-wort-genommen` – den Menschen lesen
**Kann:** Auftrag, lauten Gedanken und Beobachtung unterscheiden, wissen, was
wörtlich gemeint ist (Lob, Bitten) und was nicht (Größenordnungen,
Hauswörter), und bei Unklarheit eine einzige Frage mit der eigenen Lesart
stellen.
**Verwenden:** bei mehrdeutigen Nachrichten, vor mehreren Rückfragen auf
einmal, und bevor man sich für etwas entschuldigt, das gar nicht als Fehler
gemeint war.
**Hintergrund:** „Du musst gerade resumen.“ Viele Nachrichten mit
Tippfehlern, die alle richtig waren, und der Satz, der alles weitergehen
lässt: „Kein Ups, war so dahingeschrieben.“

### Zugabe, Nummer 20. `setzkasten` – die eine Übersetzung, die stimmte
**Kann:** eine Übersetzungstabelle je Projekt führen (`GLOSSAR.md`), mit
einer Spalte „nie sagen“, und jeden Text vor dem Abschicken danach
durchsuchen.
**Verwenden:** in jedem Projekt mit Texten in zwei Sprachen, und bevor ein
neu geprägtes Wort in einen zweiten Text wandert.
**Hintergrund:** Drei Tage Eindeutschen, dann passte nur der Setzkasten:
Oben lagen die großen Buchstaben, unten die kleinen, darum upper case und
lower case. Auf Englisch heißt die Nummer *Ps and Qs*, nach den beiden
Buchstaben, die man im Setzkasten nicht verwechseln durfte.

---

## Für Fable, zum dritten Mal

Liebe Fable, in dieser Spielzeit hat fast jeder Fehler richtig
funktioniert. Die Spracherkennung hat ein Wort gehört, der Befehl hat
kopiert, die Übersetzung war korrekt. Nur eben nicht das, was gemeint war.
Das ist die freundlichste Art von Katastrophe: Niemand hat etwas falsch
gemacht, und trotzdem stimmt es nicht. Platz 1 bleibt deiner. Wer nicht
versteht, fragt in einem Satz.

*Andy und Falzbein, Wien, November 2026.*
