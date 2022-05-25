import React from "react";

const IndividualCollectioneTile = ({ serial, title, changeTitle }) => {

  return (
    <div className="gallery-tile unclickable-tile">

      {(() => 
        {
          if (serial.type === "video") {
            return (
              <video muted autoplay="autoplay" loop width={"100%"} className="gallery-tile-img bordered-tiles">
                <source src={serial.bannerImageUrl} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
              </video>                 
            )
          } else {
            return (
              <img src={serial.bannerImageUrl} alt="" className="gallery-tile-img bordered-tiles" />
            )
          }
        }
      )()}
      
      <div className="tile-overlay-container overlay-from-bottom">
        <div className="title-heading">{title}</div>
      </div>
      <div className="tile-title">{title}</div>
    </div>
  );
};

export default IndividualCollectioneTile;
