'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, ExternalLink, Instagram, Youtube, Globe } from 'lucide-react'
import { Section, InstrumentCard, Button } from '@/components'
import { getMakerBySlug } from '@/data/makers'
import { getInstrumentsByMaker } from '@/data/instruments'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function MakerDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const maker = getMakerBySlug(slug)

  if (!maker) {
    notFound()
  }

  const instruments = getInstrumentsByMaker(slug)

  const iconMap: Record<string, React.ElementType> = {
    website: Globe,
    instagram: Instagram,
    youtube: Youtube,
  }

  return (
    <>
      {/* Back Link */}
      <div className="pt-28 pb-8">
        <div className="container-content">
          <Link
            href="/makers"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Makers
          </Link>
        </div>
      </div>

      {/* Header */}
      <Section className="pt-0 pb-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-surface-elevated border border-divider flex-shrink-0"
          >
            {maker.image ? (
              <Image
                src={maker.image}
                alt={maker.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-serif text-4xl text-muted">
                  {maker.name.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <h1 className="text-display-lg font-serif text-foreground mb-2">
              {maker.name}
            </h1>
            <p className="flex items-center gap-2 text-muted mb-6">
              <MapPin size={16} />
              {maker.region ? `${maker.region}, ${maker.country}` : maker.country}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {maker.links.map((link) => {
                const Icon = iconMap[link.type] || ExternalLink
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-divider rounded-sm text-sm text-muted hover:text-foreground hover:border-divider-strong transition-colors"
                  >
                    <Icon size={16} />
                    <span className="capitalize">{link.type}</span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Description */}
      <Section className="bg-surface py-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose-grail"
          >
            <p className="text-body-lg text-muted leading-relaxed mb-6">
              {maker.descriptionLong}
            </p>
            {maker.philosophy && (
              <blockquote className="border-l-2 border-accent pl-6 italic text-foreground/80">
                &ldquo;{maker.philosophy}&rdquo;
              </blockquote>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Typical Scales */}
      {maker.typicalScales.length > 0 && (
        <Section className="py-12">
          <h2 className="text-caption uppercase tracking-widest text-muted mb-4">
            Typical Scales
          </h2>
          <div className="flex flex-wrap gap-3">
            {maker.typicalScales.map((scale) => (
              <span
                key={scale}
                className="px-4 py-2 bg-surface border border-divider rounded-sm text-foreground"
              >
                {scale}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Instruments */}
      {instruments.length > 0 && (
        <Section className="bg-surface">
          <h2 className="text-display-sm font-serif text-foreground mb-8">
            Available from {maker.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instruments.map((instrument, index) => (
              <InstrumentCard key={instrument.slug} instrument={instrument} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="text-center">
          <p className="text-body-lg text-muted mb-6">
            Looking for a specific {maker.name} instrument?
          </p>
          <Button href="/apply">
            Tell Us What You&apos;re Seeking
          </Button>
        </div>
      </Section>
    </>
  )
}
