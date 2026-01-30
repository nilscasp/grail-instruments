'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

export function NewsletterForm({ variant = 'inline', className }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setStatus('loading')
    setErrorMessage('')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // In production, this would be an actual API call
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      // })

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('flex items-center gap-3 text-accent', className)}
      >
        <Check size={20} />
        <span className="text-body-md">You&apos;re on the list. We&apos;ll be in touch.</span>
      </motion.div>
    )
  }

  if (variant === 'stacked') {
    return (
      <form onSubmit={handleSubmit} className={cn('space-y-3', className)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="input w-full"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full"
        >
          {status === 'loading' ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              <Send size={16} />
              Join the Waitlist
            </>
          )}
        </button>
        {status === 'error' && (
          <p className="text-body-sm text-rose-400">{errorMessage}</p>
        )}
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex gap-3', className)}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="input flex-1"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary whitespace-nowrap"
      >
        {status === 'loading' ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <>
            <Send size={16} />
            <span className="hidden sm:inline">Join Waitlist</span>
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-body-sm text-rose-400 absolute -bottom-6 left-0">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
