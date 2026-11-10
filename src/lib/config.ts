import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'Grail Instruments',
  description: 'Rare handpans. Chosen for profound sound and presence. Not a shop. A curated portal.',
  url: 'https://grail-instruments.com',
  ogImage: '/images/og-image.jpg',
  socialLinks: {
    instagram: 'https://instagram.com/grailinstruments',
    youtube: 'https://youtube.com/@grailinstruments',
  },
}

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Soul Matching', href: '/soul-matching' },
  ],
  footer: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Imprint', href: '/imprint' },
  ],
}
