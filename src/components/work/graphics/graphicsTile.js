import { Link } from 'react-router-dom';

const GraphicsTile = ({ game }) => {
	const redirectPath = `/graphics/${game.title}`;

	return (
		<div className="gallery-tile clickable-tile">
			{/* <video muted autoplay="autoplay" loop className="gallery-tile-img bordered-tiles">
				<source src={game.imageUrl} type="video/mp4" />
				Sorry, your browser doesn't support embedded videos.
			</video> */}
			<img src={game.imageUrl} alt="" className="gallery-tile-img bordered-tiles" />
			<Link to={redirectPath}>
				<div className="tile-overlay-container overlay-from-bottom">
					<div className="title-heading">{game.title.replace(/-/g, ' ')}</div>
					<div className="click-to-see">click to see more</div>
				</div>
			</Link>
			<div className="tile-title">{game.title.replace(/-/g, ' ')}</div>
		</div>
	);
};

export default GraphicsTile;
