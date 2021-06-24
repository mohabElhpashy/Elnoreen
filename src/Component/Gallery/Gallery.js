import React from "react";
import Style from "./Gallery.module.css";
import GOne from "../../assest/img/About_one.jpg";
import G1 from "../../assest/img/About_two.jpg";
import G2 from "../../assest/img/twooo.jpg";
import G3 from "../../assest/img/slide1.jpg";
import G4 from "../../assest/img/sub_three.jpg";
import G5 from "../../assest/img/sub_one.jpg";
import G6 from "../../assest/img/threee.jpg";
import G8 from "../../assest/img/home_three.jpg";
import G9 from "../../assest/img/fourrrr.jpg";

function Gallery({ closeSlider }) {
  return (
    <div onClick={closeSlider} className={Style.gallery}>
      <img src={GOne} alt="" />
      <img src={G2} alt="" />
      <img src={G3} alt="" />
      <img src={G4} alt="" />
      <img src={G5} alt="" />
      <img src={G6} alt="" />
      <img src={G8} alt="" />
      <img src={G1} alt="" />
      <img src={G9} alt="" />
    </div>
  );
}

export default Gallery;
