import { PageHeader, Section } from '@/components'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <Section className="pt-0">
        <div className="max-w-prose mx-auto prose-grail">
          <p className="text-muted">Last updated: January 2024</p>

          <h2>1. Introduction</h2>
          <p>
            Grail Instruments (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address when you submit inquiries or applications.</li>
            <li><strong>Communication Data:</strong> Records of correspondence when you contact us.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
            <li><strong>Preference Data:</strong> Information about your preferences, including preferred scales, budget ranges, and experience level when provided.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Respond to your inquiries and applications</li>
            <li>Match you with appropriate instruments</li>
            <li>Send you updates about new instruments (only if you&apos;ve subscribed)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your data with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under applicable data protection laws, you may have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For questions about this privacy policy or to exercise your rights, please contact us through our application form or via the contact information provided in our imprint.
          </p>
        </div>
      </Section>
    </>
  )
}
