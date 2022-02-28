import React, {useContext,useState, useRef, useEffect}  from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../../contexts/workContext";

const MobileNavbar = () => {

  const instagram = "https://www.instagram.com/creativekonami/";
  const youtube = "https://www.youtube.com/channel/UCaDESR8aYy8C9nykJ6GZMYg";
  const behance = "https://www.behance.net/creativekonami";
  const deviantart = "https://www.deviantart.com/creativekonami";
  const facebook = "https://www.facebook.com/creativekonami";
  const mobileNavbar = useRef();

  useEffect(() => {
    gsap.from(mobileNavbar.current, {
      x: '-10%',
      duration: .3,
      ease: 'Power2.easeOut'
    })
  });

  const [visibility, setVisibility] = useContext(NavbarContext);

  const hideMobileNavbar = () => {
      setVisibility(!visibility);
  };

  return (
    <div className="mobile-nav" ref={mobileNavbar}>
      <img src="/images/cancel.png" className="mobile-nav-cancel-img" alt="" onClick={() => hideMobileNavbar()}/>
      <ul>
        <li>
          <NavLink exact to="/" className="mobile-nav-links" activeClassName="selected" onClick={() => hideMobileNavbar()}>home</NavLink>
        </li>
        <li>
          <NavLink exact to="/about" className="mobile-nav-links" activeClassName="selected" onClick={() => hideMobileNavbar()}>about</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" className="mobile-nav-links" activeClassName="selected" onClick={() => hideMobileNavbar()}>contact</NavLink>
        </li>
      </ul>
      <div className="mobile-social-nav">
      <ul>
        <li>
          <a href={instagram} className="mobile-social-nav-links" target="_blank">
            <img src="/images/socials/white/instagram.png" alt="" />
          </a>
        </li>
        <li>
          <a href={youtube} className="mobile-social-nav-links" target="_blank">
            <img src="/images/socials/white/youtube.png" alt="" />
          </a>
        </li>
        <li>
          <a href={behance} className="mobile-social-nav-links" target="_blank">
            <img src="/images/socials/white/behance.png" alt="" />
          </a>
        </li>
        <li>
          <a href={deviantart} className="mobile-social-nav-links" target="_blank">
            <img src="/images/socials/white/deviantart.png" alt="" />
          </a>
        </li>
        <li>
          <a href={facebook} className="mobile-social-nav-links" target="_blank">
            <img src="/images/socials/white/dribbble.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default MobileNavbar;
