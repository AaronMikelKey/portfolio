import React, { useEffect, useState } from 'react'
import '../css/home.sass'
import FadeIn from 'react-fade-in'
import photo from '../css/photos/Aaron-01.png'
import iconList from '../components/IconList'
import experienceItems from './assets/js/experience'

const Home = (props) => {

	const [Experience, setExperience] = useState([])

	{/* shortening for ternary */ }
	let t = props.loaded.home.content1

	{/* header transition duration */ }
	let hTime = t ? '0' : '3000'

	{/* image transition duration and delay */ }
	let iTime = t ? ['0', '0'] : ['3000', '2000']

	

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

	{/* 
		function to set iconList.
		react-fade-in doesn't work well if the children are another component's children
	*/ }

	useEffect(() => {
		if (props.loaded.home.content1 == true) {
			setExperience(iconList)
		}
		})

	useEffect(() => {
		document.title = 'Aaron Key\'s Portfolio'
		document.querySelector('meta[name="description"]').setAttribute('content', 'My name is Aaron Key and I\'m a full stack developer originally from South Carolina. I love working with different languages and libraries but currently am using the MERN stack.')
	}, [])


	return (
		<div className='grid-container'>
			<header className='content-1'>
				<FadeIn delay='0' transitionDuration={hTime} onComplete={loaded1} >
					<h1>Aaron Key</h1>
					<h2>Full Stack Web Developer</h2>
				</FadeIn>
			</header>
			<FadeIn delay={iTime[0]} transitionDuration={iTime[1]} className='picture-1'>
				<img src={photo} alt='An image of myself' />
			</FadeIn>
			<div className='content-2 window' style={{textAlign: 'left', color: 'black'}}>
				<div className='title-bar'>
					<h3 className='title-bar-text'>Experience with: </h3>
					</div>
					<div className='window-body'>
					<ul className='tree-view'>
						<li>Web
							<ul>
								{experienceItems.web.map(item => <li>{item}</li>)}
							</ul>
						</li>
						<li>
							HTML
							<ul>
								{experienceItems.html.map(item => <li>{item}</li>)}
							</ul>
						</li>
						<li>
							CSS
							<ul>
								{experienceItems.css.map(item => <li>{item}</li>)}
							</ul>
						</li>
						<li>
							Javascript
							<ul>
								{experienceItems.javascript.map(item => <li>{item}</li>)}
							</ul>
						</li>
						<li>
							Environments
							<ul>
								{experienceItems.environments.map(item => <li>{item}</li>)}
							</ul>
						</li>
					{/*
						Object.keys(experienceItems).forEach((key, value) => {
							console.log(key, value)
							return(<>
								<li>{value}</li>
								<ul>
									{value.map((item) => <li>{item}</li>)}
								</ul></>)
						})
							
					*/}
					
					</ul>
					</div>
			</div>
		</div>
	)
}

export default Home