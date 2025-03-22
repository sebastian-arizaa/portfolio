import React, { useState } from 'react'
import { LanguageContext } from './contexts'
import { Language } from '../types'

interface Props {
  children: React.JSX.Element
}

export function LanguageContextProvider({children}: Props) {
  const [language, setLanguage] = useState<Language>('spanish')

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}