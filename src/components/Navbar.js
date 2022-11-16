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
						<button>Home</button>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/about'>
						<button>About</button>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/contact'>
						<button>Contact</button>
        </NavLink>
				</li>
				<li className={props.themeName}>
					<NavLink to='/projects'>
						<button>Projects</button>
        </NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar