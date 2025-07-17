import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';

import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';



import HomePage from './pages/homePage/HomePage';

import LoginPage from './pages/loginPage/LoginPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    <BrowserRouter>


      <LanguageProvider>


        <Routes>

          <Route element={<DashboardLayout />}>
          
          
            <Route path="/:lang" element={<HomePage />} />

          
          </Route>

          <Route path="/:lang/login" element={<LoginPage />} />

        </Routes>

    
      </LanguageProvider>


    </BrowserRouter>

  // </React.StrictMode>
);

