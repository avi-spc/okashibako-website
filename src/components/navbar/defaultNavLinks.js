import React from "react";
import { NavLink } from "react-router-dom";

const DefaultNavLinks = () => {
  return (
    <div className="default-nav">
      <ul>
        <li>
          <NavLink  to="/" className={({isActive}) => "default-nav-links" + (isActive ?' selected' : '')}>home</NavLink>
        </li>
        <li>
          <NavLink  to="/about" className={({isActive}) => "default-nav-links" + (isActive ?' selected' : '')}>about</NavLink>
        </li>
        <li>
          <NavLink  to="/contact" className={({isActive}) => "default-nav-links" + (isActive ?' selected' : '')}>contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DefaultNavLinks;
