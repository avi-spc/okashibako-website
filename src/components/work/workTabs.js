import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const WorkTabs = () => {
	const tabPanels = useRef();

	useEffect(() => {
		gsap.from(tabPanels.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(tabPanels.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	return (
		<div className="work-container">
			<div className="work-tabs">
				<ul>
					<li>
						<NavLink to="/" className="default-nav-links">
							reel
						</NavLink>
					</li>
					<li>
						<NavLink to="/compositions" className="default-nav-links">
							compositions
						</NavLink>
					</li>
					<li>
						<NavLink to="/series" className="default-nav-links">
							series
						</NavLink>
					</li>
					<li>
						<NavLink to="/comics" className="default-nav-links">
							comics
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default WorkTabs;
