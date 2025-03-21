import React from 'react'

interface Props {
  children: React.JSX.Element | React.JSX.Element[] 
}

export function ContentLayout({children}: Props) {
  return (
    <div className='w-1/2 min-w-[375px] max-w-[800px] h-screen mx-auto mt-[64px] dark:bg-dark-primary'>
      {children}
    </div>
  )
}
