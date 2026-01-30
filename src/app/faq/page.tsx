'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PageHeader, Section, Button } from '@/components'
import { faqs, getAllFAQCategories } from '@/data/faq'
import { cn } from '@/lib/utils'

const categoryLabels: Record<string, string> = {
  buying: 'Buying Process',
  instruments: 'Instruments',
  shipping: 'Shipping & Delivery',
  payment: 'Payment',
  general: 'General',
}

export default function FAQPage() {
  const categories = getAllFAQCategories()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const filteredFAQs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about how we work, what we offer, and how to find your instrument."
      />

      <Section className="pt-0">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-4 py-2 rounded-full text-sm transition-colors',
              activeCategory === null
                ? 'bg-accent text-background'
                : 'bg-surface border border-divider text-muted hover:text-foreground hover:border-divider-strong'
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm transition-colors',
                activeCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-surface border border-divider text-muted hover:text-foreground hover:border-divider-strong'
              )}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-divider rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-elevated transition-colors"
              >
                <span className="font-serif text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'text-muted flex-shrink-0 transition-transform',
                    openItems.has(index) && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {openItems.has(index) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-display-sm font-serif text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted mb-8">
            We respond to every inquiry personally. Reach out and we&apos;ll get back to you.
          </p>
          <Button href="/apply">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  )
}
