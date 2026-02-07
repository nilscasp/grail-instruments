'use client'

import { motion } from 'framer-motion'
import { Sparkles, Clock, Headphones, Heart, Bell } from 'lucide-react'
import { PageHeader, Section, SectionHeader, NewsletterForm, Button, InstrumentCard } from '@/components'
import { siteConfig } from '@/lib/config'
import { getFeaturedInstruments } from '@/data/instruments'

export default function PortalPage() {
  const featuredInstruments = getFeaturedInstruments().slice(0, 3)
  const isOpen = siteConfig.portalStatus === 'open'

  return (
    <>
      <PageHeader
        title="The Portal"
        description="Portals open only a few times a year. When they do, a limited selection of curated instruments becomes available."
      />

      {/* Status Section */}
      <Section className="pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 ${
              isOpen
                ? 'bg-emerald-900/30 border border-emerald-700/50'
                : 'bg-surface border border-divider'
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-muted-dark'
              }`}
            />
            <span className={isOpen ? 'text-emerald-400' : 'text-muted'}>
              Portal is {isOpen ? 'Open' : 'Currently Closed'}
            </span>
          </motion.div>

          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-body-lg text-muted mb-8">
                A curated selection is now available. Browse instruments, listen to recordings, and apply for the one that calls you.
              </p>
              <Button href="/instruments" size="lg">
                Explore Available Instruments
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-body-lg text-muted mb-8">
                Join the waiting list to be notified the moment the next Portal opens. Early access often makes the difference.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="stacked" />
              </div>
            </motion.div>
          )}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="The Process"
          title="How Portals Work"
          description="A different approach to finding your instrument."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Bell,
              title: 'Get Notified',
              description: 'Join the waitlist. When a Portal opens, you\'ll be among the first to know.',
            },
            {
              icon: Headphones,
              title: 'Listen Deeply',
              description: 'Browse instruments, read listening notes, and spend time with the recordings.',
            },
            {
              icon: Heart,
              title: 'Apply with Intention',
              description: 'When one calls you, apply. Tell us about yourself and why this instrument.',
            },
            {
              icon: Sparkles,
              title: 'Get Matched',
              description: 'We review applications based on fit, not just timing. The right match matters.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted text-body-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why This Way */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-caption uppercase tracking-widest text-accent mb-4">
              Philosophy
            </p>
            <h2 className="text-display-md font-serif text-foreground mb-6">
              First Resonance, Not First Click
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                The handpan market moves fast. Instruments sell out in minutes. This creates pressure—pressure that leads to rushed decisions and mismatched instruments.
              </p>
              <p>
                We chose a different path. By controlling when instruments become available and reviewing applications thoughtfully, we can ensure each handpan finds not just a buyer, but a home.
              </p>
              <p>
                This isn&apos;t for everyone. If you need instant gratification, there are shops for that. But if you want an instrument chosen with care and matched with intention—this is the way.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-divider rounded-lg p-8"
          >
            <h3 className="font-serif text-xl text-foreground mb-6">
              How to Prepare
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Good headphones',
                  description: 'Our recordings reveal detail. Listen properly.',
                },
                {
                  title: 'Quiet time',
                  description: 'Don\'t browse while distracted. Give it attention.',
                },
                {
                  title: 'Know your intention',
                  description: 'Why do you want a handpan? What will you use it for?',
                },
                {
                  title: 'Budget clarity',
                  description: 'Know your range. Quality instruments cost what they cost.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-accent font-medium">{index + 1}.</span>
                  <div>
                    <p className="text-foreground font-medium">{item.title}</p>
                    <p className="text-muted text-body-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Featured Instruments (if open) */}
      {isOpen && (
        <Section className="bg-surface">
          <SectionHeader
            eyebrow="Current Selection"
            title="Featured Instruments"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInstruments.map((instrument, index) => (
              <InstrumentCard key={instrument.slug} instrument={instrument} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-serif text-foreground mb-6"
          >
            {isOpen ? 'The Portal is Open' : 'Don\'t Miss the Next Opening'}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {isOpen ? (
              <Button href="/instruments" size="lg">
                View All Instruments
              </Button>
            ) : (
              <div className="max-w-md mx-auto">
                <NewsletterForm variant="stacked" />
              </div>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  )
}
