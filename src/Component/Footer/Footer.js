import React, { useEffect } from "react";
import "./Footer.css";
import My_Logo from "../../assest/img/My_Logo.PNG";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="Footer">
      {/* <div className="ContactDiv">
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
      </div> */}

      <h2
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={My_Logo} alt="" />
        قمم الرياض لنقل الاثاث
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            color: "white",
            textAlign: "center",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          شركة قمم الرياض الاثاث هي شركة النقل الرائدة في المملكه العربية
          السعوديه. نعم ، نحن اسم مشهور كلما كان هناك حديث عن أفضل شركات نقل
          الأثاث في السعوديه.
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ borderBottom: "red", color: "white" }}>تواصل معنا</h2>
          <h4 style={{ display: "flex", alignItems: "center", color: "white" }}>
            <BiPhoneCall color="red" size={30} />
            0540472170
          </h4>
          <h4 style={{ display: "flex", alignItems: "center", color: "white" }}>
            <AiTwotoneMail color="red" size={30} />
            QIMAMALRIYAD@gmail.com
          </h4>
          <h4 style={{ display: "flex", alignItems: "center", color: "white" }}>
            <HiOutlineLocationMarker color="red" size={30} />
            ELryad
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
