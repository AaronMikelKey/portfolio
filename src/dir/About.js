import React from 'react'
import '../css/about.sass'
import img1 from '../css/photos/IMG_0428.jpeg'
import img2 from '../css/photos/Ted.jpeg'
import img3 from '../css/photos/IMG_4278.jpg'

const About = () => {
  return (
    <div className='grid-container-a'>
        <header className='content-1a'>
          <h1>About Me</h1>
        </header>
        <div className='picture-1a'>
        <img src={img1}></img>
        </div>
        <div className='picture-2a'>
        <img src={img2}></img>
        </div>
        <div className='picture-3a'>
        <img src={img3}></img>
        </div>
        <div className='about-div'>
        <p className='about-p'>
          My name is Aaron Key and I'm a full stack developer from South Carolina.  
          I started studying HTML in middle school so my friends and I could add pictures and other things to our myspace pages.  
          I didn't know at the time that there were career paths in web development so I never learned much more back then.  
          After high school I got a degree in General Engineering Technology and while I liked what I was doing at the time it didn't 
          allow me to be very innovative or creative.
        </p>
        <p className='about-p'>
          In 2016 I decided to look back into web development and see what had changed. There was so much more to learn now and so many 
          interesting languages and web applications that I wanted to learn how to make.  I started with some simple static HTML sites and 
          bought several books and eventually started working with React, NodeJS, REST APIs and making neat projects just for fun, but then 
          realized I enjoy making things work and look nice and decided to pursue a career in web development.  
          I've made some smaller simple websites for local businesses and several apps for personal use in things that interest me.
        </p>
        <p className='about-p'>
          In my spare time when I'm not fixing bugs or working on a new project, I like to play guitar, video games, and go on adventures 
          with my wife and our two dogs Goku and Teddy.  Goku is a Shiba Inu and Teddy is a Goldendoodle.
        </p>
        </div>
    </div>
  )
}

export default About