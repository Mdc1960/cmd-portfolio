export const projects = {
  page: {
    eyebrow: 'PROJETS',

    title:
      'Une sélection de projets réalisés au cours de mon parcours.',

    introduction:
      'Des projets professionnels et académiques illustrant mon approche du développement logiciel, du web, des algorithmes et de l’intelligence artificielle.',

    featured: 'Projets mis en avant',

    other: 'Autres projets',

    viewProject: 'Voir le projet',

    categories: {
      professional: 'Projet professionnel',
      academic: 'Projet académique',
      personal: 'Projet personnel',
    },

    projects: {
      bookbox: {
        title: 'BookBox',

        shortDescription:
          'Application web de gestion d’une boîte à livres.',

        description:
          'Application web développée pour gérer les livres, les utilisateurs et les différentes interactions autour d’un système de boîte à livres.',

        context:
          'Projet académique consacré à la conception et au développement d’une application web complète de gestion d’une boîte à livres.',

        objective:
          'L’objectif est de proposer une application permettant de gérer les livres et les utilisateurs à travers une interface web structurée.',

        features: [
          'Gestion des livres',
          'Gestion des utilisateurs',
          'Consultation des informations',
          'Interaction avec la base de données',
          'Interface web responsive',
        ],

        technicalApproach:
          'Le projet repose sur une architecture web séparant le backend et le frontend. Le backend est développé avec Spring Boot tandis que l’interface utilisateur est développée avec Angular.',

        videoTitle: 'Démonstration de BookBox',

      },

      companyManagement: {
        title: 'Gestion d’entreprise',

        shortDescription:
          'Application de gestion développée en Java et JavaFX.',

        description:
          'Application desktop développée en Java et JavaFX permettant de gérer différentes informations et opérations liées à une entreprise à travers une interface graphique.',

        context:
          'Projet académique consacré au développement d’une application desktop de gestion d’entreprise.',

        objective:
          'L’objectif est de concevoir une application graphique permettant de centraliser et de gérer différentes informations liées à l’activité d’une entreprise.',

        features: [
          'Gestion des informations de l’entreprise',
          'Gestion des données métier',
          'Interface graphique JavaFX',
          'Organisation des fonctionnalités',
          'Persistance des données',
        ],

        technicalApproach:
          'Le projet utilise Java pour la logique applicative et JavaFX pour construire l’interface graphique. La conception repose sur les principes de la programmation orientée objet.',

        videoTitle: 'Démonstration de l’application de gestion',

      },

      power4: {
        title: 'Puissance 4',

        shortDescription:
          'Jeu de Puissance 4 intégrant une intelligence artificielle.',

        description:
          'Implémentation d’un jeu de Puissance 4 avec une intelligence artificielle basée sur l’algorithme MinMax et l’élagage alpha-bêta.',

        context:
          'Projet académique consacré à l’application de techniques d’intelligence artificielle à un jeu de stratégie.',

        objective:
          'L’objectif est de développer un adversaire capable d’analyser les différentes possibilités de jeu et de choisir un coup pertinent.',

        features: [
          'Jeu de Puissance 4',
          'Interface graphique avec Tkinter',
          'Intelligence artificielle',
          'Algorithme MinMax',
          'Élagage alpha-bêta',
        ],

        technicalApproach:
          'L’intelligence artificielle explore l’arbre des possibilités grâce à l’algorithme MinMax. L’élagage alpha-bêta permet de réduire le nombre de branches explorées et d’améliorer les performances.',

        videoTitle: 'Démonstration du Puissance 4',

      },

      shottenTotten: {
        title: 'Shotten Totten',

        shortDescription:
          'Implémentation d’un jeu de stratégie basé sur un jeu de cartes.',

        description:
          'Projet de programmation consacré à l’implémentation des mécanismes et des règles du jeu Shotten Totten.',

        context:
          'Projet académique consacré à la conception et à l’implémentation d’un jeu de stratégie.',

        objective:
          'L’objectif est de reproduire les principales mécaniques du jeu tout en structurant proprement les règles et les interactions entre les différents éléments.',

        features: [
          'Gestion des cartes',
          'Gestion des joueurs',
          'Application des règles du jeu',
          'Gestion des tours',
          'Détermination des résultats',
        ],

        technicalApproach:
          'Le projet met l’accent sur la programmation orientée objet et la modélisation des différentes entités nécessaires au fonctionnement du jeu.',

        videoTitle: 'Démonstration de Shotten Totten',

      },

      corpoPadel: {
        title: 'Corpo Padel',

        shortDescription:
          'Application web Full Stack de gestion de tournois de padel.',

        description:
          'Application web Full Stack permettant de gérer les tournois de padel, les équipes, les matchs et les différents états d’un tournoi.',

        context:
          'Projet de développement web Full Stack visant à concevoir une application complète de gestion de tournois de padel.',

        objective:
          'L’objectif est de fournir une application permettant d’organiser et de suivre les différents éléments d’un tournoi de padel.',

        features: [
          'Gestion des équipes',
          'Gestion des tournois',
          'Gestion des matchs',
          'Gestion des différents états d’un tournoi',
          'Authentification des utilisateurs',
          'API REST',
        ],

        technicalApproach:
          'Le backend repose sur une API REST développée avec Python et FastAPI. Le frontend est développé avec Vue.js et communique avec l’API. PostgreSQL assure la persistance des données.',

        videoTitle: 'Démonstration de Corpo Padel',

      },

      sepaControl: {
        title: 'SEPA Control',

        shortDescription:
          'Prototype web de contrôle et d’analyse des flux de paiements SEPA.',

        description:
          'Prototype d’une application web permettant de contrôler et d’analyser des fichiers de paiements SEPA afin d’identifier différentes anomalies et de faciliter leur analyse.',

        context:
          'Projet réalisé lors de mon stage de développement Full Stack chez Crédit Agricole Titres. Le projet porte sur l’analyse et le contrôle des flux de paiements SEPA entre Crédit Agricole Titres et ses banques partenaires.',

        objective:
          'L’objectif est de faciliter le contrôle de fichiers XML SEPA et d’identifier automatiquement différentes anomalies pouvant nécessiter une analyse.',

        features: [
          'Import de fichiers XML SEPA',
          'Validation des fichiers à partir de schémas XSD',
          'Analyse des transactions',
          'Détection des transactions manquantes',
          'Détection des incohérences de montants',
          'Détection des incohérences d’IBAN',
          'Détection des doublons EndToEndId',
          'Analyse des anomalies',
        ],

        technicalApproach:
          'Le prototype repose sur Spring Boot et une architecture hexagonale. Les fichiers XML sont traités et validés à partir de schémas XSD. Les données sont persistées avec JPA / Hibernate et PostgreSQL. La sécurité est assurée avec Spring Security et Keycloak.',

        videoTitle: '',
      },

      touristicRouteOptimization: {
        title: 'Optimisation de circuit touristique',

        shortDescription:
          'Résolution d’un problème d’optimisation combinatoire en C++.',

        description:
          'Projet d’optimisation combinatoire visant à rechercher des circuits touristiques optimisés à l’aide d’heuristiques et de métaheuristiques.',

        context:
          'Projet académique consacré à l’algorithmique et à l’optimisation combinatoire.',

        objective:
          'L’objectif est de rechercher des circuits touristiques de qualité tout en prenant en compte les contraintes du problème et en améliorant progressivement les solutions obtenues.',

        features: [
          'Modélisation du problème',
          'Recherche de solutions',
          'Heuristiques',
          'Métaheuristiques',
          'Comparaison des solutions',
          'Optimisation des circuits',
        ],

        technicalApproach:
          'Le projet est développé en C++ et s’appuie sur différentes stratégies heuristiques et métaheuristiques pour explorer efficacement l’espace des solutions.',

        videoTitle: '',
      },
    },
  },
} as const