import { ProjectType } from '../../types'

type Props = ProjectType

export function Project({title, description, image, tags, url}: Props) {
  const handleUrlProject = () => {
    window.open(url, '_blank')
  }

  return (
    <div onClick={handleUrlProject} className='flex flex-col gap-2 p-4 rounded-xs cursor-pointer hover:bg-primary-hover dark:hover:bg-primary/20'>
      <p className="text-lg font-semibold dark:text-dark-primary-text">{title}</p>
      <p className='dark:text-dark-primary-text'>{description}</p>
      <figure className="w-full h-69 rounded-xs overflow-hidden bg-teal-500 shadow-sm">
        <img src={image} alt="" className='w-full h-full object-cover'/>
      </figure>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => <span key={index} className={`px-4 py-1 rounded-xs  ${tag.color}`}>{tag.text}</span>)}
      </div>
    </div>
  )
}
