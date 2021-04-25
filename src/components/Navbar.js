import '../css/navbar.sass'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all'

const Navbar = (props) => {
	let themeName = ''
	if (props.themeName === 'darkmode') {
		themeName = 'lightmode'
	} else {
		themeName = 'darkmode'
	}
	return (
		<nav className='nav darkmode'>
			<ul>
				<li className={props.themeName}>
					<NavLink exact to='/'>
						<i className='fas fa-home' /><span>Home</span>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/about.html'>
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
				<li>
					<button type='button' className={props.themeName + ' ' + 'btn-switch'} onClick={props.changeTheme}>
						<div className='btn-slider'></div>
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar