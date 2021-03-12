import '../css/navbar.sass'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all'

const Navbar = (props) => {
  let themeName = ''
  if(props.themeName === 'darkmode') {
    themeName = 'lightmode'
  } else {
    themeName = 'darkmode'
  }
  return (
    <nav className='nav darkmode'>
      <ul>
        <NavLink exact to='/'>
          <li className={props.themeName}><i className='fas fa-home' />Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li className={props.themeName}><i className='fas fa-info-circle' />About</li>
        </NavLink>
        <NavLink to='/contact'>
          <li className={props.themeName}><i className='fas fa-envelope' />Contact</li>
        </NavLink>
        <NavLink to='/projects'>
          <li className={props.themeName}><i className='fas fa-code-branch' />Projects</li>
        </NavLink>
        <div>
          <button type='button' className={props.themeName + ' ' + 'btn-switch'} onClick={props.changeTheme}> 
            <div className='btn-slider'></div>
          </button>
          <div id='themeName'>{themeName}</div>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar