import { useContext } from 'react'
import { LanguageContext } from '../../context/contexts'
import { Skill } from '../../types'
import SkillTag from '../base/SkillTag'

export function Skills() {
  const {language} = useContext(LanguageContext)

  return (
    <div className="flex flex-col p-4 gap-8">
      {text[language].map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="text-lg font-semibold dark:text-dark-primary-text">{item.title}</span>
          <div className='flex flex-wrap gap-4'>
            {item.skills.map((skill, skillIndex) => (<SkillTag key={skillIndex} type={skill}/>))}
          </div>
        </div>
      ))}
    </div>
  )
}

const text: {spanish: {title: string, skills: Skill[]}[], english: {title: string, skills: Skill[]}[]} = {
  spanish: [
    {title: 'Lenguajes & Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'HTML5', 'CSS3']},
    {title: 'Backend & Bases de Datos', skills: ['Node JS', 'MySQL', 'APIs REST']},
    {title: 'Herramientas & DevOps', skills: ['Git', 'Github', 'VS Code']},
    {title: 'Idiomas', skills: ['Español Nativo', 'Ingles B2']},
    {title: 'Herramientas Ofimaticas', skills: ['Word', 'Excel', 'PowerPoint']}
  ],
  english: [
    {title: 'Languages & Frontend', skills: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'HTML5', 'CSS3']},
    {title: 'Backend & Databases', skills: ['Node JS', 'MySQL', 'APIs REST']},
    {title: 'Tools & DevOps', skills: ['Git', 'Github', 'VS Code']},
    {title: 'Languages', skills: ['Native Spanish', 'English B2']},
    {title: 'Office Tools', skills: ['Word', 'Excel', 'PowerPoint']}
  ]
}