import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import SeriesTile from './seriesTile';
import WorkTabs from '../workTabs';

const Series = () => {
	const seriesPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 600);

		gsap.from(seriesPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(seriesPage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	const { series } = useContext(WorkContext);

	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={seriesPage}>
				<div className="layout-gallery">
					{series.map((serial) => {
						return <SeriesTile serial={serial} key={serial.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Series;
