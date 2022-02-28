import React from "react";
import { Link } from "react-scroll";

const IndividualEpisodeTile = ({ serial, title, changeTitle }) => {

  const showEpisodeVideo = (event, tile_title) => {
    event.preventDefault();
    changeTitle(tile_title);
  };

  return (
    <div className="gallery-tile clickable-tile">
      <img
        src={serial.bannerImageUrl}
        alt=""
        className="gallery-tile-img bordered-tiles"
      />
      <Link to="video-player" spy={true} smooth={true}><div
        className="tile-overlay-container overlay-from-bottom" 
        onClick={(event) => showEpisodeVideo(event, title)}        
      >
        <div className="title-heading">{title}</div>
        <div className="click-to-see">click to play</div>
      </div>
      </Link>
      <div className="tile-title">{title}</div>
    </div>
  );
};

export default IndividualEpisodeTile;
