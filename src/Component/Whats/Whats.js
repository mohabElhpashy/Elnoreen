import React, { Fragment } from "react";
import Style from "./Whats.module.css";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

import Typical from "react-typical";
function Whats() {
  return (
    <Fragment>
      <div className={Style.Whats}>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            marginRight: "80px",
          }}
        >
          <AiOutlinePhone size={50} color="white" />
          <Typical
            steps={["Phone", 2000, "0640472170", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>
        <div className={Style.WtsIcon}>
          <AiOutlineWhatsApp color="white" size={50} />
        </div>
      </div>

      <div className={Style.FixedWtsIcon}>
        <a
          href="https://wa.me/+971540472170"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp color="white" size={70} />
        </a>
      </div>
    </Fragment>
  );
}

export default Whats;
