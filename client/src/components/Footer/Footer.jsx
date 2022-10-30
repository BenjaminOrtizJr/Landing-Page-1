import React from 'react'
import './Footer.css'
import FooterLogo from '../images/logo2.svg'
import PhoneImage from '../images/icon-phone.svg'
import EmailImage from '../images/icon-email.svg'
import FacebookIcon from '../images/icons8-facebook-f.svg'
import TwitterIcon from '../images/twitter.svg'
import InstagramIcon from '../images/icons8-instagram.svg'


const Footer = () => {
  return (
      <footer className="footer__wrapper">
        <div className="footer__main-container">
          <div className="footer__logo-container">
              <img src={FooterLogo} className="footer__logo-image" alt="logo" />
          </div>
          <div className="footer__contacts-container">
              <a href="#phone" ><img src={PhoneImage} alt="phone" />Phone: +1-543-123-4567</a>
              <a href="#email"><img src={EmailImage} alt="email" />example@fylo.com</a>
          </div>
          <div className="footer__links-container1">
              <a href="#about">About Us</a>
              <a href="#jobs">Jobs</a>
              <a href="#press">Press</a>
              <a href="#blog">Blog</a>
          </div>
          <div className="footer__links-container2">
              <a href="#contact">Contact Us</a>
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
            </div>
        </div>
        <div className="footer__social-container">
            <a href="#facebook"><img src={FacebookIcon} alt="facebook icon" /></a>
            <a href="#twitter"><img src={TwitterIcon} alt="twitter icon" /></a>
            <a href="#instagram"><img src={InstagramIcon} alt="Instagram icon" /></a>
        </div>
      </footer>
  )
}

export default Footer