import { useContext, useState } from 'react';
import { LanguageContext, PageContext } from '../../context/contexts';
import { Tag } from './Tag'
import { Anchor } from './Anchor';
import { MdWork } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';

export function Profile() {
  const {language} = useContext(LanguageContext)
  const {setPage} = useContext(PageContext)
  const [anchorSelected, setAnchorSelected] = useState('')

  const handleAnchorSelected = (value?: string) => {
    if(!setPage) return 
    if(text[language].anchorProjects == value) {
      setPage('projects')
      setAnchorSelected(value)
    }
    if(text[language].anchorSkills == value) {
      setPage('skills')
      setAnchorSelected(value)
    }
    if(text[language].anchorAboutMe == value) {
      setPage('about me')
      setAnchorSelected(value)
    }
  }

  const isAnchorActive = (value: string) => {
    if(value == anchorSelected) return true
    return false
  }
  const bannerImage = 'https://www.armadilloamarillo.com/wp-content/uploads/fondo-de-programacion-web_ok.jpg'
  // const bannerImage = '../../assets/profileBanner.jpg'
  const putBanner = false

  return (
    <div className="flex flex-col items-center">
      <div className={`w-[120%] h-64 ${putBanner ? `bg-[url(${bannerImage})]` : 'bg-secondary'} bg-cover`}></div>
      <div className="relative h-24 flex w-full">
        <figure className="absolute -translate-y-1/2 h-48 w-48 rounded-full overflow-hidden max-sm:h-36 max-sm:w-36">
          <img alt={text[language].profilePhotoAlt} className="w-full h-full bg-secondary-hover"/>
        </figure>
      </div>
      <div className=" flex flex-col w-full gap-2">
        <span className="text-4xl font-bold">Sebastian Ariza</span>
        <p>{text[language].description}</p>
        <div className='flex gap-4'>
          <Tag content={text[language].tagWork} Icon={MdWork}/>
          <Tag content='Colombia' Icon={FaFlag}/>
          <Tag content='Bogotá' Icon={FaCity}/>
          <Tag content={text[language].tagBirthday} Icon={FaBirthdayCake}/>
        </div>
        <div className='flex'>
          <Anchor 
            onClick={handleAnchorSelected} 
            isActive={isAnchorActive(text[language].anchorProjects)} 
            content={text[language].anchorProjects}
          />
          <Anchor 
            onClick={handleAnchorSelected} 
            isActive={isAnchorActive(text[language].anchorSkills)} 
            content={text[language].anchorSkills}
          />
          <Anchor 
           onClick={handleAnchorSelected} 
           isActive={isAnchorActive(text[language].anchorAboutMe)} 
           content={text[language].anchorAboutMe}
          />
        </div>
      </div>
    </div>
  )
}

const text = {
  spanish: {
    profilePhotoAlt: 'Foto de perfil',
    description: 'Estudiando desarrollar web e ingles, amante de la programación, la tecnología y los idiomas, entusiasmado de seguir aprendiendo y nunca parar de aprender.',
    tagWork: 'Disponible',
    tagBirthday: 'Abril 27',
    anchorProjects: 'Proyectos',
    anchorSkills: 'Habilidades',
    anchorAboutMe: 'Sobre mí',
  },
  english: {
    profilePhotoAlt: 'Profile photo',
    description: 'Studying web development and english, a lover of programming, technology, and languages, eager to continue learning and never stop learning',
    tagWork: 'Available',
    tagBirthday: 'April 27th',
    anchorProjects: 'Projects',
    anchorSkills: 'Skills',
    anchorAboutMe: 'About Me',
  }
}