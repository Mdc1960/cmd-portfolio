import type { Project } from './types'

export const projects: Project[] = [
  // =====================================================
  // PROJETS MIS EN AVANT
  // =====================================================

  {
    slug: 'bookbox',
    translationKey: 'bookbox',
    shortDescription: '',
    description: '',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'MariaDB',
      'JPA / Hibernate',
      'Maven',
    ],
    category: 'academic',
    featured: true,
    order: 1,

    
    video: 'https://drive.google.com/file/d/15-Iq1SMwhKXe4AROJRano_1a0vRaq9Tq/preview',
  },

  {
    slug: 'company-management',
    translationKey: 'companyManagement',
    shortDescription: '',
    description: '',
    technologies: [
      'Java',
      'JavaFX',
      'Object-Oriented Programming',
      'Graphical User Interface',
    ],
    category: 'academic',
    featured: true,
    order: 2,

    
    video: 'https://drive.google.com/file/d/1WIomu8IBj1JrsaFZr3l8Pb8ptsfUJnOv/preview',
  },

  {
    slug: 'power4',
    translationKey: 'power4',
    shortDescription: '',
    description: '',
    technologies: [
      'Python',
      'Tkinter',
      'MinMax',
      'Alpha-Beta',
      'Artificial Intelligence',
    ],
    category: 'academic',
    featured: true,
    order: 3,

    
    video: 'https://drive.google.com/file/d/1y-yfsiWhuENqmlREAr7AxlaV2_omVnjV/preview',
  },

  {
    slug: 'shotten-totten',
    translationKey: 'shottenTotten',
    shortDescription: '',
    description: '',
    technologies: [
      'Programming',
      'Algorithms',
      'Object-Oriented Programming',
    ],
    category: 'academic',
    featured: true,
    order: 4,

    
    video: 'https://drive.google.com/file/d/1Sp-sBb243WEwloKsC64H8KHvyMAipUY4/preview',
  },

  {
    slug: 'corpo-padel',
    translationKey: 'corpoPadel',
    shortDescription: '',
    description: '',
    technologies: [
      'Python',
      'FastAPI',
      'Vue.js',
      'PostgreSQL',
      'JWT',
      'Pinia',
      'Axios',
      'Tailwind CSS',
    ],
    category: 'academic',
    featured: true,
    order: 5,

    
    video: '',
  },

  // =====================================================
  // AUTRES PROJETS
  // =====================================================

  {
    slug: 'sepa-control',
    translationKey: 'sepaControl',
    shortDescription: '',
    description: '',
    technologies: [
      'Java',
      'Spring Boot',
      'Thymeleaf',
      'PostgreSQL',
      'JPA / Hibernate',
      'Spring Security',
      'Keycloak',
      'XML / XSD',
    ],
    category: 'professional',
    featured: false,
    order: 6,

    // Pas de vidéo pour SEPA Control
  },

  {
    slug: 'touristic-route-optimization',
    translationKey: 'touristicRouteOptimization',
    shortDescription: '',
    description: '',
    technologies: [
      'C++',
      'Algorithms',
      'Heuristics',
      'Metaheuristics',
      'Combinatorial Optimization',
    ],
    category: 'academic',
    featured: false,
    order: 7,

    // Pas de vidéo pour ce projet
  },
]