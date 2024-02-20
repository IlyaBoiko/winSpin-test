import React from 'react'

const Button = ({props}) => {


    return (
		<a href='#' className='btn_main' style={{ backgroundImage: `url(${props.bg})` }}>
			<img src={props.url} alt='button' />
			{props.text}
		</a>
	);
}

export default Button