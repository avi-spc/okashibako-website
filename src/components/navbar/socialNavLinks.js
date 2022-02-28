import React from "react";

const SocialNavLinks = () => {
  const instagram = "https://www.instagram.com/creativekonami/";
  const youtube = "https://www.youtube.com/channel/UCaDESR8aYy8C9nykJ6GZMYg";
  const behance = "https://www.behance.net/creativekonami";
  const deviantart = "https://www.deviantart.com/creativekonami";
  const dribbble = "https://dribbble.com/creativekonami";

  return (
    <div className="social-nav">
      <ul>
        <li>
          <a href={instagram} className="social-nav-links" target="_blank">
            <img src="/images/socials/instagram.png" alt="" />
          </a>
        </li>
        <li>
          <a href={youtube} className="social-nav-links" target="_blank">
            <img src="/images/socials/youtube.png" alt="" />
          </a>
        </li>
        <li>
          <a href={behance} className="social-nav-links" target="_blank">
            <img src="/images/socials/behance.png" alt="" />
          </a>
        </li>
        <li>
          <a href={deviantart} className="social-nav-links" target="_blank">
            <img src="/images/socials/deviantart.png" alt="" />
          </a>
        </li>
        <li>
          <a href={dribbble} className="social-nav-links" target="_blank">
            <img src="/images/socials/dribbble.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNavLinks;
