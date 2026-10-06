import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-background)] px-5 text-[var(--color-text-primary)]">
      <div className="text-center">
        <p className="font-mono text-sm text-[var(--color-accent)]">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Page introuvable
        </h1>

        <p className="mt-4 text-[var(--color-text-secondary)]">
          La page que vous recherchez n'existe pas.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-[var(--color-accent)] px-5 py-3 font-medium text-white transition hover:bg-[var(--color-accent-hover)]"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}