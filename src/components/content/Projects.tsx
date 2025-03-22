import { useContext } from 'react';
import { ProjectType } from '../../types';
import { Project } from '../base/Project';
import { LanguageContext } from '../../context/contexts';
import proyectoSenaImgLg from '../../assets/proyectoSenaImgLg.png'
import sgvpaImage from '../../assets/sgvpaImg.png'
import typingImg from '../../assets/typingImg.png'

export function Projects() {
  const {language} = useContext(LanguageContext)
  const projects: ProjectType[] = [
    {
      title: text[language].proyects.sgvpa.title,
      url: 'https://sgvpa-production.up.railway.app',
      githubUrl: 'https://github.com/sebastian-arizaa/sgvpa',
      description:  text[language].proyects.sgvpa.description,
      image: sgvpaImage,
      tags: ['react', 'tailwindcss', 'typescript', 'nodejs', 'mysql']
    },
    {
      title: text[language].proyects.proyectoSena.title,
      url: 'https://proyectosena-production.up.railway.app/#/formacion',
      githubUrl: 'https://github.com/sebastian-arizaa/proyectoSena',
      description:  text[language].proyects.proyectoSena.description,
      image: proyectoSenaImgLg,
      tags: ['react', 'tailwindcss', 'typescript', 'mysql']
    },
    {
      title: text[language].proyects.typing.title,
      url: 'https://sebastian-arizaa.github.io/typing/',
      githubUrl: 'https://github.com/sebastian-arizaa/typing',
      description:  text[language].proyects.typing.description,
      image: typingImg,
      tags: ['react', 'tailwindcss', 'typescript']
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
      sgvpa: {
        title: 'SGVPA',
        description: 'Sistema de Gestion Virtual de Practicas de Aprendices, Gestiona las actas de los aprendices en etapa practica en un solo sitio.'
      },
      proyectoSena: {
        title: 'Administrador de Aprendices',
        description: 'Administra los aprendices de Colombia, crea formaciones en diferentes areas del pais y asignale sus respectivos aprendices.'
      },
      typing: {
        title: 'Typing',
        description: 'Practica tus habilidades de Typing con la serie de niveles que hay disponibles.'
      }
    }
  },
  english: {
    proyects: {
      sgvpa: {
        title: 'SGVPA',
        description: 'Sistema de Gestion Virtual de Practicas de Aprendices, Manage apprentices\' actas in practical stage just in one site.'
      },
      proyectoSena: {
        title: 'Apprentice Administrator',
        description: 'Manage Apprentices in Colombia, Make courses in diferent areas of the country and assign their respective apprentices'
      },
      typing: {
        title: 'Typing',
        description: 'Practice your typing skills with a set of available levels.'
      }
    }
  }
 
}