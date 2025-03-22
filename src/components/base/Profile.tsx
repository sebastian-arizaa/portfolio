import { useContext, useState } from 'react';
import { LanguageContext, PageContext } from '../../context/contexts';
import { Tag } from './Tag'
import { Anchor } from './Anchor';
import { MdWork } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import profilePhoto from '../../assets/profilePhoto.jpg'
import profileBanner from '../../assets/profileBanner.jpg'

export function Profile() {
  const {language} = useContext(LanguageContext)
  const {setPage} = useContext(PageContext)
  const [anchorProjectIsSelected, setAnchorProjectIsSelect] = useState(true)
  const [anchorSkillIsSelected, setAnchorSkillIsSelect] = useState(false)
  const [anchorAboutMeIsSelected, setAnchorAboutMeIsSelect] = useState(false)

  const handleAnchorSelected = (value?: string) => {
    if(!setPage) return 
    setAnchorProjectIsSelect(false)
    setAnchorSkillIsSelect(false)
    setAnchorAboutMeIsSelect(false)
    if(text[language].anchorProjects == value) {
      setPage('projects')
      setAnchorProjectIsSelect(true)
    }
    if(text[language].anchorSkills == value) {
      setPage('skills')
      setAnchorSkillIsSelect(true)
    }
    if(text[language].anchorAboutMe == value) {
      setPage('about me')
      setAnchorAboutMeIsSelect(true)
    }
  }

  const putBanner = !false
  return (
    <div className="flex flex-col items-center">
      <div className={`w-[120%] max-sm:w-full h-64 max-sm:h-44 rounded-xs ${!putBanner ? 'bg-secondary' : ''} bg-cover`}>
        {putBanner && <img src={profileBanner} alt="banner" className='w-full h-full object-cover'/>}
      </div>
      <div className="relative h-24 flex w-full max-sm:px-4">
        <figure className="absolute -translate-y-1/2 h-48 w-48 rounded-full overflow-hidden max-sm:h-36 max-sm:w-36 border-4 border-primary dark:border-dark-primary">
          <img src={profilePhoto} alt={text[language].profilePhotoAlt} className="w-full h-full bg-secondary-hover object-cover"/>
        </figure>
      </div>
      <div className="flex flex-col w-full gap-2  max-sm:px-4">
        <span className="text-4xl font-bold dark:text-dark-primary-text">Sebastian Ariza</span>
        <p className='dark:text-dark-primary-text'>{text[language].description}</p>
        <div className='flex flex-wrap gap-4'>
          <Tag content={text[language].tagWork} Icon={MdWork}/>
          <Tag content='Colombia' Icon={FaFlag}/>
          <Tag content='Bogotá' Icon={FaCity}/>
          <Tag content={text[language].tagBirthday} Icon={FaBirthdayCake}/>
        </div>
        <div className='flex'>
          <Anchor 
            onClick={handleAnchorSelected} 
            isActive={anchorProjectIsSelected} 
            content={text[language].anchorProjects}
          />
          <Anchor 
            onClick={handleAnchorSelected} 
            isActive={anchorSkillIsSelected} 
            content={text[language].anchorSkills}
          />
          <Anchor 
           onClick={handleAnchorSelected} 
           isActive={anchorAboutMeIsSelected} 
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
    description: 'Técnico en Programación de Software (SENA) con enfoque en desarrollo Web Full Stack y optimización de flujos de trabajo. Experiencia en el sector financiero (Fiduciaria Bancolombia). Busco aportar mi capacidad lógica y técnica en roles de desarrollo de software o análisis operativo digital.',
    tagWork: 'Disponible',
    tagBirthday: '27 Abril',
    anchorProjects: 'Proyectos',
    anchorSkills: 'Habilidades',
    anchorAboutMe: 'Sobre mí',
  },
  english: {
    profilePhotoAlt: 'Profile photo',
    description: 'Software Programming Technician (SENA) focused on Full Stack Web development and workflow optimization. Experience in the financial sector (Fiduciaria Bancolombia). Seeking to contribute my logical and technical capabilities in software development or digital operations analysis roles.',
    tagWork: 'Available',
    tagBirthday: 'April 27th',
    anchorProjects: 'Projects',
    anchorSkills: 'Skills',
    anchorAboutMe: 'About Me',
  }
}