import Link from 'next/link'
import { Instagram, Youtube, ExternalLink } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-divider">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl tracking-tight text-foreground">
                Grail
              </span>
              <span className="ml-1.5 text-caption tracking-[0.2em] text-muted uppercase">
                Instruments
              </span>
            </Link>
            <p className="text-muted text-body-sm max-w-sm mb-6">
              Rare handpans. Chosen for profound sound and presence. Not a shop—a curated portal.
            </p>
            <p className="text-muted-dark text-body-sm italic">
              Crafted with care. Guided by listening.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption uppercase tracking-widest text-muted mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-foreground transition-colors text-body-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-caption uppercase tracking-widest text-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {siteConfig.socialLinks.instagram && (
                <li>
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-body-sm"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.socialLinks.youtube && (
                <li>
                  <a
                    href={siteConfig.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-body-sm"
                  >
                    <Youtube size={16} />
                    YouTube
                  </a>
                </li>
              )}
              <li className="pt-4">
                <a
                  href="https://nilscaspar.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-dark hover:text-muted transition-colors text-body-sm"
                >
                  <ExternalLink size={14} />
                  Made by Nils Caspar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-dark text-body-sm">
            © {currentYear} Grail Instruments. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {navigation.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-dark hover:text-muted transition-colors text-body-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
