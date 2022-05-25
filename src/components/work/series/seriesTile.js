import React from "react";
import { Link } from "react-router-dom";

const SeriesTile = ({ serial, title }) => {

  const redirectPath=`/series/${title}`;

  return (
    <div className="gallery-tile clickable-tile">
      <video muted autoplay="autoplay" loop width={"100%"} className="gallery-tile-img bordered-tiles">
        <source src={serial.imageUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
      </video>
      {/* <img
        src={serial.imageUrl}
        alt=""
        className="gallery-tile-img bordered-tiles"
      /> */}
      <Link to={redirectPath}>
      <div
        className="tile-overlay-container overlay-from-bottom"
      >
        <div className="title-heading">{title.replace(/-/g, ' ')}</div>
        <div className="click-to-see">click to see more</div>
      </div>
      </Link>
      <div className="tile-title">{title.replace(/-/g, ' ')}</div>
    </div>
  );
};

export default SeriesTile;
