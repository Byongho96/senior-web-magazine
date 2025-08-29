// src/components/Navigation/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navLinks = [
  { path: '/', label: '홈으로' },
  { path: '/products', label: '검색' },
  { path: '/login', label: '로그인' },
];

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Logo
        </NavLink>
        <ul className='nav-menu'>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className="nav-link"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;