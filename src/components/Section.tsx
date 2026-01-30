'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('section-padding', className)}>
      <div className="container-content">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center max-w-2xl mx-auto',
        className
      )}
    >
      {eyebrow && (
        <p className="text-caption uppercase tracking-[0.2em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-md md:text-display-lg text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg text-muted text-balance">{description}</p>
      )}
    </motion.div>
  )
}

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('pt-32 pb-16 md:pt-40 md:pb-20', className)}>
      <div className="container-content text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-lg md:text-display-xl text-foreground mb-4"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-muted max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}

interface DividerProps {
  className?: string
  withGradient?: boolean
}

export function Divider({ className, withGradient = false }: DividerProps) {
  if (withGradient) {
    return (
      <div className={cn('container-content', className)}>
        <div className="h-px bg-gradient-to-r from-transparent via-divider-strong to-transparent" />
      </div>
    )
  }
  return <div className={cn('divider container-content', className)} />
}
