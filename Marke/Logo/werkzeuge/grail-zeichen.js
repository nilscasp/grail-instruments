// Grail-Instruments-Zeichen, konstruiert statt gezeichnet.
// Eine Rosette = Stern {8/3}: eine durchgehende Linie mit acht Schlaufen, jede Strangmitte tangiert den Innenkreis.
// Dazu Innenkreis, Mittelpunkt, ein Oval in jeder Schlaufe und der Außenkreis.
// Gleiche Schlaufen-Geometrie wie das Logo der Handpan Schule des Lebens (handpan-schul-os/Marke/Logo),
// dort sind es vier Rosetten, hier ist es eine.
// Läuft im Browser und in Bun (keine Abhängigkeiten). Einheiten: Spitze der Schlaufe bei P.tip, Mitte bei 0,0.

const D = Math.PI / 180;
const f = n => Math.round(n * 1000) / 1000;
const rot = ([x, y], a) => { const c = Math.cos(a * D), s = Math.sin(a * D); return [f(x * c - y * s), f(x * s + y * c)]; };
const flip = p => [p[0], -p[1]];
const gcd = (a, b) => b ? gcd(b, a % b) : a;

// Maße am Original (Lookbook, 2540 px) gemessen
export const GRAIL = {
  n: 8, k: 3,       // Stern {8/3}
  tip: 59.46,       // Spitze der Schlaufe
  neck: 27.86,      // Kreuzung, an der die Schlaufe beginnt
  width: 0.99,      // Bauchbreite der Schlaufe
  ri: 11.73,        // Innenkreis
  dot: 4.34,        // Mittelpunkt
  oval: 1.14,       // Größe der Ovale
  ovalPos: .683,     // Lage des Ovals zwischen Kreuzung und Spitze
  rc: 62.52,        // Außenkreis
  sw: 2.0,          // Strichstärke Rosette und Innenkreis
  swc: 1.5,         // Strichstärke Außenkreis
  turn: -90,        // erste Schlaufe zeigt nach oben
};

// Bauch der Schlaufe (aus dem Original gemessen), abgebildet auf [Kreuzung, Spitze]
const BULB = [[[28.32,0],[33.37,-3.97],[39.94,-5.81],[45.27,-5.81]],[[45.27,-5.81],[56.45,-5.81],[59.75,-1.03],[59.75,0]]];

function half(p, tip) {
  const th = 180 * p.k / p.n * D;
  const M = [p.ri * Math.cos(th), p.ri * Math.sin(th)];
  const s = (tip - p.neck) / 31.43;
  const bulb = BULB.map(c => c.map(([x, y]) => [p.neck + (x - 28.32) * s, y * p.width]));
  const N = bulb[0][0];
  let dn = [bulb[0][1][0] - N[0], bulb[0][1][1] - N[1]];
  const l = Math.hypot(dn[0], dn[1]); dn = [dn[0] / l, dn[1] / l];
  const dm = [Math.sin(th), -Math.cos(th)];
  const L = Math.hypot(N[0] - M[0], N[1] - M[1]) / 26.2;
  return [[M, [M[0] + 5.05 * L * dm[0], M[1] + 5.05 * L * dm[1]], [N[0] - 10.18 * L * dn[0], N[1] - 10.18 * L * dn[1]], N], ...bulb];
}
const mirrorBack = cs => cs.slice().reverse().map(c => c.slice().reverse().map(flip));

export function rosetteD(p = GRAIL, tipAt = () => p.tip) {
  const g = gcd(p.n, p.k), step = 360 * p.k / p.n, per = p.n / g;
  let d = '';
  for (let j = 0; j < g; j++) {
    for (let i = 0; i < per; i++) {
      const a = j * 360 / p.n - step * i;
      const h = half(p, tipAt(a));
      [...h, ...mirrorBack(h)].forEach((c, ci) => {
        const q = c.map(pt => rot(pt, a));
        if (i === 0 && ci === 0) d += `M${q[0]}`;
        d += `C${q[1]} ${q[2]} ${q[3]}`;
      });
    }
    d += 'Z';
  }
  return d;
}

// Nur das Zeichen als <g>-Inhalt, Mitte bei 0,0. color: Linienfarbe (Standard currentColor).
export function zeichenInner(p = GRAIL, color = 'currentColor') {
  const ovals = Array.from({ length: p.n }, (_, i) => {
    const a = 360 / p.n * i, s = (p.tip - p.neck) / 31.43;
    return `<ellipse transform="rotate(${f(a)}) translate(${f(p.neck + (p.tip - p.neck) * p.ovalPos)} 0)" rx="${f(5.05 * s * p.oval)}" ry="${f(2.02 * p.width * p.oval * 1.12)}"/>`;
  }).join('');
  return `<g transform="rotate(${p.turn})">` +
    `<circle r="${p.rc}" fill="none" stroke="${color}" stroke-width="${p.swc}"/>` +
    `<path d="${rosetteD(p)}" fill="none" stroke="${color}" stroke-width="${p.sw}" stroke-linejoin="round" stroke-linecap="round"/>` +
    `<circle r="${p.ri}" fill="none" stroke="${color}" stroke-width="${p.sw}"/>` +
    `<circle r="${p.dot}" fill="${color}"/>` +
    `<g fill="${color}">${ovals}</g></g>`;
}

export function zeichenSVG(p = GRAIL, color = 'currentColor', pad = 2) {
  const H = p.rc + p.swc / 2 + pad;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(-H)} ${f(-H)} ${f(2 * H)} ${f(2 * H)}"><title>Grail Instruments</title>${zeichenInner(p, color)}</svg>`;
}
