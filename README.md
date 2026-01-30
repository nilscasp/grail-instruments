# Grail Instruments

A premium, curated portal for exceptional handpans. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![Grail Instruments](public/images/og-image.jpg)

## Overview

Grail Instruments is not a traditional e-commerce site—it's a curated portal where rare, hand-selected handpans are matched with serious players. The design emphasizes quality, presence, and a meditative experience that reflects the nature of the instruments themselves.

### Key Features

- **Curated Instrument Listings**: Each instrument includes detailed listening notes, specifications, and professional imagery
- **Portal Drop System**: Instruments become available through periodic "drops" rather than always-on inventory
- **Application-Based Purchasing**: Players apply for instruments; we review and match based on fit
- **Maker Profiles**: In-depth profiles of the craftspeople behind the instruments
- **Journal**: Guides, reflections, and educational content about handpans
- **Responsive Design**: Premium experience across all devices
- **SEO Optimized**: Full metadata, Open Graph, and JSON-LD structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (serif) + Inter (sans)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/grail-instruments.git
   cd grail-instruments
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
grail-instruments/
├── public/
│   ├── images/           # Static images
│   │   ├── instruments/  # Instrument photos
│   │   ├── makers/       # Maker profile images
│   │   └── journal/      # Blog post images
│   └── audio/            # Sound recordings (mp3)
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── api/          # API routes
│   │   ├── instruments/  # Instrument pages
│   │   ├── makers/       # Maker pages
│   │   ├── journal/      # Journal pages
│   │   └── ...           # Other pages
│   ├── components/       # React components
│   ├── data/             # Static data (instruments, makers, etc.)
│   └── lib/              # Utilities, types, config
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Content Management

### Adding Instruments

Edit `src/data/instruments.ts`:

```typescript
{
  slug: 'unique-slug',
  displayTitle: 'Display Name (optional)',
  maker: { name: 'Maker Name', slug: 'maker-slug' },
  scaleName: 'Kurd 9',
  key: 'D',
  notes: ['D3', 'A3', 'Bb3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
  price: 2800,
  currency: 'EUR',
  status: 'available', // 'available' | 'reserved' | 'sold'
  featured: true,
  year: 2024,
  location: 'Germany',
  images: [
    { src: '/images/instruments/image-1.jpg', alt: 'Description' },
  ],
  audio: [
    { src: '/audio/sample.mp3', label: 'Full demonstration' },
  ],
  tags: ['warm', 'deep', 'meditative'],
  specs: {
    steelType: 'DC04 Nitrided',
    finish: 'Ember',
    diameter: '53 cm',
    weight: '4.2 kg',
    included: ['Hardcase', 'Microfiber cloth'],
  },
  listeningNotes: 'Your poetic description...',
  soundDescription: 'Technical sound characteristics...',
  curation: {
    tuning: true,
    balance: true,
    clarity: true,
    sustain: true,
    craftsmanship: true,
  },
  createdAt: '2024-01-15',
}
```

### Adding Makers

Edit `src/data/makers.ts`:

```typescript
{
  slug: 'unique-slug',
  name: 'Maker Name',
  country: 'Country',
  region: 'City/Region',
  descriptionShort: 'One-line description',
  descriptionLong: 'Full paragraph description...',
  philosophy: 'Optional quote from the maker',
  typicalScales: ['Kurd', 'Celtic Minor'],
  links: [
    { type: 'website', url: 'https://example.com' },
    { type: 'instagram', url: 'https://instagram.com/example' },
  ],
  image: '/images/makers/image.jpg',
  featured: true,
}
```

### Adding Journal Posts

Edit `src/data/journal.ts`:

```typescript
{
  slug: 'unique-slug',
  title: 'Post Title',
  excerpt: 'Short description for listings',
  content: `
    Your markdown-like content here...
    
    ## Section Heading
    
    Paragraph text...
  `,
  coverImage: '/images/journal/cover.jpg',
  date: '2024-02-15',
  author: 'Author Name',
  tags: ['guides', 'listening'],
  featured: true,
}
```

### Configuring Portal Status

Edit `src/lib/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  // ...
  portalStatus: 'open', // 'open' | 'closed'
  nextDropDate: '2024-04-01', // Optional countdown date
  // ...
}
```

## Styling

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `background` | `#0B0D14` | Main background |
| `surface` | `#111625` | Cards, elevated surfaces |
| `foreground` | `#EDE7DD` | Primary text |
| `muted` | `#B8B0A4` | Secondary text |
| `accent` | `#C8A96A` | Gold highlights, buttons |
| `divider` | `rgba(255,255,255,0.08)` | Borders, separators |

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

## API Routes

### POST `/api/apply`

Handles instrument applications.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "whatsapp": "string (optional)",
  "country": "string",
  "city": "string (optional)",
  "experience": "beginner|intermediate|advanced|professional",
  "seeking": "string",
  "preferredScales": "string (optional)",
  "budget": "string",
  "timeframe": "string",
  "instrumentSlug": "string (optional)",
  "privacyAccepted": true
}
```

### POST `/api/newsletter`

Handles newsletter subscriptions.

**Body:**
```json
{
  "email": "string"
}
```

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm i -g vercel
vercel
```

For other platforms, ensure you:
1. Set `NODE_ENV=production`
2. Run `npm run build`
3. Serve the `.next` folder

## SEO

The site includes:
- Dynamic metadata per page
- Open Graph tags
- Twitter Cards
- JSON-LD structured data (Organization, WebSite)
- Auto-generated sitemap
- robots.txt

## Performance

Optimizations include:
- Image optimization via `next/image`
- Font optimization via Google Fonts
- Code splitting via Next.js App Router
- Minimal JavaScript bundle
- CSS-in-JS via Tailwind (no runtime)

## Contributing

This is a custom project for Grail Instruments. For inquiries, contact the maintainer.

## License

© 2024 Grail Instruments. All rights reserved.

---

*Made with care. Guided by listening.*
