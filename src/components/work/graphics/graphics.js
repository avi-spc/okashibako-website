import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import GraphicsTile from './graphicsTile';
import WorkTabs from '../workTabs';

const Graphics = () => {
	const gamesPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 600);

		gsap.from(gamesPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(gamesPage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	const { graphics } = useContext(WorkContext);
	console.log(graphics);
	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={gamesPage}>
				<div className="layout-gallery">
					{graphics.map((game) => {
						return <GraphicsTile game={game} key={game.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Graphics;
