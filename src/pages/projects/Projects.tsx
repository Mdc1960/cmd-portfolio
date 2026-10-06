import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { projects } from '../../data/projects'
import { useLanguage } from '../../hooks/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)

  const otherProjects = projects
    .filter((project) => !project.featured)
    .sort((a, b) => a.order - b.order)

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
              {t.projects.page.eyebrow}
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {t.projects.page.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {t.projects.page.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              01
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl">
              {t.projects.page.featured}
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER PROJECTS
      ===================================================== */}

      <section className="border-t border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-100px',
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-[var(--color-accent)]">
              02
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-[var(--color-text-primary)] sm:text-5xl">
              {t.projects.page.other}
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[number]
  index: number
  compact?: boolean
}

function ProjectCard({
  project,
  index,
  compact = false,
}: ProjectCardProps) {
  const { t } = useLanguage()

  
  const translatedProject =
    t.projects.page.projects[project.translationKey]

  
  const translatedCategory =
    t.projects.page.categories[project.category]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
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
        delay: index * 0.06,
      }}
      className={[
        'group border border-[var(--color-border)]',
        'bg-[var(--color-surface)]',
        'transition-all duration-300',
        'hover:-translate-y-1',
        'hover:border-[var(--color-accent)]',
        compact ? 'p-6' : 'p-7',
      ].join(' ')}
    >
      <div className="flex h-full flex-col">
        {/* ===================================================
            CATEGORY + NUMBER
        =================================================== */}

        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {translatedCategory}
          </p>

          <span
            className="font-mono text-xs text-[var(--color-text-tertiary)]"
            aria-hidden="true"
          >
            {String(project.order).padStart(2, '0')}
          </span>
        </div>

        {/* ===================================================
            TITLE
        =================================================== */}

        <h3 className="mt-6 text-2xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
          {translatedProject.title}
        </h3>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
          {translatedProject.shortDescription}
        </p>

        {/* ===================================================
            TECHNOLOGIES
        =================================================== */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, compact ? 4 : 6)
            .map((technology) => (
              <span
                key={technology}
                className="border border-[var(--color-border)] bg-[var(--color-surface-secondary)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--color-text-secondary)]"
              >
                {technology}
              </span>
            ))}
        </div>

        {/* ===================================================
            PROJECT LINK
        =================================================== */}

        <div className="mt-auto pt-8">
          <Link
            to={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]"
          >
            {t.projects.page.viewProject}

            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}