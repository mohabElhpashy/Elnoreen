import React,{useEffect} from 'react'
import LeftDiv from '../../assest/img/Flomina.png';
import One from '../../assest/img/one.png'
import Two from '../../assest/img/two.png'
import Three from '../../assest/img/sub_one.jpg'
import Four from '../../assest/img/sub_two.jpg'
import Five from '../../assest/img/sub_three.jpg'
import './HomePage.css'
import Aos from "aos";
import "aos/dist/aos.css";
function HomePage() {
    useEffect(()=>{
        Aos.init({ duration: 2000 });

    })
    return (
        <div>
            <h2 style={{fontStyle:'Regular 400 italic'}}>شركات نقل الاثاث</h2>
            <h4 style={{color:'#e0060c'}}>نحن متواجدون لراحتك</h4>
            <div className='Content'>
        <img  data-aos="fade-down"  src={LeftDiv} alt=''/>
        <div className='Rightdiv'>
            <div className='one'>
                <div className='divin_div'>
                    <h1 className='my_h'>شركة نقل اثاث</h1>
                    <p>
شركه فيلومينا افضل شركات نقل 
الاثاث فى مصر نقدم خدمه نقل عفش خدمه كامله متكامله من الالف الى الياء كما اننا نقوم باعمال النقل من الداخل الى الخارج والعكس فنحن نهتم باعمال الفك والتغليف والتركيب فلا تتردد فى الاستعانه بنا للقيام بنقل الاثاث والعنايه به بواسطه سيارات مغلقه لمنع العواصف والاتربه او اى تغييرات مناخيه تؤثر على الاثاث كل ذلك فى مقابل
 اقل الاسعار المتواجده فى الاسواق فنحن فى انتظارك للقيام
 بمهام نقل الاثاث على اكمل وجه وكما هو بالصوره المطلوبه.
 </p>

                </div>
                <img data-aos="fade-up"  className='imageContent' src={One} alt=''/>

            </div>
            <div className='one'>
            <div className='divin_div'>
                    <h1 className='my_h'>فك ونقل وتركيب الاثاث فى السعوديه</h1>
                  <p>  اعمال الفك للاثاث لا تقل اى اهميه عن اعمال شراء الاثاث فاذا كنت تبحث عن افضل شركات نقل الاثاث التى تقوم باعمال فك وتركيب الاثاث فتاكد انك لم تجد افضل من شركتنا للقيام بهذه المهمه على اكمل وجه لان شركة نقل عفش فى مصر تعتمد على اقوى طاقم عمل مدرب على اعلى مستوى للقيام باعمال الفك والتركيب والاعتماد على احدث الاجهزه المخصصه للقيام باعمال الفك والتركيب فلا داعى للقلق بشان الفك او التركيب فاترك هذه المسئوليه لشركتنا.</p>

                </div>
                <img  data-aos="fade-up"  className='imageContent' src={Two} alt=''/>
            </div>

        </div>
            </div>
            <div className='anoterCon'>
        <div >
            <img data-aos="flip-left"  className='imagee' src={Three} alt=''/>
            <div style={{width:'272.5px'}}><h2>تغليف الأثاث</h2><p>هي عملية بسيطة وسهلة للمحافظة على جميع منقولات المنزل. التغليف لها أنواع كثيرة تغليف كرتون او بلاستيك أو ورق أو أسفنج أو بطاطين. في بعض</p></div>
        </div>
        <div>
            <img data-aos="flip-left" className='imagee' src={Four} alt=''/>
    <div style={{width:'272.5px'}}><h2>نقل الأثاث</h2><p>نسعى دائماً للبحث عن أفضل التكنولوجبا المستخدمه حديثاً فى مجال نقل العفش فى أسرع وقت وبطريقة آمنة وبأقل التكاليف</p></div>        
        </div>
        <div>
            <img data-aos="flip-left" className='imagee' src={Five} alt=''/>
            <div style={{width:'272.5px'}}><h2>ونش رفع الأثاث</h2><p>قدم لكم خدمة رفع الاثاث و إنزاله بدون عناء وبدون أى خدش بالعفش الخاص بكم، وذلك عن طريق الونش الخاص بنا والذى سوف يمكنكم من وصول العفش</p></div>
        </div>

            </div>
        </div>
    )
}

export default HomePage
