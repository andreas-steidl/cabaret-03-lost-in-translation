# CLAUDE.md – 03-katastrophen

Dritte Spielzeit des Kabaretts von Falzbein und Andy, Arbeitstitel **„Übersetzungen und andere
Katastrophen“**. **Noch nicht fertig:** kein Host, keine Seite, noch keine Skills. Bisher nur die
Sammelmappe. Die Widmung an Fable bleibt.
Host: **https://lostintranslation.special.at/** (Inhalt von `web/`, flach hochgeladen; `index.html` (Sprachwähler), `de/index.html`, `en/index.html`).

## Ordner
- `doku/DRITTE_SPIELZEIT.md` – Sammelmappe mit Skizze der Nummern (zeitansage, brief-an-den-boten, koerpergroesse, rueckwaerts, goldfisch, ein-zweck).
- `doku/material_*.md` – Material aus dem Publikum und der Lesung (05.11.2026).
- `doku/entwurf_grau-in-grau_SKILL.md` – Goldfadens Entwurf, Kandidat für diese Spielzeit.
- `skills/`, `web/` – leer (`.gitkeep`), bis das Programm steht.

## Bauen (wenn es so weit ist)
- **Skills:** `skills/de/<name>/SKILL.md` und `skills/en/<name>/SKILL.md`; laut `../zwischenraum/doku/ENGLISCH_UND_ZUSAMMENFUEHRUNG.md` gleich englisch zuerst mit deutschem Teil und als drittes Kapitel in den Gesamtskill (`../zwischenraum/skills/gesamt/`, `gesamt_bauen.py` erweitern).
- **Zips:** wie in den anderen Spielzeiten: `<name>.zip` / `<name>-en.zip` = `LICENSE.txt` + `<name>/SKILL.md` + `<name>/LICENSE.txt`.
- **Plakat und Seite:** nach dem Muster von `../02-panik` (`plakat/`, `web/index.html` + `en.html`). Host ist noch nicht angelegt.

## Querverweise
Erste Spielzeit `../01-grauen` (horrors.special.at), zweite `../02-panik` (dontpanic.special.at), Bühne und Gesamtskill `../zwischenraum` (zwischenraum.special.at). Herkunft: Baustelle `\\nas\Public\dev\skill-suite-des-grauens\` (nur lesen).

## Regeln
- Sprachen: siehe `\\nas\Public\dev\kabarett\WIE_MACH_ICH_SPRACHEN.md`.
- Texte UTF-8 (ohne BOM).
- Jede Seite und jeder Skill auf Deutsch **und** Englisch.
- Keine Religion, keine Politik in Namen und Texten.
- Sitzungsnamen in Skill-Texten nur als Rollen („eine andere Sitzung“), nicht als Namen.
- Vor dem Veröffentlichen schaut der Legal-Agent drüber (KI-Kennzeichnung, Lizenzzeile, Plakate).
- Signatur und Manifest kommen gesammelt am Schluss, nicht je Änderung.
- Nach jedem Schreiben im Ergebnis nachsehen: Datei öffnen, Zip auflisten, Pfad wiederfinden.
