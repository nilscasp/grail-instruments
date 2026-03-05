import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background text-center px-8">
      <p className="text-display-xl font-serif text-accent/20 mb-4">404</p>
      <p className="text-body-md text-muted mb-8">Diese Seite existiert nicht.</p>
      <Link
        href="/"
        className="text-body-sm text-muted-dark hover:text-muted transition-colors"
        style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.65rem' }}
      >
        ← Zurück
      </Link>
    </div>
  )
}
