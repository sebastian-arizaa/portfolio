import { useContext } from 'react'
import { LanguageContext } from '../../context/contexts'

export function AboutMe() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{text[language].firstTitle}</span>
        <p>{text[language].firstParagraph}</p>
        <p>{text[language].secondParagraph}</p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{text[language].secondTitle}</span>
        <ul className="flex flex-col gap-4 list-disc pl-6">
          <li>
            <p className="font-semibold">{text[language].firstItem}</p>
            <p>Instituto Integrado de Comercio Barbosa</p>
          </li>
          <li>
            <p className="font-semibold">{text[language].SecondItem}</p>
            <p>SENA, Puente Nacional</p>
          </li>
          <li>
            <p className="font-semibold">{text[language].thirdItem}</p>
            <p>{text[language].fourItem}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const text = {
  spanish: {
    firstTitle: 'General',
    firstParagraph: 'Hola👋, Soy Sebastián Ariza Diaz soy de Colombia tengo 19 años he estado estudiando el desarrollo web e ingles por mas de un año. Mis motivos para adentrarme en el mundo de la programación fueron la posibilidad de solucionar problemas y automatizar tareas con código.',
    secondParagraph: 'Aspiro a poder adentrarme en el mundo laboral de la programación ganar experiencia y conocimientos.',
    secondTitle: 'Educación',
    firstItem: 'Bachiller Técnico Especialidad Informática',
    SecondItem: 'Técnico Programacion De Software (falta definir practicas)',
    thirdItem: '+1 Año estudiando programación e ingles virtualmente',
    fourItem: 'Platzi y otras fuentes'
  },
  english: {
    firstTitle: 'General',
    firstParagraph: 'Hello👋, I\'m Sebastián Ariza Diaz I am from Colombia, I\'m 19 years old I have been studying sofware development and english for over a year. My reason for getting into programmaming world was the posibility of resolving problems and automate tasks with code',
    secondParagraph: 'My goal is to enter the working world of programming and gain experience and knowledge',
    secondTitle: 'Education',
    firstItem: 'Technical Bachelor\'s Degree Specializing in computing',
    SecondItem: 'Programming software Technical (practices need to be defined)',
    thirdItem: '+1 year studying programming and english virtually',
    fourItem: 'Platzi and other sources'
  }
}
