import React from 'react'
import './Header.css'
import HeaderImage from '../images/illustration-1.svg'

const Header = () => {
  return (
      <header className="header__wrapper">
          <div className="header__image-container">
              <img src={HeaderImage} alt="image of workers working with files" />
          </div>
      </header>
  )
}

export default Header