import React from 'react'
import BgCurveMobile from '../images/bg-curve-mobile.svg'
import Illustration2 from '../images/illustration-2.svg'
import IconArrow from '../images/icon-arrow.svg'
import CommentIcon from '../images/icon-quotes.svg'
import ProfilePic from '../images/avatar-testimonial.jpg'
import './Main.css'

const Main = () => {
  return (
      <main className="main__wrapper">
        <div className="main__imageSection-container">
          <img src={BgCurveMobile} alt="curved section divider" />
        </div>
        <div className="main__textSection-container">
          <div className="main__textSection-image">
            <img src={Illustration2} alt="people at work" />
          </div>
          <div className="main__textSection-text">
            <h3>Stay productive, wherever you are</h3>
          </div>
          <div className="main__textSection-text2">
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <br />
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
          </div>
          <div className="main__textSection-link">
            <a href="see-fylo-link">See how Fylo works <span className="main__textSection-linkImage"><img src={IconArrow} alt="clickable green arrow"/></span></a>
          </div>
          <div className="main__textSection-comment">
            <img src={CommentIcon} alt="comment bubble" />
            <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className="main__textSection-commentAuthor">
              <img src={ProfilePic} alt="author" />
              <div className="main__textSection-commentAuthorName">
                <p className="author-name">Kyle Burton</p>
                <p className="author-position">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main