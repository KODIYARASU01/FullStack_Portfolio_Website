import React,{useState} from "react";
import "./Portfolio.scss";
import SideNav from "../SideNav/SideNav";
import Home from "../Content/Home";
const Portfolio = () => {
  let [ShowToggleMenu, setShowToggleMenu] = useState(false);
  return (
    <div className="portfolio_container">
      <div className="sideNav">
        <SideNav ShowToggleMenu={ShowToggleMenu} setShowToggleMenu={setShowToggleMenu} />
      </div>
      <div className="content" id={!ShowToggleMenu ? 'ContentExpand' : 'ContentShrink'} >
        <Home  ShowToggleMenu={ShowToggleMenu} setShowToggleMenu={setShowToggleMenu}/>
      </div>
    </div>
  );
};

export default Portfolio;
