interface Props {
  content?: string
  href?: string
  isActive: boolean
  onClick?: (value?: string) => void
}

export function Anchor({content, href, isActive, onClick}: Props) {
  return (
    <div 
      className="flex justify-center w-full rounded-xs my-4 cursor-pointer bg-primary hover:bg-primary-hover dark:bg-dark-primary dark:hover:bg-primary/20 dark:text-dark-primary-text"
      onClick={()=> onClick && onClick(content) }  
    >
      <a 
        className={`py-2 px-4  border-b-6  border-transparent font-semibold text-lg max-sm:text-[1rem]   ${isActive && 'border-secondary!'}`} 
        href={href} 
      >{content}</a>
    </div>
  )
}
