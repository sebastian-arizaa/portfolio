import { useContext } from 'react'
import { LanguageContext } from '../../context/contexts'
import { Skill } from '../../types'
import SkillTag from '../base/SkillTag'

export function Skills() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="flex flex-col p-4 gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].firstTitle}</span>
        <div className='flex flex-wrap gap-4'>
          {programmingLanguages.map((pl, index) => <SkillTag key={index} type={pl}/>)}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].secondTitle}</span>
        <div className='flex flex-wrap gap-4'>
          {programmingTools.map((pt, index) => <SkillTag key={index} type={pt}/>)}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold dark:text-dark-primary-text">{text[language].thirdTitle}</span>
        <div className='flex flex-wrap gap-4'>
          <SkillTag type='inglesb1' content={text[language].languageSkill}/>
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

const programmingLanguages: Skill[] = ['html', 'css', 'tailwindcss', 'javascript', 'typescript', 'react',  'nodejs', 'mysql']

const programmingTools: Skill[] = ['git', 'github', 'vscode']
