import React from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'
import ExpIcon from '../components/ExpIcon'
import photo from '../css/photos/Aaron-01.png'

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
              <img src={photo} alt='An image of myself' />
            </FadeIn>
        <div className='content-2'>
          <h3 className='title'>Experience with: </h3>
          <ExpIcon />
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