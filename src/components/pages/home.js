import React, { useEffect, useRef } from "react";
import  { useParams} from "react-router-dom";
import { gsap } from "gsap";
import BannerContent from "../banner/bannerContent";
import WorkTabs from "../work/workTabs";

const Home = () => {

  const homePage = useRef();

  useEffect(() => {
    gsap.to(homePage.current, {
      opacity: "100%",
      duration: 0.3,
      ease: "Power2.easeOut",
    });
  });

  const param=useParams();

  console.log(param);

  return (
    <section className="home-section" ref={homePage}>
      <BannerContent />
      <WorkTabs />
    </section>
  );
};

export default Home;
