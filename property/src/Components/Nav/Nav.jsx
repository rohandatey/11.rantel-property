import React from "react";
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  return (
    <div id="Nav">
      <div className="nav1">
        {/* fro logo */}
        <div className="logo">
          <img src={logo} alt="img" width="50px" />
          <h1>Priver propertt Rental</h1>
        </div>
        
        {/* for search */}
        <div className="search">
          <input type="text" placeholder="Search Destinon" />
          <button>Search <CiSearch /></button>
        </div>
        
        {/* for menu */}
        <div className="hamburger">
            <button id="btn1">List your Home</button>
            <button id="btn2"><IoMdMenu id="svg1" /> <CgProfile id="svg2" /></button>
        </div>
      </div>

      <div className="nav2"></div>
    </div>
  );
};

export default Nav;
