// src/components/layout/DefaultLayout.jsx

import React from 'react';
import './DefaultLayout.css'; 
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/molecules/Footer';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Navbar/>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;