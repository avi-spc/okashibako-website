import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dataStore from "../../../store/dataStore"
import BannerContent from "../../banner/bannerContent";
import WorkTabs from "../workTabs";
import IndividualEpisode from "../series/individualEpisode";

const Reel = () => {

    const reelPage = useRef();

    useEffect(() => {

        window.scrollTo(0, 600);

        gsap.to(reelPage.current, {
          opacity: "100%",
          duration: 0.5,
          ease: "Power2.easeOut",
        });

        gsap.from(reelPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
          });
      });
    
    
    const { reel } = dataStore;
    
    return(
        <div>
            <BannerContent />
            <WorkTabs />
            <div className="work-container" ref={reelPage}>
                <IndividualEpisode episodeTitle={reel.title} episodeVideoUrl={reel.hostedVideoUrl} />
            </div>   
        </div>            
    );
}

export default Reel;