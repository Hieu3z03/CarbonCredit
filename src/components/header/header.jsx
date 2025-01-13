import React from 'react'
import './header.css'
export default function Header() {
  return (
    <header className='header'>
      <div className='header-section'>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo-menu'>
              <a href='index.html' className='logo'>
                <img src='assets/images/logo.svg' alt='logo' />
              </a>
            </div>
            <div className='header-bar d-xl-none'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className='main-menu'>
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
                <ul className='sub-menu'>
                  <li className='sub_menu_wrp d-none d-xl-block'>
                    <a href='#'>
                      Blog Grid{' '}
                      <i className='fas fa-chevron-right float-end'></i>
                    </a>
                    <ul className='sub_sub_menu'>
                      <li>
                        <a href='blog-2.html'>2 Columns</a>
                      </li>
                      <li className='open'>
                        <a href='blog-3.html'>3 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className='d-block d-xl-none'>
                    <a href='blog-2.html'>Blog Grid One</a>
                  </li>
                  <li className='d-block d-xl-none'>
                    <a href='blog-3.html'>Blog Grid Two</a>
                  </li>
                  <li className='sub_menu_wrp d-none d-xl-block'>
                    <a href='#'>
                      Blog Standard{' '}
                      <i className='fas fa-chevron-right float-end'></i>
                    </a>
                    <ul className='sub_sub_menu'>
                      <li>
                        <a href='blog-left.html'>Left SideBar</a>
                      </li>
                      <li>
                        <a href='blog.html'>Right SideBar</a>
                      </li>
                    </ul>
                  </li>
                  <li className='d-block d-xl-none'>
                    <a href='blog.html'>Blog Standard One</a>
                  </li>
                  <li className='d-block d-xl-none'>
                    <a href='blog-left.html'>Blog Standard Two</a>
                  </li>
                  <li className='sub_menu_wrp d-none d-xl-block'>
                    <a href='#'>
                      Blog Details{' '}
                      <i className='fas fa-chevron-right float-end'></i>
                    </a>
                    <ul className='sub_sub_menu'>
                      <li>
                        <a href='blog-single-left.html'>Left SideBar</a>
                      </li>
                      <li>
                        <a href='blog-single.html'>Right SideBar</a>
                      </li>
                    </ul>
                  </li>
                  <li className='d-block d-xl-none'>
                    <a href='blog-single.html'>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact Us</a>
              </li>
              <li className='m-0 menu-btn '>
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
