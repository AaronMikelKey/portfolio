import React from 'react'
import '../css/contact.sass'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='content'>
      <header>
        <h1>Contact</h1>
      </header>
      <div className='contact-grid'>
        <a href='https://github.com/AaronMikelKey' target='_blank' className='a1'><i className='fab fa-github' aria-hidden="true"></i><span> Github</span></a>
        <a href="www.linkedin.com/in/AaronKey" target="_blank" className='a2'><i className="fab fa-linkedin" aria-hidden="true"></i><span> LinkedIn</span></a>
        <a href="mailto:AaronMikelKey@gmail.com" target="_parent" className='a3'><i className="fa fa-envelope" aria-hidden="true"></i><span> Email</span></a>
        </div>
      </div>
    </div>
  )
}

export default Contact