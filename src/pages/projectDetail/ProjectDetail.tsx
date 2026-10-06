import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'

import ProjectVideo from '../../components/project/ProjectVideo'
import { projects } from '../../data/projects'
import { useLanguage } from '../../hooks/LanguageContext'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { language, t } = useLanguage()

  const project = projects.find(
    (item) => item.slug === slug,
  )

  if (!project) {
    return <ProjectNotFound />
  }

  const translatedProject =
    t.projects.page.projects[project.translationKey]

  const translatedCategory =
    t.projects.page.categories[project.category]

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* =========================================
          HERO
      ========================================== */}

      <section className="border-b border-[var(--color-border-subtle)] py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          {/* Back link */}

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {t.actions.back}
          </Link>

          {/* Hero content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            className="mt-16 max-w-5xl"
          >
            {/* Category + project number */}

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {translatedCategory}
              </p>

              <span
                className="text-[var(--color-text-tertiary)]"
                aria-hidden="true"
              >
                /
              </span>

              <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {String(project.order).padStart(2, '0')}
              </p>
            </div>

            {/* Title */}

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
              {translatedProject.title}
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--color-text-secondary)]">
              {translatedProject.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          CONTENT
      ========================================== */}

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            {/* =====================================
                MAIN CONTENT
            ====================================== */}

            <div className="space-y-16">
              {/* Context */}

              <DetailSection
                number="01"
                title={
                  language === 'fr'
                    ? 'Contexte'
                    : 'Context'
                }
              >
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  {translatedProject.context}
                </p>
              </DetailSection>

              {/* Objective */}

              <DetailSection
                number="02"
                title={
                  language === 'fr'
                    ? 'Objectif'
                    : 'Objective'
                }
              >
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  {translatedProject.objective}
                </p>
              </DetailSection>

              {/* Features */}

              <DetailSection
                number="03"
                title={
                  language === 'fr'
                    ? 'Fonctionnalités'
                    : 'Features'
                }
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {translatedProject.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                      >
                        <Check
                          size={17}
                          strokeWidth={1.8}
                          className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                          aria-hidden="true"
                        />

                        <span className="text-sm leading-6 text-[var(--color-text-secondary)]">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </DetailSection>

              {/* Technical approach */}

              <DetailSection
                number="04"
                title={
                  language === 'fr'
                    ? 'Approche technique'
                    : 'Technical approach'
                }
              >
                <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                  {translatedProject.technicalApproach}
                </p>
              </DetailSection>

              {/* Video */}

              {project.video &&
                translatedProject.videoTitle && (
                  <DetailSection
                    number="05"
                    title={
                      language === 'fr'
                        ? 'Démonstration'
                        : 'Demo'
                    }
                  >
                    <ProjectVideo
                      video={project.video}
                      title={
                        translatedProject.videoTitle
                      }
                    />
                  </DetailSection>
                )}
            </div>

            {/* =====================================
                SIDEBAR
            ====================================== */}

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                {/* Technologies */}

                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                  {language === 'fr'
                    ? 'Technologies'
                    : 'Technologies'}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="border border-[var(--color-border)] bg-[var(--color-surface-secondary)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--color-text-secondary)]"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                {/* Category */}

                <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                    {language === 'fr'
                      ? 'Catégorie'
                      : 'Category'}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--color-text-primary)]">
                    {translatedCategory}
                  </p>
                </div>

                {/* Project */}

                <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                    {language === 'fr'
                      ? 'Projet'
                      : 'Project'}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--color-text-primary)]">
                    {translatedProject.title}
                  </p>
                </div>
              </div>

              {/* Back button */}

              <Link
                to="/projects"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[var(--color-border)] px-5 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)]"
              >
                {t.actions.back}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

/* =========================================
   DETAIL SECTION
========================================= */

interface DetailSectionProps {
  number: string
  title: string
  children: React.ReactNode
}

function DetailSection({
  number,
  title,
  children,
}: DetailSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
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
        duration: 0.6,
      }}
    >
      {/* Section number */}

      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-[var(--color-accent)]">
          {number}
        </span>

        <div className="h-px flex-1 bg-[var(--color-border-subtle)]" />
      </div>

      {/* Section title */}

      <h2 className="mt-6 text-3xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
        {title}
      </h2>

      {/* Section content */}

      <div className="mt-6">
        {children}
      </div>
    </motion.section>
  )
}

/* =========================================
   PROJECT NOT FOUND
========================================= */

function ProjectNotFound() {
  const { language, t } = useLanguage()

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-5 py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-accent)]">
          404
        </p>

        <h1 className="mt-5 text-5xl font-extrabold text-[var(--color-text-primary)]">
          {language === 'fr'
            ? 'Projet introuvable'
            : 'Project not found'}
        </h1>

        <p className="mt-5 max-w-xl text-[var(--color-text-secondary)]">
          {language === 'fr'
            ? 'Le projet demandé n’existe pas ou n’est plus disponible.'
            : 'The requested project does not exist or is no longer available.'}
        </p>

        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {t.actions.back}
        </Link>
      </div>
    </main>
  )
}