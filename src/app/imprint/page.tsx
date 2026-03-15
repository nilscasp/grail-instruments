export const metadata = {
  title: 'Imprint',
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

export default function ImprintPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0E14', padding: '80px 24px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>

        <a href="/" style={{ display: 'inline-block', marginBottom: 48, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,169,106,0.6)', textDecoration: 'none' }}>
          ← Back
        </a>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '2rem', fontWeight: 400, letterSpacing: '0.05em', color: 'rgba(220,210,195,0.95)', marginBottom: 8, marginTop: 0 }}>
          Imprint
        </h1>
        <div style={{ width: 32, height: 1, background: 'rgba(200,169,106,0.45)', marginBottom: 48 }} />

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Information pursuant to § 5 TMG</h2>
          <p style={pStyle}>
            Nils Caspar Böhm<br />
            Bahnhofstr. 39<br />
            85386 Eching<br />
            Germany
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Contact</h2>
          <p style={pStyle}>
            Email: <a href="mailto:info@grail-instruments.com" style={linkStyle}>info@grail-instruments.com</a><br />
            Website: <a href="https://grail-instruments.com" style={linkStyle}>grail-instruments.com</a>
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>EU Dispute Resolution</h2>
          <p style={pStyle}>
            The European Commission provides a platform for online dispute resolution:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              ec.europa.eu/consumers/odr
            </a>
          </p>
          <p style={pStyle}>
            We are not obligated or willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Liability for Content</h2>
          <p style={pStyle}>
            As a service provider, we are responsible for our own content pursuant to § 7 Abs. 1 TMG.
            According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored
            third-party information or to investigate circumstances indicating illegal activity.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={h2Style}>Liability for Links</h2>
          <p style={pStyle}>
            Our website may contain links to external websites over whose content we have no control.
            The respective provider or operator is always responsible for the content of linked pages.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Copyright</h2>
          <p style={pStyle}>
            The content and works on these pages are subject to German copyright law.
            Duplication, processing, distribution, or any exploitation outside the limits of
            copyright law requires the written consent of the respective author or creator.
          </p>
        </section>

      </div>
    </div>
  )
}
