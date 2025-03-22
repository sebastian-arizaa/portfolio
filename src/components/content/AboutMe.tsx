import { useContext } from 'react'
import { LanguageContext } from '../../context/contexts'

export function AboutMe() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="flex flex-col p-4 gap-8 dark:text-dark-primary-text">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{text[language].firstTitle}</span>
        <ul className="flex flex-col gap-4 list-disc pl-6">
          <li>
            <p className="font-semibold">{text[language].firstItem.title}</p>
            <p>{text[language].firstItem?.subtitle}</p>
            <p>{text[language].firstItem?.description}</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{text[language].secondTitle}</span>
        <ul className="flex flex-col gap-4 list-disc pl-6">
          <li>
            <p className="font-semibold">{text[language].secondItem.title}</p>
            <p>{text[language].secondItem?.subtitle}</p>
            <p>{text[language].secondItem?.description}</p>
          </li>
          <li>
            <p className="font-semibold">{text[language].thirdItem.title}</p>
            <p>{text[language].thirdItem?.subtitle}</p>
            <p>{text[language].thirdItem?.description}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const text = {
  spanish: {
    firstTitle: 'Experencia Laboral',
    firstItem: {
      title: 'Aprendiz de Operaciones Transversales',
      subtitle: 'Fiduciaria Bancolombia S.A. | Bogotá D.C.',
      description: ''
    },
    secondTitle: 'Educación',
    secondItem: {
      title: 'Técnico Programacion De Software',
      subtitle: 'SENA | Puente Nacional',
      description: ''
    },
    thirdItem: {
      title:  'Formación Complementaria (Platzi & Autodidacta',
      subtitle: 'Especialización en Desarrollo Full Stack, Arquitectura de Software y TypeScript',
      description: ''
    },
  },
  english: {
    firstTitle: 'Work Experience',
    firstItem: {
      title: 'Cross-Functional Operations Apprentice',
      subtitle: 'Fiduciaria Bancolombia S.A. | Bogotá D.C.',
      description: ''
    },
    secondTitle: 'Education',
    secondItem: {
      title: 'Software Programming Technician',
      subtitle: 'SENA | Puente Nacional',
      description: ''
    },
    thirdItem: {
      title:  'Complementary Training (Platzi & Self-taught)',
      subtitle: 'Specialization in Full Stack Development, Software Architecture, and TypeScript',
      description: ''
    },
  }
}
