export const experience = {
  page: {
    eyebrow: 'EXPÉRIENCE',

    title:
      'Des expériences orientées développement logiciel et résolution de problèmes concrets.',

    introduction:
      'Mes expériences professionnelles m’ont permis de mettre en pratique mes compétences en développement logiciel, conception d’applications, API et traitement des données.',

    current: 'Expérience principale',

    experiences: {
      caTitres: {
        company: 'Crédit Agricole Titres',
        role: 'Développeur Full Stack — Stage',
        location: 'Mer, France',
        period: 'Mai 2026 — Août 2026',

        summary:
          'Développement d’un prototype web destiné au contrôle et au suivi des flux de paiements SEPA entre Crédit Agricole Titres et ses banques partenaires.',

        description:
          'Conception et développement d’un outil permettant d’importer, valider et analyser des fichiers XML SEPA afin d’identifier différentes anomalies et de faciliter leur analyse.',

        responsibilities: [
          'Conception de l’architecture et des principaux composants de l’application.',
          'Développement d’une application web avec Spring Boot et Thymeleaf.',
          'Mise en place de la validation des fichiers XML à partir de schémas XSD.',
          'Détection d’anomalies sur les transactions : transactions manquantes, incohérences de montants ou d’IBAN et doublons.',
          'Persistance des données avec JPA / Hibernate et PostgreSQL.',
          'Intégration de la sécurité avec Spring Security et Keycloak.',
          'Participation à la modélisation des données et à la conception technique.',
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
          'Architecture hexagonale',
        ],
      },
    },

    methodology: {
      eyebrow: 'APPROCHE',
      title: 'De l’analyse du besoin à la solution technique.',

      description:
        'Ces expériences m’ont appris à prendre en compte à la fois les contraintes techniques, les besoins métier et la maintenabilité des solutions développées.',

      points: [
        'Comprendre le besoin et identifier les contraintes.',
        'Concevoir une architecture adaptée au problème.',
        'Développer progressivement une solution testable et maintenable.',
        'Collaborer avec les différents interlocuteurs du projet.',
      ],
    },

    cta: {
      title: 'Explorer les projets réalisés',
      description:
        'Découvrez les projets dans lesquels j’ai appliqué mes compétences en développement logiciel, web, API et intelligence artificielle.',
      button: 'Voir mes projets',
    },
  },
} as const