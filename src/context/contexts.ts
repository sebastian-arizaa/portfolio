import { createContext } from 'react'
import { Language, Theme } from '../types'

interface LanguageContextProps {
  language: Language,
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>
}

interface ThemeContextProps {
  theme: Theme,
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}

export const LanguageContext = createContext<LanguageContextProps>({language: 'spanish'})
export const ThemeContext = createContext<ThemeContextProps>({theme: 'light'})
