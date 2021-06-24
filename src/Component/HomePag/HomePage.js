import React, { Fragment } from "react";
import Slide3 from "../../assest/img/slide3.jpg";
import Slide2 from "../../assest/img/slide2.jpg";
import Slide1 from "../../assest/img/slide1.jpg";
import One from "../../assest/img/onee.jpg";
import two from "../../assest/img/twooo.jpg";
import three from "../../assest/img/threee.jpg";
import four from "../../assest/img/fourrrr.jpg";

import Home1 from "../../assest/img/home_one.jpg";
import Home2 from "../../assest/img/home_two.jpg";
import Home3 from "../../assest/img/home_three.jpg";

import Style from "./HomePage.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
function HomePage() {
  const items = [
    Slide3,
    Slide2,
    Slide1,
    One,
    two,
    three,
    Slide2,
    Slide3,
    Slide1,
    four,
    two,
  ];
  return (
    <Fragment>
      <div className={Style.slider}>
        <div className={Style.slid_track}>
          <div className={Style.slide}>
            {items.map((i) => {
              return (
                <img
                  src={i}
                  alt=""
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={Style.Content}>
        <div style={{ textAlign: "center" }}>
          <h3>شركه قمم الرياض لنقل الأثاث</h3>
          <p style={{ lineHeight: "32px" }}>
            شركه قمم الرياض لنقل وتغليف وتخزين الأثاث حول الإمارات عن طريق
            إستخدام معلق نجار بروفيشنل,شركه قمم الرياض لنقل أثاث منازل والمكاتب
            . شركه قمم الرياض لنقل الأثاث هي شركه النقل الرائده في دوله الإمارات
            العربيه المتحده .نعم .نحن اسم مشهور كلما كان هناك حديث عن أفضل نقل
            في الإمارات. نحن نقدم التعبئة ، التحول ، النقل ، تركيب الأثاث ، نقل
            المكتب ، خدمة نقل المنزل. مع فريق المحترفين لدينا ، لا داعي للقلق
            بشأن متعلقاتك. سواء كان نقل منزل أو مكتب ، داخل دبي وأبو ظبي وعجمان
            والفجيرة والشارقة والعين ورأس الخيمة الإمارات العربية المتح
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ borderBottom: "1px solid gray" }}>
            ما هي الخدمات التي نقدمها ؟
          </h3>
          <h4>
            <AiOutlineCheckCircle color="red" />
            خدمات نقل الفلل
          </h4>
          <h4>
            {" "}
            <AiOutlineCheckCircle color="red" />
            خدمات نقل الشقق
          </h4>
          <h4>
            {" "}
            <AiOutlineCheckCircle color="red" />
            خدمات نقل المكتب{" "}
          </h4>
          <h4>
            {" "}
            <AiOutlineCheckCircle color="red" />
            تقديم خدمات التغليف
          </h4>
          <h4>
            {" "}
            <AiOutlineCheckCircle color="red" />
            خدمات النقل المحلي
          </h4>
        </div>
      </div>

      <div className={Style.Bussn}>
        <div>
          <img src={Home1} alt="" />
          <h3 style={{ textAlign: "center" }}>
            نحن نقدم أفضل خدمات التعبئة والتغليف
          </h3>
          <p style={{ textAlign: "center" }}>
            نحن نقدم خدمات التعبئة والتغليف في جميع أنحاء الإمارات العربية
            المتحدة. معنا شيء واحد مؤكد. سوف تواجه عملية نقل خالية من المتاعب
            للبضائع ، وإعادة تحديد الموقع دون قلق وتلف التفريغ والتحميل.
          </p>
        </div>
        <div>
          <img src={Home2} alt="" />
          <h3 style={{ textAlign: "center" }}>نحن نقدم أفضل خدمات النقل</h3>
          <p style={{ textAlign: "center" }}>
            تقوم شركتنا بنقل أي نوع من منازل الفلل أو المكاتب من مكان إلى آخر.
            الحفاظ على محتوى عملائنا هو هدفنا النهائي وهذا ما نسعى إليه. يطلق
            المحركون في دبي على سناء موفرس لقب سادة المحركين والرازم.
          </p>
        </div>
        <div>
          <img src={Home3} alt="" />
          <h3 style={{ textAlign: "center" }}>نحن نقدم خدمات إعادة التثبيت</h3>
          <p style={{ textAlign: "center" }}>
            ننقوم بإعادة ترتيب البضائع في منزلك كما تريد وفقًا لرغباتك. الآن ،
            سواء تم عرض النقل عليك أو تغيير مكان إقامتك ، قم بالاتصال بشركة سناء
            لنقل الأثاث وتجربة الاحتراف
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
