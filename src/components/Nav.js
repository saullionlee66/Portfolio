import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import "./CSS/Nav.css";
function Nav() {
	const [showLinks, setShowLinks] = useState(true);

	const clickHandler = () => {
		setShowLinks(!showLinks);
	};
	return (
		<div className='Nav'>
			<div id='icon-container'>
				<a href='/home'>
					<FingerprintIcon id='icon' fontSize='large' />
				</a>
				<a href='/home'>Saul's Portfolio</a>
			</div>
			<div id={showLinks ? "links" : "hidden"}>
				<button onClick={clickHandler}>
					<MenuIcon fontSize='large' />
				</button>
				<div className='a-container'>
					<a href='/home'>Home</a>
					<a href='/projects'>Projects</a>
					<a href='/about'>About Me</a>
					<a href='/contact'>Contact</a>
				</div>
			</div>
		</div>
	);
}

export default Nav;
