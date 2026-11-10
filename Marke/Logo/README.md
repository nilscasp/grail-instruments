# Logo Grail Instruments

Das Zeichen ist **konstruiert**, nicht gezeichnet: eine Rosette als Stern {8/3}, also eine durchgehende Linie mit acht Schlaufen, deren Strangmitten den Innenkreis berühren. Dazu Mittelpunkt, ein Oval in jeder Schlaufe und der Außenkreis. Die Schlaufenform ist dieselbe wie im Logo der Handpan Schule des Lebens (`~/Code/handpan-schul-os/Marke/Logo`), dort sind es vier Rosetten.

Die Maße wurden am Original (Lookbook, 2540-px-Bild) gemessen und per Deckungsvergleich nachjustiert. Der Nachbau ist exakt symmetrisch; die kleinen Abweichungen zum Original sind Unregelmäßigkeiten der Handzeichnung. Der Schriftzug „Grail / INSTRUMENTS“ ist der Original-Vektor aus der Lookbook-Datei.

Farben: Tinte `#1d1d1b` (wie im Original), Weiß, Gold `#d4a574`.

## Ordner

| Ordner / Datei | Inhalt |
|---|---|
| `aktuell/` | `grail-logo-*.svg` (Zeichen + Schriftzug), `grail-zeichen-*.svg` (nur Zeichen), je in `dunkel`, `weiss`, `gold`, `currentcolor` (nimmt die Textfarbe der Seite an, für Inline-SVG). |
| `grail-gravur.html` | **Favorit (10.11.2026):** glatter, flacher Edelstahl mit Anlauffarben, genau der Farbverlauf aus dem Bild von Nils' Schwester (`aktuell/grail-stahl-farben.png`, Logo herausgerechnet), Körnung wie im Original gemessen (ca. 2 Tonwerte). Das Zeichen ist per Laser eingraviert und nimmt nur weg (außerhalb bleibt die Oberfläche unberührt): matter, dunkler Grund, in dem die Anlauffarbe durchscheint, harter Schlagschatten der oberen linken Kante in der Rille, feine scharfe Lichtlinie an der gegenüberliegenden Innenwand. Bewegung (Standard `?bewegung=flaechen`, 10.11.2026): der Verlauf ist in neun weiche Farbflächen zerlegt (`aktuell/grail-flaechen.json`: Orange, Weiß, Flieder, Karmin, Weinrot, Dunkel …, in Ruhe = das Bild der Schwester, 1,6 Tonwerte Abweichung). Jede Fläche zieht Schleifen auf eigener Bahn (zwei überlagerte Schwingungen, Perioden ca. 11–55 s), atmet ±8 % und dreht sich, und schiebt sich in die Nachbarn; die Übergänge bleiben fein. Flächen am Bildrand gleiten am Rand entlang statt hinaus; die kleine weiße Fläche bekommt in Bewegung Zusatzgewicht (`?weiss=.7`), sonst wird sie von den Nachbarn verdrängt. Gelernt: alle Flächen größer → Farben verwässern; Flächen kleiner → harte Übergänge. `?bewegung=gleiten` = frühere Fassung (der ganze Verlauf gleitet nur). Dazu ein breiter Glanz, das Kantenlicht wandert mit. Keine Wölbung, keine Mausreaktion. `?weite=1` (Ausschlag der Flächen; ab ca. 1,5 werden Übergänge härter), `?zeit=…` (springt an eine Stelle, zum Prüfen), `?tempo=…`, `?tiefe=…` (Schattenbreite), `?grund=…` (Helligkeit des Gravurgrunds, Standard .32), `?glanz=…`. |
| `aktuell/grail-stahl-farben.png` | Der reine Farbverlauf (256 px) aus dem Bild der Schwester, erzeugt mit `werkzeuge/farben-extrahieren.html`. |
| `aktuell/grail-flaechen.json` | Die neun Farbflächen (Mitte, Ausdehnung, Drehung, Farbe), erzeugt mit `werkzeuge/flaechen-anpassen.html` aus dem Farbverlauf. |
| `grail-stahl.html` | Zweite Fassung (Nils: wirkt wie ein Knick im Stahl, keine Wölbungen gewünscht): Hero als polierte, gespannte Stahlfläche. Die Farben sind eine Lichtumgebung, die sich in einer leicht gewölbten Handpan-Schale spiegelt (Ding in der Mitte des Zeichens, acht flache Tonfelder als Hauch). Die Umgebung dreht und wandert sehr langsam, die Spiegelungen gleiten als Bänder über die Wölbung. `?tempo=…`, `?felder=0` (nur Wölbung) bis `?felder=1` (deutliche Tonfelder), Standard `.2`. |
| `grail-fluid.html` | Erste Fassung (Nils: wirkt „wie Winde“): Hero mit langsam fließendem Farbhintergrund (WebGL) in den Farben des Grail-Bildes, keine Mausreaktion. Tempo per `?tempo=0.5` usw.; bei „Bewegung reduzieren“ steht das Bild. |
| `werkzeuge/grail-zeichen.js` | Generator des Zeichens (Browser und Bun). Maße in `GRAIL`. |
| `werkzeuge/grail-logo-bauen.ts` | Schreibt alle SVGs nach `aktuell/`: `bun Marke/Logo/werkzeuge/grail-logo-bauen.ts` |
| `werkzeuge/grail-vergleich.html` | Original, Nachbau und Differenzbild mit Reglern, Deckungsmaß und „Automatisch anpassen“. |
| `werkzeuge/vorschau-server.ts` | Lokaler Server (Port 4778), Vorschau „grail-logo“ in `~/Code/.claude/launch.json`. |
| `original/` | Original-Lookbook-SVG, das daraus gezogene 2540-px-Bild und das Farbbild der Schwester (`grail-farbbild-schwester.webp`). |
| `werkzeuge/farben-extrahieren.html` | Zieht den Farbverlauf ohne Logo aus dem Farbbild und misst die Körnung; speichert über den Vorschau-Server (`PUT /speichern/…`). |
