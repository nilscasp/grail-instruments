'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { makers } from '@/data/makers'
import { getAllScales, getAllKeys, getAllTags } from '@/data/instruments'
import type { InstrumentFilters, SortOption } from '@/lib/types'

interface InstrumentFilterProps {
  filters: InstrumentFilters
  sortBy: SortOption
  onFiltersChange: (filters: InstrumentFilters) => void
  onSortChange: (sort: SortOption) => void
  resultCount: number
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

const statusOptions = [
  { value: '', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'reserved', label: 'Reserved' },
  { value: 'sold', label: 'Sold' },
]

export function InstrumentFilter({
  filters,
  sortBy,
  onFiltersChange,
  onSortChange,
  resultCount,
}: InstrumentFilterProps) {
  const [isOpen, setIsOpen] = useState(false)
  const scales = getAllScales()
  const keys = getAllKeys()
  const tags = getAllTags()

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  const clearFilters = () => {
    onFiltersChange({})
  }

  const updateFilter = (key: keyof InstrumentFilters, value: string) => {
    const newFilters = { ...filters }
    if (value) {
      newFilters[key] = value as any
    } else {
      delete newFilters[key]
    }
    onFiltersChange(newFilters)
  }

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-sm border transition-colors',
              isOpen || activeFilterCount > 0
                ? 'border-accent text-accent'
                : 'border-divider text-muted hover:text-foreground hover:border-divider-strong'
            )}
          >
            <Filter size={16} />
            <span className="text-sm">Filters</span>
            {activeFilterCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent text-background text-xs">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Clear all
            </button>
          )}

          <span className="text-sm text-muted">
            {resultCount} instrument{resultCount !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-surface border border-divider rounded-sm px-4 py-2 pr-10 text-sm text-foreground cursor-pointer hover:border-divider-strong transition-colors focus:outline-none focus:border-accent"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 bg-surface border border-divider rounded-lg">
              {/* Maker Filter */}
              <div>
                <label className="label">Maker</label>
                <select
                  value={filters.maker || ''}
                  onChange={(e) => updateFilter('maker', e.target.value)}
                  className="select text-sm"
                >
                  <option value="">All Makers</option>
                  {makers.map((maker) => (
                    <option key={maker.slug} value={maker.slug}>
                      {maker.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Scale Filter */}
              <div>
                <label className="label">Scale</label>
                <select
                  value={filters.scale || ''}
                  onChange={(e) => updateFilter('scale', e.target.value)}
                  className="select text-sm"
                >
                  <option value="">All Scales</option>
                  {scales.map((scale) => (
                    <option key={scale} value={scale}>
                      {scale}
                    </option>
                  ))}
                </select>
              </div>

              {/* Key Filter */}
              <div>
                <label className="label">Key</label>
                <select
                  value={filters.key || ''}
                  onChange={(e) => updateFilter('key', e.target.value)}
                  className="select text-sm"
                >
                  <option value="">All Keys</option>
                  {keys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="label">Availability</label>
                <select
                  value={filters.status || ''}
                  onChange={(e) => updateFilter('status', e.target.value)}
                  className="select text-sm"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <label className="label">Mood</label>
                <select
                  value={filters.tag || ''}
                  onChange={(e) => updateFilter('tag', e.target.value)}
                  className="select text-sm capitalize"
                >
                  <option value="">All Moods</option>
                  {tags.map((tag) => (
                    <option key={tag} value={tag} className="capitalize">
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Pills */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.maker && (
            <FilterPill
              label={`Maker: ${makers.find((m) => m.slug === filters.maker)?.name}`}
              onRemove={() => updateFilter('maker', '')}
            />
          )}
          {filters.scale && (
            <FilterPill
              label={`Scale: ${filters.scale}`}
              onRemove={() => updateFilter('scale', '')}
            />
          )}
          {filters.key && (
            <FilterPill
              label={`Key: ${filters.key}`}
              onRemove={() => updateFilter('key', '')}
            />
          )}
          {filters.status && (
            <FilterPill
              label={`Status: ${filters.status}`}
              onRemove={() => updateFilter('status', '')}
            />
          )}
          {filters.tag && (
            <FilterPill
              label={`Mood: ${filters.tag}`}
              onRemove={() => updateFilter('tag', '')}
            />
          )}
        </div>
      )}
    </div>
  )
}

function FilterPill({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-elevated border border-divider rounded-full text-sm text-foreground">
      {label}
      <button
        onClick={onRemove}
        className="text-muted hover:text-foreground transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <X size={14} />
      </button>
    </span>
  )
}
