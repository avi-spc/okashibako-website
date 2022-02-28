import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dataStore from "../../../store/dataStore"
import BannerContent from "../../banner/bannerContent";
import ClickableWorkTile from "./seriesTile";
import WorkTabs from "../workTabs";

const Series = () => {

    const seriesPage = useRef();

    useEffect(() => {

        window.scrollTo(0, 600);

        gsap.to(seriesPage.current, {
          opacity: "100%",
          duration: 0.5,
          ease: "Power2.easeOut",
        });

        gsap.from(seriesPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
          })
      });
    
    const { series } = dataStore;
    
    return(
        <div>
            <BannerContent />
            <WorkTabs />
            <div className="work-container"  ref={seriesPage}>
                <div className="layout-gallery">
                    { series && Object.entries(series).map(([key, value]) => {
                    return (
                        <ClickableWorkTile serial={value} title={key} key={value.id} />
                    );
                    })}
                </div>
            </div>
        </div>            
    );
}

export default Series;