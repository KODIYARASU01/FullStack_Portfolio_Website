import React, { useEffect, useState } from "react";
import "./Content_Style/Home.scss";
import userSVG from "../../assets/Home/2.svg";
import hand from "../../assets/Home/hand.png";

// Smiles icons

import smiley1 from "../../assets/Home/smiles/1.png";
import smiley2 from "../../assets/Home/smiles/2.png";
import smiley3 from "../../assets/Home/smiles/3.png";
import smiley4 from "../../assets/Home/smiles/4.png";
import smiley5 from "../../assets/Home/smiles/5.png";
import smiley6 from "../../assets/Home/smiles/6.png";
import smiley7 from "../../assets/Home/smiles/7.png";
import smiley8 from "../../assets/Home/smiles/8.png";
import smiley9 from "../../assets/Home/smiles/9.png";
import smiley10 from "../../assets/Home/smiles/10.png";
import smiley11 from "../../assets/Home/smiles/11.png";

const Home = ({ ShowToggleMenu, setShowToggleMenu }) => {
  let [ToggleProfession, setToggleProfession] = useState("FrontEnd Developer");
  let smiles = [
    smiley1,
    smiley2,
    smiley3,
    smiley4,
    smiley5,
    smiley6,
    smiley7,
    smiley8,
    smiley9,
    smiley10,
    smiley11
  ];
  let [smileyToggle, setSmileyToggle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (ToggleProfession === "FrontEnd Developer") {
        setToggleProfession("FullStack Developer With MERN");
      }
      if (ToggleProfession === "FullStack Developer With MERN") {
        setToggleProfession("ReactJS Developer");
      }
      if (ToggleProfession === "ReactJS Developer") {
        setToggleProfession("FrontEnd Developer");
      }
    }, 5000);
  }, [ToggleProfession]);
  useEffect(() => {
    if (smileyToggle >= 0) {
      if (smileyToggle < smiles.length) {
        const timer = setTimeout(() => {
          setSmileyToggle(smileyToggle + 1);
        }, 3000);

        // Cleanup the timer
        return () => {
          clearTimeout(timer);
        };
      }
    };
    if (smileyToggle === 11) {
      setSmileyToggle(0);
    }
  }, [smileyToggle]);
  console.log(smileyToggle);
  return (
    <div
      className="home_container"
      id={ShowToggleMenu ? "ContentExpand" : "ContentShrink"}
    >
      {/* Row */}
      {/* Column1 */}
      <div className="home_content_leftside">
        <div className="username">
          <h2>
            Hi Folks
            <img src={hand} alt="hand" />,
          </h2>
          <h3>
            {" "}
            I'm Kodiyarasu <img src={smiles[smileyToggle]} alt="smile" />
          </h3>
        </div>
        <div className="user_profession">
          <h3>
            <span></span>
            {ToggleProfession}
          </h3>
        </div>
        <div className="user_summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            corporis voluptas facere fugiat delectus alias libero facilis
            voluptate enim recusandae.
          </p>
        </div>

        <div className="user_actions">
          <a href="">
            <i className="fa fa-download"></i>Download CV
          </a>

          <a href="">
            <i className="fa fa-envelope"></i>Contact Me
          </a>
        </div>
      </div>

      {/* Column2 */}
      <div className="home_content_rightside">
        <div className="user_image">
          <img src={userSVG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
