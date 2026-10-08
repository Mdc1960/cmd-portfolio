import {
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react'

import {
  SiGithub,
  SiLinkerd,
} from '@icons-pack/react-simple-icons'


import { motion } from 'motion/react'

import { useLanguage } from '../../hooks/LanguageContext'

export default function Contact() {
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
              {t.contact.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.contact.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.contact.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-5">
          <div className="grid gap-5 md:grid-cols-2">

            {/* Email */}
            <motion.a
              href="mailto:mamadou.coulibaly@etu.univ-tours.fr"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <Mail
                  size={24}
                  strokeWidth={1.7}
                  className="text-[var(--color-accent)]"
                />

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                  className="text-[var(--color-text-tertiary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <p className="mt-8 font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-text-tertiary)]">
                {t.contact.page.email.label}
              </p>

              <p className="mt-2 break-all text-lg font-semibold text-[var(--color-text-primary)]">
                {t.contact.page.email.value}
              </p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8"
            >
              <MapPin
                size={24}
                strokeWidth={1.7}
                className="text-[var(--color-accent)]"
              />

              <p className="mt-8 font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-text-tertiary)]">
                {t.contact.page.location.label}
              </p>

              <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {t.contact.page.location.value}
              </p>
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="group border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <SiLinkerd
                  size={24}
                  className="text-[var(--color-text-primary)]"
                  aria-hidden="true"
                />

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                  className="text-[var(--color-text-tertiary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <p className="mt-8 font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-text-tertiary)]">
                {t.contact.page.linkedin.label}
              </p>

              <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {t.contact.page.linkedin.action}
              </p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Mdc1960"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="group border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-8"
            >
              <div className="flex items-start justify-between">
                <SiGithub
                  size={24}
                  className="text-[var(--color-text-primary)]"
                  aria-hidden="true"
                />

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                  className="text-[var(--color-text-tertiary)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <p className="mt-8 font-mono text-xs font-medium tracking-[0.15em] text-[var(--color-text-tertiary)]">
                {t.contact.page.github.label}
              </p>

              <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                {t.contact.page.github.action}
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      

      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
              {t.contact.page.cta.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              {t.contact.page.cta.description}
            </p>

            <a
              href="mailto:mamadou.coulibaly@etu.univ-tours.fr"
              className="mt-8 inline-flex items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            >
              {t.contact.page.cta.button}

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
              />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}