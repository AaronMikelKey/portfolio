import React, { useEffect } from 'react'
import '../css/about.sass'
import img1 from '../css/photos/IMG_0428.jpeg'
import img2 from '../css/photos/Ted.jpeg'
import img3 from '../css/photos/IMG_4278.jpg'

const About = () => {
	useEffect(() => {
		document.title = 'About Me'
		document
			.querySelector('meta[name="description"]')
			.setAttribute(
				'content',
				"My name is Aaron Key and I'm a full stack developer originally from South Carolina. I love working with different languages and libraries but currently am using the MERN stack."
			)
	}, [])
	return (
		<div className="grid-container-a">
			<header className="content-1a">
				<h1>About Me</h1>
			</header>
			<div className="picture-1a">
				<img src={img1}></img>
			</div>
			<div className="picture-2a">
				<img src={img2}></img>
			</div>
			<div className="picture-3a">
				<img src={img3}></img>
			</div>
			<div className="about-div">
				<p className="about-p">
					My name is Aaron Key and I'm a full stack developer from North
					Carolina. I started studying HTML in middle school so my friends and I
					could edit our myspace pages.
				</p>
				<p className="about-p">
					I started with some simple static HTML sites, bought several books,
					and eventually started working with React, NodeJS, and RESTful APIs. I
					made some simple but neat projects just for fun, and realized I enjoy
					making things work and look nice and decided to pursue a career in web
					development. I've made some smaller simple websites for local
					businesses and several apps for personal use in things that interest
					me.
				</p>
				<p className="about-p">
					In my spare time when I'm not fixing bugs or working on a new project,
					I like to play guitar, video games, and go on adventures with my wife
					and our two dogs Goku and Teddy. Goku is a Shiba Inu and Teddy is a
					Goldendoodle.
				</p>
			</div>
		</div>
	)
}

export default About
