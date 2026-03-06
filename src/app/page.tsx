'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { NewsletterForm } from '@/components/NewsletterForm'
import { Volume2, VolumeX } from 'lucide-react'

type Phase = 'gate' | 'open'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [phase, setPhase] = useState<Phase>('gate')
  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const phaseWrapperRef = useRef<HTMLDivElement>(null)

  // Ensure Phase 1 (gate) always renders on the client, never server-side.
  // Framer Motion AnimatePresence has an SSR bug in Next.js static export
  // that can cause it to render the wrong phase in the initial HTML.
  useEffect(() => {
    setMounted(true)
  }, [])

  const enter = () => {
    // Freeze the phase wrapper height imperatively (before React state update)
    // so the container never collapses between Phase 1 exit and Phase 2 entry.
    // Using ref.current.style directly bypasses React 18 automatic batching –
    // the DOM mutation is synchronous and takes effect before setPhase triggers
    // a re-render and AnimatePresence begins the exit animation.
    if (phaseWrapperRef.current) {
      phaseWrapperRef.current.style.minHeight = `${phaseWrapperRef.current.offsetHeight}px`
    }
    setPhase('open')
    if (audioRef.current) {
      audioRef.current.volume = 0
      audioRef.current.play().catch(() => {})
      // Fade volume in over 3 seconds
      let vol = 0
      const fade = setInterval(() => {
        vol = Math.min(vol + 0.01, 0.65)
        if (audioRef.current) audioRef.current.volume = vol
        if (vol >= 0.65) clearInterval(fade)
      }, 45)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background overflow-hidden">

      {/* Audio – preloaded, played on enter */}
      <audio ref={audioRef} src="/audio/ambient.mp3" loop preload="auto" />

      {/* Atmospheric glow – intensifies after entering */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: phase === 'open' ? 1 : 0.6 }}
          transition={{ duration: 4, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -60%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at center, rgba(200,169,106,0.13) 0%, rgba(200,169,106,0.05) 40%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 70% 80% at center 45%, transparent 30%, rgba(11,13,20,0.85) 100%)',
          }}
        />
      </div>

      {/* Portal rings – expand when gate opens */}
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
            animate={{
              opacity: phase === 'open' ? 1 : 0.8,
              scale: phase === 'open' ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 3 + i * 0.4, delay: i * 0.3 },
              scale: { duration: 3, ease: [0.4, 0, 0.2, 1] },
            }}
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
                opacity: [0.12 + i * 0.06, 0.3 + i * 0.09, 0.12 + i * 0.06],
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

      {/* The Gate – outer arch */}
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

      {/* Inner arch */}
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

      {/* Content */}
      <LayoutGroup>
      <div
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ width: 360, marginTop: '-5vh' }}
      >
        {/* Logo – layout-animated so it glides up smoothly when phase changes */}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 2.5, ease: [0.4, 0, 0.2, 1] },
            scale:   { duration: 2.5, ease: [0.4, 0, 0.2, 1] },
            layout:  { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          }}
          className="mb-8"
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
          layout
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            scaleX:  { duration: 1.5, delay: 1.2 },
            opacity: { duration: 1.5, delay: 1.2 },
            layout:  { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          }}
          style={{ width: 32, height: 1, background: 'rgba(200,169,106,0.45)', marginBottom: 32 }}
        />

        {/* PHASE 1 & 2 – Client-only to avoid SSR mismatch with AnimatePresence */}
        <div ref={phaseWrapperRef}>
        <AnimatePresence mode="popLayout">
          {mounted && phase === 'gate' && (
            <motion.div
              key="enter-trigger"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, scale: 0.95, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Pulsing sigil button */}
              <button
                onClick={enter}
                className="group relative flex items-center justify-center"
                style={{ width: 64, height: 64 }}
                aria-label="Enter"
              >
                {/* Outer pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '1px solid rgba(200,169,106,0.5)',
                  }}
                />
                {/* Static ring */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 8,
                    borderRadius: '50%',
                    border: '1px solid rgba(200,169,106,0.35)',
                    transition: 'border-color 0.3s',
                  }}
                  className="group-hover:border-accent/70"
                />
                {/* Symbol */}
                <span
                  style={{
                    fontSize: 18,
                    color: 'rgba(200,169,106,0.7)',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                    transition: 'color 0.3s',
                  }}
                  className="group-hover:text-accent"
                >
                  ∴
                </span>
              </button>

              <motion.p
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(200,169,106,0.5)',
                }}
              >
                enter
              </motion.p>
            </motion.div>
          )}

          {/* PHASE 2 – Copy + newsletter form */}
          {mounted && phase === 'open' && (
            <motion.div
              key="newsletter"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="flex flex-col items-center gap-0 w-full"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-body-md text-muted mb-2"
              >
                A new world of sound is opening.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="text-body-sm text-muted-dark mb-9"
                style={{ lineHeight: 1.7 }}
              >
                Be among the first to cross the threshold.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="w-full"
              >
                <NewsletterForm variant="stacked" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
      </LayoutGroup>

      {/* Mute toggle – appears after entering */}
      <AnimatePresence>
        {phase === 'open' && (
          <motion.button
            key="mute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={toggleMute}
            className="absolute top-6 right-6 text-muted-dark hover:text-muted transition-colors duration-300"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}
