import React from "react";

const BannerContent = () => {
    return(
        <section className="hero-section">
            <div className="hero-container">
            <video muted autoplay="autoplay" loop width={"100%"}>

                <source src="/images/hero-banner.mp4"
                        type="video/mp4" />           

                Sorry, your browser doesn't support embedded videos.
                </video>

                {/* <img src="/images/banner/banner-hero-gif.png" alt="" className="banner-img"/> */}
            </div>
        </section>
    );
}

export default BannerContent;