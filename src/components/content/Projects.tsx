import { useContext } from 'react';
import { ProjectType } from '../../types';
import { Project } from '../base/Project';
import { LanguageContext } from '../../context/contexts';
import proyectoSenaImgSG from '../../assets/proyectoSenaImgG.png'
import proyectoSenaImgSG1 from '../../assets/proyectoSenaImgG1.png'

export function Projects() {
  const {language} = useContext(LanguageContext)
  const proyectoSenaImg = window.outerWidth > 500 ? proyectoSenaImgSG : proyectoSenaImgSG1
  console.log('🚀 ~ Projects ~ proyectoSenaImg:', proyectoSenaImg)
  const projects: ProjectType[] = [
    {
      title: text[language].proyects.proyectoSena.title,
      url: 'https://proyectosena-production.up.railway.app/#/formacion',
      githubUrl: 'https://github.com/sebastian-arizaa/portfolio',
      description:  text[language].proyects.proyectoSena.description,
      image: proyectoSenaImg,
      tags: ['react', 'tailwindcss', 'typescript', 'mysql']
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, index) => <Project
        key={index}
        title={project.title}
        url={project.url}
        githubUrl={project.githubUrl}
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
      proyectoSena: {
        title: 'Administrador de Aprendices',
        description: 'Administra los aprendices de Colombia, crea formaciones, aprendices y administradores estos ultimos gestionaran los aprendices y las formaciones creadas.'
      }
    }
  },
  english: {
    proyects: {
      proyectoSena: {
        title: 'Apprentice Administrator',
        description: 'Manage Apprentices in Colombia, Make courses, apprentices and administrators who will manage the apprentices and the courses created.'
      }
    }
  }
 
}