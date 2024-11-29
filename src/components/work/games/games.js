import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import GamesTile from './gamesTile';
import WorkTabs from '../workTabs';

const Games = () => {
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

	const { games } = useContext(WorkContext);

	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={gamesPage}>
				<div className="layout-gallery">
					{games.map((game) => {
						return <GamesTile game={game} key={game.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Games;
