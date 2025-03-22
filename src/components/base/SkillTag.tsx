import { Skill } from '../../types'

interface Props {
  type: Skill,
  content?: string
}

export default function SkillTag({type, content=''}: Props) {
  let bgColor = ''
  let text = ''
  switch(type) {
    case 'react': 
      bgColor = 'bg-cyan-200'
      text = 'React'
      break
    case 'tailwindcss': 
      bgColor = 'bg-blue-300'
      text = 'TailwindCSS'
      break
    case 'javascript': 
      bgColor = 'bg-yellow-200'
      text = 'JavaScript'
      break
    case 'typescript': 
      bgColor = 'bg-blue-200'
      text = 'TypeScript'
      break
    case 'mysql': 
      bgColor = 'bg-stone-300'
      text = 'MySQL'
      break
    case 'css': 
      bgColor = 'bg-blue-300'
      text = 'CSS'
      break
    case 'html': 
      bgColor = 'bg-red-200'
      text = 'HTML'  
      break
    case 'vscode': 
      bgColor = 'bg-blue-200'
      text = 'VS Code'  
      break
    case 'git': 
      bgColor = 'bg-red-300'
      text = 'Git'  
      break
    case 'github': 
      bgColor = 'bg-stone-300'
      text = 'Github'  
      break
    case 'inglesb1': 
      bgColor = 'bg-red-300'
      text = 'Ingles B1'  
      break
  }
  return (
    <span className={`px-4 py-1 rounded-xs select-none ${bgColor}`}>{content ? content : text}</span>
  )
}
