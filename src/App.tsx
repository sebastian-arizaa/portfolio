import { LanguageContextProvider } from './context/LanguageContext'
import { Page } from './components/Page'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {
  return (
    <>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Page/>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  )
}

export default App
