import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";
import Logo from "../../assest/img/My_Logo.PNG";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
function Slider({ showSlider }) {
  const [change_status, setchange_status] = useState(true);

  //   if (showSlider === false) {
  //     document.getElementById("MAIN").style.width = "0px";
  //     setchange_status(true);
  //   }
  //   if (showSlider) {
  //     document.getElementById("MAIN").style.width = "270px";
  //     setchange_status(false);
  //   }

  // const check_and_hide = () => {
  //   alert("lsld");
  // if (window.innerWidth >= 900) {
  //   document.getElementById("MAIN").style.width = "0px";
  // }

  return (
    <>
      {showSlider ? (
        <div id="MAIN" className="mainTrue">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color: "white",
              fontWeight: "bold",
              borderBottom: "1px solid red",
            }}
          >
            <img src={Logo} alt="" />
            قمم الرياض
          </h2>{" "}
          <div className="links">
            <ul>
              <li className="active">
                <NavLink
                  // onClick={check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="/"
                >
                  الصفحه الرئيسيه
                </NavLink>
              </li>

              <li>
                <NavLink
                  // onClick={check_and_hide}
                  exact
                  to="/About_us"
                  activeClassName="main-nav-active"
                >
                  معلومات عنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  // onClick={check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="/Serviece"
                >
                  خدمات{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  // onClick={check_and_hide}
                  exact
                  activeClassName="main-nav-active"
                  to="/gallery"
                >
                  صاله عرض
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="fh5co-footer">
            <div className="icons">
              <a href="https://www.facebook.com/mohab.elhpashy">
                {" "}
                <AiFillFacebook color="white" size={35} />
              </a>

              <a href="mailto:mohab.hafez332@gmail.com">
                <AiOutlineGoogle color="white" size={35} />
              </a>
              <a href="mailto:mohab.hafez332@gmail.com">
                <FaYoutube color="white" size={35} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div id="MAIN" className="mainFalse"></div>
      )}
    </>
  );
}

export default Slider;
