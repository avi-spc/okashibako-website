const IndividualComicTile = ({ comicStrip }) => {
	return (
		<div className="gallery-tile">
			<img
				src={comicStrip.stripImageUrl}
				alt=""
				className="gallery-tile-img bordered-tiles"
			/>
		</div>
	);
};

export default IndividualComicTile;
