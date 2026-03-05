'use client'

import { motion } from 'framer-motion'
import { NewsletterForm } from '@/components/NewsletterForm'

export default function LandingPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[200px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 4, delay: 1, ease: 'easeOut' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px]"
        />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-md">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="font-serif text-foreground tracking-tight">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.05em' }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="block text-display-xl"
            >
              Grail
            </motion.span>
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="block text-caption uppercase text-muted mt-3"
            >
              Instruments
            </motion.span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="w-16 h-px bg-accent/50 mx-auto my-8 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          className="text-body-lg text-muted mb-3"
        >
          Rare handpans. Chosen for profound sound and presence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          className="text-body-sm text-muted-dark mb-10"
        >
          Something new is coming. Join the list to be the first to know.
        </motion.p>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2, ease: 'easeOut' }}
        >
          <NewsletterForm variant="stacked" />
        </motion.div>
      </div>

      {/* Breathing pulse ring */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.03, 0.08],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[500px] h-[500px] border border-accent/10 rounded-full"
        />
      </motion.div>
    </div>
  )
}
