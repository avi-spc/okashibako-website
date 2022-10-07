import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

import SocialNavLinks from './socialNavLinks';

const MobileNavbar = ({ showMobileNavbar }) => {
	const mobileNavbar = useRef();

	useEffect(() => {
		gsap.from(mobileNavbar.current, {
			x: '-10%',
			duration: 0.3,
			ease: 'Power2.easeOut'
		});
	});

	return (
		<div className="mobile-nav" ref={mobileNavbar}>
			<img
				src="/images/cancel.png"
				className="mobile-nav-cancel-img"
				alt=""
				onClick={() => showMobileNavbar()}
			/>
			<ul>
				<li>
					<NavLink to="/" className="mobile-nav-links" onClick={() => showMobileNavbar()}>
						home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className="mobile-nav-links"
						onClick={() => showMobileNavbar()}
					>
						about
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className="mobile-nav-links"
						onClick={() => showMobileNavbar()}
					>
						contact
					</NavLink>
				</li>
			</ul>
			<SocialNavLinks classType="mobile-social-nav" colorMode="light" />
		</div>
	);
};

export default MobileNavbar;
