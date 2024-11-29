import { Link } from 'react-router-dom';

const SeriesTile = ({ serial }) => {
	const redirectPath = `/series/${serial.title}`;
	console.log(serial.imageUrl.includes('.mp4'), serial.imageUrl);
	return (
		<div className="gallery-tile clickable-tile">
			{serial.imageUrl.includes('.mp4') ? (
				<video muted autoplay="autoplay" loop className="gallery-tile-img bordered-tiles">
					<source src={serial.imageUrl} type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
			) : (
				<img
					src={serial.imageUrl}
					alt=""
					className="gallery-tile-img bordered-tiles"
				/>
			)}
			<Link to={redirectPath}>
				<div className="tile-overlay-container overlay-from-bottom">
					<div className="title-heading">{serial.title.replace(/-/g, ' ')}</div>
					<div className="click-to-see">click to see more</div>
				</div>
			</Link>
			<div className="tile-title">{serial.title.replace(/-/g, ' ')}</div>
		</div>
	);
};

export default SeriesTile;
