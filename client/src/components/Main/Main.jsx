import React from 'react'
import BgCurveMobile from '../images/bg-curve-mobile.svg'
import './Main.css'

const Main = () => {
  return (
      <div className="main__wrapper">
        <div className="main__imageSection-container">
            <img src={BgCurveMobile} alt="curved section divider" />
        </div>
      </div>
  )
}

export default Main