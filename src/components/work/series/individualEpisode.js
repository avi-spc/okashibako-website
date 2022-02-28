import React from "react"; 
import ReactPlayer from 'react-player/youtube';
import PlayButton from "../playButton";

const IndividualEpisode = ({ episodeTitle, episodeVideoUrl, episodeThumbnailUrl }) => {

  return (
    <div className="episode-video-container">
      <div className="episode-video">
        <ReactPlayer url={episodeVideoUrl} className="episode-video-frame" playIcon={<PlayButton url="/images/video player/play icon.png"/>} controls="true" width="100%" height="100%" /> {/*light={episodeThumbnailUrl}*/}
      </div>
      <div className="playing-info">
        <div className="button"><img src="/images/video player/play icon.png" alt=""/></div>
        <div className="playing-info-message">now playing:</div>  
        <div className="episode-video-title">{episodeTitle}</div>        
      </div>
    </div>
  );
};

export default IndividualEpisode;
