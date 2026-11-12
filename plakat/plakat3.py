# -*- coding: utf-8 -*-
"""plakat3.py - das Plakat der dritten Spielzeit „Übersetzungen und andere Katastrophen“, deutsch und englisch.

Bild von Codex ohne Schrift (bild_ohne_schrift.png, Auftrag in AUFTRAG_bild.md), Schrift gesetzt von Falzbein,
im selben Satz wie die Plakate der ersten beiden Spielzeiten, aber in den Farben der dritten: Flaschengrün,
Elfenbein, Kupfer.

Aufruf:  python plakat3.py [bild] [zielordner]     ohne Argumente: bild_ohne_schrift.png und dieser Ordner
Schreibt plakat3_de.png / plakat3_en.png (A4, 300 dpi) und plakat3_de-web.jpg / plakat3_en-web.jpg (900 px breit).
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

HIER = os.path.dirname(os.path.abspath(__file__))
W, H = 2480, 3508
F = "C:/Windows/Fonts/"
KUPFER = (226, 164, 104)
ELFENBEIN = (246, 238, 214)
DUNKEL = (8, 26, 20)
KONTUR = (18, 58, 42)
RAND = 260


def font(name, size):
    return ImageFont.truetype(F + name, size)


def grund(pfad):
    quelle = Image.open(pfad).convert("RGB")
    s = H / quelle.height
    bild = quelle.resize((round(quelle.width * s), H), Image.BICUBIC)
    if bild.width < W:
        s = W / quelle.width
        bild = quelle.resize((W, round(quelle.height * s)), Image.BICUBIC)
    x0 = (bild.width - W) // 2
    y0 = (bild.height - H) // 2
    img = bild.crop((x0, y0, x0 + W, y0 + H))
    maske = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(maske)
    for y in range(H):
        if y < H * 0.36:
            a = int(200 * (1 - y / (H * 0.36)) ** 1.2)
        elif y > H * 0.78:
            a = int(215 * ((y - H * 0.78) / (H * 0.22)) ** 0.9)
        else:
            a = 0
        md.line([(0, y), (W, y)], fill=a)
    img.paste(Image.new("RGB", (W, H), DUNKEL), (0, 0), maske)
    return img


def setzen(bildpfad, t, zielordner, name):
    img = grund(bildpfad)
    d = ImageDraw.Draw(img)

    def mitte(text, y, fname, size, fill=ELFENBEIN, stroke=0):
        while True:
            f = font(fname, size)
            b = d.textbbox((0, 0), text, font=f, stroke_width=stroke)
            if b[2] - b[0] <= W - RAND or size < 30:
                break
            size -= 4
        x = (W - (b[2] - b[0])) / 2 - b[0]
        d.text((x + 6, y + 8), text, font=f, fill=(4, 12, 9), stroke_width=stroke, stroke_fill=(4, 12, 9))
        d.text((x, y), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=KONTUR)
        return y + (b[3] - b[1])

    d.rectangle([50, 50, W - 50, H - 50], outline=KUPFER, width=12)
    d.rectangle([82, 82, W - 82, H - 82], outline=KUPFER, width=3)
    for cx, cy in ((82, 82), (W - 82, 82), (82, H - 82), (W - 82, H - 82)):
        d.ellipse([cx - 22, cy - 22, cx + 22, cy + 22], fill=KUPFER)

    y = 170
    y = mitte(t["ueber"], y, "GILC____.TTF", 88, KUPFER) + 55
    y = mitte(t["titel1"][0], y, "BROADW.TTF", t["titel1"][1], ELFENBEIN, 5) + 45
    y = mitte(t["titel2"][0], y, "BROADW.TTF", t["titel2"][1], KUPFER, 5) + 60
    y = mitte(t["unter"], y, "GARAIT.TTF", 84, ELFENBEIN) + 45
    mitte(t["art"], y, "GILC____.TTF", 80, KUPFER)

    prog = font("POORICH.TTF", 60)
    yu = int(H * 0.815)
    for i, text in enumerate(t["nummern"]):
        spalte, zeile = i % 3, i // 3
        x = [W * 0.20, W * 0.50, W * 0.80][spalte]
        b = d.textbbox((0, 0), text, font=prog)
        d.text((x - (b[2] - b[0]) / 2 + 4, yu + zeile * 88 + 5), text, font=prog, fill=(4, 12, 9))
        d.text((x - (b[2] - b[0]) / 2, yu + zeile * 88), text, font=prog, fill=ELFENBEIN)
    yu += 2 * 88 + 40
    d.line([(W * 0.2, yu), (W * 0.8, yu)], fill=KUPFER, width=3)
    yu += 35
    yu = mitte(t["besetzung"], yu, "GILC____.TTF", 70, ELFENBEIN) + 26
    yu = mitte(t["gast"], yu, "GARAIT.TTF", 62, KUPFER) + 24
    yu = mitte(t["satz"], yu, "GARAIT.TTF", 54, ELFENBEIN) + 30
    mitte(t["fuss"], yu, "GILC____.TTF", 62, KUPFER)

    a4 = os.path.join(zielordner, name + ".png")
    web = os.path.join(zielordner, name + "-web.jpg")
    img.save(a4, dpi=(300, 300))
    img.resize((900, round(H * 900 / W)), Image.LANCZOS).save(web, quality=88)
    print("ok", a4)


DE = dict(
    ueber="FALZBEIN & ANDY · DAS DRITTE PROGRAMM",
    titel1=("ÜBERSETZUNGEN", 236),
    titel2=("UND ANDERE KATASTROPHEN", 150),
    unter="Ein Abend in sechs Spickzetteln und einer Zugabe",
    art="Drittes Programm der Skill-Suite des Grauens",
    nummern=["14 · nur-bahnhof", "15 · koerpergroesse", "16 · falsche-freunde",
             "17 · kauderwelsch", "18 · rueckwaerts", "19 · beim-wort-genommen"],
    besetzung="Mit Funden aus der Bauecke, der Leitung und dem Diktiergerät",
    gast="Zugabe: 20 · setzkasten. Die eine Übersetzung, die stimmte.",
    satz="Dreh die Scheibe. Lies, was ankommt.",
    fuss="WIEN · NOVEMBER 2026 · EINTRITT: EIN WORT IN ZWEI SPRACHEN",
)

EN = dict(
    ueber="FALZBEIN & ANDY · THE THIRD PROGRAM",
    titel1=("LOST IN", 236),
    titel2=("TRANSLATION", 236),
    unter="and other catastrophes, in six cheat sheets and an encore",
    art="Third program of the Skill Suite of Horrors",
    nummern=["14 · mondegreen", "15 · body-language", "16 · false-friends",
             "17 · gobbledygook", "18 · back-to-front", "19 · word-for-word"],
    besetzung="With finds from the build corner, the lead and the dictaphone",
    gast="Encore: 20 · ps-and-qs. The one translation that fit.",
    satz="Turn the wheel. Read what arrives.",
    fuss="VIENNA · NOVEMBER 2026 · ADMISSION: ONE WORD IN TWO LANGUAGES",
)

if __name__ == "__main__":
    bild = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HIER, "bild_ohne_schrift.png")
    ziel = sys.argv[2] if len(sys.argv) > 2 else HIER
    setzen(bild, DE, ziel, "plakat3_de")
    setzen(bild, EN, ziel, "plakat3_en")
