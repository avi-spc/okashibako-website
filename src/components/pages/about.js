import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {

  const aboutPage = useRef();
  
  useEffect(() => {
    gsap.to(aboutPage.current, {
      opacity: '100%',
      duration: .3,
      ease: 'Power2.easeOut'
    });
  });

  return (
    <section className="about-section" ref={aboutPage}>
      <div className="about-container">
        <div className="about-img">
          <img
            src="/images/work/series/oremo adventures/episodes/series intro/series intro.png"
            alt=""
          />
        </div>
        <div className="about-content">
          <div className="its-me-heading">It's me</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
