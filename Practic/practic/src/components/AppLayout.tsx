import React, { ReactNode } from 'react'
import NavBar from './NavBar';

type LayoutProps = {
    children: ReactNode;
};

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <NavBar/>
        <main>{children}</main>
    </>
  )
}

export default AppLayout