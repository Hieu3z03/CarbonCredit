import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='header'>
      <div className='header-section'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo-menu'>
              <Link to='/' className='logo'>
                <img src='assets/images/logo.svg' alt='logo' />
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
                <a href='#'>Home </a>
              </li>
              <li>
                <a href='#'>About Us </a>
              </li>
              <li>
                <a href='#'>Services </a>
              </li>
              <li>
                <a href='#'>Blog </a>
              </li>
              <li>
                <a href='contact.html'>Contact Us</a>
              </li>
              <li className='m-0 menu-btn'>
                <a href='contact.html'>
                  <span>Get a quote</span>{' '}
                  <i className='fa-solid fa-angles-right'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
