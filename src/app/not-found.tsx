'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import { Button } from '@/components'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-content text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-display-xl font-serif text-accent/30 mb-4">404</p>
          <h1 className="text-display-md font-serif text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-body-lg text-muted max-w-md mx-auto mb-8">
            The page you&apos;re looking for doesn&apos;t exist, or perhaps it never did. 
            Sometimes the best things are found by accident—but not this time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/">
              <Home size={18} />
              Back Home
            </Button>
            <Button href="/instruments" variant="secondary">
              <Search size={18} />
              Browse Instruments
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
