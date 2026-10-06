export const projects = {
  page: {
    eyebrow: 'PROJECTS',

    title:
      'A selection of projects built throughout my journey.',

    introduction:
      'Professional and academic projects showcasing my approach to software development, web applications, algorithms and artificial intelligence.',

    featured: 'Featured projects',

    other: 'Other projects',

    viewProject: 'View project',

    categories: {
      professional: 'Professional project',
      academic: 'Academic project',
      personal: 'Personal project',
    },

    projects: {
      bookbox: {
        title: 'BookBox',

        shortDescription:
          'Web application for managing a book-sharing box.',

        description:
          'Web application developed to manage books, users and different interactions around a book-sharing box system.',

        context:
          'Academic project focused on designing and developing a complete web application for managing a book-sharing box.',

        objective:
          'The objective is to provide an application for managing books and users through a structured web interface.',

        features: [
          'Book management',
          'User management',
          'Information browsing',
          'Database interaction',
          'Responsive web interface',
        ],

        technicalApproach:
          'The project relies on a web architecture separating the backend and frontend. The backend is developed with Spring Boot while the user interface is developed with Angular.',

        videoTitle: 'BookBox demonstration',
      },

      companyManagement: {
        title: 'Business Management',

        shortDescription:
          'Business management application developed with Java and JavaFX.',

        description:
          'Desktop application developed with Java and JavaFX to manage different types of business information and operations through a graphical interface.',

        context:
          'Academic project focused on developing a desktop business management application.',

        objective:
          'The objective is to design a graphical application for centralizing and managing different types of business information.',

        features: [
          'Business information management',
          'Business data management',
          'JavaFX graphical interface',
          'Feature organization',
          'Data persistence',
        ],

        technicalApproach:
          'The project uses Java for the application logic and JavaFX to build the graphical interface. The design follows object-oriented programming principles.',

        videoTitle: 'Business management application demonstration',
      },

      power4: {
        title: 'Connect Four',

        shortDescription:
          'Connect Four game integrating artificial intelligence.',

        description:
          'Implementation of a Connect Four game with artificial intelligence based on the MinMax algorithm and alpha-beta pruning.',

        context:
          'Academic project focused on applying artificial intelligence techniques to a strategy game.',

        objective:
          'The objective is to develop an opponent capable of analysing different game possibilities and selecting an appropriate move.',

        features: [
          'Connect Four game',
          'Tkinter graphical interface',
          'Artificial intelligence',
          'MinMax algorithm',
          'Alpha-beta pruning',
        ],

        technicalApproach:
          'The artificial intelligence explores the game tree using the MinMax algorithm. Alpha-beta pruning reduces the number of explored branches and improves performance.',

        videoTitle: 'Connect Four demonstration',
      },

      shottenTotten: {
        title: 'Shotten Totten',

        shortDescription:
          'Implementation of a strategy game based on a card game.',

        description:
          'Programming project focused on implementing the mechanics and rules of the Shotten Totten game.',

        context:
          'Academic project focused on designing and implementing a strategy game.',

        objective:
          'The objective is to reproduce the main game mechanics while properly structuring the rules and interactions between the different elements.',

        features: [
          'Card management',
          'Player management',
          'Game rule implementation',
          'Turn management',
          'Result determination',
        ],

        technicalApproach:
          'The project focuses on object-oriented programming and modelling the different entities required for the game to operate.',

        videoTitle: 'Shotten Totten demonstration',
      },

      corpoPadel: {
        title: 'Corpo Padel',

        shortDescription:
          'Full Stack web application for managing padel tournaments.',

        description:
          'Full Stack web application designed to manage padel tournaments, teams, matches and the different states of a tournament.',

        context:
          'Full Stack web development project focused on designing a complete padel tournament management application.',

        objective:
          'The objective is to provide an application for organizing and monitoring the different elements of a padel tournament.',

        features: [
          'Team management',
          'Tournament management',
          'Match management',
          'Tournament status management',
          'User authentication',
          'REST API',
        ],

        technicalApproach:
          'The backend relies on a REST API developed with Python and FastAPI. The frontend is developed with Vue.js and communicates with the API. PostgreSQL provides data persistence.',

        videoTitle: 'Corpo Padel demonstration',
      },

      sepaControl: {
        title: 'SEPA Control',

        shortDescription:
          'Web prototype for monitoring and analysing SEPA payment flows.',

        description:
          'Web application prototype designed to monitor and analyse SEPA payment files in order to identify different anomalies and facilitate their analysis.',

        context:
          'Project developed during my Full Stack development internship at Crédit Agricole Titres. The project focuses on analysing and monitoring SEPA payment flows between Crédit Agricole Titres and its partner banks.',

        objective:
          'The objective is to facilitate the control of SEPA XML files and automatically identify different anomalies requiring further analysis.',

        features: [
          'SEPA XML file import',
          'XSD-based file validation',
          'Transaction analysis',
          'Missing transaction detection',
          'Amount inconsistency detection',
          'IBAN inconsistency detection',
          'EndToEndId duplicate detection',
          'Anomaly analysis',
        ],

        technicalApproach:
          'The prototype is based on Spring Boot and a hexagonal architecture. XML files are processed and validated using XSD schemas. Data is persisted with JPA / Hibernate and PostgreSQL. Security is provided through Spring Security and Keycloak.',

        videoTitle: '',
      },

      touristicRouteOptimization: {
        title: 'Touristic Route Optimization',

        shortDescription:
          'Solving a combinatorial optimization problem using C++.',

        description:
          'Combinatorial optimization project focused on finding optimized tourist routes using heuristics and metaheuristics.',

        context:
          'Academic project focused on algorithms and combinatorial optimization.',

        objective:
          'The objective is to find high-quality tourist routes while considering the problem constraints and progressively improving the obtained solutions.',

        features: [
          'Problem modelling',
          'Solution search',
          'Heuristics',
          'Metaheuristics',
          'Solution comparison',
          'Route optimization',
        ],

        technicalApproach:
          'The project is developed in C++ and uses different heuristic and metaheuristic strategies to efficiently explore the solution space.',

        videoTitle: '',
      },
    },
  },
} as const