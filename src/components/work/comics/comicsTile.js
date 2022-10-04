import { Link } from 'react-router-dom';

const ComicsTile = ({ comic }) => {
	const redirectPath = `/comics/${comic.title}`;

	return (
		<div className="gallery-tile clickable-tile">
			<img src={comic.imageUrl} alt="" className="gallery-tile-img bordered-tiles" />
			<Link to={redirectPath}>
				<div className="tile-overlay-container overlay-from-bottom">
					<div className="title-heading">{comic.title.replace('-', ' ')}</div>
					<div className="click-to-see">click to see more</div>
				</div>
			</Link>
			<div className="tile-title">{comic.title.replace('-', ' ')}</div>
		</div>
	);
};

export default ComicsTile;
