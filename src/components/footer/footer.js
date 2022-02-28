import React from "react";
import SocialNavLinks from "../navbar/socialNavLinks";
const Footer = () => {
    return(
        <nav className="footer-section">
            <div className="footer-container">
                <SocialNavLinks />
                <div className="copyright">
                    &copy; creativekonami 2021
                </div>
            </div>
        </nav>
    );
}

export default Footer;