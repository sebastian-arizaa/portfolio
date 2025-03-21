import { ContentLayout } from './layout/ContentLayout'
import { Navbar } from './base/Navbar'
import { BaseLayout } from './layout/BaseLayout'
import { Footer } from './base/Footer'
import { Profile } from './base/Profile'
import { useContext } from 'react'
import { Projects } from './content/Projects'
import { AboutMe } from './content/AboutMe'
import { Skills } from './content/Skills'
import Button from './base/Button'
import { PageContext } from '../context/contexts'

export function Page() {
  const {page} = useContext(PageContext)
  console.log('🚀 ~ Page ~ page:', page)

  const renderPage = () => {
    if(page == 'projects') return <Projects/>
    if(page == 'skills') return <Skills/>
    if(page == 'about me') return <AboutMe/>
    return <></>
  }

  return (
    <BaseLayout>
      <Navbar/>
      <ContentLayout>
        <Profile/>
        {renderPage()}
        <button className='bg-primary hover:bg-primary-hover active:bg-primary-focus' onClick={()=>  document.children[0].classList.toggle('dark')}>eeeeeee</button>
        <p className='h-96 dark:text-dark-primary-text dark:bg-dark-third'>Holaa</p>
        <p className='bg-primary text-primary-text'>Holaa</p>
        <div className='flex gap-4'>
        </div>
        <Button content='Juas juas' type='secondary'/>
      </ContentLayout>
      <Footer/>
    </BaseLayout>
  )
}
