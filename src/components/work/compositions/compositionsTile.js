import React from "react";

const CompositionsTile = ({ composition }) => {
  return (
    <div className="gallery-tile unclickable-tile">
      <img src={composition.imageUrl} alt="" className="gallery-tile-img" />
      <div className="tile-overlay-container overlay-from-bottom">
        <div className="title-heading">{composition.title}</div>
      </div>
      <div className="tile-title">{composition.title}</div>
    </div>
  );
};

export default CompositionsTile;
