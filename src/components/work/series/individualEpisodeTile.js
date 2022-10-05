import { Link } from 'react-scroll';

const IndividualEpisodeTile = ({ episode, changeTitle }) => {
	return (
		<div className="gallery-tile clickable-tile">
			<img src={episode.bannerImageUrl} alt="" className="gallery-tile-img bordered-tiles" />
			<Link to="video-player" spy={true} smooth={true}>
				<div
					className="tile-overlay-container overlay-from-bottom"
					onClick={() => changeTitle(episode.title)}
				>
					<div className="title-heading">{episode.title}</div>
					<div className="click-to-see">click to play</div>
				</div>
			</Link>
			<div className="tile-title">{episode.title}</div>
		</div>
	);
};

export default IndividualEpisodeTile;
