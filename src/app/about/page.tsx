'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageHeader, Section, Button } from '@/components'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        description="The story behind Grail Instruments—and why we do things differently."
      />

      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden bg-surface-elevated">
              <Image
                src="/images/about-founder.jpg"
                alt="Nils Caspar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display-md font-serif text-foreground mb-6">
              A Personal Obsession
            </h2>
            <div className="space-y-4 text-muted">
              <p>
                Grail Instruments grew from a simple frustration: finding a truly exceptional handpan is hard. The market is crowded with instruments of wildly varying quality, and the information available is often marketing rather than truth.
              </p>
              <p>
                I&apos;m Nils Caspar, and I&apos;ve spent years playing, collecting, and obsessing over these instruments. What started as personal research—testing dozens of handpans to find the ones that actually moved me—eventually became something others found valuable too.
              </p>
              <p>
                Now, Grail Instruments exists to share that process. Every instrument here has been personally played, evaluated, and documented before it reaches you. We don&apos;t sell everything we find—far from it. We sell only what passes our standards.
              </p>
              <p>
                This isn&apos;t a business built for scale. It&apos;s built for quality—and for the people who can tell the difference.
              </p>
            </div>
            <p className="mt-6 text-accent italic">
              — Nils
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-md font-serif text-foreground mb-4">
              What We Believe
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Quality over quantity',
                description: 'We reject far more instruments than we accept. Our reputation depends on every single piece meeting our standards—no exceptions.',
              },
              {
                title: 'Honesty over hype',
                description: 'Our listening notes tell you what an instrument actually sounds like, not what would make it sell faster. If there\'s a weakness, we\'ll mention it.',
              },
              {
                title: 'Matching over selling',
                description: 'We care that you get the right instrument, not just any instrument. Sometimes that means suggesting you wait for something else.',
              },
              {
                title: 'Experience over specs',
                description: 'Specs matter, but they don\'t tell the whole story. What matters is how an instrument makes you feel when you play it.',
              },
            ].map((belief, index) => (
              <motion.div
                key={belief.title}
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
                    {belief.title}
                  </h3>
                  <p className="text-muted">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-serif text-foreground mb-6"
          >
            Ready to Begin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted mb-8"
          >
            Whether you&apos;re looking for your first handpan or your fifth, we&apos;re here to help you find the right one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/instruments" size="lg">
              Browse Instruments
            </Button>
            <Button href="/apply" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
