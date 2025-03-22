import { useContext, useState } from 'react'
import { LanguageContext} from '../../context/contexts';
import Button from './Button'
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { LuLanguages } from 'react-icons/lu';
import { Theme } from '../../types';

export function Navbar() {
  const {language, setLanguage} = useContext(LanguageContext)
  const [theme, setTheme] = useState<Theme>('light')
  const [isSelectingLanguage, setIsSelectingLanguage] = useState(false)
  const ThemeIcon = theme == 'light' ? MdLightMode : MdDarkMode

  const toggleTheme = () => {
    if (!setTheme) return 
    if(theme == 'light') setTheme('dark')
    if(theme == 'dark') setTheme('light')
    document.children[0].classList.toggle('dark')
  }

  return (
    <div className='fixed top-0 left-0 flex justify-end py-2 px-4 w-full mx-auto backdrop-blur-sm'>
      <ul className='flex gap-4'>
        <li>
          <Button styles='hover:bg-third-hover dark:hover:bg-primary/20' iconStyles='h-6 w-6 dark:text-white' onClick={() => setIsSelectingLanguage(!isSelectingLanguage)} Icon={LuLanguages}/>
        </li>
        <li>  
          <Button styles='hover:bg-third-hover dark:hover:bg-primary/20' iconStyles='h-6 w-6 dark:text-white' onClick={toggleTheme}  Icon={ThemeIcon}/>
        </li>
      </ul>
      {isSelectingLanguage && ( 
        <div className='absolute bottom-0 translate-y-full p-4 bg-primary shadow   dark:bg-primary/10 '>
        <ul className='flex flex-col gap-4'>
          <li>
            <Button
              styles='dark:bg-primary/30! dark:hover:bg-primary/40! dark:text-white' 
              isActive={language == 'spanish' ? true : false} 
              onClick={()=> setLanguage && setLanguage('spanish')} 
              content={text[language].btnSpanishLanguage}
              type='secondary'
            />
          </li>
          <li>
            <Button 
              styles='dark:bg-primary/30! dark:hover:bg-primary/40! dark:text-white' 
              isActive={language == 'english' ? true : false} 
              onClick={()=> setLanguage && setLanguage('english')} 
              content={text[language].btnEnglishLanguage}
              type='secondary'
            />
          </li>
        </ul>
      </div>
      )}
      
    </div>
  )
}

const text = {
  spanish: {
    btnSpanishLanguage: 'Español',
    btnEnglishLanguage: 'Ingles',
  },
  english: {
    btnSpanishLanguage: 'Spanish',
    btnEnglishLanguage: 'English',
  }
}