import React, { useState } from 'react'
import { Page } from '../types'
import { PageContext } from './contexts'

interface Props {
  children: React.JSX.Element
}

export function PageContextProvider({children}: Props) {
  const [page, setPage] = useState<Page>('projects')

  return (
    <PageContext.Provider value={{page, setPage}}>
      {children}
    </PageContext.Provider>
  )
}