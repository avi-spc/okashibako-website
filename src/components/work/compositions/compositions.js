import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dataStore from "../../../store/dataStore"
import BannerContent from "../../banner/bannerContent";
import WorkTile from "./compositionsTile";
import WorkTabs from "../workTabs";

const Compositions = () => {

    const compositionsPage = useRef();

    useEffect(() => {

        window.scrollTo(0, 600);

        gsap.to(compositionsPage.current, {
          opacity: "100%",
          duration: 0.5,
          ease: "Power2.easeOut",
        });

        gsap.from(compositionsPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
          });
      });
    
    
    const { compositions } = dataStore;
    
    return(
        <div>
            <BannerContent />
            <WorkTabs />
            <div className="work-container" ref={compositionsPage}>
                <div className="layout-gallery">
                { compositions && compositions.map(composition => {
                    return (
                        <WorkTile composition={composition} key={composition.id} />
                    );
                })}
                </div>
            </div>   
        </div>            
    );
}

export default Compositions;