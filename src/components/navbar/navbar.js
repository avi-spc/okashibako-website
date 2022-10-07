import { useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultNavLinks from './defaultNavLinks';
import MobileNavbar from './mobileNavbar';
import SocialNavLinks from './socialNavLinks';

const Navbar = () => {
	const [visibility, setVisibility] = useState(false);

	const showMobileNavbar = () => {
		setVisibility(!visibility);
	};

	return (
		<nav className="navbar-section">
			<div className="navbar-container">
				<DefaultNavLinks />
				<Link to="/" className="brand-logo">
					<img src="/images/logo.gif" alt="" className="brand-logo-img" />
				</Link>
				<SocialNavLinks classType="social-nav" colorMode="dark" />
				<img
					src="/images/hamburger-menu.png"
					className="hamburger-menu-img"
					alt=""
					onClick={() => showMobileNavbar()}
				/>
				{visibility && <MobileNavbar showMobileNavbar={showMobileNavbar} />}
			</div>
		</nav>
	);
};

export default Navbar;
