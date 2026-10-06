import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { useLanguage } from '../../hooks/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()

  const tech = t.skills.page.technologies
  const categories = t.skills.page.categories

  const skillGroups = [
    {
      key: 'software',
      icon: Code2,
      title: categories.software.title,
      description: categories.software.description,
      technologies: [
        tech.java,
        tech.springBoot,
        tech.python,
        tech.c,
        tech.cpp,
      ],
    },
    {
      key: 'web',
      icon: Globe,
      title: categories.web.title,
      description: categories.web.description,
      technologies: [
        tech.typescript,
        tech.javascript,
        tech.react,
        tech.angular,
        tech.vue,
        tech.html,
        tech.css,
        tech.tailwind,
      ],
    },
    {
      key: 'backend',
      icon: Server,
      title: categories.backend.title,
      description: categories.backend.description,
      technologies: [
        tech.fastapi,
        tech.rest,
        tech.jwt,
        tech.jpa,
        tech.microservices,
      ],
    },
    {
      key: 'database',
      icon: Database,
      title: categories.database.title,
      description: categories.database.description,
      technologies: [
        tech.postgresql,
        tech.mysql,
        tech.mariadb,
        tech.mongodb,
        tech.sql,
      ],
    },
    {
      key: 'ai',
      icon: Brain,
      title: categories.ai.title,
      description: categories.ai.description,
      technologies: [
        tech.opencv,
        tech.numpy,
        tech.matplotlib,
        tech.machineLearning,
        tech.imageProcessing,
      ],
    },
    {
      key: 'devops',
      icon: GitBranch,
      title: categories.devops.title,
      description: categories.devops.description,
      technologies: [
        tech.git,
        tech.github,
        tech.gitlab,
        tech.docker,
        tech.cicd,
        tech.jenkins,
        tech.maven,
        tech.npm,
      ],
    },
    {
      key: 'methodology',
      icon: Layers,
      title: categories.methodology.title,
      description: categories.methodology.description,
      technologies: [
        tech.softwareArchitecture,
        tech.designPatterns,
        tech.agile,
        tech.testing,
        tech.apiDesign,
      ],
    },
  ]

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
              {t.skills.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.skills.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.skills.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon

              return (
                <motion.article
                  key={group.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '-80px',
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className={[
                    'group border border-[var(--color-border)]',
                    'bg-[var(--color-surface)] p-6',
                    'transition-colors duration-300',
                    'hover:border-[var(--color-accent)]',
                    'sm:p-7',
                    group.key === 'methodology'
                      ? 'md:col-span-2'
                      : '',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-secondary)] text-[var(--color-accent)]"
                        aria-hidden="true"
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                        />
                      </div>

                      <h2 className="mt-6 text-xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)]">
                        {group.title}
                      </h2>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[var(--color-border)] bg-[var(--color-surface-secondary)] px-3 py-2 font-mono text-xs font-medium text-[var(--color-text-secondary)] transition-colors group-hover:border-[var(--color-border)] group-hover:text-[var(--color-text-primary)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical philosophy */}
      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center"
          >
            <div>
              <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
                {t.skills.page.levels.main}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-4xl">
                {t.skills.page.approach.title}
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
              {t.skills.page.approach.description}
            </p>
          </motion.div>
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
                {t.skills.page.footer.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
                {t.skills.page.footer.description}
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {t.skills.page.footer.button}

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