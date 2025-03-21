import React from 'react'

interface Props {
  children: React.JSX.Element | React.JSX.Element[] 
}

export function BaseLayout({children}: Props) {
  return (
    <div className='relative flex flex-col justify-between w-full min-h-screen h-auto dark:bg-dark-primary'>
      {children}
    </div>
  )
}
