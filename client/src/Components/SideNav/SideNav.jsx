import React, { useState,useContext } from "react";
import "./SideNav.scss";
import Logo from "../../assets/Logo.png";
import { context } from "../../App";
const SideNav = () => {
  let {ShowToggleMenu,setShowToggleMenu}=useContext(context);
  return (
    // parent `Column1
    <div className="sidenav_container">
      {/* Row1 */}
      <div className="sidenav_logo">
        <img src={Logo} alt="logo" />
      </div>
      {/* Row2 */}
      <div className="sidenav_menus" id={ShowToggleMenu ? 'MenuOpen' : 'MenuClose'}>
        <div className="menu">
          <i className="bx bx-home"></i>
        </div>
        <div className="menu">
          <i className="bx bx-user"></i>
        </div>
        <div className="menu">
          <i className="bx bx-book-open"></i>
        </div>
        <div className="menu">
          <i className="bx bx-bulb"></i>
        </div>
        <div className="menu">
          <i className="bx bx-briefcase"></i>
        </div>
        <div className="menu">
          <i className="bx bx-mail-send"></i>
        </div>
      </div>

      {/* Row3 */}
      <div className="sidenav_socialmedias">
        <div className="media">
          <i className="bx bxl-github"></i>
        </div>
        <div className="media">
          <i className="bx bxl-linkedin"></i>
        </div>

        <div className="media">
          <i className="bx bxl-gmail"></i>
        </div>
      </div>


      {/* MenuIcon show enter in 600px*/}
      <div className="menu_icons">
        <div
          className="menu_icon"
          onClick={() => setShowToggleMenu(!ShowToggleMenu)}
        >
          {ShowToggleMenu ? (
            <i className="bx bx-menu-alt-right"></i>
          ) : (
            <i className="bx bx-menu-alt-left"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;


