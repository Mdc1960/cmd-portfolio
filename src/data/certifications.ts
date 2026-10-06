export interface Certification {
  id: string
  translationKey: string
  organization: string
  date: string
  pdf: string
}

export const certifications: Certification[] = [
  {
    id: 'certification-1',
    translationKey: 'certification1',
    organization: 'Dyma',
    date: '2026',
    pdf: 'src/assets/Certifications/certification-linux-bash.pdf',
  },
  {
    id: 'certification-2',
    translationKey: 'certification2',
    organization: 'Dyma',
    date: '2025',
    pdf: 'src/assets/Certifications/GitCertification.pdf',
  },
  {
    id: 'certification-3',
    translationKey: 'certification3',
    organization: 'Dyma',
    date: '2026',
    pdf: 'src/assets/Certifications/Mamadou_COULIBALY_Certification-gitlab-ci-cd.pdf',
  },
]