import React, { useEffect } from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'
import ExpIcon from '../components/ExpIcon'
import photo from '../css/photos/Aaron-01.png'

const Home = (props) => {
  {/* shortening for ternary */}
  let t = props.loaded.home.content1
  let t2 = props.loaded.home.content2

  {/* header transition duration */}
  let hTime = t ? '0' : '3000'

  {/* arrow transition duration and delay */}
  let aTime = t ? ['0','0'] : ['3000','0']

  {/* image transition duration and delay */}
  let iTime = t ? ['0','0'] : ['3000','2000']

  {/* bounce  animation */}
  let bounce = t ? 'bounced' : 'bounce'

  {/* experience transition duration and delay */}
  let eTime = t2 ? ['0','0'] : ['3000']

  {/* functions to set props.loaded */}
  const loaded1 = () => {
		setTimeout(() => {
			props.setLoaded(prevState => ({
				...prevState,
				home: {
					...prevState.home,
					content1: true
				}
			}))
		}, 
    10000
		)
  }
  const loaded2 = () => {
    props.setLoaded(prevState => ({
      ...prevState,
      home: {
        ...prevState.home,
        content2: true
      }
    }))
  }

  {/* function to animate */}
  const Experience = () => {
    if (!t2) {
      return (
        <FadeIn delay={eTime[0]} transitionDuration={eTime[1]} onComplete={loaded2} >
          <h3 className='title'>Experience with: </h3>
          <ExpIcon />
        </FadeIn>
        )
    }
    return (
        <div >
          <h3 className='title'>Experience with: </h3>
          <ExpIcon />
        </div>
      )
  }

  return (
      <div className='grid-container'>
        <header className='content-1'>
          <FadeIn delay='0' transitionDuration={hTime} >
            <h1>Aaron Key</h1>
            <h2>Full Stack Web Developer</h2>
          </FadeIn>
          <FadeIn delay={aTime[0]} transitionDuration={aTime[1]} className={bounce} onComplete={loaded1} >
            <div className='arrow-div'>
              <i className='fas fa-arrow-down' />
              <i className='fas fa-arrow-down' />
            </div>
          </FadeIn>
        </header>
        <FadeIn delay={iTime[0]} transitionDuration={iTime[1]} className='picture-1'>
          <img src={photo} alt='An image of myself' />
        </FadeIn>
        <div className='content-2'>
      {/* move experience to another component? */}
          <Experience />
        </div>
      </div>
  )
}

export default Home