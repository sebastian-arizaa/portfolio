import {IconType} from 'react-icons'

interface Props {
  type: 'primary' | 'secondary' | 'third' | null,
  content?: string,
  isActive?: boolean,
  styles?: string,
  iconStyles?: string,
  Icon?: IconType,
  onClick?: () => void
}

export default function Button({type, content, isActive, styles, iconStyles, Icon, onClick}: Props) {
  let btnStyles = ''
  switch(type) {
    case 'primary': 
      btnStyles = `text-primary-text bg-secondary hover:bg-secondary-hover active:bg-secondary-focus ${isActive? 'bg-secondary-hover!' : ''}`
      break
    case 'secondary':
      btnStyles = `text-primary-text bg-third hover:bg-third-hover active:bg-third-focus ${isActive? 'bg-third-hover!' : ''}`
      break
    case 'third':
      btnStyles = `text-primary-text bg-primary hover:bg-primary-hover active:bg-primary-focus ${isActive? 'bg-primary-hover!' : ''}`
      break
  }
  return <button onClick={onClick} className={`w-full flex items-center justify-center rounded-xs py-2 px-4 cursor-pointer ${btnStyles} ${styles}`}>
   {Icon && <Icon className={iconStyles}/>}
   {content}
  </button>
}
