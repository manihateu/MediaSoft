'use client'
import { AllRoutes } from '@/routes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';



export function AppRouter () {
  return (
    <Routes>
        {AllRoutes.map(route => 
            <Route path={route.path} element={<route.component/>} key={route.path}/>    
        )}
    </Routes>
  );
}
