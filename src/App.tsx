import { LanguageContextProvider } from './context/LanguageContext'
import { Page } from './components/Page'
import { ThemeContextProvider } from './context/ThemeContext'
import { PageContextProvider } from './context/PageContext'

function App() {
  return (
    <>
      <LanguageContextProvider>
        <ThemeContextProvider>
          <PageContextProvider>
            <Page/>
          </PageContextProvider>
        </ThemeContextProvider>
      </LanguageContextProvider>
    </>
  )
}

export default App
