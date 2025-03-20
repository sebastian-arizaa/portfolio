import React, { useContext } from 'react'
import { LanguageContext } from '../context/contexts'
import { ContentLayout } from './layout/ContentLayout'
import { Navbar } from './base/Navbar'
import { BaseLayout } from './layout/BaseLayout'
import { Footer } from './base/Footer'

export function Page() {
  const {language, setLanguage} = useContext(LanguageContext)
  console.log(language)
  return (
    <BaseLayout>
      <Navbar/>
      <ContentLayout>
        <p className='h-96'>Holaa</p>
      </ContentLayout>
      <Footer/>
    </BaseLayout>
  )
}
