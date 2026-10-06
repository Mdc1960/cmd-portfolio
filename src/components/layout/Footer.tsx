import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from 'lucide-react'
import {
  SiGithub,
  SiLinkerd,
} from '@icons-pack/react-simple-icons'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import {SITE_CONFIG} from '../../lib/constants'

import { useLanguage } from '../../hooks/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-[1200px] px-5">
        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          {/* Identity */}
          <div>
            <Link
              to="/"
              className="inline-block text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              MC<span className="text-[var(--color-accent)]">.</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-text-secondary)]">
              {t.footer.description}
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <SiGithub size={18} />
              </a>

              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <SiLinkerd size={18} />
              </a>

              <a
                href='mailto:mamadou.coulibaly@etu.univ-tours.fr'
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <Mail size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.footer.navigationTitle}
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.home}
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.about}
              </Link>

              <Link
                to="/skills"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.skills}
              </Link>

              <Link
                to="/experience"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.experience}
              </Link>

              <Link
                to="/projects"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.projects}
              </Link>

              <Link
                to="/education"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.education}
              </Link>

              <Link
                to="/certifications"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.certifications}
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {t.navigation.contact}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              {t.footer.contactTitle}
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:mamadou.coulibaly@etu.univ-tours.fr"
                className="group flex items-start gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0"
                />

                <span className="break-all">
                  mamadou.coulibaly@etu.univ-tours.fr
                </span>
              </a>

              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                <SiGithub size={17} />

                <span>GitHub</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                <SiLinkerd size={17} />

                <span>LinkedIn</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--color-border)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            {t.footer.copyright.replace(
              '{year}',
              String(currentYear),
            )} - {t.footer.builtWith}
          </p>

          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex w-fit items-center gap-2 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            {t.footer.backToTop}

            <ArrowUp
              size={15}
              strokeWidth={1.8}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}