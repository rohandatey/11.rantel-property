import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div id="Nav">
      {menu && (
        <div className="menu">
          <div className="ham1">Login</div>
          <div className="ham1">SignUp</div>
          <div className="ham1">List your home</div>
          <div className="ham1">Help Center</div>
        </div>
      )}
      <div className="nav1">
        {/* fro logo */}
        <div className="logo">
          <img src={logo} alt="img" width="50px" />
          <h1>Priver propertt Rental</h1>
        </div>

        {/* for search */}
        <div className="search">
          <input type="text" placeholder="Search Destinon" />
          <button>
            Search <CiSearch />
          </button>
        </div>

        {/* for menu */}
        <div className="hamburger">
          <button id="btn1">List your Home</button>
          {/* yaha pe onclick use kiya  */}
          <button id="btn2" onClick={() => setMenu(!menu)}>
            <IoMdMenu id="svg1" /> <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      <div className="nav2"></div>
    </div>
  );
};

export default Nav;
