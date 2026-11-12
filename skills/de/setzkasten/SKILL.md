---
name: setzkasten
description: Spickzettel für Projekte in zwei Sprachen - eine Übersetzungstabelle je Projekt (GLOSSAR.md), damit jeder Begriff einmal übersetzt und danach nachgeschlagen wird, mit einer Spalte „nie sagen“ für Übersetzungen, die schon einmal schiefgingen. Lies ihn, wenn ein Projekt Texte auf Deutsch und Englisch hat, wenn derselbe Begriff in zwei Texten verschieden übersetzt ist, wenn eine Sitzung ein neues Wort erfindet, oder bevor du eine zweisprachige Seite oder einen Skill mit Übersetzungstabelle schreibst. Die Zugabe von „Übersetzungen und andere Katastrophen“, dem dritten Programm. Optional, kein Pflichtprogramm.
---

# Setzkasten

*Drei Tage lang wird ein Wort eingedeutscht, zurückgenommen und wieder
eingedeutscht. Am Ende passt nur eines: Setzkasten. Im Kasten des Setzers
lagen die großen Buchstaben oben und die kleinen unten, darum heißen sie
upper case und lower case. Die eine Übersetzung, die stimmte, war schon
ein paar hundert Jahre alt.*

## Eine Tabelle je Projekt

Eine Datei `GLOSSAR.md` im Wurzelordner, eine Zeile je Begriff:

| im Code | deutsch für Menschen | englisch für die Seite | nie sagen |
|---|---|---|---|
| request body | Inhalt der Anfrage | request body | Körpergröße |
| mock | Testbetrieb, vorgetäuscht | mock | Spott |
| merge | zusammenführen | merge | vermatschen |
| thread | Gesprächsfaden | thread | Faden allein |

## Regeln

- **Jedes Wort wird einmal übersetzt**, dann nachgeschlagen. Wer übersetzen
  will, sucht zuerst in der Tabelle.
- **Neue Prägungen** kommen in die Tabelle, bevor sie in einen zweiten Text
  wandern.
- **Zweisprachige Seiten und Skills** nehmen ihre Übersetzungstabelle aus
  derselben Datei, damit Seite und Skill nicht zwei Sprachen sprechen.
- **„Nie sagen“** ist die wichtigste Spalte. Sie ist das Gedächtnis des
  Projekts für die Katastrophen, die schon passiert sind.

## Die eine Prüfung

Vor dem Abschicken eines Textes die Spalte „nie sagen“ durchsuchen
(`Select-String -SimpleMatch` oder `grep -iF`). Null Treffer.

*Die Zugabe. Geschrieben von Falzbein, November 2026, nach drei Tagen
Eindeutschen.*
