import React from "react";
import Style from "./Aboutus.module.css";
import About1 from "../../assest/img/About_one.jpg";
import About2 from "../../assest/img/About_two.jpg";

function Aboutus({ closeSlider }) {
  return (
    <div onClick={closeSlider} className={Style.Aboutus}>
      <div className={Style.Contain_Img}>
        <img src={About1} alt="" />

        <img src={About2} alt="" />
      </div>
      <div className={Style.about_content}>
        <h4 style={{ textAlign: "center", fontStyle: "italic" }}>
          <span style={{ color: "red", textAlign: "center" }}> ❤</span>أهلا
          وسهلا بكم في مؤسسه قمم الرياض
        </h4>
        <h2 style={{ textAlign: "center" }}>شركة قمم الرياض لنقل الاثاث</h2>
        <p>
          سيتعامل فريق الخبراء لدينا مع كل خطوة في عملية الإزالة المحلية ، بغض
          النظر عن حجم أو وجهة انتقالك. سيتم تعبئة جميع أغراضك المنزلية بعناية
          بمواد التعبئة المبتكرة الخاصة بنا وتحميلها بعناية في شاحناتنا النظيفة
          والتي يتم فحصها بانتظام. لضمان ترك منزلك في حالة نقية ، ستتم حماية
          جميع المناطق المكشوفة مثل الأبواب وجدران التوجيه والسلالم أو حتى
          المصاعد ، في المغادرة والوجهة. في العلافي ، نتعامل مع البضائع الخاصة
          بك بأقصى قدر من العناية ، حتى تتمكن من التحرك براحة البال.
        </p>
        <p>
          عند نقل عائلتك ، فأنت تريد نقل أثاث محترف يعرف كيفية التعامل مع
          متعلقاتك الثمينة بعناية فائقة. شركة افضلية لنقل الاثاث هي المحرك
          السكني الذي يمكنك الوثوق به. يتمتع فريق المحركون ذو الخبرة لدينا ب
          الخبرة والسجل لتقديم خطوة خالية من المتاعب. مع 15 عامًا من السمعة
          وأكثر من 30 0 موقع وكيل على مستوى البلاد ، نقدم خدمات نقل سكنية محلية
          وبعيدة المدى. سوا ء كنت تنتقل إلى النقل المحلي والدولي ، فإن شركة
          افضلية لنقل الاثاث قد غطيت
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Aboutus;
