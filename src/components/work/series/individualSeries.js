import { useEffect, useRef, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import IndividualBanner from '../../banner/individualBanner';
import IndividualEpisodeTile from './individualEpisodeTile';
import WorkTabs from '../workTabs';
import IndividualEpisode from './individualEpisode';
import IndividualCollectioneTile from './individualCollectionTile';

const IndividualSeries = () => {
	const individualSeriesPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		gsap.from(individualSeriesPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(individualSeriesPage.current, {
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

	const { seriesTitle } = useParams();
	const { series } = useContext(WorkContext);

	const serial = series.find((serial) => serial.title === seriesTitle);
	const serialEpisodes = serial.seriesEpisodes;

	const [episodeTitle, setEpisodeTitle] = useState('');

	return (
		<div>
			<IndividualBanner bannerUrl={serial.bannerUrl} />
			<WorkTabs />
			<div className="work-container" ref={individualSeriesPage}>
				<div className="individual-series-title">{serial.title.replace(/-/g, ' ')}</div>
				<div className="series-synopsis">{serial.description}</div>

				{serial.type === 'series' && (
					<div>
						<div id="video-player" className="episodes-heading">
							episodes
						</div>
						{episodeTitle !== '' && (
							<IndividualEpisode
								episodeTitle={episodeTitle}
								episodeVideoUrl={
									serialEpisodes[
										serialEpisodes.findIndex(
											(episode) => episode.title === episodeTitle
										)
									].hostedVideoUrl
								}
							/>
						)}
						<div className="layout-gallery">
							{serialEpisodes.map((episode) => (
								<IndividualEpisodeTile
									episode={episode}
									key={episode.id}
									changeTitle={(episodeTitle) => setEpisodeTitle(episodeTitle)}
								/>
							))}
						</div>
					</div>
				)}

				{serial.type === 'collection' && (
					<div>
						<div id="video-player" className="episodes-heading">
							collection
						</div>
						<div className="layout-gallery">
							{serialEpisodes.map((episode) => (
								<IndividualCollectioneTile episode={episode} key={episode.id} />
							))}
						</div>
					</div>
				)}

				{serial.type === 'project' && (
					<div>
						{serial.imageUrl.includes('.mp4') ? (<div style={{ lineHeight: '0px' }}>
							<div id="video-player" className="episodes-heading"></div>
							<video
								muted
								autoplay="autoplay"
								loop
								width={'100%'}
								className="bordered-tiles"
							>
								<source src={serial.spotImageUrl} type="video/mp4" />
								Sorry, your browser doesn't support embedded videos.
							</video>
						</div>) : (
							<div style={{ lineHeight: '0px' }}>
								<div id="video-player" className="episodes-heading"></div>
								<img
									src={serial.spotImageUrl}
									alt=""
									className="gallery-tile-img bordered-tiles"
								/>
							</div>
						)}
					</div>
				)}

				{serial.process != null && (
					<div>
						<div className="extras-heading">process</div>
						{serial.process.map((process) => {
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

export default IndividualSeries;
