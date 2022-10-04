import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import ComicsTile from './comicsTile';
import WorkTabs from '../workTabs';

const Comics = () => {
	const comicsPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 600);

		gsap.from(comicsPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(comicsPage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	const { comics } = useContext(WorkContext);

	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={comicsPage}>
				<div className="layout-gallery">
					{comics.map((comic) => {
						return <ComicsTile comic={comic} key={comic.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Comics;
