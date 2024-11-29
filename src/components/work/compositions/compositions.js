import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import WorkTile from './compositionsTile';
import WorkTabs from '../workTabs';

const Compositions = () => {
	const compositionsPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 600);

		gsap.from(compositionsPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(compositionsPage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	const { compositions } = useContext(WorkContext);
	const a = Object.values(compositions);
	console.log(a.reverse());

	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={compositionsPage}>
				<div className="layout-gallery">
					{Object.values(compositions).reverse().map((composition) => {
						return <WorkTile composition={composition} key={composition.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Compositions;
