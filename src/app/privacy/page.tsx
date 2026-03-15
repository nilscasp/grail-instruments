export const metadata = {
  title: 'Privacy Policy',
}

const h2Style: React.CSSProperties = {
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(200,169,106,0.6)',
  marginBottom: 12,
  marginTop: 0,
  fontWeight: 400,
}

const pStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  lineHeight: 1.8,
  color: 'rgba(220,210,195,0.7)',
  marginBottom: 12,
}

const linkStyle: React.CSSProperties = {
  color: 'rgba(200,169,106,0.75)',
  textDecoration: 'none',
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0E14', padding: '80px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        <a href="/" style={{ display: 'inline-block', marginBottom: 48, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,169,106,0.6)', textDecoration: 'none' }}>
          ← Back
        </a>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2rem', fontWeight: 400, letterSpacing: '0.05em', color: 'rgba(220,210,195,0.95)', marginBottom: 8, marginTop: 0 }}>
          Privacy Policy
        </h1>
        <div style={{ width: 32, height: 1, background: 'rgba(200,169,106,0.45)', marginBottom: 8 }} />
        <p style={{ ...pStyle, marginBottom: 48, fontSize: '0.75rem', color: 'rgba(220,210,195,0.35)' }}>
          Last updated: March 2026
        </p>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>1. Controller</h2>
          <p style={pStyle}>
            Responsible for data processing on this website:<br />
            Nils Caspar Böhm<br />
            Bahnhofstr. 39, 85386 Eching, Germany<br />
            <a href="mailto:info@grail-instruments.com" style={linkStyle}>info@grail-instruments.com</a>
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>2. Data We Collect</h2>
          <p style={pStyle}>
            When you visit this website, our hosting provider (GitHub Pages) automatically logs
            technical access data such as IP address, browser type, and time of access. This data
            is processed solely for security and operational purposes.
          </p>
          <p style={pStyle}>
            When you subscribe to our newsletter, we collect your email address. This is the only
            personal data we actively request.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>3. Newsletter — Brevo</h2>
          <p style={pStyle}>
            Newsletter subscriptions are processed via Brevo (Sendinblue SAS, 55 rue d&apos;Amsterdam,
            75008 Paris, France). When you subscribe, your email address is transmitted to and stored
            by Brevo for the purpose of sending you updates about Grail Instruments.
          </p>
          <p style={pStyle}>
            You may unsubscribe at any time by clicking the unsubscribe link in any newsletter email.
            Brevo&apos;s privacy policy:{' '}
            <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              brevo.com/legal/privacypolicy
            </a>
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>4. Hosting</h2>
          <p style={pStyle}>
            This website is hosted on GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. Street,
            San Francisco, CA 94107, USA). GitHub may collect technical access data as part of
            their hosting service. For details, see{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              GitHub&apos;s Privacy Statement
            </a>.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>5. Fonts</h2>
          <p style={pStyle}>
            This website uses self-hosted fonts. No requests are made to Google Fonts or any
            external font provider. No font-related data is transmitted to third parties.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>6. Cookies & Tracking</h2>
          <p style={pStyle}>
            This website does not use cookies or any analytics or tracking tools. No behavioral
            data is collected or stored.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>7. Your Rights (GDPR)</h2>
          <p style={pStyle}>
            Under the GDPR you have the right to access, rectify, erase, restrict, or port your
            personal data, and to object to its processing. To exercise these rights, contact us at{' '}
            <a href="mailto:info@grail-instruments.com" style={linkStyle}>info@grail-instruments.com</a>.
          </p>
          <p style={pStyle}>
            You also have the right to lodge a complaint with a supervisory authority. The competent
            authority for Bavaria is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA),
            Promenade 27, 91522 Ansbach.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>8. Changes to this Policy</h2>
          <p style={pStyle}>
            We may update this policy as our services evolve. The current version is always
            available at grail-instruments.com/privacy.
          </p>
        </section>

      </div>
    </div>
  )
}
