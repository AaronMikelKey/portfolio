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
          <h3 className='title'>Experience with: </h3>
          <span className='item'>
            <i className='fab fa-aws' />
            Amazon Web Services
          </span>
          <span className='item'>
            <i className='fab fa-apple' />
            Apple
          </span>
          <span className='item'>
            <i className='fab fa-cpanel' />
            cPanel
          </span>
          <span className='item'>
            <i className='fab fa-css3-alt' />
            CSS3
          </span>
          <span className='item'>
            <i className='fab fa-github' />
            Github
          </span>
          <span className='item'>
            <i className='fab fa-html5' />
            HTML5
          </span>
          <span className='item'>
            <i className='fab fa-js-square' />
            Javascript
          </span>
          <span className='item'>
            <i className='fab fa-less' />
            Less
          </span>
          <span className='item'>
            <i className='fab fa-linux' />
            Linux
          </span>
          <span className='item'>
            <i className='fab fa-mdb' />
            MongoDB
          </span>
          <span className='item'>
            <i className='fab fa-node' />
            NodeJS
          </span>
          <span className='item'>
            <i className='fab fa-npm' />
            NPM
          </span>
          <span className='item'>
            <i className='fab fa-react' />
            React
          </span>
          <span className='item'>
            <i className='fab fa-sass' />
            Sass
          </span>
          <span className='item'>
            <i className='fab fa-windows' />
            Windows
          </span>
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