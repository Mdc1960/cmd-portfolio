import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'

import { useLanguage } from '../../hooks/LanguageContext'

const educationItems = [
  {
    year: '2023 — 2026',
    key: 'polytech',
  },
  {
    year: '2020 — 2023',
    key: 'estem',
  },
  {
    year: '2019 — 2020',
    key: 'baccalaureat',
  },
] as const

export default function Education() {
  const { t } = useLanguage()

  return (
    <main>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="max-w-4xl"
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.education.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.education.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.education.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION TIMELINE
      ===================================================== */}

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="relative">

            {/* Vertical timeline line */}
            <div
              className="absolute left-[11px] top-3 hidden h-[calc(100%-24px)] w-px bg-[var(--color-border)] sm:block"
              aria-hidden="true"
            />

            <div className="space-y-12 sm:space-y-16">
              {educationItems.map((item, index) => {
                const education =
                  t.education.page.items[item.key]

                return (
                  <motion.article
                    key={item.key}
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-80px',
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="relative sm:pl-12"
                  >
                    {/* Timeline point */}
                    <div
                      className="absolute left-0 top-1 hidden h-[23px] w-[23px] items-center justify-center border border-[var(--color-accent)] bg-[var(--color-background)] sm:flex"
                      aria-hidden="true"
                    >
                      <div className="h-2 w-2 bg-[var(--color-accent)]" />
                    </div>

                    {/* Education card */}
                    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-8">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-accent)]">
                            {item.year}
                          </p>

                          <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] sm:text-3xl">
                            {education.school}
                          </h2>

                          <p className="mt-2 text-base font-medium text-[var(--color-text-secondary)]">
                            {education.degree}
                          </p>
                        </div>

                        <GraduationCap
                          size={24}
                          strokeWidth={1.7}
                          className="shrink-0 text-[var(--color-text-tertiary)]"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                        {education.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}