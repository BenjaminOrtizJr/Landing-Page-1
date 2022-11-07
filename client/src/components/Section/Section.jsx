import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <section className="section__wrapper">
      <div className="section__container">
        <div className="section__content-container">
          <h3>Get early access today</h3>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
             If you have any questions, our support team would be happy to help you.
          </p>
        </div>
        <form className="section__input-container">
          <input type="email" placeholder="email@example.com" required />
          <br />
          <button>Get Started For Free</button>
        </form>
      </div>
    </section>
  )
}

export default Section