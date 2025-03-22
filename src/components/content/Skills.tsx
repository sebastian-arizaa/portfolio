import { useContext } from 'react'
import { LanguageContext } from '../../context/contexts'

export function Skills() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="flex flex-col p-4 gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].firstTitle}</span>
        <div className='flex flex-wrap gap-4'>
          {programmingLanguages.map((pl, index) => <span key={index} className={`px-4 py-1 rounded-xs select-none ${pl.color}`}>{pl.text}</span>)}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].secondTitle}</span>
        <div className='flex flex-wrap gap-4'>
          {programmingTools.map((pl, index) => <span key={index} className={`px-4 py-1 rounded-xs select-none ${pl.color}`}>{pl.text}</span>)}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].thirdTitle}</span>
        <div className='flex flex-wrap gap-4'>
          <span className='px-4 py-1 rounded-xs bg-red-300 select-none '>{text[language].languageSkill}</span>
        </div>
      </div>
    </div>
  )
}

const text = {
  spanish: {
    firstTitle: 'Lenguajes de programación',
    secondTitle: 'Herramientas',
    thirdTitle: 'Idiomas',
    languageSkill: 'Ingles B1'
  },
  english: {
    firstTitle: 'Code Languages',
    secondTitle: 'Tools',
    thirdTitle: 'Languages',
    languageSkill: 'English B1'
  }
}

const programmingLanguages = [
  {
    text: 'HTML',
    color: 'bg-red-300' 
  },
  {
    text: 'CSS',
    color: 'bg-blue-300' 
  },
  {
    text: 'TailwindCSS',
    color: 'bg-blue-300' 
  },
  {
    text: 'JavaScript',
    color: 'bg-yellow-200' 
  },
  {
    text: 'TypeScript',
    color: 'bg-blue-200' 
  },
  {
    text: 'React',
    color: 'bg-cyan-200' 
  },
  {
    text: 'MySQL',
    color: 'bg-stone-200' 
  },
]

const programmingTools = [
  {
    text: 'Git',
    color: 'bg-red-400' 
  },
  {
    text: 'GitHub',
    color: 'bg-stone-400' 
  },
  {
    text: 'VS Code',
    color: 'bg-blue-300' 
  }
]