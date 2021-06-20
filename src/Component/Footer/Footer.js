import React, { useEffect } from "react";
import "./Footer.css";
import Contact from "../../assest/img/contact.png";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Footer">
      <div className="ContactDiv">
        <h2 data-aos="zoom-in">تواصل معنا</h2>
        <h1 className="line">{""}</h1>
        <div>01118858925</div>
        <div>
          <span>
            <FaFacebookSquare size={30} />
          </span>
          <span>
            <FaYoutube size={30} />
          </span>
          <span>
            <FaTwitter size={30} />
          </span>
          <span>
            <FaInstagram size={30} />
          </span>
        </div>
      </div>
      <img
        data-aos="zoom-in-up"
        style={{ height: "250px" }}
        src={Contact}
        alt=""
      />
    </div>
  );
}

export default Footer;
