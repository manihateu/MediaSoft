'use client'
import React, {ReactNode} from 'react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom'


type AppLayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children} : AppLayoutProps) => {
  return (
    <>
    
        <NavBar/>
        <main className=''>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </main>
    </>
  );
};

export default AppLayout;
