'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="label">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'input',
            error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-body-sm text-rose-400">{error}</p>}
      </div>
    )
  }
)
Input.displayName = 'Input'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || props.name

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="label">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'textarea',
            error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-body-sm text-rose-400">{error}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    const selectId = id || props.name

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={selectId} className="label">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'select pr-10',
              error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && <p className="text-body-sm text-rose-400">{error}</p>}
      </div>
    )
  }
)
Select.displayName = 'Select'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string | React.ReactNode
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const checkboxId = id || props.name

    return (
      <div className="space-y-2">
        <label htmlFor={checkboxId} className="flex items-start gap-3 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'mt-1 w-4 h-4 rounded border-divider bg-surface text-accent focus:ring-accent focus:ring-offset-background cursor-pointer',
              className
            )}
            {...props}
          />
          <span className="text-body-sm text-muted">{label}</span>
        </label>
        {error && <p className="text-body-sm text-rose-400">{error}</p>}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
