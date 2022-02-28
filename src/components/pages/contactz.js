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
        <div className="contact-form">
          <form>
            <label>
              Name *
              <div className="name-label">
                <div>
                  <input type="text" name="first_name" className="first-name-box"/>
                  <div className="name-lower-labels">First Name</div>
                </div>
                <div>
                  <input type="text" name="last_name" className="last-name-box"/>
                  <div className="name-lower-labels">Last Name</div>
                </div>
              </div>              
            </label>
            <label>
              Email *
              <input type="text" name="email" />
            </label>
            <label>
              Subject *
              <input type="text" name="subject" />
            </label>
            <label>
              Message *
              <textarea name="message" rows="10" cols="30" className="message-box">
              </textarea>
            </label>
            <label>
              How did you hear about me?
              <textarea name="info_source" rows="10" cols="30" className="info-source-box">
              </textarea>
            </label>
            <input type="submit" value="LET'S GO" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
