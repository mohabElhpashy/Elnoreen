import React from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";
import Logo from "../../assest/img/My_Logo.PNG";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
function Slider({ showSlider, closeSlider }) {
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
                  onClick={closeSlider}
                  exact
                  activeClassName="main-nav-active"
                  to="/"
                >
                  الصفحه الرئيسيه
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={closeSlider}
                  exact
                  to="/About_us"
                  activeClassName="main-nav-active"
                >
                  معلومات عنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeSlider}
                  exact
                  activeClassName="main-nav-active"
                  to="/Serviece"
                >
                  خدمات{" "}
                </NavLink>
              </li>

              <li>
                <NavLink
                  onClick={closeSlider}
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
              <a href="/">
                {" "}
                <AiFillFacebook color="white" size={35} />
              </a>

              <a
                style={{ color: "black" }}
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCTrvDxrLFXdzWbnMPmGcRcZqwFMnLsnGwClHfMbZcJjvbVVHvkSDJbGWQJHLqphGGCbQPV"
              >
                {" "}
                <AiOutlineGoogle color="white" size={35} />
              </a>

              <a href="tel:+966-0540472170">
                <BiPhoneCall color="white" size={35} />
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
