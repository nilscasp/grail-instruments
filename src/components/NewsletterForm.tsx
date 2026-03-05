'use client'

import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  variant?: 'inline' | 'stacked'
  className?: string
}

const BREVO_ACTION =
  'https://f66d0849.sibforms.com/serve/MUIFAGD_t1ZfyODSAtL3ujrjeztV0bIWI8tqRaS1tMm9Alz3ozt_T3UKzT9bntwzoky9UUVwyEM0aiA9b8YRwiwCjMQXjSdx2LSRjETYC5xbH4r1xv9sZxKRhjEucvJrm9q4Mi2PnJIyyMTwHrnblhdMnbuqSY6vP23maT7l0mzHV11fjXRtMyljvFXo1F-X69yD3_jsFnzkXAuw'

export function NewsletterForm({ variant = 'inline', className }: NewsletterFormProps) {
  return (
    <div id="sib-form-container" className={cn('sib-form-container', className)}>
      {/* Error message – shown by Brevo JS on failure */}
      <div
        id="error-message"
        className="sib-form-message-panel mb-4 px-4 py-3 text-sm text-rose-400 border border-rose-800/50 bg-rose-900/20 rounded-sm"
        style={{ display: 'none' }}
      >
        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span className="sib-form-message-panel__inner-text">
            Anmeldung fehlgeschlagen. Bitte versuche es erneut.
          </span>
        </div>
      </div>

      {/* Success message – shown by Brevo JS on success */}
      <div
        id="success-message"
        className="sib-form-message-panel mb-4 px-4 py-3 text-sm text-emerald-400 border border-emerald-800/50 bg-emerald-900/20 rounded-sm"
        style={{ display: 'none' }}
      >
        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
          <span className="sib-form-message-panel__inner-text">
            Du bist auf der Liste. Wir melden uns.
          </span>
        </div>
      </div>

      {/* Brevo form – submit intercepted by main.js for AJAX handling */}
      <form
        id="sib-form"
        method="POST"
        action={BREVO_ACTION}
        data-type="subscription"
        className={variant === 'stacked' ? 'space-y-3' : 'flex gap-3'}
      >
        <div className={cn('sib-input sib-form-block', variant === 'stacked' ? '' : 'flex-1')}>
          <div className="form__entry entry_block">
            <div className="form__label-row">
              <div className="entry__field">
                <input
                  type="text"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="email"
                  placeholder="Deine E-Mail"
                  required
                  data-required="true"
                  className="input w-full"
                />
              </div>
            </div>
            <label
              className="entry__error entry__error--primary"
              style={{ display: 'none', fontSize: '12px', color: '#f87171', marginTop: '4px' }}
            />
          </div>
        </div>

        <div className={cn('sib-form-block', variant === 'stacked' ? '' : 'flex-shrink-0')}>
          <button
            type="submit"
            className={cn('btn-primary sib-form-block__button sib-form-block__button-with-loader', variant === 'stacked' ? 'w-full' : 'whitespace-nowrap')}
          >
            {/* Spinner icon – shown by Brevo JS during submission */}
            <svg
              className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
              viewBox="0 0 512 512"
              width="16"
              height="16"
              style={{ display: 'none' }}
            >
              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
            </svg>
            ENTER
          </button>
        </div>

        {/* Brevo honeypot – must remain empty */}
        <input
          type="text"
          name="email_address_check"
          defaultValue=""
          className="input--hidden"
          style={{ display: 'none' }}
          readOnly
        />
        <input type="hidden" name="locale" value="de" />
      </form>
    </div>
  )
}
