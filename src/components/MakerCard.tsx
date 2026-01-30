'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import type { Maker } from '@/lib/types'

interface MakerCardProps {
  maker: Maker
  index?: number
}

export function MakerCard({ maker, index = 0 }: MakerCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/makers/${maker.slug}`} className="group block">
        <div className="card-hover p-6">
          <div className="flex items-start gap-5">
            {/* Maker Image/Logo */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-surface-elevated flex-shrink-0 border border-divider">
              {maker.image ? (
                <Image
                  src={maker.image}
                  alt={maker.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-serif text-xl text-muted">
                    {maker.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors mb-1">
                {maker.name}
              </h3>
              <p className="flex items-center gap-1.5 text-caption text-muted mb-3">
                <MapPin size={12} />
                {maker.region ? `${maker.region}, ${maker.country}` : maker.country}
              </p>
              <p className="text-body-sm text-muted line-clamp-2">
                {maker.descriptionShort}
              </p>
            </div>
          </div>

          {/* Typical Scales */}
          {maker.typicalScales.length > 0 && (
            <div className="mt-4 pt-4 border-t border-divider">
              <p className="text-caption text-muted-dark">
                Typical scales: {maker.typicalScales.slice(0, 3).join(', ')}
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}

// Featured variant for homepage
export function MakerCardFeatured({ maker, index = 0 }: MakerCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <Link href={`/makers/${maker.slug}`} className="group block">
        {/* Maker Image/Logo */}
        <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden bg-surface-elevated border border-divider mb-4 group-hover:border-accent/50 transition-colors">
          {maker.image ? (
            <Image
              src={maker.image}
              alt={maker.name}
              fill
              className="object-cover"
              sizes="96px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-serif text-2xl text-muted">
                {maker.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors mb-1">
          {maker.name}
        </h3>
        <p className="text-caption text-muted">
          {maker.country}
        </p>
      </Link>
    </motion.article>
  )
}
