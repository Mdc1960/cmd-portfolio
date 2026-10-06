import {
  ArrowUpRight,
  Award,
  ExternalLink,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useLanguage } from '../../hooks/LanguageContext'
import { certifications } from '../../data/certifications'

const certificationItems = [
  {
    id: 'certification-1',
    translationKey: 'certification1',
  },
  {
    id: 'certification-2',
    translationKey: 'certification2',
  },
  {
    id: 'certification-3',
    translationKey: 'certification3',
  },
] as const

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <main>
      <section className="border-b border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.certifications.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.certifications.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.certifications.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="grid gap-6 md:grid-cols-2">
            {certificationItems.map((item, index) => {
              const certification = certifications.find(
                (cert) => cert.id === item.id,
              )

              if (!certification) {
                return null
              }

              const translation =
                t.certifications.page.items[item.translationKey]

              return (
                <motion.article
                  key={certification.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '-80px',
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--color-border)] text-[var(--color-accent)]">
                      <Award
                        size={24}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <p className="font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-accent)]">
                      {certification.date}
                    </p>
                  </div>

                  <div className="mt-7">
                    <h2 className="text-2xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
                      {translation.title}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">
                      {certification.organization}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {translation.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    {certification.pdf ? (
                      <a
                        href={certification.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        {t.certifications.page.viewCertificate}

                        <ExternalLink
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-tertiary)]">
                        {t.certifications.page.viewCertificate}

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}