import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import Logo from "../../assest/img/My_Logo.PNG";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoMdReorder } from "react-icons/io";
function NAv({ open }) {
  return (
    <Fragment>
      <header className="Header">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            color: "red",
            fontWeight: "bold",
          }}
        >
          <img src={Logo} alt="" />
          قمم الرياض
        </h2>
        <div className="CustomeHeader">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AiTwotoneMail color="red" size={30} />{" "}
            <div>
              <h5 style={{ color: "gray" }}>Email Address</h5>
              <a
                style={{ color: "black" }}
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCTrvDxrLFXdzWbnMPmGcRcZqwFMnLsnGwClHfMbZcJjvbVVHvkSDJbGWQJHLqphGGCbQPV"
              >
                {" "}
                <h6>QIMAMALRIYAD2021@gmail.com</h6>
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid  gray",
            }}
          >
            <a style={{ textDecoration: "none" }} href="tel:+966-0540472170">
              <BiPhoneCall color="red" size={30} />
            </a>
            <div>
              <h5 style={{ color: "gray" }}>Phone Number</h5>
              <h6>0544072170</h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid  gray",
            }}
          >
            <HiOutlineLocationMarker color="red" size={30} />
            <div>
              <h5 style={{ color: "gray" }}>Head Office</h5>
              <h6>elRyad</h6>
            </div>
          </div>
        </div>
        <IoMdReorder onClick={open} className="Threedotts" size={40} />
      </header>

      <nav className="nav">
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
      </nav>
    </Fragment>
  );
}

export default NAv;
