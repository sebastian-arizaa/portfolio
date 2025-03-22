import { useContext } from 'react';
import { ProjectType } from '../../types';
import { Project } from '../base/Project';
import { LanguageContext } from '../../context/contexts';

export function Projects() {
  const {language} = useContext(LanguageContext)

  const projects: ProjectType[] = [
    {
      title: 'ToDo',
      url: 'https://www.youtube.com/watch?v=BtLSaxRnIhc&ab_channel=Linwi',
      description:  text[language].proyects.todo.description,
      image: 'https://s3-alpha.figma.com/hub/file/4283443689/9579f94c-65c0-4fd1-a9d0-6196df52a4bc-cover.png',
      tags: [
        {
          text: 'HTML',
          color: 'bg-red-300'
        },
        {
          text: 'CSS',
          color: 'bg-blue-300'
        },
        {
          text: 'JavaScript',
          color: 'bg-yellow-300'
        }
      ]
    },
    {
      title: 'Supermarket System',
      url: 'https://www.youtube.com/watch?v=BtLSaxRnIhc&ab_channel=Linwi',
      description:  text[language].proyects.todo.description,
      image:'https://repository-images.githubusercontent.com/373628278/e6aebf10-a376-4097-891a-a4df2f85cf03',
      tags: [
        {
          text: 'React',
          color: 'bg-blue-200'
        },
        {
          text: 'TawildCSS',
          color: 'bg-blue-300'
        },
        {
          text: 'TypeScripts',
          color: 'bg-blue-200'
        }
      ]
    },
    {
      title: 'Supermarket System',
      url: 'https://www.youtube.com/watch?v=BtLSaxRnIhc&ab_channel=Linwi',
      description:  text[language].proyects.todo.description,
      image: 'https://user-images.githubusercontent.com/61280281/99399723-0b3fa980-290c-11eb-8728-03d974be548d.png',
      tags: [
        {
          text: 'React',
          color: 'bg-blue-200'
        },
        {
          text: 'TawildCSS',
          color: 'bg-blue-300'
        },
        {
          text: 'TypeScripts',
          color: 'bg-blue-200'
        }
      ]
    }
  ]

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => <Project
        key={index}
        title={project.title}
        url={project.url}
        description={project.description}
        image={project.image}
        tags={project.tags}
      />)}
    </div>
  )
}



const text = {
  spanish: {
    proyects: {
      todo: {
        description: 'Crea cual quier cosas que quires es intereansate'
      }
    }
  },
  english: {
    proyects: {
      todo: {
        description: 'Creates numerous things bla bla'
      }
    }
  }
 
}