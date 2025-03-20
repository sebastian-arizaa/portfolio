import React, { useContext } from 'react'
import { LanguageContext } from '../context/contexts'

export function Page() {
  const {language, setLanguage} = useContext(LanguageContext)
  console.log(language)
  return (
    <div>
      <button onClick={() => setLanguage && setLanguage('english')}>click me</button>
    </div>
  )
}
