import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DefaultNavLinks from "./defaultNavLinks";
import MobileNavbar from "./mobileNavbar";
import SocialNavLinks from "./socialNavLinks";
import { NavbarContext } from "../../contexts/workContext";

const Navbar = () => {

    const [visibility, setVisibility] = useState(0);
    
    const showMobileNavbar = () => {
        setVisibility(!visibility);
    };

    return(
        <nav className="navbar-section">
            <div className="navbar-container">
                <DefaultNavLinks />
                <Link to='/' className="brand-logo"><img src="/images/logo.png" alt="" className="brand-logo-img"/></Link>
                <SocialNavLinks />
                <img src="/images/hamburger-menu.png" className="hamburger-menu-img" alt="" onClick={() => showMobileNavbar()}/>
                <NavbarContext.Provider value={[visibility, setVisibility]}>
                    {visibility ? <MobileNavbar /> : null}
                </NavbarContext.Provider>
            </div>
        </nav>
    );
}

export default Navbar;