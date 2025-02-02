import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <div className='header-section'>
        <div className='container mx-auto 2xl:px-28 lg:px-24 md:px-16 '>
          <div className='header-wrapper'>
            <div className='logo-menu'>
              <Link to='/' className='logo'>
                <img src='assets/images/logo/logo.svg' alt='logo' />
              </Link>
            </div>
            <div className='header-bar d-xl-none' onClick={handleMenu}>
              {menuOpen ? (
                <i className='fa-solid fa-xmark fa-2x'></i>
              ) : (
                <i className='fa-solid fa-bars fa-2x'></i>
              )}
            </div>
            <ul className={`main-menu ${menuOpen ? 'active' : 'hidden'}`}>
              <li>
                <button onClick={() => navigate('/#')}>Home </button>
              </li>
              <li>
                <button onClick={() => navigate('/about-us')}>About Us </button>
              </li>
              <li>
                <button onClick={() => navigate('/#')}>Services </button>
              </li>
              <li>
                <button onClick={() => navigate('/#')}>Blog </button>
              </li>
              <li>
                <button onClick={() => navigate('/#')}>Contact Us</button>
              </li>
              <li className='m-0 menu-btn'>
                <button onClick={() => navigate('/#')}>
                  <span>Get a quote</span>{' '}
                  <i className='fa-solid fa-angles-right'></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
