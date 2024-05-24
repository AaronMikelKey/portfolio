import React, { useState, useEffect } from 'react'
import { isIE } from 'react-device-detect'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavBurger from './components/NavBurger'
import About from './dir/About'
import Contact from './dir/Contact'
import Projects from './dir/Projects'
import Home from './dir/Home'
import DevTest from './dir/DevTest'
import ScrollTop from './components/ScrollTop'

const App = () => {
	{
		/* Determines lightmode or darkmode */
	}
	const [themeName, changeTheme] = useState('darkmode')
	const [offset, setOffset] = useState(0)
	const [scrolled, setScrolled] = useState(false)
	{
		/* State setting for fade in elements */
	}
	const [loaded, setLoaded] = useState({
		home: {
			content1: false,
			content2: false,
		},
		about: {
			content1: false,
			content2: false,
		},
		projects: {
			content1: false,
			content2: false,
		},
	})

	const getWidth = () => {
		return document.body.clientWidth
	}
	const [width, setWidth] = useState(getWidth())

	const useCurrentWidth = () => {
		useEffect(() => {
			let timeout = null
			const resizeListener = () => {
				clearTimeout(timeout)
				timeout = setTimeout(() => setWidth(getWidth()), 50) // Keeps the resize listener from running too many times if someone is resizing their window.
			}
			window.addEventListener('resize', resizeListener)

			return () => {
				window.removeEventListener('resize', resizeListener)
			}
		}, [])
		return width
	}

	if (isIE)
		//Probably don't need this still but who knows.
		return (
			<div>
				Internet Explorer is not supported. Please download Firefox, Chrome, or
				another web browser.
			</div>
		)
	const changeThemeClick = () => {
		let l = document.querySelectorAll('.lightmode')
		let d = document.querySelectorAll('.darkmode')
		if (themeName === 'darkmode') {
			changeTheme('lightmode')
		} else {
			changeTheme('darkmode')
		}
		for (let i = 0; i < l.length; i++) {
			l[i].classList.add('darkmode')
			l[i].classList.remove('lightmode')
		}
		for (let k = 0; k < d.length; k++) {
			d[k].classList.add('lightmode')
			d[k].classList.remove('darkmode')
		}
	}

	const Nav = (props) => {
		return width < 1080 ? <NavBurger {...props} /> : <Navbar {...props} />
	}

	useCurrentWidth()
	return (
		<Router>
			<ScrollTop />
			<Nav themeName={themeName} changeTheme={changeThemeClick} />
			<Switch>
				<Route path="/about">
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
