'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Heart, Users } from 'lucide-react'
import { Section, SectionHeader, Divider, Button, InstrumentCard, MakerCardFeatured, NewsletterForm } from '@/components'
import { siteConfig } from '@/lib/config'
import { getFeaturedInstruments } from '@/data/instruments'
import { getFeaturedMakers } from '@/data/makers'

export default function HomePage() {
  const featuredInstruments = getFeaturedInstruments().slice(0, 3)
  const featuredMakers = getFeaturedMakers()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          </div>
        </div>

        <div className="container-content relative z-10 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-display-xl font-serif text-foreground mb-6">
              Grail{' '}
              <span className="text-gradient-gold">Instruments</span>
            </h1>
            <p className="text-body-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
              Rare handpans. Chosen for profound sound and presence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/portal" size="lg">
                Enter the Portal
                <ArrowRight size={18} />
              </Button>
              <Button href="/instruments" variant="secondary" size="lg">
                Explore Instruments
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-muted rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Is Section */}
      <Section className="bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-sm md:text-display-md font-serif text-foreground mb-12"
          >
            Not a shop.{' '}
            <span className="text-accent">A curated portal.</span>
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Curated Selection',
                description: 'Only instruments that pass our rigorous evaluation make it to the Portal. Quality over quantity, always.',
              },
              {
                icon: Shield,
                title: 'Personally Tested',
                description: 'Every handpan is played, documented, and assessed before it reaches you. No surprises.',
              },
              {
                icon: Heart,
                title: 'Matched by Resonance',
                description: 'We don\'t just sell—we match. Apply, and we\'ll help you find the instrument that truly fits.',
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted text-body-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Divider withGradient />

      {/* Current Drop / Portal Section */}
      <Section>
        <SectionHeader
          eyebrow={siteConfig.portalStatus === 'open' ? 'Portal Open' : 'Portal Closed'}
          title={siteConfig.portalStatus === 'open' ? 'Current Selection' : 'Join the Waiting List'}
          description={
            siteConfig.portalStatus === 'open'
              ? 'A limited selection of curated instruments is now available.'
              : 'Portals open only a few times a year. Be the first to know when the next one opens.'
          }
        />

        {siteConfig.portalStatus === 'open' ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredInstruments.map((instrument, index) => (
                <InstrumentCard key={instrument.slug} instrument={instrument} index={index} />
              ))}
            </div>
            <div className="text-center">
              <Button href="/instruments" variant="secondary">
                View All Instruments
                <ArrowRight size={16} />
              </Button>
            </div>
          </>
        ) : (
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="stacked" />
          </div>
        )}
      </Section>

      <Divider withGradient />

      {/* How Curation Works */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="The Process"
          title="How Curation Works"
          description="Every instrument goes through a careful journey before it reaches you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Listening & Testing',
              description: 'Each instrument is played extensively—tuning, balance, sustain, and character are all evaluated.',
            },
            {
              step: '02',
              title: 'Selection & Documentation',
              description: 'Only those that pass make it to the Portal. We document every detail with photos, recordings, and notes.',
            },
            {
              step: '03',
              title: 'Matching',
              description: 'When you apply, we consider your experience, preferences, and intentions to ensure the right fit.',
            },
            {
              step: '04',
              title: 'Delivery & Aftercare',
              description: 'Professional packaging, worldwide shipping, and ongoing support for your instrument\'s journey.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-display-md font-serif text-accent/30">{item.step}</span>
              <h3 className="font-serif text-lg text-foreground mt-2 mb-3">{item.title}</h3>
              <p className="text-muted text-body-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/curation" variant="ghost">
            Learn more about our curation process
            <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      <Divider withGradient />

      {/* Featured Makers */}
      <Section>
        <SectionHeader
          eyebrow="The Makers"
          title="Crafted by Masters"
          description="We work with select makers who share our commitment to quality and presence."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {featuredMakers.map((maker, index) => (
            <MakerCardFeatured key={maker.slug} maker={maker} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/makers" variant="ghost">
            View all makers
            <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      <Divider withGradient />

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Voices"
          title="What They Say"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: 'The instrument arrived perfectly. More importantly, Nils helped me understand what I was actually looking for—not just what I thought I wanted.',
              author: 'Maria S.',
              location: 'Barcelona',
            },
            {
              quote: 'Finally, a place that treats handpans with the reverence they deserve. The listening notes were spot-on—the instrument sounds exactly as described.',
              author: 'Thomas K.',
              location: 'Munich',
            },
            {
              quote: 'I was nervous about buying without playing first, but the sound recordings and detailed descriptions made the decision easy. No regrets.',
              author: 'James L.',
              location: 'London',
            },
          ].map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-surface-elevated border border-divider rounded-lg"
            >
              <p className="text-foreground/90 text-body-md italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-muted text-body-sm">
                — {testimonial.author}, {testimonial.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface opacity-50" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md md:text-display-lg font-serif text-foreground mb-6"
          >
            If you&apos;re looking for the one instrument that calls you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-muted mb-8"
          >
            Tell us what you&apos;re seeking. We respond personally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/apply" size="lg">
              Apply Now
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
