import React, { useEffect, useState } from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'
import photo from '../css/photos/Aaron-01.png'
import iconList from '../components/IconList'

const Home = (props) => {

	const [Experience, setExperience] = useState([])

	{/* shortening for ternary */ }
	let t = props.loaded.home.content1

	{/* header transition duration */ }
	let hTime = t ? '0' : '3000'

	{/* arrow transition duration and delay */ }
	let aTime = t ? ['0', '0'] : ['3000', '0']

	{/* image transition duration and delay */ }
	let iTime = t ? ['0', '0'] : ['3000', '2000']

	{/* bounce  animation */ }
	let bounce = t ? 'bounced' : 'bounce'

	{/* 
	functions to set props.loaded 
	This prevents the animations from going again if the user switches to another page and back to home
*/ }
	const loaded1 = () => {
		props.loaded ? null :
			setExperience(iconList)
		setTimeout(() => {
			props.setLoaded(prevState => ({
				...prevState,
				home: {
					...prevState.home,
					content1: true
				}
			}))
		},
			600, [])
	}
	const loaded2 = () => {
		props.setLoaded(prevState => ({
			...prevState,
			home: {
				...prevState.home,
				content2: true
			}
		}))
	}

	{/* function to animate */ }


	useEffect(() => {
		if (props.loaded.home.content1 == true) {
			setExperience(iconList)
		}
	})

	return (
		<div className='grid-container'>
			<header className='content-1'>
				<FadeIn delay='0' transitionDuration={hTime} onComplete={loaded1} >
					<h1>Aaron Key</h1>
					<h2>Full Stack Web Developer</h2>
				</FadeIn>
				<FadeIn delay={aTime[0]} transitionDuration={aTime[1]} className={bounce} >
					<div className='arrow-div'>
						<i className='fas fa-arrow-down' />
						<i className='fas fa-arrow-down' />
					</div>
				</FadeIn>
			</header>
			<FadeIn delay={iTime[0]} transitionDuration={iTime[1]} className='picture-1'>
				<img src={photo} alt='An image of myself' />
			</FadeIn>
			<div className='content-2'>
				<FadeIn className='expIcon' delay='300' transitionDuration={'1000'} onComplete={loaded2} >
					{/* Fade in component only allows you to add a class to EVERY child so have to add some filler divs to fit the grid */}
					<div></div><div></div>
					<h3 className='title'>Experience with: </h3>
					<div></div><div></div>
					{/* Some of these are from font-awesome but some I had to copy the svg paths */}
					{
						Experience.map((item) =>
							item.className !== 'express-svg' ? (
								<div key={item.title} >
									<span className='item' >
										<i className={item.className} />
										{item.title}
									</span>
								</div>
							) : (
								<div key={item.title} >
									<span className='item' >
										<svg viewBox="0 0 128 128" className='express-svg'>
											<path d={item.path} /><path d={item.path2} />
										</svg>
										{item.title}
									</span>
								</div>
							)
						)
					}
				</FadeIn>
			</div>
		</div>
	)
}

export default Home