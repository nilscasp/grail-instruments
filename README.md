# Grail Instruments

Die Website von Grail Instruments unter [grail-instruments.com](https://grail-instruments.com): Handpans, ausgewählt nach Klang und Präsenz.

Die Seite ist ein statischer Export (Next.js 14, TypeScript, Tailwind CSS, Framer Motion). Es gibt keinen Server, keine `/api`-Routen und keine Datenbank.

## Was heute online ist

| Seite | Pfad | Inhalt |
|---|---|---|
| Startseite | `/` | Das Tor: Klick auf „enter“, dann Anmeldung zum Newsletter (Brevo). Unten ein stiller Link zur Beratung. |
| Soul Matching | `/soul-matching` | Die Beratung, auf Deutsch und Englisch, mit Buchung über TidyCal. |
| Impressum | `/imprint` | |
| Datenschutz | `/privacy` | |

Dazu `sitemap.xml` und `robots.txt`.

## Bauen und Ansehen

Voraussetzung: [Bun](https://bun.sh) oder Node.js 20.

```bash
bun install      # oder: npm install
bun run dev      # Entwicklung unter http://localhost:3000
bun run build    # statischer Export nach out/
```

Die Sperrdatei ist `package-lock.json` (die Auslieferung nutzt `npm ci`).

## Auslieferung

Jeder Push auf `main` baut die Seite über GitHub Actions (`.github/workflows/deploy.yml`) und veröffentlicht den Ordner `out/` auf GitHub Pages. Die Domain steht in `public/CNAME`.

## Aufbau

```
public/          Bilder, Ton, CNAME, robots.txt
src/app/         Seiten (App Router) und sitemap.ts
src/components/  Bausteine (Button, Section, NewsletterForm, Header, Footer)
src/lib/         Konfiguration (Name, Domain, Navigation), Typen, Hilfsfunktionen
```

Name, Domain und Beschreibung der Seite stehen an einer Stelle: `src/lib/config.ts`.

## Farben und Schrift

| Name | Wert | Verwendung |
|---|---|---|
| `background` | `#0B0D14` | Hintergrund |
| `surface` | `#111625` | Flächen |
| `foreground` | `#EDE7DD` | Text |
| `muted` | `#B8B0A4` | Nebentext |
| `accent` | `#C8A96A` | Gold |

Überschriften: Cormorant Garamond. Fließtext: Inter.
