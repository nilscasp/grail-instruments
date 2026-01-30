'use client'

import { motion } from 'framer-motion'
import { Music, Wrench, Sparkles, Users, Check, FileAudio, Camera } from 'lucide-react'
import { PageHeader, Section, SectionHeader, Button } from '@/components'

export default function CurationPage() {
  return (
    <>
      <PageHeader
        title="Curation"
        description="Every instrument is personally tested for tuning, balance, and the intangible quality that makes you stop and listen."
      />

      {/* Main Criteria */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: Music,
              title: 'Sound',
              description: 'The foundation of everything. We evaluate:',
              criteria: [
                'Tuning accuracy across all notes',
                'Balance between bass, mid, and high registers',
                'Clarity without harshness',
                'Sustain quality and decay character',
                'Harmonic richness and overtone structure',
              ],
            },
            {
              icon: Wrench,
              title: 'Craft',
              description: 'The physical execution of the maker\'s vision:',
              criteria: [
                'Surface finish and consistency',
                'Dimple symmetry and shaping',
                'Shell integrity (no dents or damage)',
                'Protective treatment quality',
                'Overall aesthetic coherence',
              ],
            },
            {
              icon: Sparkles,
              title: 'Soul Factor',
              description: 'The quality that\'s hardest to name but impossible to ignore:',
              criteria: [
                'Does it make you want to keep playing?',
                'Does it have presence—a character of its own?',
                'Does it respond to emotion and intention?',
                'Does it invite you inward, not just impress outward?',
                'Would we want this in our own collection?',
              ],
            },
            {
              icon: Users,
              title: 'Maker Relationship',
              description: 'The human element behind the steel:',
              criteria: [
                'Established track record and consistency',
                'Ethical business practices',
                'Responsiveness and communication',
                'Commitment to player support',
                'Contribution to the community',
              ],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="p-8 bg-surface border border-divider rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <section.icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-foreground">{section.title}</h3>
              </div>
              <p className="text-muted mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-body-sm text-muted">{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What You Receive */}
      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Documentation"
          title="What You Receive"
          description="Every instrument comes with comprehensive documentation so you know exactly what you're getting."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FileAudio,
              title: 'Sound Recordings',
              description: 'Professional audio recordings: full scale demonstrations, ambient improvisations, and close-up note samples.',
            },
            {
              icon: Camera,
              title: 'Photography',
              description: 'High-resolution images from multiple angles, including detail shots of finish, dimples, and any unique characteristics.',
            },
            {
              icon: Music,
              title: 'Listening Notes',
              description: 'Our written assessment: character, strengths, ideal use cases, and honest observations about the instrument\'s personality.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-surface-elevated border border-divider rounded-lg"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-body-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Numbers */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-md font-serif text-foreground mb-4">
              Honest Evaluation
            </h2>
            <p className="text-body-lg text-muted">
              We reject more instruments than we accept. Quality cannot be compromised.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1 in 4', label: 'Instruments pass our initial review' },
              { number: '48+', label: 'Hours spent evaluating each piece' },
              { number: '100%', label: 'Personal playing before listing' },
              { number: '0', label: 'Compromises on tuning or craft' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-display-md font-serif text-accent mb-2">{stat.number}</p>
                <p className="text-body-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md font-serif text-foreground mb-6"
          >
            See the Standard in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-muted mb-8"
          >
            Browse our current selection—each one has passed every test.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/instruments" size="lg">
              Explore Instruments
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
