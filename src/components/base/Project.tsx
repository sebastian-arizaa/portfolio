import { ProjectType } from '../../types'
import SkillTag from './SkillTag'
import { IoIosLink } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';


type Props = ProjectType

export function Project({title, description, image, tags, url, githubUrl}: Props) {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-xs border-b-2 border-gray-200'>
      <p className="text-lg font-semibold dark:text-dark-primary-text">{title}</p>
      <p className='dark:text-dark-primary-text'>{description}</p>
      <figure className="w-full h-69 rounded-xs overflow-hidden shadow-sm dark:shadow-white">
        <img src={image} alt="" className='w-full h-full object-cover object-top'/>
      </figure>
      <div className='flex flex-wrap gap-2'>
        <ul className='flex gap-2 justify-center'>
          <li className='w-8 h-8 p-1 rounded-xs hover:bg-primary-hover dark:hover:dark:hover:bg-primary/20'>
            <a href={url} target="_blank"><IoIosLink className='w-full h-full dark:text-dark-primary-text'/></a>
          </li>
          {githubUrl && 
            <li className='w-8 h-8 p-1 rounded-xs hover:bg-primary-hover dark:hover:dark:hover:bg-primary/20'>
              <a href={githubUrl} target="_blank"><FaGithub className='w-full h-full dark:text-dark-primary-text'/></a>
            </li>
          }
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, index) => <SkillTag key={index} type={tag}/>)}
      </div>
    </div>
  )
}
