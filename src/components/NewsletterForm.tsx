'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

type Lang = 'de' | 'en'

const BREVO_ACTION =
  'https://f66d0849.sibforms.com/serve/MUIFAGD_t1ZfyODSAtL3ujrjeztV0bIWI8tqRaS1tMm9Alz3ozt_T3UKzT9bntwzoky9UUVwyEM0aiA9b8YRwiwCjMQXjSdx2LSRjETYC5xbH4r1xv9sZxKRhjEucvJrm9q4Mi2PnJIyyMTwHrnblhdMnbuqSY6vP23maT7l0mzHV11fjXRtMyljvFXo1F-X69yD3_jsFnzkXAuw'

const STRINGS: Record<Lang, {
  placeholder: string
  button: string
  success1: string
  success2: string
  error: string
}> = {
  de: {
    placeholder: 'Deine E-Mail',
    button: 'EINTRETEN',
    success1: 'Du bist auf der Liste.',
    success2: 'Wir melden uns.',
    error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
  },
  en: {
    placeholder: 'Your e-mail',
    button: 'ENTER',
    success1: 'You are on the list.',
    success2: 'We will be in touch.',
    error: 'Something went wrong. Please try again.',
  },
}

export function NewsletterForm({ variant = 'stacked', className }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [lang, setLang] = useState<Lang>('de')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const t = STRINGS[lang]

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
          locale: lang,
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
        <p className="text-body-md text-muted mb-1">{t.success1}</p>
        <p className="text-body-sm text-muted-dark">{t.success2}</p>
      </div>
    )
  }

  const langToggle = (
    <div className="flex justify-center">
      <div className="flex items-center rounded-full border border-divider overflow-hidden">
        <button
          type="button"
          onClick={() => setLang('de')}
          className={cn(
            'px-3 py-1 text-[0.65rem] font-sans font-medium tracking-wide uppercase transition-all duration-300',
            lang === 'de' ? 'bg-accent text-background' : 'text-muted hover:text-foreground'
          )}
          aria-pressed={lang === 'de'}
        >
          DE
        </button>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={cn(
            'px-3 py-1 text-[0.65rem] font-sans font-medium tracking-wide uppercase transition-all duration-300',
            lang === 'en' ? 'bg-accent text-background' : 'text-muted hover:text-foreground'
          )}
          aria-pressed={lang === 'en'}
        >
          EN
        </button>
      </div>
    </div>
  )

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-3', className)}
    >
      {langToggle}

      <div className={cn(variant === 'stacked' ? 'space-y-3' : 'flex gap-3')}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.placeholder}
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
          {status === 'loading' ? '·  ·  ·' : t.button}
        </button>
      </div>

      {status === 'error' && (
        <p className="text-sm text-rose-400 text-center pt-1">
          {t.error}
        </p>
      )}
    </form>
  )
}
