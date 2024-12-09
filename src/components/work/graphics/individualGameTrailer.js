import ReactPlayer from 'react-player/youtube';
import PlayButton from '../playButton';

const IndividualGameTrailer = ({ gameTitle, gameTrailerUrl }) => {
	return (
		<div className="episode-video-container">
			{gameTrailerUrl.includes('.') ? (
				<img
					src={gameTrailerUrl}
					alt=""
					className="gallery-tile-img bordered-tiles"
				/>
			) : (
				<div>
					<div className="episode-video">
						<ReactPlayer
							url={gameTrailerUrl}
							className="episode-video-frame"
							playIcon={<PlayButton url="/images/video player/play icon.png" />}
							controls={true}
							width="100%"
							height="100%"
						/>
					</div>
					<div className="playing-info">
						<div className="button">
							<img src="/images/video player/play icon.png" alt="" />
						</div>
						<div className="playing-info-message">now playing:</div>
						<div className="episode-video-title">{gameTitle}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default IndividualGameTrailer;