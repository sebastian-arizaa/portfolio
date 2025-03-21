import { createContext } from 'react'
import { Language, Theme, Page } from '../types'

interface LanguageContextProps {
  language: Language,
  setLanguage?: React.Dispatch<React.SetStateAction<Language>>
}

interface ThemeContextProps {
  theme: Theme,
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}

interface PageContextProps {
  page: Page,
  setPage?: React.Dispatch<React.SetStateAction<Page>>
}

export const LanguageContext = createContext<LanguageContextProps>({language: 'spanish'})
export const ThemeContext = createContext<ThemeContextProps>({theme: 'light'})
export const PageContext = createContext<PageContextProps>({page: 'projects'})
