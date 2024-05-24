import React, { useEffect, useState } from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'
import photo from '../css/photos/Aaron-01.png'
import iconList from '../components/IconList'

const Home = (props) => {
	const [Experience, setExperience] = useState([])

	{
		/* shortening for ternary */
	}
	let t = props.loaded.home.content1

	{
		/* header transition duration */
	}
	let hTime = t ? '0' : '3000'

	{
		/* image transition duration and delay */
	}
	let iTime = t ? ['0', '0'] : ['3000', '2000']

	const setClass = () => {
		let grid = document.getElementsByClassName('expIcon')[0].childNodes
		if (grid.length == 25) {
			let node1 = grid[1]
			let node2 = grid[2]
			let node3 = grid[3]

			node1.remove()
			node3.remove()
			node2.classList.add('title')
		}
	}

	{
		/* 
	functions to set props.loaded 
	This prevents the animations from going again if the user switches to another page and back to home
*/
	}
	const loaded1 = () => {
		props.loaded ? null : setExperience(iconList)
		setTimeout(
			() => {
				props.setLoaded((prevState) => ({
					...prevState,
					home: {
						...prevState.home,
						content1: true,
					},
				}))
			},
			600,
			[]
		)
	}
	const loaded2 = () => {
		props.setLoaded((prevState) => ({
			...prevState,
			home: {
				...prevState.home,
				content2: true,
			},
		}))
	}

	{
		/* 
		function to set iconList.
		react-fade-in doesn't work well if the children are another component's children
	*/
	}

	useEffect(() => {
		if (props.loaded.home.content1 == true) {
			setExperience(iconList)
		}
		setClass()
	})

	useEffect(() => {
		document.title = "Aaron Key's Portfolio"
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				"My name is Aaron Key and I'm a full stack developer originally from South Carolina. I love working with different languages and libraries but currently am using the MERN stack."
			)
	}, [])

	return (
		<div className="grid-container">
			<header className="content-1">
				<FadeIn delay="0" transitionDuration={hTime} onComplete={loaded1}>
					<h1>Aaron Key</h1>
					<h2>Full Stack Web Developer</h2>
				</FadeIn>
			</header>
			<div className="picture-1">
				<img src={photo} alt="An image of myself" />
			</div>
			<div className="content-2">
				<FadeIn
					className="expIcon"
					delay="200"
					transitionDuration="800"
					onComplete={loaded2}
				>
					{/* Fade in component only allows you to add a class to EVERY child so have to add some filler divs to fit the grid */}
					<div aria-hidden="true"></div>
					<div aria-hidden="true"></div>
					<h3 className="title">Experience with: </h3>
					<div aria-hidden="true"></div>
					<div aria-hidden="true"></div>
					{/* Some of these are from font-awesome but some I had to copy the svg paths */}
					{Experience.map((item) =>
						item.className !== 'express-svg' ? (
							<div key={item.title}>
								<span className="item">
									<i className={item.className} aria-hidden="true" />
									{item.title}
								</span>
							</div>
						) : (
							<div key={item.title}>
								<span className="item">
									<svg
										viewBox="0 0 128 128"
										className="express-svg"
										aria-hidden="true"
									>
										<path d={item.path} />
										<path d={item.path2} />
									</svg>
									{item.title}
								</span>
							</div>
						)
					)}
				</FadeIn>
			</div>
		</div>
	)
}

export default Home
