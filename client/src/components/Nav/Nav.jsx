import React from 'react'
import Logo from '../images/logo.svg'
import './Nav.css'

const Nav = () => {
  return (
      <nav className="navigation__wrapper">
          <div className="navigation__logo">
              <img src={Logo} alt="logo" />
          </div>
          <div className="navigation__links">
              <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Sign In</a></li>
              </ul>
          </div>
      </nav>
  )
}

export default Nav