import '../css/navbar.sass'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all'

const NavBurger = (props) => {
	const burgerClick = () => {
		const c = document.querySelectorAll('.expanded')
		const e = document.querySelectorAll('.collapsed')
    for (let i=0;i<c.length;i++) {
      c[i].classList.add('collapsed')
      c[i].classList.remove('expanded')
    }
    for (let k=0;k<e.length;k++) {
      e[k].classList.add('expanded')
      e[k].classList.remove('collapsed')
    }
	}

	return (
	<nav className={props.themeName + ' navburger'}>
			<div id='expandButton'>
				<div id='expandContainer' onClick={burgerClick}>
					<i className={props.themeName + ' fas fa-bars fa-3x expanded'} />
					<i className={props.themeName + ' fas fa-times fa-3x collapsed'} />
				</div>
			</div>
		<ul  id='navmenu' className='collapsed'>
			<li className={props.themeName} onClick={burgerClick}>
				<NavLink exact to='/'>
					<i className='fas fa-home' /><span>Home</span>
				</NavLink>
			</li>
			<li className={props.themeName} onClick={burgerClick}>
				<NavLink to='/about.html'>
					<i className='fas fa-info-circle' /><span>About</span>
				</NavLink>
			</li>
			<li className={props.themeName} onClick={burgerClick}>
				<NavLink to='/contact'>
					<i className='fas fa-envelope' /><span>Contact</span>
				</NavLink>
			</li>
			<li className={props.themeName} onClick={burgerClick}>
				<NavLink to='/projects'>
					<i className='fas fa-code-branch' /><span>Projects</span>
				</NavLink>
			</li>
		</ul>
		<div className={props.themeName} id='themeName'>
			<a className={props.themeName} onClick={props.changeTheme} >
				{props.themeName == 'lightmode' ? 'Darkmode?' : 'Lightmode?'}
			</a>
		</div>
	</nav>)
}

export default NavBurger