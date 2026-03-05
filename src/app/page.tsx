'use client'

import { motion } from 'framer-motion'
import { NewsletterForm } from '@/components/NewsletterForm'

export default function LandingPage() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden">

      {/* Deep atmospheric glow – emanates from behind the gate */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, rgba(200,169,106,0.10) 0%, rgba(200,169,106,0.04) 40%, transparent 70%)',
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 80% at center 45%, transparent 30%, rgba(11,13,20,0.85) 100%)',
          }}
        />
      </div>

      {/* Portal rings behind the arch apex */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        {[520, 390, 270, 160].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 + i * 0.4, delay: i * 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              left: -size / 2,
              top: -size / 2,
              borderRadius: '50%',
            }}
          >
            <motion.div
              animate={{
                opacity: [0.12 + i * 0.06, 0.28 + i * 0.08, 0.12 + i * 0.06],
                scale: [1, 1 + 0.015 * (4 - i), 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: `1px solid rgba(200,169,106,${0.15 + i * 0.08})`,
                boxShadow:
                  i === 3
                    ? '0 0 40px rgba(200,169,106,0.07), inset 0 0 40px rgba(200,169,106,0.04)'
                    : undefined,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* The Gate – arch with open bottom */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.92 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 3, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'absolute',
          width: 400,
          top: '8%',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          borderTop: '1px solid rgba(200,169,106,0.25)',
          borderLeft: '1px solid rgba(200,169,106,0.15)',
          borderRight: '1px solid rgba(200,169,106,0.15)',
          borderBottom: 'none',
          borderRadius: '200px 200px 0 0',
          pointerEvents: 'none',
        }}
      />

      {/* Inner gate – second arch, slightly smaller */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'absolute',
          width: 340,
          top: '12%',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          borderTop: '1px solid rgba(200,169,106,0.12)',
          borderLeft: '1px solid rgba(200,169,106,0.08)',
          borderRight: '1px solid rgba(200,169,106,0.08)',
          borderBottom: 'none',
          borderRadius: '170px 170px 0 0',
          pointerEvents: 'none',
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content – centered within the gate */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ width: 360, marginTop: '-5vh' }}
      >
        {/* Logo – sits at the apex of the arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-light.svg"
            alt="Grail Instruments"
            width={148}
            height={194}
            className="w-36 md:w-40"
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ width: 32, height: 1, background: 'rgba(200,169,106,0.55)', marginBottom: 28 }}
        />

        {/* Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
          className="text-body-md text-muted mb-2"
        >
          A new world of sound is opening.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1, ease: 'easeOut' }}
          className="text-body-sm text-muted-dark mb-10"
          style={{ lineHeight: 1.7 }}
        >
          Enter the circle.<br />Be among the first to cross the threshold.
        </motion.p>

        {/* Form – the key to the gate */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: 'easeOut' }}
          className="w-full"
        >
          <NewsletterForm variant="stacked" />
        </motion.div>
      </div>

    </div>
  )
}
