export const SITE_CONFIG = {
  name: 'Mamadou Djiguissèmin Coulibaly',
  role: 'Ingénieur logiciel — Full Stack & Intelligence Artificielle',
  shortRole: 'Full Stack · Software · AI',
  email: 'mamadou.coulibaly@etu.univ-tours.fr',
  github: 'https://github.com/Mdc1960',
  linkedin: 'https://www.linkedin.com/in/mamadou-djiguissemin-coulibaly',
  location: 'Tours, France',
} as const

export const ROUTES = {
  home: '/',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  projects: '/projects',
  education: '/education',
  contact: '/contact',
  project: (slug: string) => `/projects/${slug}`,
} as const