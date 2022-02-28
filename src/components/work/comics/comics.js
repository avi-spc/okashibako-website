import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dataStore from "../../../store/dataStore"
import BannerContent from "../../banner/bannerContent";
import ComicsTile from "./comicsTile";
import WorkTabs from "../workTabs";

const Comics = () => {

    const comicsPage = useRef();

    useEffect(() => {

        window.scrollTo(0, 600);

        gsap.to(comicsPage.current, {
          opacity: "100%",
          duration: 0.5,
          ease: "Power2.easeOut",
        });

        gsap.from(comicsPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
          });
      });
    
    const { comics } = dataStore;
    
    return(
        <div>
            <BannerContent />
            <WorkTabs />
            <div className="work-container" ref={comicsPage}>
                <div className="layout-gallery">
                { comics && Object.entries(comics).map(([key, value]) => {
                return (
                    <ComicsTile comic={value} title={key} key={value.id}/>
                );
            })}
                </div>
            </div>   
        </div>            
    );
}

export default Comics;