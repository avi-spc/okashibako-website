import SocialNavLinks from '../navbar/socialNavLinks';

const Footer = () => {
	return (
		<nav className="footer-section">
			<div className="footer-container">
				<SocialNavLinks classType="social-nav" colorMode="dark" />
				<div className="copyright">&copy; creativekonami 2021</div>
			</div>
		</nav>
	);
};

export default Footer;
