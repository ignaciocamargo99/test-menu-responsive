import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { LayoutWrapper, Main } from './LayoutElements'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isOpenSideBar = (openSideBar) => setIsOpen(openSideBar)

  return (
    <LayoutWrapper>
      <Sidebar isOpenSideBar={isOpenSideBar} />
      <Main isOpen={isOpen}>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
