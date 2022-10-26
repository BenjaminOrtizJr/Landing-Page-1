import React from 'react'
import './Header.css'
import HeaderImage from '../images/illustration-1.svg'

const Header = () => {
  return (
      <header className="header__wrapper">
          <div className="header__image-container">
              <img src={HeaderImage} alt="image of workers working with files" />
          </div>
          <div className="header__text-container">
              <h2>All your files in one secure location, accessible anywhere.</h2>
              <p>Fylo stores your most important files in one secure location. 
                 Access them wherever you need, share and collaborate with friends, 
                 family, and co-workers.
              </p>
              <input type="text" placeholder="Enter your email..." />
              <button>Get Started</button>
            </div>
      </header>
  )
}

export default Header