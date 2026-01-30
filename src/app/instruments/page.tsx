'use client'

import { useState, useMemo } from 'react'
import { PageHeader, Section, InstrumentCard, InstrumentFilter, Button } from '@/components'
import { instruments } from '@/data/instruments'
import type { InstrumentFilters, SortOption, Instrument } from '@/lib/types'

export default function InstrumentsPage() {
  const [filters, setFilters] = useState<InstrumentFilters>({})
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const filteredInstruments = useMemo(() => {
    let result = [...instruments]

    // Apply filters
    if (filters.maker) {
      result = result.filter((i) => i.maker.slug === filters.maker)
    }
    if (filters.scale) {
      result = result.filter((i) => i.scaleName === filters.scale)
    }
    if (filters.key) {
      result = result.filter((i) => i.key === filters.key)
    }
    if (filters.status) {
      result = result.filter((i) => i.status === filters.status)
    }
    if (filters.tag) {
      result = result.filter((i) => i.tags.includes(filters.tag!))
    }
    if (filters.priceMin !== undefined) {
      result = result.filter((i) => i.price !== null && i.price >= filters.priceMin!)
    }
    if (filters.priceMax !== undefined) {
      result = result.filter((i) => i.price !== null && i.price <= filters.priceMax!)
    }

    // Apply sorting
    switch (sortBy) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'price-asc':
        result.sort((a, b) => (a.price || Infinity) - (b.price || Infinity))
        break
      case 'price-desc':
        result.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
    }

    return result
  }, [filters, sortBy])

  return (
    <>
      <PageHeader
        title="Instruments"
        description="Each instrument in our Portal has been personally selected, tested, and documented. Find the one that calls you."
      />

      <Section className="pt-0">
        <InstrumentFilter
          filters={filters}
          sortBy={sortBy}
          onFiltersChange={setFilters}
          onSortChange={setSortBy}
          resultCount={filteredInstruments.length}
        />

        {filteredInstruments.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredInstruments.map((instrument, index) => (
              <InstrumentCard key={instrument.slug} instrument={instrument} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-display-sm font-serif text-foreground mb-4">
              No instruments match your criteria
            </p>
            <p className="text-muted mb-8">
              Try adjusting your filters, or join the waitlist to be notified of new arrivals.
            </p>
            <Button href="/portal" variant="secondary">
              Join the Portal Waitlist
            </Button>
          </div>
        )}
      </Section>
    </>
  )
}
