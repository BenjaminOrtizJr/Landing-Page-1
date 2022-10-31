import React from 'react'
import './Header.css'
import HeaderImage from '../images/illustration-1.svg'


const Header = () => {
  return (
      <header className="header__wrapper">
        <div className="header__image-container">
          <img src={HeaderImage} alt="workers working with files" />
        </div>
        <div className="header__text-container">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>Fylo stores your most important files in one secure location. 
             Access them wherever you need, share and collaborate with friends, 
             family, and co-workers.
          </p>
          <div className="header__input-container">
            <input type="text" placeholder="Enter your email..." />
              <br/>
            <button>Get Started</button>
          </div>
        </div>
      </header>
  )
}

export default Header