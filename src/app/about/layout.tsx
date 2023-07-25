import React, { ReactNode } from 'react'

const Layout = ({children }: { children: ReactNode}) => {
  return (
    <div>About Layout
        {children}
    </div>
  )
}

export default Layout