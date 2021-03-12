import React from 'react'
import 'react-device-detect'
import '../css/devTest.sass'
import { browserName, browserVersion, fullBrowserVersion, isChrome, isFirefox, isSafari } from 'react-device-detect'

const DevTest = () => {
  const changeTheme = () => {
    let l = document.querySelectorAll('.lightmode');
    let d = document.querySelectorAll('.darkmode');
    for (let i=0;i<l.length;i++) {
      l[i].classList.add('darkmode')
      l[i].classList.remove('lightmode')
    }
    for (let k=0;k<d.length;k++) {
      d[k].classList.add('lightmode')
      d[k].classList.remove('darkmode')
    }
  }
  console.log(browserName);
  return (
    <div id='main'>
      This is the Test Page.
      <button onClick={changeTheme}>Darkmode</button>
    </div>
  )
}

export default DevTest