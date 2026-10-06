export const experience = {
  page: {
    eyebrow: 'EXPERIENCE',

    title:
      'Experiences focused on software development and solving concrete problems.',

    introduction:
      'My professional experiences have allowed me to apply my skills in software development, application design, APIs and data processing.',

    current: 'Main experience',

    experiences: {
      caTitres: {
        company: 'Crédit Agricole Titres',
        role: 'Full Stack Developer — Internship',
        location: 'Mer, France',
        period: 'May 2026 — August 2026',

        summary:
          'Development of a web prototype designed to monitor and control SEPA payment flows between Crédit Agricole Titres and its partner banks.',

        description:
          'Design and development of a tool for importing, validating and analysing SEPA XML files in order to identify anomalies and facilitate their investigation.',

        responsibilities: [
          'Designed the application architecture and main components.',
          'Developed a web application using Spring Boot and Thymeleaf.',
          'Implemented XML file validation based on XSD schemas.',
          'Detected transaction anomalies including missing transactions, amount or IBAN inconsistencies and duplicates.',
          'Implemented data persistence using JPA / Hibernate and PostgreSQL.',
          'Integrated application security with Spring Security and Keycloak.',
          'Participated in data modelling and technical design.',
        ],

        technologiesLabel: 'Technologies',
        technologies: [
          'Java',
          'Spring Boot',
          'Thymeleaf',
          'PostgreSQL',
          'JPA / Hibernate',
          'Spring Security',
          'Keycloak',
          'XML / XSD',
          'Hexagonal Architecture',
        ],
      },
    },

    methodology: {
      eyebrow: 'APPROACH',
      title: 'From requirements analysis to technical solution.',

      description:
        'These experiences taught me to consider technical constraints, business requirements and the maintainability of the solutions developed.',

      points: [
        'Understand the requirements and identify constraints.',
        'Design an architecture adapted to the problem.',
        'Progressively develop a testable and maintainable solution.',
        'Collaborate with the different stakeholders involved in the project.',
      ],
    },

    cta: {
      title: 'Explore my projects',
      description:
        'Discover the projects where I have applied my skills in software development, web applications, APIs and artificial intelligence.',
      button: 'View projects',
    },
  },
} as const