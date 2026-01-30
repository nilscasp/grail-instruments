import { MetadataRoute } from 'next'
import { instruments } from '@/data/instruments'
import { makers } from '@/data/makers'
import { journalPosts } from '@/data/journal'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grailinstruments.com'

  // Static pages
  const staticPages = [
    '',
    '/instruments',
    '/portal',
    '/curation',
    '/makers',
    '/journal',
    '/faq',
    '/about',
    '/apply',
    '/privacy',
    '/terms',
    '/imprint',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Instrument pages
  const instrumentPages = instruments.map((instrument) => ({
    url: `${baseUrl}/instruments/${instrument.slug}`,
    lastModified: new Date(instrument.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Maker pages
  const makerPages = makers.map((maker) => ({
    url: `${baseUrl}/makers/${maker.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Journal pages
  const journalPages = journalPosts.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...instrumentPages, ...makerPages, ...journalPages]
}
