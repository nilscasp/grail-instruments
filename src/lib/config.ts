import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'Grail Instruments',
  description: 'Rare handpans. Chosen for profound sound and presence. Not a shop. A curated portal.',
  url: 'https://grailinstruments.com',
  ogImage: '/images/og-image.jpg',
  portalStatus: 'open',
  nextDropDate: '2026-04-01',
  socialLinks: {
    instagram: 'https://instagram.com/grailinstruments',
    youtube: 'https://youtube.com/@grailinstruments',
  },
}

export const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Instruments', href: '/instruments' },
    { name: 'Portal', href: '/portal' },
    { name: 'Curation', href: '/curation' },
    { name: 'Makers', href: '/makers' },
    { name: 'Journal', href: '/journal' },
  ],
  cta: { name: 'Apply', href: '/apply' },
  footer: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Imprint', href: '/imprint' },
  ],
}

export const budgetRanges = [
  { value: 'under-1500', label: 'Under €1,500' },
  { value: '1500-2500', label: '€1,500 - €2,500' },
  { value: '2500-3500', label: '€2,500 - €3,500' },
  { value: '3500-5000', label: '€3,500 - €5,000' },
  { value: 'over-5000', label: 'Over €5,000' },
  { value: 'flexible', label: 'Flexible / Open' },
]

export const timeframes = [
  { value: 'immediately', label: 'As soon as possible' },
  { value: '1-3-months', label: 'Within 1-3 months' },
  { value: '3-6-months', label: 'Within 3-6 months' },
  { value: '6-plus-months', label: '6+ months / No rush' },
  { value: 'just-exploring', label: 'Just exploring' },
]

export const experienceLevels = [
  { value: 'beginner', label: 'Beginner - New to handpan' },
  { value: 'intermediate', label: 'Intermediate - Some experience' },
  { value: 'advanced', label: 'Advanced - Experienced player' },
  { value: 'professional', label: 'Professional - Performing/Teaching' },
]
