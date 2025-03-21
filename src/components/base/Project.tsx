import { ProjectType } from '../../types'

type Props = ProjectType 

export function Project({title, description, image, tags}: Props) {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-xs cursor-pointer hover:bg-primary-hover'>
      <p className="text-lg font-semibold">{title}</p>
      <p>{description}</p>
      <figure className="w-full h-69 rounded-xs overflow-hidden bg-teal-500 shadow-sm">
        <img src={image} alt="" className='w-full h-full object-cover'/>
      </figure>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => <span key={index} className={`px-4 py-1 rounded-xs  ${tag.color}`}>{tag.text}</span>)}
      </div>
    </div>
  )
}
