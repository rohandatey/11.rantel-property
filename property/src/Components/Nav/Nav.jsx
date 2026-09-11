import React, { useState } from "react";
import "./Nav.css";

import logo from "../../assets/p.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiTreehouse } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { FaShop } from "react-icons/fa6";
import { GiLighthouse } from "react-icons/gi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div id="Nav">
      {menu && (
        <div className="menu">
          <Link to="/login" className="ham1">Login</Link>
          <Link to="/signup" className="ham1">SignUp</Link>
          <div className="ham1">List your home</div>
          <div className="ham1">Help Center</div>
        </div>
      )}
      <div className="nav1">
        {/* fro logo */}

        <Link to={""}>
          <div className="logo">
            <img src={logo} alt="img" width="50px" />
            <h1>Priver propertt Rental</h1>
          </div>
        </Link>
        {/* for search */}
        <div className="search">
          <input type="text" placeholder="Search Destinon" />
          <button>
            <span> Search</span> <CiSearch />
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

      {/* here i use icons */}
      <div className="nav2">
        <div className="svg11">
          <MdOutlineWhatshot />
          <h3>Trending</h3>
        </div>
        <div className="svg11">
          <GiFamilyHouse />
          <h3>Houses</h3>
        </div>
        <div className="svg11">
          <MdOutlineBedroomParent />
          <h3>Rooms</h3>
        </div>
        <div className="svg11">
          <GiTreehouse />
          <h3>FarmHouse</h3>
        </div>
        <div className="svg11">
          <MdOutlinePool />
          <h3>PoolHouse</h3>
        </div>
        <div className="svg11">
          <LuTentTree />
          <h3>TentHouse</h3>
        </div>
        <div className="svg11">
          <GiWoodCabin />
          <h3>Cabin</h3>
        </div>
        <div className="svg11">
          <FaShop />
          <h3>Shops</h3>
        </div>
        <div className="svg11">
          <GiLighthouse />
          <h3>seaHouse</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;