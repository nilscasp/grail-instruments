'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Check, 
  Play,
  Music, 
  Ruler, 
  Weight, 
  MapPin,
  Calendar,
  Package,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Section, Button, InstrumentCardCompact } from '@/components'
import { cn, formatPrice } from '@/lib/utils'
import { getInstrumentBySlug, instruments, getInstrumentsByMaker } from '@/data/instruments'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function InstrumentDetailPage({ params }: PageProps) {
  const { slug } = use(params)
  const instrument = getInstrumentBySlug(slug)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'notes' | 'specs' | 'sound' | 'included'>('notes')

  if (!instrument) {
    notFound()
  }

  const relatedInstruments = getInstrumentsByMaker(instrument.maker.slug)
    .filter((i) => i.slug !== instrument.slug)
    .slice(0, 3)

  const statusConfig = {
    available: { label: 'Available', className: 'badge-available' },
    reserved: { label: 'Reserved', className: 'badge-reserved' },
    sold: { label: 'Sold', className: 'badge-sold' },
  }
  const status = statusConfig[instrument.status]

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % instrument.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + instrument.images.length) % instrument.images.length)
  }

  return (
    <>
      {/* Back Link */}
      <div className="pt-28 pb-8">
        <div className="container-content">
          <Link
            href="/instruments"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Instruments
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square bg-surface-elevated rounded-lg overflow-hidden"
            >
              <Image
                src={instrument.images[activeImageIndex]?.src || '/images/placeholder.jpg'}
                alt={instrument.images[activeImageIndex]?.alt || instrument.displayTitle || ''}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Navigation Arrows */}
              {instrument.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={status.className}>{status.label}</span>
              </div>
            </motion.div>

            {/* Thumbnails */}
            {instrument.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {instrument.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      'relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors',
                      activeImageIndex === index
                        ? 'border-accent'
                        : 'border-transparent hover:border-divider-strong'
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Audio Player */}
            {instrument.audio.length > 0 && (
              <div className="p-4 bg-surface border border-divider rounded-lg">
                <p className="text-caption uppercase tracking-widest text-muted mb-3">
                  Sound Recordings
                </p>
                <div className="space-y-2">
                  {instrument.audio.map((audio, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-surface-elevated rounded-md"
                    >
                      <button className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center hover:bg-accent/30 transition-colors">
                        <Play size={16} className="ml-0.5" />
                      </button>
                      <span className="text-body-sm text-foreground">{audio.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <Link
                href={`/makers/${instrument.maker.slug}`}
                className="text-caption uppercase tracking-widest text-accent hover:text-accent-light transition-colors"
              >
                {instrument.maker.name}
              </Link>
              <h1 className="text-display-md font-serif text-foreground mt-2 mb-4">
                {instrument.scaleName} in {instrument.key}
              </h1>
              <p className="text-display-sm text-foreground mb-6">
                {formatPrice(instrument.price, instrument.currency)}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-body-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {instrument.year}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {instrument.location}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button href={`/apply?instrument=${instrument.slug}`} size="lg" className="flex-1">
                Apply for This Instrument
              </Button>
              <Button href={`/apply?instrument=${instrument.slug}&type=question`} variant="secondary" size="lg" className="flex-1">
                Ask a Question
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {instrument.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface border border-divider rounded-full text-body-sm text-muted capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b border-divider mb-6">
              <div className="flex gap-6 -mb-px">
                {[
                  { id: 'notes', label: 'Listening Notes' },
                  { id: 'specs', label: 'Specifications' },
                  { id: 'sound', label: 'Sound & Feel' },
                  { id: 'included', label: 'Included' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={cn(
                      'pb-3 text-sm font-medium transition-colors border-b-2',
                      activeTab === tab.id
                        ? 'text-foreground border-accent'
                        : 'text-muted hover:text-foreground border-transparent'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === 'notes' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose-grail"
                >
                  <p className="text-body-md text-muted leading-relaxed">
                    {instrument.listeningNotes}
                  </p>
                </motion.div>
              )}

              {activeTab === 'specs' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <SpecRow icon={Music} label="Notes" value={instrument.notes.join(', ')} />
                  <SpecRow icon={Ruler} label="Diameter" value={instrument.specs.diameter} />
                  <SpecRow icon={Weight} label="Weight" value={instrument.specs.weight} />
                  <SpecRow label="Steel Type" value={instrument.specs.steelType} />
                  <SpecRow label="Finish" value={instrument.specs.finish} />
                </motion.div>
              )}

              {activeTab === 'sound' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose-grail"
                >
                  <p className="text-body-md text-muted leading-relaxed">
                    {instrument.soundDescription}
                  </p>
                </motion.div>
              )}

              {activeTab === 'included' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  {instrument.specs.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                        <Check size={12} />
                      </div>
                      <span className="text-body-md text-muted">{item}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Curation Stamp */}
            <div className="mt-8 p-6 bg-surface border border-divider rounded-lg">
              <p className="text-caption uppercase tracking-widest text-accent mb-4">
                Curation Verified
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(instrument.curation).map(([key, passed]) => (
                  <div
                    key={key}
                    className={cn(
                      'flex items-center gap-2 text-body-sm',
                      passed ? 'text-emerald-400' : 'text-muted-dark'
                    )}
                  >
                    <Check size={14} />
                    <span className="capitalize">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Instruments */}
        {relatedInstruments.length > 0 && (
          <div className="mt-20 pt-12 border-t border-divider">
            <h2 className="text-display-sm font-serif text-foreground mb-8">
              More from {instrument.maker.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedInstruments.map((related) => (
                <InstrumentCardCompact key={related.slug} instrument={related} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  )
}

function SpecRow({
  icon: Icon,
  label,
  value,
}: {
  icon?: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-divider last:border-0">
      <span className="flex items-center gap-2 text-muted text-body-sm">
        {Icon && <Icon size={14} />}
        {label}
      </span>
      <span className="text-foreground text-body-sm">{value}</span>
    </div>
  )
}
