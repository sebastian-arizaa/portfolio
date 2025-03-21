import { IconType } from 'react-icons'

interface Props {
  content?: string,
  Icon?: IconType
}

export function Tag({content, Icon}: Props) {
  return (
    <div className='flex items-center justify-center gap-2 py-2 '>
      {Icon && <Icon className='dark:fill-primary'/>}
      <span className='text-primary-text/60 text-md dark:text-dark-primary-text/60'>{content}</span>
    </div>
  )
}
