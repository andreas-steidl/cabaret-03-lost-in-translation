/* Die Sprachdrehscheibe der dritten Spielzeit.
   Die untere Scheibe dreht sich, die obere mit dem Fenster steht.
   Daten (NUMMERN, SPRACHE_INNEN, ANSAGE, RAND_NR) kommen aus der Seite. */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const ANZAHL = NUMMERN.length;
  const SCHRITT = 360 / ANZAHL;
  const MITTE = 200;
  const ruhig = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const griff = document.getElementById("griff");
  const svg = document.getElementById("scheibe");
  const unten = document.getElementById("unten");
  const sektoren = document.getElementById("sektoren");
  const mitte = document.getElementById("mitte");
  const unterzeile = document.getElementById("unterzeile");
  const zur = document.getElementById("zur");
  const ansage = document.getElementById("ansage");
  if (!griff || !svg || !unten) return;

  function knoten(name, merkmale, eltern) {
    const e = document.createElementNS(NS, name);
    for (const schluessel in merkmale) e.setAttribute(schluessel, merkmale[schluessel]);
    if (eltern) eltern.appendChild(e);
    return e;
  }
  function punkt(radius, grad) {
    const w = grad * Math.PI / 180;
    return [(MITTE + radius * Math.sin(w)).toFixed(2), (MITTE - radius * Math.cos(w)).toFixed(2)];
  }
  function bogen(radius, von, bis) {
    const a = punkt(radius, von), b = punkt(radius, bis);
    return "M " + a[0] + " " + a[1] + " A " + radius + " " + radius + " 0 0 1 " + b[0] + " " + b[1];
  }

  /* Die untere Scheibe bedrucken */
  const randNamen = [], woerter = [];
  const defs = svg.querySelector("defs");
  NUMMERN.forEach(function (nummer, i) {
    const lage = i * SCHRITT;
    knoten("path", { id: "rand-name-" + i, d: bogen(165, lage - SCHRITT / 2 + 1, lage + SCHRITT / 2 - 1) }, defs);
    knoten("path", { id: "rand-nr-" + i, d: bogen(180, lage - SCHRITT / 2 + 1, lage + SCHRITT / 2 - 1) }, defs);
    const grenzeInnen = punkt(150, lage + SCHRITT / 2), grenzeAussen = punkt(194, lage + SCHRITT / 2);
    knoten("line", { x1: grenzeInnen[0], y1: grenzeInnen[1], x2: grenzeAussen[0], y2: grenzeAussen[1], stroke: "#b8a682", "stroke-width": ".8" }, sektoren);

    const nr = knoten("text", { class: "rand-nr" }, sektoren);
    const nrPfad = knoten("textPath", { href: "#rand-nr-" + i, startOffset: "50%", "text-anchor": "middle" }, nr);
    nrPfad.textContent = RAND_NR(nummer);

    const name = knoten("text", { class: "rand-name", "data-i": String(i) }, sektoren);
    const namePfad = knoten("textPath", { href: "#rand-name-" + i, startOffset: "50%", "text-anchor": "middle" }, name);
    namePfad.textContent = nummer.aussen;
    randNamen.push(name);

    const wort = knoten("text", { class: "wort", x: "200", y: "101", "text-anchor": "middle", transform: "rotate(" + lage + " 200 200)", lang: SPRACHE_INNEN }, sektoren);
    wort.textContent = nummer.innen;
    woerter.push(wort);
  });

  /* Schriftgrößen anpassen, sobald die Schriften da sind */
  function einpassen() {
    woerter.forEach(function (wort) {
      let groesse = 26;
      wort.style.fontSize = groesse + "px";
      while (wort.getComputedTextLength() > 166 && groesse > 12) { groesse -= 1; wort.style.fontSize = groesse + "px"; }
    });
    randNamen.forEach(function (name) {
      let groesse = 12.5;
      name.style.fontSize = groesse + "px";
      while (name.getComputedTextLength() > 136 && groesse > 8) { groesse -= .5; name.style.fontSize = groesse + "px"; }
    });
    zeigeText(aktuell);
  }

  /* Untertitel im Fenster umbrechen: das Fenster wird nach unten schmaler */
  const BREITEN = [160, 136, 112];
  function umbrechen(satz) {
    while (unterzeile.firstChild) unterzeile.removeChild(unterzeile.firstChild);
    let zeile = 0;
    let stueck = knoten("tspan", { x: "200", y: "121" }, unterzeile);
    satz.split(" ").forEach(function (teil) {
      const vorher = stueck.textContent;
      stueck.textContent = vorher ? vorher + " " + teil : teil;
      const grenze = BREITEN[Math.min(zeile, BREITEN.length - 1)];
      if (vorher && stueck.getComputedTextLength() > grenze) {
        stueck.textContent = vorher;
        zeile += 1;
        stueck = knoten("tspan", { x: "200", y: String(121 + zeile * 13) }, unterzeile);
        stueck.textContent = teil;
      }
    });
  }

  /* Drehen und Einrasten */
  let winkel = 0, aktuell = 0, wartet = null;
  function rest(zahl) { return ((zahl % ANZAHL) + ANZAHL) % ANZAHL; }
  function stufe() { return Math.round(-winkel / SCHRITT); }
  function drehe(neu, sanft) {
    winkel = neu;
    unten.classList.toggle("sanft", sanft && !ruhig);
    unten.style.transform = "rotate(" + winkel + "deg)";
  }
  function zeigeText(i) {
    const nummer = NUMMERN[i];
    umbrechen(nummer.unter);
    zur.setAttribute("href", "#" + nummer.ziel);
  }
  function zeige(i, sofort) {
    aktuell = i;
    const nummer = NUMMERN[i];
    woerter.forEach(function (wort, k) { wort.style.opacity = ""; wort.classList.toggle("an", k === i); });
    randNamen.forEach(function (name, k) { name.classList.toggle("an", k === i); });
    griff.setAttribute("aria-valuenow", String(i + 1));
    griff.setAttribute("aria-valuetext", nummer.aussen + ": " + nummer.innen);
    ansage.textContent = ANSAGE(nummer);
    clearTimeout(wartet);
    if (sofort || ruhig) { zeigeText(i); mitte.classList.add("da"); return; }
    mitte.classList.remove("da");
    wartet = setTimeout(function () { zeigeText(i); mitte.classList.add("da"); }, 420);
  }
  function schritt(richtung) {
    drehe(-(stufe() + richtung) * SCHRITT, true);
    zeige(rest(stufe()));
  }
  function dreheZu(ziel) {
    let abstand = ziel - rest(stufe());
    if (abstand > ANZAHL / 2) abstand -= ANZAHL;
    if (abstand < -ANZAHL / 2) abstand += ANZAHL;
    if (abstand !== 0) schritt(abstand);
  }
  function springe() {
    const ziel = document.getElementById(NUMMERN[aktuell].ziel);
    if (!ziel) return;
    if (location.hash === "#" + NUMMERN[aktuell].ziel) ziel.scrollIntoView({ behavior: ruhig ? "auto" : "smooth", block: "start" });
    else location.hash = NUMMERN[aktuell].ziel;
    ziel.setAttribute("tabindex", "-1");
    ziel.focus({ preventScroll: true });
  }

  /* Ziehen mit Maus oder Finger */
  let zug = null;
  function richtungZu(ereignis) {
    return Math.atan2(ereignis.clientY - zug.my, ereignis.clientX - zug.mx) * 180 / Math.PI;
  }
  function woerterNachWinkel() {
    woerter.forEach(function (wort, k) {
      let lage = (k * SCHRITT + winkel) % 360;
      if (lage > 180) lage -= 360;
      if (lage < -180) lage += 360;
      wort.style.opacity = String(Math.max(0, 1 - Math.abs(lage) / (SCHRITT * 0.7)));
    });
    const naechste = rest(stufe());
    randNamen.forEach(function (name, k) { name.classList.toggle("an", k === naechste); });
  }
  griff.addEventListener("pointerdown", function (e) {
    if (e.button !== undefined && e.button > 0) return;
    if (e.target.closest && e.target.closest("a")) return;
    const r = svg.getBoundingClientRect();
    zug = { mx: r.left + r.width / 2, my: r.top + r.height / 2, letzt: 0, bewegt: 0, ziel: e.target };
    zug.letzt = richtungZu(e);
    try { griff.setPointerCapture(e.pointerId); } catch (fehler) { /* manche Geräte erlauben es nicht */ }
    griff.classList.add("zieht");
    clearTimeout(wartet);
    mitte.classList.remove("da");
    drehe(winkel, false);
  });
  griff.addEventListener("pointermove", function (e) {
    if (!zug) return;
    const jetzt = richtungZu(e);
    let unterschied = jetzt - zug.letzt;
    if (unterschied > 180) unterschied -= 360;
    if (unterschied < -180) unterschied += 360;
    zug.letzt = jetzt;
    zug.bewegt += Math.abs(unterschied);
    drehe(winkel + unterschied, false);
    woerterNachWinkel();
  });
  function loslassen() {
    if (!zug) return;
    const angetippt = zug.bewegt < 3 && zug.ziel && zug.ziel.closest ? zug.ziel.closest("[data-i]") : null;
    zug = null;
    griff.classList.remove("zieht");
    drehe(-stufe() * SCHRITT, true);
    zeige(rest(stufe()));
    if (angetippt) dreheZu(Number(angetippt.getAttribute("data-i")));
  }
  griff.addEventListener("pointerup", loslassen);
  griff.addEventListener("pointercancel", loslassen);

  /* Tastatur und Knöpfe */
  griff.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); schritt(1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); schritt(-1); }
    else if (e.key === "Home") { e.preventDefault(); dreheZu(0); }
    else if (e.key === "End") { e.preventDefault(); dreheZu(ANZAHL - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); springe(); }
  });
  document.getElementById("zurueck").addEventListener("click", function () { schritt(-1); });
  document.getElementById("vor").addEventListener("click", function () { schritt(1); });
  zur.addEventListener("click", function (e) { e.preventDefault(); springe(); });

  drehe(0, false);
  zeige(0, true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(einpassen); else einpassen();
})();
