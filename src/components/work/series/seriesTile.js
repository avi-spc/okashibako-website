import React from "react";
import { Link } from "react-router-dom";

const SeriesTile = ({ serial, title }) => {

  const redirectPath=`/series/${title}`;

  return (
    <div className="gallery-tile clickable-tile">
      <img
        src={serial.imageUrl}
        alt=""
        className="gallery-tile-img bordered-tiles"
      />
      <Link to={redirectPath}>
      <div
        className="tile-overlay-container overlay-from-bottom"
      >
        <div className="title-heading">{title.replace('-', ' ')}</div>
        <div className="click-to-see">click to see more</div>
      </div>
      </Link>
      <div className="tile-title">{title.replace('-', ' ')}</div>
    </div>
  );
};

export default SeriesTile;
