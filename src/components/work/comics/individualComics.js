import { useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import IndividualBanner from '../../banner/individualBanner';
import IndividualComicTile from './individualComicTile';
import WorkTabs from '../workTabs';

const IndividualSeries = () => {
	const individualComicsPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		gsap.from(individualComicsPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(individualComicsPage.current, {
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

	const { comicsTitle } = useParams();
	const { comics } = useContext(WorkContext);

	const individualComic = comics.find((comic) => comic.title === comicsTitle);

	return (
		<div>
			<IndividualBanner bannerUrl={individualComic.bannerUrl} />
			<WorkTabs />
			<div className="work-container" ref={individualComicsPage}>
				<div className="individual-comics-title">{comicsTitle.replace('-', ' ')}</div>
				<div className="comics-synopsis">{individualComic.description}</div>
				<div className="vignettes-heading">vignettes</div>
				<div className="layout-gallery">
					{individualComic.comicCollection.map((comicStrip) => {
						return <IndividualComicTile comicStrip={comicStrip} key={comicStrip.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default IndividualSeries;
