import { ContentLayout } from './layout/ContentLayout'
import { Navbar } from './base/Navbar'
import { BaseLayout } from './layout/BaseLayout'
import { Footer } from './base/Footer'

export function Page() {
  return (
    <BaseLayout>
      <Navbar/>
      <ContentLayout>
        <button className='bg-primary hover:bg-primary-hover active:bg-primary-focus' onClick={()=>  document.children[0].classList.toggle('dark')}>eeeeeee</button>
        <p className='h-96 dark:text-dark-primary-text dark:bg-dark-third'>Holaa</p>
        <p className='bg-primary text-primary-text'>Holaa</p>
      </ContentLayout>
      <Footer/>
    </BaseLayout>
  )
}
