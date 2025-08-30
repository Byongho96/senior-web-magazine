// src/components/Navigation/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Button from '../atoms/Button';

const navLinks = [
  { path: '/', label: '홈으로', color: "white" },
  { path: '/search', label: '검색', color: "white" },
  { path: '/login', label: '로그인', color: "primary" },
];

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          LOGO
        </NavLink>
        <ul className='nav-menu'>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className="nav-link"
              >
                <Button text={link.label} color={link.color}/>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;