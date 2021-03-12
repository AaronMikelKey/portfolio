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



const App = () => {
  const [themeName, changeTheme] = useState('darkmode')
  if (isIE) return <div>Internet Explorer is not supported.  Please download Firefox, Chrome, or another web browser.</div>
  const changeThemeClick = () => {
    console.log(themeName);
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
      <Navbar themeName={themeName} changeTheme={ changeThemeClick }/>
      <Switch>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/devtest">
          <DevTest />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  )
}

export default App