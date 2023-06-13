import React, {ReactNode} from 'react';
import NavBar from './NavBar';


type AppLayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children} : AppLayoutProps) => {
  return (
    <>
        <NavBar/>
        <main className=''>
            {children}
        </main>
    </>
  );
};

export default AppLayout;
