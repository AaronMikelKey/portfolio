import React from 'react'
import iconList from './IconList.js'

const ExpIcon = () => {
	let arr = iconList
	console.log(arr)
	return arr.map((item) => {
		if(item.className !== 'express-svg')
			return (
				<span className='item' key={item.title} >
					<i className={item.className} />
					{item.title}
				</span>
				)
		return (
			<span className='item' key={item.title} >
				<svg viewBox="0 0 128 128" className='express-svg'>
					<path d={item.path} /><path d={item.path2} />
				</svg>
				{item.title}
			</span>
			)
	})
}

export default ExpIcon