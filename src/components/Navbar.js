import '../css/navbar.sass'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all'

const Navbar = (props) => {
	return (
		<nav className='nav darkmode'>
			<ul>
				<li className={props.themeName}>
					<NavLink exact to='/'>
						<i className='fas fa-home' /><span>Home</span>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/about'>
						<i className='fas fa-info-circle' /><span>About</span>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/contact'>
						<i className='fas fa-envelope' /><span>Contact</span>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/projects'>
						<i className='fas fa-code-branch' /><span>Projects</span>
        </NavLink>
				</li>
				<li className={props.themeName} id='themeName'>
					<a className={props.themeName} onClick={props.changeTheme} >
						{props.themeName == 'lightmode' ? 'Darkmode?' : 'Lightmode?'}
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar