import React, { useContext, useEffect, useState } from "react";
import "./Content_Style/Home.scss";
import userSVG from "../../assets/Home/2.svg";
import hand from "../../assets/Home/hand.png";
import registerImage from "../../assets/Register/register_image.png";
import { context } from "../../App";
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

const Home = () => {
  let { ShowToggleMenu, setShowToggleMenu } = useContext(context);
  let [ToggleProfession, setToggleProfession] = useState("FrontEnd Developer");
  let [RegisterToggle, setRegisterToggle] = useState(false);
  let Allsmiles = [
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
    smiley11,
  ];
  let [smileyToggle, setSmileyToggle] = useState(0);

  // /Smiles
  useEffect(() => {
    if (smileyToggle >= 0) {
      if (smileyToggle < Allsmiles.length) {
        const timer = setTimeout(() => {
          setSmileyToggle(smileyToggle + 1);
        }, 5000);

        // Cleanup the timer
        return () => {
          clearTimeout(timer);
        };
      }
    }
    if (smileyToggle === 11) {
      setSmileyToggle(0);
    }
  }, [smileyToggle]);

  //Profession
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

  return (
    <div
      className="home_container"
      id={ShowToggleMenu ? "ContentExpand" : "ContentShrink"}
    >
      {/*Register Form: */}
      {RegisterToggle ? (
        <div className="register_container">
          <div
            className="register_box"
            id={RegisterToggle ? "registerOpen" : "registerClose"}
          >
            <div
              className="close_register"
              onClick={() => setRegisterToggle(false)}
            >
              <i className="bx bx-x"></i>
            </div>
            <div className="register_left">
              {/* //Title */}
              <div className="register_left_title">
                <h2>
                  Let's Get Started! <img src={hand} alt="hand" />
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
                  maxime!
                </p>
              </div>
              {/* //RegisterForm */}
              <form>
                <div className="form_group">
                  <label htmlFor="fullName">FullName<sup>*</sup></label>
                  <input type="text" placeholder="Enter Your SweetName" />
                </div>
                <div className="form_group">
                  <label htmlFor="email">Email<sup>*</sup></label>
                  <input type="email" placeholder="Enter Your Email!" />
                </div>
                <div className="form_group">
                  <label htmlFor="country">Country</label>
                  <select name="country">
                    <option value="">India</option>
                    <option value="">Africa</option>
                    <option value="">Russia</option>
                    <option value="">United State of America</option>
                  </select>
                </div>

                <div className=" checkbox_group">
                  <label htmlFor="terms">Terms and Condition <sup>*</sup></label>
             
                  <div className="terms_condition">
                    <input type="checkbox" name="terms" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor, consectetur?
                    </p>
                  </div>
                </div>
                <div className="form_actions">
                  <button>Start Learning Today!</button>
                </div>
              </form>
            </div>

            <div className="register_right">
              <img src={registerImage} alt="RegisterImage" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Row */}
      {/* Column1 */}
      <div className="home_content_leftside">
        <div className="username">
          <h2>
            Hello Techies
            <img src={hand} alt="hand" />,
          </h2>
          <h3>
            {" "}
            I'm Kodiyarasu <img src={Allsmiles[smileyToggle]} alt="smile" />
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
        <div className="actions">
          <button onClick={() => setRegisterToggle(true)}>Register</button>
          <button>Login</button>
        </div>
        <div className="user_image">
          <img src={userSVG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
