import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";
import dataStore from "../../../store/dataStore"
import IndividualBanner from "../../banner/individualBanner";
import IndividualEpisodeTile from "./individualEpisodeTile";
import WorkTabs from "../workTabs";
import IndividualEpisode from "./individualEpisode";
import IndividualCollectioneTile from "./individualCollectionTile";

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
    const seriesProcess = series[seriesTitle].process;

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
                <div className="individual-series-title">{seriesTitle.replace(/-/g, ' ')}</div>
                <div className="series-synopsis">
                    {series[seriesTitle].description}
                </div>
                    {(() => 
                        {
                        if (series[seriesTitle].type === "series") {
                            return (
                                <div>
                                    <div id="video-player" className="episodes-heading">episodes</div>               
            
                                    {episodeTitle === "" ? null : <IndividualEpisode episodeTitle={episodeTitle} episodeVideoUrl={embeddedVideoUrl} episodeThumbnailUrl={videoThumbnailUrl} />}
            
                                    <div className="layout-gallery">
                                        { seriesEpisodes && Object.entries(seriesEpisodes).map(([key, value]) => {
                                            return (
                                                <IndividualEpisodeTile serial={value} title={key} key={value.id} changeTitle={episodeTitle => setEpisodeTitle(episodeTitle)} />
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        } else if (series[seriesTitle].type === "collection") {
                            return (
                                <div>
                                    <div id="video-player" className="episodes-heading">collection</div>                           
                                    <div className="layout-gallery">
                                        { seriesEpisodes && Object.entries(seriesEpisodes).map(([key, value]) => {
                                            return (
                                                <IndividualCollectioneTile serial={value} title={key} key={value.id} changeTitle={episodeTitle => setEpisodeTitle(episodeTitle)} />
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        }
                        else if (series[seriesTitle].type === "project") {
                            return (
                                <div style={{lineHeight: "0px"}}>
                                    <div id="video-player" className="episodes-heading"></div>                           
                                    <video muted autoplay="autoplay" loop width={"100%"} className="bordered-tiles">
                                        <source src={series[seriesTitle].spotImageUrl} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>                 
                                </div>
                            )
                        }
                        }
                    )()}

                    {(() => 
                        {
                        if (series[seriesTitle].process!=null) {
                            return (
                                <div>
                                    <div className="extras-heading">process</div> 
                                    { Object.entries(seriesProcess).map(([key, value]) => {
                                        return (
                                            <img src={seriesProcess[key]} alt="" width="100%" className="series-process bordered-tiles" />
                                        );
                                    })}                                    
                                </div>
                            )
                        } else {
                            return null;
                        }
                        }
                    )()}               
                
                {/* <div className="extras-heading">extras</div>                */}
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
                {/* <img src={seriesExtras} alt="" width="100%" /> */}
            </div>
        </div>            
    );
}

export default IndividualSeries;