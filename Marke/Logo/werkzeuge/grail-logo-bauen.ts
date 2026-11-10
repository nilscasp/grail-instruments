// Baut die SVG-Fassungen des Grail-Instruments-Logos nach Marke/Logo/aktuell/.
// Zeichen: konstruiert (grail-zeichen.js). Schriftzug „Grail / INSTRUMENTS“: Vektorpfade aus dem Original (Lookbook-SVG).
// Aufruf: bun Marke/Logo/werkzeuge/grail-logo-bauen.ts
import { GRAIL, zeichenInner } from "./grail-zeichen.js";

const dir = import.meta.dir;
const out = `${dir}/../aktuell`;
const original = await Bun.file(`${dir}/../original/grail-logo-original-lookbook.svg`).text();
const textPaths = [...original.matchAll(/<path class="cls-1" d="([^"]+)"\/>/g)].map(m => m[1]);
if (textPaths.length !== 16) throw new Error(`Erwartet 16 Schriftpfade, gefunden ${textPaths.length}`);

// Lage des Zeichens im Original (aus dem 2540-px-Bild gemessen, Bild liegt bei translate(19.38) scale(.09))
const CX = 19.38 + 1305.5 * 0.09, CY = 1206.5 * 0.09, R_AUSSEN = 1041.5 * 0.09;
const k = R_AUSSEN / (GRAIL.rc + GRAIL.swc / 2);
const f = (n: number) => +n.toFixed(3);

const FARBEN = { dunkel: "#1d1d1b", weiss: "#ffffff", gold: "#d4a574" } as const;

function logo(color: string) {
  const zeichen = `<g transform="translate(${f(CX)} ${f(CY)}) scale(${f(k)})">${zeichenInner(GRAIL, color)}</g>`;
  const schrift = `<g fill="${color}">${textPaths.map(d => `<path d="${d}"/>`).join("")}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.63 352.83"><title>Grail Instruments</title>${zeichen}${schrift}</svg>\n`;
}
function zeichen(color: string) {
  const H = GRAIL.rc + GRAIL.swc / 2 + 1;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(-H)} ${f(-H)} ${f(2 * H)} ${f(2 * H)}"><title>Grail Instruments</title>${zeichenInner(GRAIL, color)}</svg>\n`;
}

const files: Record<string, string> = {};
for (const [name, c] of Object.entries(FARBEN)) {
  files[`grail-logo-${name}.svg`] = logo(c);
  files[`grail-zeichen-${name}.svg`] = zeichen(c);
}
// currentColor-Fassungen: nehmen die Textfarbe der Seite an (inline in HTML einsetzen)
files["grail-logo-currentcolor.svg"] = logo("currentColor");
files["grail-zeichen-currentcolor.svg"] = zeichen("currentColor");

for (const [name, svg] of Object.entries(files)) {
  await Bun.write(`${out}/${name}`, svg);
  console.log(name.padEnd(34), svg.length, "Zeichen");
}
