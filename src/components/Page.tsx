import { ContentLayout } from './layout/ContentLayout'
import { Navbar } from './base/Navbar'
import { BaseLayout } from './layout/BaseLayout'
import { Footer } from './base/Footer'
import { Profile } from './base/Profile'
import { useContext } from 'react'
import { Projects } from './content/Projects'
import { AboutMe } from './content/AboutMe'
import { Skills } from './content/Skills'
import { PageContext } from '../context/contexts'

export function Page() {
  const {page} = useContext(PageContext)

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
      </ContentLayout>
      <Footer/>
    </BaseLayout>
  )
}
