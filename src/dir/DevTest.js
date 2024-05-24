import React, { useState, useEffect } from 'react'
import 'react-device-detect'
import '../css/devTest.sass'
import {
	browserName,
	browserVersion,
	fullBrowserVersion,
	isChrome,
	isFirefox,
	isSafari,
} from 'react-device-detect'

const DevTest = () => {
	const [viewHeight, setViewHeight] = useState(window.innerHeight)
	const [scrollTop, setScrollTop] = useState(window.scrollY)

	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(Math.ceil(e.target.documentElement.scrollTop / viewHeight))
		}
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const changeTheme = () => {
		let l = document.querySelectorAll('.lightmode')
		let d = document.querySelectorAll('.darkmode')
		for (let i = 0; i < l.length; i++) {
			l[i].classList.add('darkmode')
			l[i].classList.remove('lightmode')
		}
		for (let k = 0; k < d.length; k++) {
			d[k].classList.add('lightmode')
			d[k].classList.remove('darkmode')
		}
	}
	console.log(browserName)
	return (
		<div id="main">
			This is the Test Page.
			<button onClick={changeTheme}>Darkmode</button>
			<table id="scrollVal">
				<thead>
					<tr>
						<th>scroll top</th>
						<th>window height</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{scrollTop}</td>
						<td>{viewHeight}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default DevTest
