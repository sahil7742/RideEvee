import React from "react";
import profileIcon from "../assets/image/profile.png";
import logo from "../assets/image/logo.png";
import logo2 from "../assets/image/Group 1000001815.png";
import download from  "../assets/image/Group 1686551472.png";

const Header = () => {
 
  return (
    <div className="Header">
      <div className="logo1">
        <img src={logo} alt="logo1" />
      </div>
      <div className="logo2">
        <img src={logo2} alt="logo2" />
      </div>
      <div className="header-right">
        <span className="text-center">
          <img src={download} alt="logo4" />
          <p className="small pb-0">Download App</p>
        </span>
        <span className="text-center">
        <img src={profileIcon} alt="logo4" />
          <p className="small pb-0">Hi, Ravi</p>
        </span>
      </div>
    </div>
  );
};

export default Header;
