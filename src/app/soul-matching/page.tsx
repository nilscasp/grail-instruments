'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Search, Users, ArrowRight, Sparkles, Network, Ear, Music } from 'lucide-react'
import { Section, SectionHeader, Divider, Button } from '@/components'

type Lang = 'de' | 'en'

const content = {
  de: {
    hero: {
      eyebrow: 'Handpan-Beratung',
      title: 'Finde das Instrument deiner Seele',
      subtitle: 'Ich helfe dir, die Handpan zu finden, die auf deine Seelenqualität und dein Schwingungsmuster abgestimmt ist — nicht durch Zufall, sondern durch intuitives Erspüren und tiefe Erfahrung.',
      cta: 'Gespräch buchen',
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Mehr als Wissen — Gespür',
      pillars: [
        {
          icon: 'ear',
          title: 'Instrumentenkenntnis',
          description: 'Über eineinhalb Jahre beim größten Handpan-Händler im DACH-Raum. Hunderte Instrumente gespielt, verglichen und ihre Eigenheiten kennengelernt — von unterschiedlichen Makern, Stimmungen und Materialien.',
        },
        {
          icon: 'music',
          title: 'Spielerverständnis',
          description: 'Als Handpan-Lehrer habe ich tief in den Spielstil und die ästhetischen Vorlieben vieler Menschen hineingeschaut. Dieses Verständnis fließt in die Wahl von Material, Bauweise, Maker und Scale ein — abgestimmt auf deine individuellen Vorlieben.',
        },
        {
          icon: 'sparkles',
          title: 'Intuition',
          description: 'Meine Fähigkeit, intuitiv zu erspüren und auszutesten, welches Instrument zu einem Menschen passt. Ich arbeite mit dem Unterbewusstsein und Überbewusstsein, um die Verbindung zwischen Mensch und Klang auf der tiefsten Ebene zu finden.',
        },
        {
          icon: 'network',
          title: 'Netzwerk',
          description: 'Über mein Netzwerk aus Makern, Händlern und Sammlern finde und vermittle ich das Instrument, das wirklich zu dir gehört.',
        },
      ],
    },
    paths: {
      eyebrow: 'Dein Weg',
      title: 'Zwei Wege zu deinem Instrument',
      description: 'Je nachdem, wie zeitnah du dein Instrument finden möchtest, gibt es zwei Möglichkeiten.',
      recommended: 'Empfohlen',
      path1: {
        title: 'Direkte Beratung & Vermittlung',
        description: 'Für alle, die ihr Instrument zeitnah finden möchten. Dies ist der einzige Weg, wenn du nicht warten willst.',
        features: [
          'Persönliches Gespräch zur Erfassung deiner Schwingungsqualität',
          'Gezieltes Suchen und Austesten über mein Netzwerk',
          'Vermittlung des passenden Instruments',
          'Begleitung bis das Instrument bei dir ist',
        ],
        cta: 'Gespräch buchen',
      },
      path2: {
        title: 'Netzwerk-Beobachter',
        description: 'Für alle, die Zeit haben und dem Prozess vertrauen. Du wirst Teil meines Netzwerks und beobachtest, welche Instrumente auftauchen.',
        features: [
          'Zugang zum Instrument-Netzwerk',
          'Regelmäßige Updates zu verfügbaren Instrumenten',
          'Bei Resonanz zuschlagen',
          'Natürlicher Prozess — das Instrument findet dich',
        ],
        cta: 'Mehr erfahren',
      },
      note: 'Wenn du dein Instrument zeitnah finden möchtest, ist die direkte Beratung und Vermittlung der einzige Weg.',
    },
    frequency: {
      eyebrow: 'Mythos vs. Realität',
      title: 'Die Wahrheit über 432 Hz Handpans',
      intro: 'Viele Menschen suchen gezielt nach Handpans, die auf 432 Hz gestimmt sind — in der Überzeugung, dass diese Frequenz eine besondere heilende Wirkung hat. Der Gedanke dahinter hat einen wahren Kern, doch die Umsetzung auf Musikinstrumente ist weit komplexer, als die meisten denken.',
      myths: [
        {
          title: 'Der wahre Ursprung von 432 Hz',
          description: 'Die Magie hinter 432 Hz bezieht sich auf die Schwingung der Erde selbst. Unser Planet braucht 365,24 Tage für eine Umrundung der Sonne. Oktaviert man diese Frequenz 32 Mal nach dem Oktavgesetz von Hans Cousto, erhält man 136,10 Hz — den Ton Cis, den „Jahreston OM". Dieser Ton bezieht sich auf einen natürlichen Kammerton A von 432,1 Hz. Es geht also um die kosmische Schwingung der Erde, nicht um eine beliebige Zahl.',
        },
        {
          title: 'Das Problem der chromatischen Stimmung',
          description: 'Selbst wenn ein Instrument auf den Kammerton A = 432 Hz gestimmt wird, bleibt die Tonleiter chromatisch — also gleichstufig temperiert. In der Naturtonreihe entstehen alle Töne in natürlichen Verhältnissen zum Grundton, basierend auf kosmischen Gesetzen. Die chromatische Stimmung verzerrt diese Verhältnisse. Das bedeutet: Alle Töne außer dem A fallen aus dem Schema der Naturtonreihe heraus und damit auch aus der natürlichen Ordnung der Klänge.',
        },
        {
          title: 'Warum „432 Hz" auf einer Handpan nicht heilt',
          description: 'Eine Handpan spielt eine Skala mit vielen verschiedenen Tönen — nicht eine einzelne Frequenz. Kaufst du ein Instrument mit Kammerton A = 432 Hz, ist die Tonleiter trotzdem chromatisch gestimmt. Nur der Ton A schwingt bei 432 Hz — alle anderen Töne lassen sich aus der Perspektive der Naturtonreihe auf keine Art und Weise mehr in den Gedanken von Heilung, Balancierung und Ausrichtung bringen.',
        },
        {
          title: 'Die Frequenz allein macht kein gutes Instrument',
          description: 'Ob A4 bei 432 oder 440 Hz liegt, ist zweitrangig. Was wirklich zählt, ist die Qualität des gesamten Klangs: das Obertonspektrum, die Resonanz zwischen den Tönen, die Reinheit der Stimmung, das Sustain, der Materialklang und die Crosstalk-Eigenschaft zwischen den Tonfeldern.',
        },
        {
          title: 'Worauf es wirklich ankommt',
          description: 'Damit die Schwingung auf der tiefsten seelischen und körperlichen Ebene ankommt und wirken kann, muss das gesamte Instrument in sich stimmig sein. Die Skala muss zu dir passen, der Maker muss sein Handwerk verstehen, und das Instrument muss eine Seele haben — eine Präsenz, die über technische Perfektion hinausgeht. Das kann keine Frequenzzahl ersetzen.',
        },
      ],
      closing: 'Lass dich nicht von Zahlen leiten. Lass dich vom Klang finden.',
    },
    booking: {
      eyebrow: 'Bereit?',
      title: 'Buche dein Gespräch',
      description: 'In einem persönlichen Gespräch erfasse ich deine Schwingungsqualität und wir finden gemeinsam heraus, welches Instrument zu dir gehört.',
    },
  },
  en: {
    hero: {
      eyebrow: 'Handpan Consultation',
      title: 'Find Your Soul\u2019s Instrument',
      subtitle: 'I help you find the handpan that is attuned to your soul quality and vibrational pattern — not by chance, but through intuitive sensing and deep experience.',
      cta: 'Book a Session',
    },
    about: {
      eyebrow: 'About Me',
      title: 'Beyond Knowledge — Intuition',
      pillars: [
        {
          icon: 'ear',
          title: 'Instrument Knowledge',
          description: 'Over a year and a half at the largest handpan dealer in the DACH region. Hundreds of instruments played, compared, and their individual qualities learned — across different makers, tunings, and materials.',
        },
        {
          icon: 'music',
          title: 'Player Understanding',
          description: 'As a handpan teacher, I\u2019ve looked deeply into the playing styles and aesthetic preferences of many people. This understanding informs the choice of material, build style, maker, and scale — tailored to your individual preferences.',
        },
        {
          icon: 'sparkles',
          title: 'Intuition',
          description: 'My ability to intuitively sense and test which instrument belongs to a person. I work with the subconscious and superconscious mind to find the connection between human and sound at the deepest level.',
        },
        {
          icon: 'network',
          title: 'Network',
          description: 'Through my network of makers, dealers, and collectors, I find and facilitate the instrument that truly belongs to you.',
        },
      ],
    },
    paths: {
      eyebrow: 'Your Path',
      title: 'Two Ways to Your Instrument',
      description: 'Depending on how soon you want to find your instrument, there are two paths.',
      recommended: 'Recommended',
      path1: {
        title: 'Direct Consultation & Facilitation',
        description: 'For those who want to find their instrument soon. This is the only path if you don\u2019t want to wait.',
        features: [
          'Personal session to sense your vibrational quality',
          'Targeted search and testing through my network',
          'Facilitation of the matching instrument',
          'Guidance until the instrument is with you',
        ],
        cta: 'Book a Session',
      },
      path2: {
        title: 'Network Observer',
        description: 'For those who have time and trust the process. You become part of my network and observe which instruments appear.',
        features: [
          'Access to the instrument network',
          'Regular updates on available instruments',
          'Act when resonance strikes',
          'Natural process — the instrument finds you',
        ],
        cta: 'Learn More',
      },
      note: 'If you want to find your instrument soon, direct consultation and facilitation is the only way.',
    },
    frequency: {
      eyebrow: 'Myth vs. Reality',
      title: 'The Truth About 432 Hz Handpans',
      intro: 'Many people specifically seek handpans tuned to 432 Hz — convinced that this frequency has special healing properties. The idea has a true core, but applying it to musical instruments is far more complex than most people think.',
      myths: [
        {
          title: 'The true origin of 432 Hz',
          description: 'The magic behind 432 Hz relates to the vibration of Earth itself. Our planet takes 365.24 days to orbit the sun. Octaving this frequency 32 times using Hans Cousto\u2019s Octave Law yields 136.10 Hz — the note C#, known as the \u201cYear Tone OM.\u201d This tone corresponds to a natural concert pitch of A = 432.1 Hz. It\u2019s about the cosmic vibration of Earth, not an arbitrary number.',
        },
        {
          title: 'The problem of chromatic tuning',
          description: 'Even when an instrument is tuned to concert pitch A = 432 Hz, the scale remains chromatic — equal temperament. In the natural harmonic series, all tones arise in natural ratios to the fundamental, based on cosmic laws. Chromatic tuning distorts these ratios. This means: every note except A falls outside the natural harmonic series and thus outside the natural order of sound.',
        },
        {
          title: 'Why \u201c432 Hz\u201d on a handpan doesn\u2019t heal',
          description: 'A handpan plays a scale with many different notes — not a single frequency. If you buy an instrument with concert pitch A = 432 Hz, the scale is still chromatically tuned. Only the note A vibrates at 432 Hz — all other notes cannot, from the perspective of the natural harmonic series, be brought into any framework of healing, balancing, or alignment.',
        },
        {
          title: 'The frequency alone doesn\u2019t make a good instrument',
          description: 'Whether A4 sits at 432 or 440 Hz is secondary. What truly matters is the quality of the overall sound: the overtone spectrum, the resonance between notes, the purity of tuning, the sustain, the material tone, and the crosstalk characteristics between tone fields.',
        },
        {
          title: 'What actually matters',
          description: 'For vibration to reach and work at the deepest soul and body level, the entire instrument must be coherent. The scale must suit you, the maker must understand their craft, and the instrument must have a soul — a presence that transcends technical perfection. No frequency number can replace that.',
        },
      ],
      closing: 'Don\u2019t be guided by numbers. Let the sound find you.',
    },
    booking: {
      eyebrow: 'Ready?',
      title: 'Book Your Session',
      description: 'In a personal conversation, I sense your vibrational quality and together we discover which instrument belongs to you.',
    },
  },
}

const iconMap = {
  ear: Ear,
  music: Music,
  sparkles: Sparkles,
  network: Network,
}

export default function SoulMatchingPage() {
  const [lang, setLang] = useState<Lang>('de')
  const t = content[lang]

  return (
    <>
      {/* Floating Language Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center rounded-full bg-background/80 backdrop-blur-lg border border-divider overflow-hidden"
        >
          <button
            onClick={() => setLang('de')}
            className={`px-4 py-2 text-xs font-sans font-medium tracking-wide uppercase transition-all duration-300 ${
              lang === 'de'
                ? 'bg-accent text-background'
                : 'text-muted hover:text-foreground'
            }`}
          >
            DE
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 text-xs font-sans font-medium tracking-wide uppercase transition-all duration-300 ${
              lang === 'en'
                ? 'bg-accent text-background'
                : 'text-muted hover:text-foreground'
            }`}
          >
            EN
          </button>
        </motion.div>
      </div>

      {/* Hero — with Gate theme from landing page */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
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

        {/* Portal rings */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          {[420, 310, 210].map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 0.8 , scale: 1 }}
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
                  scale: [1, 1 + 0.015 * (3 - i), 1],
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
                    i === 2
                      ? '0 0 40px rgba(200,169,106,0.07), inset 0 0 40px rgba(200,169,106,0.04)'
                      : undefined,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gate arch */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.92 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 3, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            width: 360,
            top: '10%',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            borderTop: '1px solid rgba(200,169,106,0.2)',
            borderLeft: '1px solid rgba(200,169,106,0.1)',
            borderRight: '1px solid rgba(200,169,106,0.1)',
            borderBottom: 'none',
            borderRadius: '180px 180px 0 0',
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
            width: 300,
            top: '14%',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            borderTop: '1px solid rgba(200,169,106,0.1)',
            borderLeft: '1px solid rgba(200,169,106,0.06)',
            borderRight: '1px solid rgba(200,169,106,0.06)',
            borderBottom: 'none',
            borderRadius: '150px 150px 0 0',
            pointerEvents: 'none',
          }}
        />

        {/* Noise */}
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-32 pb-20 md:pt-40 md:pb-28 px-6">
          {/* Logo — original size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
            className="mb-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-light.svg"
              alt="Grail Instruments"
              width={120}
              height={157}
              className="w-28 md:w-32"
            />
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ width: 32, height: 1, background: 'rgba(200,169,106,0.45)', marginBottom: 20 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-caption uppercase tracking-[0.2em] text-accent mb-4"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-display-md md:text-display-lg text-foreground mb-4 max-w-3xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-body-lg text-muted max-w-xl mb-10"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col items-center gap-5"
          >
            {/* Sigil CTA — same size as landing page, but glowing */}
            <a
              href="#booking"
              className="group relative flex items-center justify-center cursor-pointer"
              style={{ width: 64, height: 64 }}
            >
              {/* Ambient glow — always visible */}
              <div
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200,169,106,0.18) 0%, transparent 70%)',
                  transition: 'opacity 0.5s',
                }}
                className="group-hover:opacity-100 opacity-80"
              />
              {/* Outer pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1px solid rgba(200,169,106,0.6)',
                }}
              />
              {/* Static ring — strong */}
              <div
                className="group-hover:border-accent/80 group-hover:shadow-[0_0_20px_rgba(200,169,106,0.25)]"
                style={{
                  position: 'absolute',
                  inset: 8,
                  borderRadius: '50%',
                  border: '1px solid rgba(200,169,106,0.5)',
                  boxShadow: '0 0 12px rgba(200,169,106,0.1)',
                  transition: 'border-color 0.5s, box-shadow 0.5s',
                }}
              />
              {/* Symbol — bright */}
              <span
                className="group-hover:text-accent"
                style={{
                  fontSize: 18,
                  color: 'rgba(200,169,106,0.9)',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                  transition: 'color 0.5s',
                }}
              >
                ∴
              </span>
            </a>

            {/* Label — clearly legible */}
            <a
              href="#booking"
              className="hover:text-accent-light transition-colors duration-500"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase' as const,
                color: 'rgba(200,169,106,0.85)',
                textDecoration: 'none',
              }}
            >
              {t.hero.cta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* About / Service — 3 Pillars */}
      <Section>
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />

        {/* Portrait + Name */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <div
            className="mb-5"
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid rgba(200,169,106,0.35)',
              boxShadow: '0 0 24px rgba(200,169,106,0.12)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/nils-portrait.jpg"
              alt="Nils Caspar"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <p className="font-serif text-foreground text-lg tracking-wide">Nils Caspar</p>
          <p className="text-caption text-muted tracking-widest uppercase mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}>
            {lang === 'de' ? 'Handpan-Berater & Lehrer' : 'Handpan Consultant & Teacher'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.about.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-divider rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{pillar.title}</h3>
                <p className="text-body-sm text-muted">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Divider withGradient />

      {/* Two Paths */}
      <Section>
        <SectionHeader
          eyebrow={t.paths.eyebrow}
          title={t.paths.title}
          description={t.paths.description}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Path 1 — Primary / Recommended */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-accent/30 rounded-lg relative"
            style={{
              background: 'linear-gradient(180deg, rgba(200,169,106,0.06) 0%, rgba(11,13,20,0) 100%)',
            }}
          >
            {/* Recommended badge */}
            <div className="absolute -top-3 left-8">
              <span className="px-3 py-1 bg-accent text-background text-xs font-sans font-medium tracking-wide uppercase rounded-sm">
                {t.paths.recommended}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Search size={24} />
              </div>
              <h3 className="font-serif text-xl text-foreground">{t.paths.path1.title}</h3>
            </div>
            <p className="text-muted mb-6">{t.paths.path1.description}</p>
            <ul className="space-y-3 mb-8">
              {t.paths.path1.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#booking" size="md">
              {t.paths.path1.cta}
            </Button>
          </motion.div>

          {/* Path 2 — Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-divider rounded-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-xl text-foreground">{t.paths.path2.title}</h3>
            </div>
            <p className="text-muted mb-6">{t.paths.path2.description}</p>
            <ul className="space-y-3 mb-8">
              {t.paths.path2.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-body-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="#booking" variant="secondary" size="md">
              {t.paths.path2.cta}
            </Button>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-4 p-6 bg-accent/5 border border-accent/10 rounded-lg">
            <Heart size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <p className="text-body-sm text-muted italic">{t.paths.note}</p>
          </div>
        </motion.div>
      </Section>

      <Divider withGradient />

      {/* 432 Hz Section */}
      <Section>
        <SectionHeader
          eyebrow={t.frequency.eyebrow}
          title={t.frequency.title}
        />

        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted text-body-md mb-12 text-center"
          >
            {t.frequency.intro}
          </motion.p>

          <div className="space-y-8">
            {t.frequency.myths.map((myth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <span className="text-display-md font-serif text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {myth.title}
                  </h3>
                  <p className="text-muted">{myth.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-accent italic font-serif text-xl"
          >
            {t.frequency.closing}
          </motion.p>
        </div>
      </Section>

      <Divider withGradient />

      {/* TidyCal Booking */}
      <Section id="booking">
        <SectionHeader
          eyebrow={t.booking.eyebrow}
          title={t.booking.title}
          description={t.booking.description}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden border border-divider"
          >
            <iframe
              src="https://tidycal.com/handpanschule"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a consultation"
              className="w-full"
            />
          </motion.div>
        </div>
      </Section>

      {/* Footer Links */}
      <div className="py-8 flex justify-center items-center gap-5">
        <a href="/imprint" className="text-muted-dark hover:text-muted transition-colors" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Imprint
        </a>
        <span style={{ color: 'rgba(200,169,106,0.2)', fontSize: '0.6rem' }}>·</span>
        <a href="/privacy" className="text-muted-dark hover:text-muted transition-colors" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Privacy
        </a>
      </div>
    </>
  )
}
