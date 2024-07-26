import React,{useState} from "react";
import "./Portfolio.scss";
import SideNav from "../SideNav/SideNav";
import Home from "../Content/Home";
const Portfolio = () => {
  let [ShowToggleMenu, setShowToggleMenu] = useState(true);
  return (
    <div className="portfolio_container">
      <div className="sideNav">
        <SideNav ShowToggleMenu={ShowToggleMenu} setShowToggleMenu={setShowToggleMenu} />
      </div>
      <div className="content">
        <Home  ShowToggleMenu={ShowToggleMenu} setShowToggleMenu={setShowToggleMenu}/>
      </div>
    </div>
  );
};

export default Portfolio;
