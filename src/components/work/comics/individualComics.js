import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import dataStore from "../../../store/dataStore"
import IndividualBanner from "../../banner/individualBanner";
import IndividualComicTile from "./individualComicTile";
import WorkTabs from "../workTabs";

const IndividualSeries = () => {

    const individualComicsPage = useRef();

    useEffect(() => {

        window.scrollTo(0, 0);

        gsap.to(individualComicsPage.current, {
            opacity: "100%",
            duration: 0.5,
            ease: "Power2.easeOut",
          });
  
        gsap.from(individualComicsPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
        });

        const work_tabs = document.querySelector(".work-tabs");
        work_tabs.classList.add("work_tabs_no-padding");
        return () => {
            work_tabs.classList.remove("work_tabs_no-padding");
        };
    }, []);

    const { comicsTitle } = useParams();
    
    const { comics } = dataStore;
    const comicCollection = comics[comicsTitle].comicCollection;    
    
    return(
        <div>
            <IndividualBanner bannerUrl={comics[comicsTitle].bannerUrl} />
            <WorkTabs />
            <div className="work-container" ref={individualComicsPage}>
                <div className="individual-comics-title">{comicsTitle.replace('-', ' ')}</div>
                <div className="comics-synopsis">
                    {comics[comicsTitle].description}
                </div>
                <div className="vignettes-heading">vignettes</div>
                <div className="layout-gallery">
                { comicCollection && comicCollection.map(comicStrip => {
                    return (
                        <IndividualComicTile comicStrip={comicStrip} key={comicStrip.id} />
                    );
                })}
                </div>
            </div>
        </div>            
    );
}

export default IndividualSeries;