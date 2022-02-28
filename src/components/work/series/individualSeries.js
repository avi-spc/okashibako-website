import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import dataStore from "../../../store/dataStore"
import IndividualBanner from "../../banner/individualBanner";
import IndividualEpisodeTile from "./individualEpisodeTile";
import WorkTabs from "../workTabs";
import IndividualEpisode from "./individualEpisode";

const IndividualSeries = () => {

    const individualSeriesPage = useRef();

    useEffect(() => {
        
        window.scrollTo(0, 0);

        gsap.to(individualSeriesPage.current, {
            opacity: "100%",
            duration: 0.5,
            ease: "Power2.easeOut",
          });
  
        gsap.from(individualSeriesPage.current, {
            y: '5%',
            duration: .5,
            ease: 'Power2.easeOut'
        })

        const work_tabs = document.querySelector(".work-tabs");
        work_tabs.classList.add("work_tabs_no-padding");
        return () => {
            work_tabs.classList.remove("work_tabs_no-padding");
        };
    }, []);

    const { seriesTitle } = useParams();
    
    const { series } = dataStore;
    const seriesEpisodes = series[seriesTitle].seriesEpisodes;

    const seriesExtras = series[seriesTitle].seriesExtras.extras;

    const [episodeTitle, setEpisodeTitle] = useState("");

    var embeddedVideoUrl = "";
    var videoThumbnailUrl = "";

    if(episodeTitle !== "") {
        embeddedVideoUrl =
        series[seriesTitle].seriesEpisodes[episodeTitle].hostedVideoUrl;
        videoThumbnailUrl =
        series[seriesTitle].seriesEpisodes[episodeTitle].thumbnailUrl;
    }
            
    return(
        <div>
            <IndividualBanner bannerUrl={series[seriesTitle].bannerUrl} />
            <WorkTabs />
            <div className="work-container" ref={individualSeriesPage}>
                <div className="individual-series-title">{seriesTitle.replace('-', ' ')}</div>
                <div className="series-synopsis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            </div>
                <div id="video-player" className="episodes-heading">episodes</div>               

                {episodeTitle === "" ? null : <IndividualEpisode episodeTitle={episodeTitle} episodeVideoUrl={embeddedVideoUrl} episodeThumbnailUrl={videoThumbnailUrl} />}

                <div className="layout-gallery">
                    { seriesEpisodes && Object.entries(seriesEpisodes).map(([key, value]) => {
                        return (
                            <IndividualEpisodeTile serial={value} title={key} key={value.id} changeTitle={episodeTitle => setEpisodeTitle(episodeTitle)} />
                        );
                    })}
                </div>
                
                <div className="extras-heading">extras</div>               
                {/* <IndividualSeriesMasonry columns={3} gap={25}>                   
                    { seriesExtras && Object.entries(seriesExtras).map(([key, value]) => {
                        const height = 200 + Math.ceil(Math.random() * 300);
                
                        return (
                            <div className="extras-img-wrapper" style={{height: `${height}px`}}>
                            <img src={value} key={key} alt="" />
                            </div>
                        )
                    })}
                </IndividualSeriesMasonry> */}
                <img src={seriesExtras} alt="" width="100%" />
            </div>
        </div>            
    );
}

export default IndividualSeries;