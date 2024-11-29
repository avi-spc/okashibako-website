import { useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import IndividualBanner from '../../banner/individualBanner';
import WorkTabs from '../workTabs';
import IndividualGameTrailer from './individualGameTrailer';

const IndividualGame = () => {
	const individualGamePage = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		gsap.from(individualGamePage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(individualGamePage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		const work_tabs = document.querySelector('.work-tabs');
		work_tabs.classList.add('work_tabs_no-padding');

		return () => {
			work_tabs.classList.remove('work_tabs_no-padding');
		};
	}, []);

	const { gameTitle } = useParams();
	const { games } = useContext(WorkContext);

	const game = games.find((game) => game.title === gameTitle);

	return (
		<div>
			<IndividualBanner bannerUrl={game.bannerUrl} />
			<WorkTabs />
			<div className="work-container" ref={individualGamePage}>
				<div className="individual-series-title">{game.title.replace(/-/g, ' ')}</div>
				<div className="series-synopsis">{game.description}</div>

				<div id="video-player" className="episodes-heading">
					{
						game.trailerUrl.includes('.') ? 'banner' : 'trailer'
					}
				</div>

				<IndividualGameTrailer gameTitle={gameTitle} gameTrailerUrl={game.trailerUrl} />

				{game.process != null && (
					<div>
						<div className="extras-heading">process</div>
						{game.process.map((process) => {
							return (
								<img
									src={process}
									alt=""
									width="100%"
									className="series-process bordered-tiles"
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default IndividualGame;
