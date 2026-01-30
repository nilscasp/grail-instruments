import { PageHeader, Section } from '@/components'

export const metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />

      <Section className="pt-0">
        <div className="max-w-prose mx-auto prose-grail">
          <p className="text-muted">Last updated: January 2024</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the Grail Instruments website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Our Services</h2>
          <p>
            Grail Instruments provides a curated selection of handpans through periodic &quot;Portal Drops.&quot; We act as a curator and intermediary, connecting players with quality instruments from various makers.
          </p>

          <h2>3. Application Process</h2>
          <p>
            Submitting an application does not guarantee the purchase of an instrument. We review all applications and reserve the right to accept or decline any application at our sole discretion. Our goal is to match instruments with suitable players.
          </p>

          <h2>4. Pricing and Payment</h2>
          <p>
            All prices are listed in Euros (EUR) unless otherwise specified. Prices are subject to change without notice. Payment terms and methods will be communicated upon acceptance of your application.
          </p>

          <h2>5. Shipping and Delivery</h2>
          <p>
            We ship worldwide. Shipping costs are calculated based on destination and will be provided before purchase confirmation. Import duties, taxes, and customs fees are the responsibility of the buyer.
          </p>

          <h2>6. Returns and Tryout Period</h2>
          <p>
            We offer a tryout period for most instruments. Specific terms, including duration and conditions, will be communicated at the time of purchase. Return shipping costs may be the buyer&apos;s responsibility.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Grail Instruments shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any instruments purchased through our platform.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, audio recordings, and design elements, is the property of Grail Instruments or its content suppliers and is protected by intellectual property laws.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.
          </p>

          <h2>11. Contact</h2>
          <p>
            For questions about these terms, please contact us through our application form.
          </p>
        </div>
      </Section>
    </>
  )
}
