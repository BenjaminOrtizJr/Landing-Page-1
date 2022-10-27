import React from 'react'
import Logo from '../images/logo.svg'
import './Nav.css'

const Nav = () => {
  return (
      <nav className="navigation__wrapper">
          <div className="navigation__logo-container">
              <img src={Logo} alt="logo" />
          </div>
          <div className="navigation__links-container">
              <ul>
                  <li><a href="features">Features</a></li>
                  <li><a href="team">Team</a></li>
                  <li><a href="signIn">Sign In</a></li>
              </ul>
          </div>
      </nav>
  )
}

export default Nav