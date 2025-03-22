import React, { useState } from 'react'
import { Theme } from '../types'
import { ThemeContext } from './contexts'

interface Props {
  children: React.JSX.Element
}

export function ThemeContextProvider({children}: Props) {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}