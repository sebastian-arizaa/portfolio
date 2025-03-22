import { Skill } from '../../types'

interface Props {
  type: Skill,
  content?: string
}

export default function SkillTag({type, content=''}: Props) {
  let bgColor = ''
  switch(type) {
    case 'React': 
      bgColor = 'bg-cyan-200'
      break
    case 'Tailwind CSS': 
      bgColor = 'bg-blue-300'
      break
    case 'JavaScript': 
      bgColor = 'bg-yellow-400'
      break
    case 'TypeScript': 
      bgColor = 'bg-blue-200'
      break
    case 'Node JS': 
      bgColor = 'bg-yellow-400'
      break
    case 'MySQL': 
      bgColor = 'bg-stone-300'
      break
    case 'CSS3': 
      bgColor = 'bg-blue-300'
      break
    case 'HTML5': 
      bgColor = 'bg-red-300'
      break
    case 'Bootstrap': 
      bgColor = 'bg-purple-300'
      break
    case 'VS Code': 
      bgColor = 'bg-blue-200'
      break
    case 'Git': 
      bgColor = 'bg-red-300'
      break
    case 'Github': 
      bgColor = 'bg-stone-300'
      break
    case 'Ingles B2': 
      bgColor = 'bg-red-300'
      break
    case 'English B2': 
      bgColor = 'bg-red-300'
      break
    case 'Español Nativo': 
      bgColor = 'bg-green-300'
      break
    case 'Native Spanish': 
      bgColor = 'bg-green-300'
      break
    case 'Word': 
      bgColor = 'bg-blue-300'
      break
    case 'Excel': 
      bgColor = 'bg-green-300'
      break
    case 'PowerPoint':
      bgColor = 'bg-red-300'
      break
    case 'APIs REST':
      bgColor = 'bg-yellow-300'
      break
    default:
      bgColor = 'bg-gray-300'
  }
  return (
    <span className={`px-4 py-1 rounded-xs select-none ${bgColor}`}>{content ? content : type}</span>
  )
}
