import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {

  const contactPage = useRef();

  useEffect(() => {
    gsap.to(contactPage.current, {
      opacity: "100%",
      duration: 0.5,
      ease: "Power2.easeOut",
    });
  });

  return (
    <section className="contact-section" ref={contactPage}>
      <div className="contact-container">
        <div className="lets-get-creative-heading">let's get creative</div>
        <div className="client-message">
          For all enquiries feel free to ping at
        </div>
        <div className="email-address">
          creativekonami@gmail.com
        </div>
        <div className="humour-message">
          shhhhhhh... i’m already reading your email
        </div>
      </div>
    </section>
  );
};

export default Contact;
