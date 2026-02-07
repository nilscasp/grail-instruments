'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Send, Loader2, Check } from 'lucide-react'
import { PageHeader, Section, Button, Input, Textarea, Select, Checkbox } from '@/components'
import { budgetRanges, timeframes, experienceLevels } from '@/lib/config'
import { getInstrumentBySlug } from '@/data/instruments'

function ApplyFormContent() {
  const searchParams = useSearchParams()
  const instrumentSlug = searchParams.get('instrument')
  const instrument = instrumentSlug ? getInstrumentBySlug(instrumentSlug) : null

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    country: '',
    city: '',
    experience: '',
    seeking: instrument ? `I'm interested in the ${instrument.maker.name} ${instrument.scaleName} in ${instrument.key}.` : '',
    preferredScales: '',
    budget: '',
    timeframe: '',
    privacyAccepted: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          instrumentSlug: instrumentSlug || undefined,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <Section className="pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <Check size={32} className="text-accent" />
          </div>
          <h1 className="text-display-md font-serif text-foreground mb-4">
            Application Received
          </h1>
          <p className="text-muted mb-8">
            Thank you for reaching out. We read every application personally and will be in touch soon—typically within a few days.
          </p>
          <Button href="/instruments" variant="secondary">
            Continue Browsing
          </Button>
        </motion.div>
      </Section>
    )
  }

  return (
    <>
      <PageHeader
        title="Apply for Your Grail"
        description="Tell us what you're looking for. We respond personally to every inquiry."
      />

      <Section className="pt-0">
        <div className="max-w-2xl mx-auto">
          {/* Instrument Reference */}
          {instrument && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-surface border border-accent/30 rounded-lg"
            >
              <p className="text-caption text-accent mb-1">Inquiring about:</p>
              <p className="text-foreground font-medium">
                {instrument.maker.name} {instrument.scaleName} in {instrument.key}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>

            <Input
              label="WhatsApp (optional)"
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+49 123 456 7890"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Germany"
              />
              <Input
                label="City (optional)"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Berlin"
              />
            </div>

            {/* Experience */}
            <Select
              label="Experience Level"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              options={experienceLevels}
              placeholder="Select your experience"
            />

            {/* What They're Seeking */}
            <Textarea
              label="What are you seeking?"
              name="seeking"
              value={formData.seeking}
              onChange={handleChange}
              required
              placeholder="Tell us about what you're looking for in a handpan—characteristics, feelings, intentions..."
              rows={4}
            />

            <Input
              label="Preferred Scales (optional)"
              name="preferredScales"
              value={formData.preferredScales}
              onChange={handleChange}
              placeholder="e.g., Kurd, Celtic Minor, Integral"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <Select
                label="Budget Range"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                options={budgetRanges}
                placeholder="Select range"
              />
              <Select
                label="Timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                required
                options={timeframes}
                placeholder="When do you need it"
              />
            </div>

            {/* Privacy */}
            <Checkbox
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              required
              label={
                <>
                  I agree to the{' '}
                  <a href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                  . My data will be used only to respond to this inquiry.
                </>
              }
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={status === 'loading' || !formData.privacyAccepted}
              className="w-full"
              size="lg"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Application
                </>
              )}
            </Button>

            {status === 'error' && (
              <p className="text-rose-400 text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </Section>
    </>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <Section className="pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-accent" />
        </div>
      </Section>
    }>
      <ApplyFormContent />
    </Suspense>
  )
}
