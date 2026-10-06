import { Brain, Code2, Database, Globe } from 'lucide-react'
import { motion } from 'motion/react'

import { useLanguage } from '../../hooks/LanguageContext'

export default function Profile() {
  const { t } = useLanguage()

  return (
    <section
      id="profile"
      className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
            {t.profile.section.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl">
            {t.profile.section.title}
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-xl font-medium leading-8 text-[var(--color-text-primary)]">
              {t.profile.section.introduction}
            </p>

            <p className="text-base leading-8 text-[var(--color-text-secondary)]">
              {t.profile.section.paragraph}
            </p>

            <p className="border-l-2 border-[var(--color-accent)] pl-5 text-base leading-8 text-[var(--color-text-secondary)]">
              {t.profile.section.goal}
            </p>
          </motion.div>

          {/* Profile information */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-fit rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
              {t.profile.section.profile.title}
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {t.profile.section.profile.educationLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.profile.section.profile.education}
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {t.profile.section.profile.specializationLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.profile.section.profile.specialization}
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {t.profile.section.profile.locationLabel}
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-text-primary)]">
                  {t.profile.section.profile.location}
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Areas of interest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border-t border-[var(--color-border)] pt-10"
        >
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            {t.profile.section.focus.title}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Software */}
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <Code2
                size={22}
                strokeWidth={1.7}
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                {t.profile.section.focus.software}
              </p>
            </div>

            {/* Web */}
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <Globe
                size={22}
                strokeWidth={1.7}
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                {t.profile.section.focus.web}
              </p>
            </div>

            {/* AI */}
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <Brain
                size={22}
                strokeWidth={1.7}
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                {t.profile.section.focus.ai}
              </p>
            </div>

            {/* Data */}
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <Database
                size={22}
                strokeWidth={1.7}
                className="text-[var(--color-accent)]"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-semibold text-[var(--color-text-primary)]">
                {t.profile.section.focus.data}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}