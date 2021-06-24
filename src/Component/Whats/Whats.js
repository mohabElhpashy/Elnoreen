import React, { Fragment } from "react";
import Style from "./Whats.module.css";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

import Typical from "react-typical";
function Whats() {
  return (
    <Fragment>
      <div className={Style.Whats}>
        <a style={{ textDecoration: "none" }} href="tel:+1-555-555-1212">
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
              steps={["Phone", 2000, "0544072170", 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>{" "}
        </a>

        <div className={Style.WtsIcon}>
          <a
            href="https://wa.me/+966503675243"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp color="white" size={50} />
          </a>
        </div>
      </div>

      <div className={Style.FixedWtsIcon}>
        <a
          href="https://wa.me/+966503675243"
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
