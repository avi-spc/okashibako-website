import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import BannerContent from '../banner/bannerContent';
import WorkTabs from '../work/workTabs';

const Home = () => {
	const homePage = useRef();

	useEffect(() => {
		gsap.to(homePage.current, {
			opacity: '100%',
			duration: 0.3,
			ease: 'Power2.easeOut'
		});
	});

	return (
		<section className="home-section" ref={homePage}>
			<BannerContent />
			<WorkTabs />
		</section>
	);
};

export default Home;
