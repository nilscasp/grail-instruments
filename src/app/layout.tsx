import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/lib/config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Rare Handpans, Chosen with Care`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'handpan',
    'handpans',
    'pantam',
    'hang drum',
    'steel drum',
    'curated instruments',
    'premium handpan',
    'handpan portal',
    'buy handpan',
  ],
  authors: [{ name: 'Nils Caspar', url: 'https://nilscaspar.de' }],
  creator: 'Grail Instruments',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Rare Handpans, Chosen with Care`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Rare Handpans, Chosen with Care`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0D14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.name,
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              description: siteConfig.description,
              sameAs: [
                siteConfig.socialLinks.instagram,
                siteConfig.socialLinks.youtube,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
