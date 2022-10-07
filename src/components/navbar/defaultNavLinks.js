import { NavLink } from 'react-router-dom';

const DefaultNavLinks = () => {
	return (
		<div className="default-nav">
			<ul>
				<li>
					<NavLink to="/" className="default-nav-links">
						home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className="default-nav-links">
						about
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className="default-nav-links">
						contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default DefaultNavLinks;
