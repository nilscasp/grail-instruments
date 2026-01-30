'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn, formatPrice, truncate } from '@/lib/utils'
import type { Instrument } from '@/lib/types'

interface InstrumentCardProps {
  instrument: Instrument
  index?: number
}

export function InstrumentCard({ instrument, index = 0 }: InstrumentCardProps) {
  const statusConfig = {
    available: { label: 'Available', className: 'badge-available' },
    reserved: { label: 'Reserved', className: 'badge-reserved' },
    sold: { label: 'Sold', className: 'badge-sold' },
  }

  const status = statusConfig[instrument.status]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/instruments/${instrument.slug}`} className="group block">
        <div className="card-hover">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-surface-elevated">
            <Image
              src={instrument.images[0]?.src || '/images/placeholder.jpg'}
              alt={instrument.images[0]?.alt || `${instrument.maker.name} ${instrument.scaleName}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={status.className}>{status.label}</span>
            </div>
            {/* Featured Badge */}
            {instrument.featured && (
              <div className="absolute top-4 right-4">
                <span className="badge bg-accent/20 text-accent border border-accent/30">
                  Featured
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Maker & Scale */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <p className="text-caption uppercase tracking-widest text-muted mb-1">
                  {instrument.maker.name}
                </p>
                <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                  {instrument.scaleName} in {instrument.key}
                </h3>
              </div>
              <p className="text-foreground font-medium whitespace-nowrap">
                {formatPrice(instrument.price, instrument.currency)}
              </p>
            </div>

            {/* Listening Notes Preview */}
            <p className="text-muted text-body-sm mb-4 line-clamp-2">
              {truncate(instrument.listeningNotes, 120)}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {instrument.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-caption text-muted-dark capitalize"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

// Compact variant for sidebars and related items
interface InstrumentCardCompactProps {
  instrument: Instrument
}

export function InstrumentCardCompact({ instrument }: InstrumentCardCompactProps) {
  return (
    <Link
      href={`/instruments/${instrument.slug}`}
      className="group flex gap-4 p-3 rounded-lg hover:bg-surface-elevated transition-colors"
    >
      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-surface-elevated">
        <Image
          src={instrument.images[0]?.src || '/images/placeholder.jpg'}
          alt={instrument.images[0]?.alt || `${instrument.maker.name} ${instrument.scaleName}`}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-caption uppercase tracking-widest text-muted mb-0.5">
          {instrument.maker.name}
        </p>
        <h4 className="font-serif text-foreground group-hover:text-accent transition-colors truncate">
          {instrument.scaleName} in {instrument.key}
        </h4>
        <p className="text-body-sm text-muted mt-1">
          {formatPrice(instrument.price, instrument.currency)}
        </p>
      </div>
    </Link>
  )
}
