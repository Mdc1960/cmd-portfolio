import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { useLanguage } from '../../hooks/LanguageContext'
import { cvUrl } from '../../data/cv'


export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_380px] lg:gap-20 lg:py-20">
          
          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="mb-6 font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.home.hero.eyebrow}
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.home.hero.title}
            </h1>

            <h2 className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text-primary)] sm:text-3xl">
              {t.home.hero.role}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {t.home.hero.description}
            </p>

            {/* Disponibilité */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="flex items-center gap-2 font-medium text-[var(--color-text-primary)]">
                <span
                  className="h-2 w-2 rounded-full bg-[var(--color-success)]"
                  aria-hidden="true"
                />

                {t.home.hero.availability}
              </span>

              <span
                className="text-[var(--color-text-tertiary)]"
                aria-hidden="true"
              >
                ·
              </span>

              <span className="text-[var(--color-text-secondary)]">
                {t.home.hero.duration}
              </span>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                {t.home.hero.viewProjects}

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />

                {t.home.hero.contactMe}
              </Link>
              {/* CV */}
            <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
            <Download
                size={17}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
            />

            {t.home.hero.downloadCv}
            </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: 'easeOut',
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-[var(--color-border-subtle)]" />

              <div className="relative h-[360px] w-[300px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-secondary)] sm:h-[440px] sm:w-[360px]">
                <img
                  src="/images/profile/mamadou-coulibaly.webp"
                  alt="Mamadou Coulibaly"
                  className="h-full w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-sm sm:block">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  Software · AI
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  Polytech Tours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indication de défilement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden justify-center pb-8 lg:flex"
        >
          <a
            href="#profile"
            className="group inline-flex flex-col items-center gap-2 text-[var(--color-text-tertiary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <span className="text-xs font-medium">
              {t.home.hero.scroll}
            </span>

            <ArrowDown
              size={16}
              strokeWidth={1.6}
              className="transition-transform group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}