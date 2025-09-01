import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import './Navbar.css';

const navLinks = [
  { path: '/', label: '홈으로', color: 'white' },
  { path: '/search', label: '검색', color: 'white' },
  { path: '/login', label: '로그인', color: 'primary' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='navbar'>
      <div>
        <NavLink to='/' className='navbar__logo'>
          <img src={logo} alt='Logo'/>
        </NavLink>
        <div className='navbar__menu'>
          <button className={`navbar__toggle ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <span/>
            <span/>
            <span/>
          </button>
          <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;