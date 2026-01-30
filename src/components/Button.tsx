import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  external?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled = false,
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide uppercase transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-accent text-background hover:bg-accent-light active:bg-accent-dark',
    secondary: 'bg-transparent border border-accent text-accent hover:bg-accent/10 active:bg-accent/20',
    ghost: 'text-muted hover:text-foreground',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const combinedStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
