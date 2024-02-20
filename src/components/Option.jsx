import React from 'react'

const Option = ({ option, handleClick, isOpen }) => {
	const selectClick = () => {
		handleClick(option.id);
	};



	return (
		<div
			className={`hero_bonus ${option.class}`}
			id={option.id}
			onClick={selectClick}
		>
			<img src={option.img} alt='bonus' />
			<div className='hero_bonus_content'>
				<p className='hero_bonus_top-text'>{option.topText}</p>
				<p className='hero_bonus_bottom-text'>{option.botText}</p>
			</div>
			<img
				className='hero_bonus_line'
				src='/imgs/bonus-line.svg'
				alt='line'
			/>
			{!isOpen ? (
				<img src='/imgs/arrow.svg' alt='' />
			) : (
				<div
					className={`circle ${option.selected ? "active" : ""}`}
				></div>
			)}
		</div>
	);
};

export default Option




