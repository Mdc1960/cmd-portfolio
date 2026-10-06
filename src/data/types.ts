export type Language = 'fr' | 'en'

export type Theme = 'light' | 'dark'

export type ProjectTranslationKey =
  | 'bookbox'
  | 'companyManagement'
  | 'power4'
  | 'shottenTotten'
  | 'corpoPadel'
  | 'sepaControl'
  | 'touristicRouteOptimization'

export type ProjectCategory =
  | 'professional'
  | 'academic'
  | 'personal'

export interface Project {
  slug: string
  translationKey: ProjectTranslationKey
  shortDescription: string
  description: string
  technologies: string[]
  category: ProjectCategory
  featured: boolean
  order: number
  image?: string
  video?: string
  github?: string
  demo?: string
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  location: string
  startDate: string
  endDate: string
  description?: string
}