const CompositionsTile = ({ composition }) => {
	return (
		<div className="gallery-tile unclickable-tile">
			{composition.type === 'video' ? (
				<video muted autoplay="autoplay" loop width={'100%'}>
					<source src={composition.imageUrl} type="video/mp4" />
					Sorry, your browser doesn't support embedded videos.
				</video>
			) : (
				<img src={composition.imageUrl} alt="" className="gallery-tile-img" />
			)}

			<div className="tile-overlay-container overlay-from-bottom">
				<div className="title-heading">{composition.title}</div>
			</div>
			<div className="tile-title">{composition.title}</div>
		</div>
	);
};

export default CompositionsTile;
