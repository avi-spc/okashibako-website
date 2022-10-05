const IndividualCollectioneTile = ({ episode }) => {
	return (
		<div className="gallery-tile unclickable-tile">
			{episode.type === 'video' ? (
				<video muted autoplay="autoplay" loop className="gallery-tile-img bordered-tiles">
					<source src={episode.bannerImageUrl} type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
			) : (
				<img
					src={episode.bannerImageUrl}
					alt=""
					className="gallery-tile-img bordered-tiles"
				/>
			)}
			<div className="tile-overlay-container overlay-from-bottom">
				<div className="title-heading">{episode.title}</div>
			</div>
			<div className="tile-title">{episode.title}</div>
		</div>
	);
};

export default IndividualCollectioneTile;
