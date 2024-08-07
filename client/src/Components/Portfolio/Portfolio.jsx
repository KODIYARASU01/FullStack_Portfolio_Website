import React,{useState} from "react";
import "./Portfolio.scss";
import SideNav from "../SideNav/SideNav";
import Home from "../Content/Home";
const Portfolio = () => {
 
  return (
    <div className="portfolio_container">
      <div className="sideNav">
        <SideNav  />
      </div>
      <div className="content">
        <Home/>


      </div>
    </div>
  );
};

export default Portfolio;
