import React from 'react'

const ExpIcon = (props) => {
		if(props.className !== 'express-svg')
			return (
				<>
					<div className='title-bar' key={props.title} >
						<div className='title-bar-text'>{props.title}</div>
					</div>
					<div className='window-body'>
					<i className={props.className} />
					</div>
				</>
				)
		else return (
			<>
					<div className='title-bar' key={props.title} >
						<div className='title-bar-text'>{props.title}</div>
					</div>
					<div className='window-body'>
					<svg viewBox="0 0 128 128" className='express-svg'>
					<path d={props.path} /><path d={item.path2} />
				</svg>
					</div>
				</>
			)
}

export default ExpIcon