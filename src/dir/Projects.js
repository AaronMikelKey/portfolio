import React from 'react'
import jandkscreenshot from '../css/photos/JandkScreenshot.png'
import '../css/projects.sass'

const Projects = () => {
  return (
    <div className='container-p'>
      <header className='header-p'>
        <h1>Projects</h1>
        <p>Here's a few of the projects I've made.</p>
      </header>
      <a href='https://jandkpaintsandpix.com' target='_blank' className='p1'>
        <h2>J&amp;K Paints and Pixels</h2>
        <img src={jandkscreenshot}></img>
        <p className='description'>A simple react website for a local business</p>
      </a>
    </div>
  )
}

export default Projects