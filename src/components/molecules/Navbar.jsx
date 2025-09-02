import React, {useContext, useMemo, useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { LoginContext } from '../../context/LoginContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin } = useContext(LoginContext);


  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const navLinks = useMemo(() => {
    if (isLogin) {
      return [    
        { path: '/', label: '홈으로', color: 'white' },
        { path: '/search', label: '검색', color: 'white' },
        { path: '/', label: '김성호님', color: 'primary' },
      ];
    } 
    return [
      { path: '/', label: '홈으로', color: 'white' },
      { path: '/search', label: '검색', color: 'white' },
      { path: '/login', label: '로그인', color: 'primary' },
    ];
  }, [isLogin]);

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