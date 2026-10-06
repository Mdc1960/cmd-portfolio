import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  MapPin,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { useLanguage } from '../../hooks/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  const experience = t.experience.page.experiences.caTitres

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.experience.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.experience.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.experience.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main experience */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.experience.page.current}
            </p>
          </motion.div>

          <div className="relative mt-12">
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[var(--color-border)] md:block" />

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{ duration: 0.6 }}
              className="relative md:pl-16"
            >
              {/* Timeline marker */}
              <div
                className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] md:flex"
                aria-hidden="true"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
              </div>

              <div className="border border-[var(--color-border)] bg-[var(--color-surface)]">
                {/* Header */}
                <div className="border-b border-[var(--color-border)] p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-secondary)] text-[var(--color-accent)]"
                          aria-hidden="true"
                        >
                          <BriefcaseBusiness
                            size={20}
                            strokeWidth={1.7}
                          />
                        </div>

                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                            {experience.period}
                          </p>

                          <h2 className="mt-1 text-2xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
                            {experience.company}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                        {experience.role}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <MapPin
                          size={15}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <div className="max-w-xl">
                      <p className="text-base leading-7 text-[var(--color-text-secondary)]">
                        {experience.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_280px] lg:gap-16">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                      {experience.description}
                    </h3>

                    <ul className="mt-7 space-y-4">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex gap-3"
                          >
                            <span
                              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-secondary)] text-[var(--color-accent)]"
                              aria-hidden="true"
                            >
                              <Check
                                size={13}
                                strokeWidth={2}
                              />
                            </span>

                            <span className="text-sm leading-7 text-[var(--color-text-secondary)]">
                              {responsibility}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <aside>
                    <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                      {experience.technologiesLabel}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="border border-[var(--color-border)] bg-[var(--color-surface-secondary)] px-3 py-2 font-mono text-xs font-medium text-[var(--color-text-secondary)]"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  </aside>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
                {t.experience.page.methodology.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl">
                {t.experience.page.methodology.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                {t.experience.page.methodology.description}
              </p>

              <ul className="mt-8 space-y-4">
                {t.experience.page.methodology.points.map(
                  (point) => (
                    <li
                      key={point}
                      className="flex items-start gap-4 border-b border-[var(--color-border-subtle)] pb-4"
                    >
                      <span className="font-mono text-xs font-semibold text-[var(--color-accent)]">
                        →
                      </span>

                      <span className="text-sm leading-6 text-[var(--color-text-primary)]">
                        {point}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-8 border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10 lg:flex-row lg:items-center"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl">
                {t.experience.page.cta.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
                {t.experience.page.cta.description}
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {t.experience.page.cta.button}

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}