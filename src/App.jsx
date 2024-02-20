import React, { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import Marquee from "react-fast-marquee";
import Option from "./components/Option";
import SidebarItem from "./components/SidebarItem";

const btnArr = [
	{
		text: "Game slots",
		url: "/imgs/slots.png",
		bg: "/imgs/btn-bg-1.png",
	},
	{
		text: "Live casino",
		url: "/imgs/live.png",
		bg: "/imgs/btn-bg-2.png",
	},
	{
		text: "Promotions",
		url: "/imgs/sidebar-2.png",
		bg: "/imgs/btn-bg-3.png",
	},
	{
		text: "Tournaments",
		url: "/imgs/tour.png",
		bg: "/imgs/btn-bg-4.png",
	},
];
const optionsArr = [
	{
		class: "",
		img: "/imgs/bonus-1.png",
		topText: "Welcome bonus",
		botText: "100% up to €500 +120 FreeSpins",
		selected: true,
		id: 1,
	},
	{
		class: "first_bonus",
		img: "/imgs/bonus-2.png",
		topText: "First Deposit Bonus",
		botText: "100% up to €500 +120 FreeSpins",
		selected: false,
		id: 2,
	},
	{
		class: "no_bonus",
		img: "/imgs/bonus-3.png",
		topText: "No Bonus",
		botText: "I do not want a Welcome bonus",
		selected: false,
		id: 3,
	},
];
const sidebarMenu = [
	{
		url: "/imgs/sidebar-1.png",
		text: "Games",
	},
	{
		url: "/imgs/sidebar-2.png",
		text: "Promotions",
	},
	{
		url: "/imgs/sidebar-3.png",
		text: "Tournaments",
	},
	{
		url: "/imgs/sidebar-4.png",
		text: "Live dealers",
	},
	{
		url: "/imgs/sidebar-5.png",
		text: "Lottery",
	},
	{
		url: "/imgs/sidebar-6.png",
		text: "Hall of fame",
	},
	{
		url: "/imgs/sidebar-7.png",
		text: "VIP",
	},
	{
		url: "/imgs/sidebar-8.png",
		text: "Payment",
	},
	{
		url: "/imgs/sidebar-9.png",
		text: "Support",
	},
];

const App = () => {
	const [isOpen, setOpen] = useState(false);
	const [option, setOption] = useState(optionsArr);
	const [openSidebar, setOpenSidebar] = useState(false);

	const openMenu = () => {
		setOpenSidebar(true);
	};
	const closeMenu = () => {
		setOpenSidebar(false);
	};

	const handleClick = (id) => {
		option.forEach((el) => {
			if (id === el.id) {
				el.selected = true;
			} else {
				el.selected = false;
			}
		});
		option.sort((a) => {
			if (a.selected) {
				return -1;
			} else {
				return 1;
			}
		});
		setOption([...option]);
		setOpen(!isOpen);
	};

	return (
		<main className='main'>
			<aside className={`sidebar ${openSidebar ? "open" : ""}`}>
				<div className='sidebar-gradient'></div>
				<div className='sidebar-image'></div>
				<div className='container'>
					<div className='sidebar_wrapper'>
						<div className='sidebar_first'>
							<img src='/imgs/logo.png' alt='logo' />
							<div className='search'>
								<img src='/imgs/search-icon.png' alt='search' />
							</div>
						</div>
						<div className='sidebar_second'>
							<img src='/imgs/mes.png' alt='' />
							<img src='/imgs/lang.png' alt='' />
						</div>
					</div>
					<div className='sidebar_btns'>
						<a href='#' className='sidebar_register'>
							Register
						</a>
						<a href='#' className='sidebar_logIn'>
							Log in
						</a>
					</div>
					<div className='sidebar_input'>
						<input
							placeholder='Game name or provider'
							type='text'
						/>
					</div>
					<div className='sidebar_menu'>
						{sidebarMenu.map((item) => (
							<SidebarItem item={item} />
						))}
					</div>
					<div className='footer_wrapper'>
						<a href='#' className='btn_sign sign_in'>
							Sign in
						</a>
						<a href='#' className='burger' onClick={closeMenu}>
							<img src='/imgs/burger-bottom.png' alt='' />
						</a>
						<a href='#' className='btn_sign sign_up'>
							Sign up
						</a>
					</div>
				</div>
			</aside>
			<header className='header'>
				<div className='container'>
					<nav className='nav'>
						<img src='/imgs/logo.png' alt='logo' />
						<div className='search'>
							<img src='/imgs/search-icon.png' alt='search' />
						</div>
					</nav>
					<div className='hero'>
						<div className='hero_card'>
							<img
								src='/imgs/text.svg'
								alt='text'
								className='hero_img'
							/>
							<div className='hero_wrapper'>
								<Option
									key={option[0].id}
									option={option[0]}
									isOpen={isOpen}
									handleClick={handleClick}
								/>
								{isOpen && (
									<div className='select_menu'>
										{option.slice(1).map((opt) => {
											return (
												<Option
													key={opt.id}
													option={opt}
													isOpen={isOpen}
													handleClick={handleClick}
												/>
											);
										})}
									</div>
								)}
							</div>
							<div className='selects'>
								<select
									defaultValue='Country'
									className='select country'
								>
									<option value=''>Country</option>
									<option value=''>Some</option>
								</select>
								<select
									defaultValue='EUR'
									className='select country'
								>
									<option value=''>Country</option>
									<option value=''>Some</option>
								</select>
							</div>
							<a href='#' className='btn_start'>
								Start with your 100% bonus
							</a>
						</div>
					</div>
				</div>
			</header>
			<section className='btns_wrapper'>
				<div className='container'>
					<div className='btns'>
						{btnArr.map((btn) => (
							<Button props={btn} />
						))}
					</div>
				</div>
			</section>
			<Marquee className='marquee'>
				<img src='/imgs/run.png' alt='' />
			</Marquee>
			<section className='footer'>
				<div className='container'>
					<div className='footer_wrapper'>
						<a href='#' className='btn_sign sign_in'>
							Sign in
						</a>
						<a href='#' className='burger' onClick={openMenu}>
							<img src='/imgs/burger-bottom.png' alt='' />
						</a>
						<a href='#' className='btn_sign sign_up'>
							Sign up
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};

export default App;
