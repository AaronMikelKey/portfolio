import React from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'

const Home = () => {
  return (
      <div className='grid-container'>
          <header className='content-1'>
            <FadeIn transitionDuration='6000'>
              <h1>Aaron Key</h1>
              <h2>Full Stack Web Developer</h2>
            </FadeIn>
            <FadeIn delay='4500' transitionDuration='2000' className='bounce'>
              <div className='arrow-div'>
                <i className='fas fa-arrow-down' />
                <i className='fas fa-arrow-down' />
              </div>
            </FadeIn>
          </header>
            <FadeIn delay='4000' transitionDuration='2000' className='picture-1'>
              <img src='' alt='An image of myself' />
            </FadeIn>
        <div className='content-2'>
          Content 2 here
        </div>
          <div className='content-3'>
            content 3 here
        </div>
        <div className='content-4'>
          content 4 here
        </div>
      </div>
  )
}

export default Home