'use client'
import { AllRoutes } from '@/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export interface IAppRouterProps {
}

export function AppRouter (props: IAppRouterProps) {
  return (
    <Routes>
        {AllRoutes.map(route => 
            <Route path={route.path} element={<route.component/>}/>    
        )}
    </Routes>
  );
}
