import { ArrowRight, Brain, Code2, Database, Globe } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { useLanguage } from '../../hooks/LanguageContext'

export default function About() {
  const { t } = useLanguage()

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
              {t.about.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.about.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.about.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl">
                  {t.about.page.backgroundTitle}
                </h2>

                <div className="mt-6 space-y-5">
                  <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                    {t.about.page.backgroundParagraph}
                  </p>

                  <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                    {t.about.page.backgroundParagraph2}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl">
                  {t.about.page.approachTitle}
                </h2>

                <p className="mt-6 text-base leading-8 text-[var(--color-text-secondary)]">
                  {t.about.page.approachParagraph}
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-accent)] pl-6">
                <p className="text-lg font-medium leading-8 text-[var(--color-text-primary)]">
                  {t.about.page.objective}
                </p>
              </div>
            </motion.div>

            {/* Profile card */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-fit rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {t.about.page.profileTitle}
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {t.about.page.educationLabel}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[var(--color-text-primary)]">
                    {t.about.page.education}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {t.about.page.specializationLabel}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[var(--color-text-primary)]">
                    {t.about.page.specialization}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {t.about.page.locationLabel}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[var(--color-text-primary)]">
                    {t.about.page.location}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    {t.about.page.availabilityLabel}
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-[var(--color-text-primary)]">
                    {t.about.page.availability}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.about.page.expertiseEyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl">
              {t.about.page.expertiseTitle}
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ExpertiseCard
              icon={<Code2 size={22} strokeWidth={1.7} />}
              title={t.about.page.expertise.software}
            />

            <ExpertiseCard
              icon={<Globe size={22} strokeWidth={1.7} />}
              title={t.about.page.expertise.web}
            />

            <ExpertiseCard
              icon={<Brain size={22} strokeWidth={1.7} />}
              title={t.about.page.expertise.ai}
            />

            <ExpertiseCard
              icon={<Database size={22} strokeWidth={1.7} />}
              title={t.about.page.expertise.data}
            />
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
                {t.about.page.ctaTitle}
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
                {t.about.page.ctaDescription}
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {t.about.page.ctaButton}

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

interface ExpertiseCardProps {
  icon: React.ReactNode
  title: string
}

function ExpertiseCard({ icon, title }: ExpertiseCardProps) {
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div
        className="text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {icon}
      </div>

      <p className="mt-5 text-sm font-semibold text-[var(--color-text-primary)]">
        {title}
      </p>
    </div>
  )
}