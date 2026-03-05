import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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
        {/* Brevo form configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.REQUIRED_CODE_ERROR_MESSAGE = 'Wähle bitte einen Ländervorwahl aus.';
              window.LOCALE = 'de';
              window.EMAIL_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
              window.REQUIRED_ERROR_MESSAGE = "Dieses Feld darf nicht leer sein.";
              window.GENERIC_INVALID_MESSAGE = "Die eingegebenen Informationen sind nicht gültig. Bitte überprüfe das Feldformat und versuche es erneut.";
              window.translation = {
                common: {
                  selectedList: '{quantity} Liste ausgewählt',
                  selectedLists: '{quantity} Listen ausgewählt',
                  selectedOption: '{quantity} ausgewählt',
                  selectedOptions: '{quantity} ausgewählt',
                }
              };
              var AUTOHIDE = Boolean(0);
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <Script
          src="https://sibforms.com/forms/end-form/build/main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
