import React from 'react'
import '../css/about.sass'

const About = () => {
  return (
    <div className='grid-container'>
      <div className='content-1'>
        <header>
          <h1>About Me</h1>
        </header>
        <p>
          My name is Aaron Key and I'm a full stack developer from South Carolina.  
          I started studying HTML in middle school so my friends and I could add pictures and other things to our myspace pages.  
          I didn't know at the time that there were career paths in web development so I never learned much more back then.  
          After high school I got a degree in General Engineering Technology and while I liked what I was doing at the time it didn't 
          allow me to be very innovative or lead to the "dream job" I wanted.
        </p>
        <p>
          In 2016 I decided to look back into web development and see what had changed. There was so much more to learn now and so many 
          interesting languages and web applications that I wanted to learn how to make.  I started with some simple static HTML sites and 
          bought several books and eventually started working with React, NodeJS, REST APIs and making neat projects just for fun, but then 
          realized I enjoy making things work and look nice and decided to pursue a career in web development.  
          I've made some smaller simple websites for local businesses and several apps for personal use in things that interest me.
        </p>
        <p>
          In my spare time when I'm not fixing bugs or working on a new project, I like to play guitar, video games, and go on adventures 
          with my wife and our two dogs Goku and Teddy.  Goku is a Shiba Inu and Teddy is a Goldendoodle.
        </p>
      </div>
    </div>
  )
}

export default About