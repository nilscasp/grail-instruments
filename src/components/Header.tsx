'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, siteConfig } from '@/lib/config'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/90 backdrop-blur-lg border-b border-divider'
            : 'bg-transparent'
        )}
      >
        {/* Portal Status Banner */}
        {siteConfig.portalStatus === 'open' && (
          <div className="bg-accent/10 border-b border-accent/20">
            <div className="container-content py-2 text-center">
              <Link
                href="/portal"
                className="text-caption text-accent hover:text-accent-light transition-colors"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse mr-2" />
                Portal is Open — Limited instruments available
              </Link>
            </div>
          </div>
        )}

        <div className="container-content">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <span className="font-serif text-2xl tracking-tight text-foreground">
                Grail
              </span>
              <span className="ml-1.5 text-caption tracking-[0.2em] text-muted uppercase">
                Instruments
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors duration-300',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link href={navigation.cta.href} className="btn-primary text-xs">
                {navigation.cta.name}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-surface border-l border-divider p-8 pt-24"
            >
              <div className="flex flex-col gap-6">
                {navigation.main.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block text-2xl font-serif transition-colors',
                        pathname === item.href
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.main.length * 0.05 }}
                  className="pt-6 border-t border-divider"
                >
                  <Link href={navigation.cta.href} className="btn-primary w-full">
                    {navigation.cta.name}
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
