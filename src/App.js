import React, { useState } from 'react'
import {isIE} from 'react-device-detect'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar'
import About from './dir/About'
import Contact from './dir/Contact'
import Projects from './dir/Projects'
import Home from './dir/Home'
import DevTest from './dir/DevTest'
import ScrollTop from './components/ScrollTop'



const App = () => {
  {/* Determines lightmode or darkmode */}
  const [themeName, changeTheme] = useState('darkmode')

  {/* State setting for fade in elements */}
  const [loaded, setLoaded] = useState({ 
    home: {
      content1: false,
      content2: false
    },
    about: {
      content1: false,
      content2: false
    },
    projects: {
      content1: false,
      content2: false
    }
  })

	const [offset, setOffset] = useState(0)
	const [scrolled, setScrolled] = useState(false)

  if (isIE) return <div>Internet Explorer is not supported.  Please download Firefox, Chrome, or another web browser.</div>
  const changeThemeClick = () => {
    let l = document.querySelectorAll('.lightmode');
    let d = document.querySelectorAll('.darkmode');
    if (themeName === 'darkmode') {
      changeTheme('lightmode')
    } else {
      changeTheme('darkmode')
    }
    for (let i=0;i<l.length;i++) {
      l[i].classList.add('darkmode')
      l[i].classList.remove('lightmode')
    }
    for (let k=0;k<d.length;k++) {
      d[k].classList.add('lightmode')
      d[k].classList.remove('darkmode')
    }
  }
  return (
    <Router>
      <ScrollTop />
      <Navbar themeName={themeName} changeTheme={ changeThemeClick }/>
      <Switch>

        <Route path="/about.html">
          <About loaded={loaded} setLoaded={setLoaded} />
        </Route>

        <Route path="/contact">
          <Contact loaded={loaded} setLoaded={setLoaded} />
        </Route>

        <Route path="/projects">
          <Projects loaded={loaded} setLoaded={setLoaded} />
        </Route>

        <Route path="/devtest">
          <DevTest loaded={loaded} setLoaded={setLoaded} />
        </Route>

        <Route path="/">
          <Home 
						loaded={loaded} 
						setLoaded={setLoaded} 
						offset={offset} 
						setOffset={setOffset}
						scrolled={scrolled}
						setScrolled={setScrolled} 
						/>
        </Route>

      </Switch>
    </Router>
  )
}

export default App