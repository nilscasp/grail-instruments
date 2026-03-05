'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

const BREVO_ACTION =
  'https://f66d0849.sibforms.com/serve/MUIFAGD_t1ZfyODSAtL3ujrjeztV0bIWI8tqRaS1tMm9Alz3ozt_T3UKzT9bntwzoky9UUVwyEM0aiA9b8YRwiwCjMQXjSdx2LSRjETYC5xbH4r1xv9sZxKRhjEucvJrm9q4Mi2PnJIyyMTwHrnblhdMnbuqSY6vP23maT7l0mzHV11fjXRtMyljvFXo1F-X69yD3_jsFnzkXAuw'

export function NewsletterForm({ variant = 'stacked', className }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await fetch(BREVO_ACTION, {
        method: 'POST',
        mode: 'no-cors', // Brevo accepts cross-origin POSTs; response is opaque but email is saved
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          EMAIL: email,
          email_address_check: '',
          locale: 'de',
        }).toString(),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('text-center py-4', className)}>
        <p className="text-body-md text-muted mb-1">Du bist auf der Liste.</p>
        <p className="text-body-sm text-muted-dark">Wir melden uns.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        variant === 'stacked' ? 'space-y-3' : 'flex gap-3',
        className
      )}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Deine E-Mail"
        required
        className={cn('input', variant === 'stacked' ? 'w-full' : 'flex-1')}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          'btn-primary',
          variant === 'stacked' ? 'w-full' : 'whitespace-nowrap flex-shrink-0'
        )}
      >
        {status === 'loading' ? '·  ·  ·' : 'ENTER'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-rose-400 text-center pt-1">
          Anmeldung fehlgeschlagen. Bitte erneut versuchen.
        </p>
      )}
    </form>
  )
}
