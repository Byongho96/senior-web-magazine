// src/components/layout/DefaultLayout.jsx

import React from 'react';
import './DefaultLayout.css'; 
import Navigation from '../components/molecules/Navigation';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Navigation/>
      <main className="main-content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default DefaultLayout;