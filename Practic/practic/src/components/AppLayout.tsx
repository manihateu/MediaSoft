import React, { ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode;
};

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <main>{children}</main>
    </>
  )
}

export default AppLayout