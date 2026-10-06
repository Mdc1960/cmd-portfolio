/* eslint-disable react-refresh/only-export-components */

import { home as frHome } from '../locales/fr/home'
import { home as enHome } from '../locales/en/home'

import { profile as frProfile } from '../locales/fr/profile'
import { profile as enProfile } from '../locales/en/profile'

import { about as frAbout } from '../locales/fr/about'
import { about as enAbout } from '../locales/en/about'

import { skills as frSkills } from '../locales/fr/skills'
import { skills as enSkills } from '../locales/en/skills'

import { experience as frExperience } from '../locales/fr/experience'
import { experience as enExperience } from '../locales/en/experience'

import { projects as frProjects } from '../locales/fr/projects'
import { projects as enProjects } from '../locales/en/projects'

import { education as frEducation } from '../locales/fr/education'
import { education as enEducation } from '../locales/en/education'

import { contact as frContact } from '../locales/fr/contact'
import { contact as enContact } from '../locales/en/contact'

import { certifications as frCertifications } from '../locales/fr/certifications'
import { certifications as enCertifications } from '../locales/en/certifications'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import type { Language } from '../data/types'

import { common as frCommon } from '../locales/fr/common'
import { common as enCommon } from '../locales/en/common'



interface ProjectTranslation {
  title: string
  shortDescription: string
  description: string
  context: string
  objective: string
  features: readonly string[]
  technicalApproach: string
  videoTitle: string
}

/**
 * Structure commune des traductions.
 *
 * Les valeurs sont des strings et non des types littéraux
 * comme "Accueil" ou "Home".
 */
interface TranslationCommon {
  navigation: {
    home: string
    about: string
    skills: string
    experience: string
    projects: string
    education: string
    certifications: string
    contact: string
  }

  actions: {
    viewProjects: string
    contactMe: string
    viewProject: string
    viewCode: string
    downloadCV: string
    learnMore: string
    back: string
    menu: string
    closeMenu: string
  }

  theme: {
    light: string
    dark: string
  }

  language: {
    french: string
    english: string
  }

  footer: { 
    builtWith: string
    description: string 
    navigationTitle: string 
    contactTitle: string 
    copyright: string 
    backToTop: string 
  }

  home: {
    hero: {
      eyebrow: string
      title: string
      role: string
      description: string
      availability: string
      duration: string
      viewProjects: string
      contactMe: string
      downloadCv: string
      scroll: string
    }
  }


  profile: {
    section: {
      eyebrow: string
      title: string
      introduction: string
      paragraph: string
      goal: string

      profile: {
        title: string
        educationLabel: string
        education: string
        specializationLabel: string
        specialization: string
        locationLabel: string
        location: string
      }

      focus: {
        title: string
        software: string
        web: string
        ai: string
        data: string
      }
    }
  }

  about: {
    section: {
      eyebrow: string
      title: string
      introduction: string
      paragraph: string
      paragraph2: string
      goal: string

      profile: {
        title: string
        education: string
        specialization: string
        location: string
      }

      focus: {
        title: string
        software: string
        web: string
        ai: string
        data: string
      }
    }

    page: {
      eyebrow: string
      title: string
      introduction: string

      backgroundTitle: string
      backgroundParagraph: string
      backgroundParagraph2: string

      approachTitle: string
      approachParagraph: string

      objective: string

      profileTitle: string

      educationLabel: string
      education: string

      specializationLabel: string
      specialization: string

      locationLabel: string
      location: string

      availabilityLabel: string
      availability: string

      expertiseEyebrow: string
      expertiseTitle: string

      expertise: {
        software: string
        web: string
        ai: string
        data: string
      }

      ctaTitle: string
      ctaDescription: string
      ctaButton: string
    }
  }

  skills: {
    page: {
      eyebrow: string
      title: string
      introduction: string

      categories: {
        software: {
          title: string
          description: string
        }

        web: {
          title: string
          description: string
        }

        backend: {
          title: string
          description: string
        }

        database: {
          title: string
          description: string
        }

        ai: {
          title: string
          description: string
        }

        devops: {
          title: string
          description: string
        }

        methodology: {
          title: string
          description: string
        }
      }

      technologies: {
        java: string
        springBoot: string
        python: string
        c: string
        cpp: string

        typescript: string
        javascript: string
        react: string
        angular: string
        vue: string
        html: string
        css: string
        tailwind: string

        fastapi: string
        rest: string
        jwt: string
        jpa: string
        microservices: string

        postgresql: string
        mysql: string
        mariadb: string
        mongodb: string
        sql: string

        opencv: string
        numpy: string
        matplotlib: string
        machineLearning: string
        imageProcessing: string

        git: string
        github: string
        gitlab: string
        docker: string
        cicd: string
        jenkins: string
        maven: string
        npm: string

        softwareArchitecture: string
        designPatterns: string
        agile: string
        testing: string
        apiDesign: string
      }

      levels: {
        main: string
        familiar: string
      }

      approach: {
        title: string
        description: string
      }

      footer: {
        title: string
        description: string
        button: string
      }
    }
  }

  experience: {
    page: {
      eyebrow: string
      title: string
      introduction: string
      current: string

      experiences: {
        caTitres: {
          company: string
          role: string
          location: string
          period: string
          summary: string
          description: string
          responsibilities: readonly string[]
          technologiesLabel: string
          technologies: readonly string[]
        }
      }

      methodology: {
        eyebrow: string
        title: string
        description: string
        points: readonly string[]
      }

      cta: {
        title: string
        description: string
        button: string
      }
    }
  }

  projects: {
    page: {
      eyebrow: string
      title: string
      introduction: string
      featured: string
      other: string
      viewProject: string

      categories: {
        professional: string
        academic: string
        personal: string
      }

      projects: {
        bookbox: ProjectTranslation
        companyManagement: ProjectTranslation
        power4: ProjectTranslation
        shottenTotten: ProjectTranslation
        corpoPadel: ProjectTranslation
        sepaControl: ProjectTranslation
        touristicRouteOptimization: ProjectTranslation
      }
    }
  }

  education: {
    page: {
      eyebrow: string
      title: string
      introduction: string
      items: {
        polytech: {
          school: string
          degree: string
          description: string
        }

        estem: {
          school: string
          degree: string
          description: string
        }

        baccalaureat: {
          school: string
          degree: string
          description: string
        }
      }

    }
  }

  certifications: { 
    page: { 
      eyebrow: string
      title: string
      introduction: string
      viewCertificate: string
      downloadCertificate: string
      items: { 
        certification1: { 
          title: string
          description: string
        } 
        certification2: { 
          title: string
          description: string
        }
        certification3: { 
          title: string
          description: string
        }
      }
    }
  }

  contact: {
    page: {
      eyebrow: string
      title: string
      introduction: string

      email: {
        label: string
        value: string
      }

      location: {
        label: string
        value: string
      }

      linkedin: {
        label: string
        action: string
      }

      github: {
        label: string
        action: string
      }

      cta: {
        title: string
        description: string
        button: string
      }
    }
  }
    
  

}

type Translations = TranslationCommon

const translations: Record<Language, Translations> = {
  fr: {
    ...frCommon,
    home: frHome,
    profile: frProfile,
    about: frAbout,
    skills: frSkills,
    experience: frExperience,
    projects: frProjects,
    education: frEducation,
    certifications: frCertifications,
    contact: frContact
  },

  en: {
    ...enCommon,
    home: enHome,
    profile: enProfile,
    about: enAbout,
    skills: enSkills,
    experience: enExperience,
    projects: enProjects,
    education: enEducation,
    certifications: enCertifications,
    contact: enContact
  },
}

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<
  LanguageContextValue | undefined
>(undefined)

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage === 'fr' || savedLanguage === 'en') {
    return savedLanguage
  }

  return 'fr'
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const toggleLanguage = () => {
    setLanguageState((currentLanguage) =>
      currentLanguage === 'fr' ? 'en' : 'fr',
    )
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error(
      'useLanguage must be used inside a LanguageProvider',
    )
  }

  return context
}