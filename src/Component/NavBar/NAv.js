import { Component } from "react";
import './Nav.css'
import {FaFacebookSquare,FaYoutube,FaTwitter,FaInstagram} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {IoMdReorder} from 'react-icons/io'
import Logo from '../../assest/img/LOGO.png'
import Slide1 from '../../assest/img/slide1.jpg'
import Slide2 from '../../assest/img/slide2.jpg'
import Slide3 from '../../assest/img/slide3.jpg'
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

class NAv extends Component {
    state = {
        check:false,
        image: [Slide1,Slide2,Slide3],
        index: 0,
      };

     showdiv=()=>{
this.setState({check:!this.state.check})    }
homePAge=()=>{
  window.location='/'
}
Who_We_Are=()=>{
  window.location='/Who_We'
}
Trans=()=>{
  window.location='/Trans'
}
    componentDidMount() {
        Aos.init({ duration: 2000 });
        if (this.state.index === this.state.image.length)
          this.setState({ index: 0 });
    
        setInterval(() => {
          this.setState({
            index: this.state.index + 1,
          });
          if (this.state.index >= this.state.image.length) {
            this.setState({ index: 0 });
          }
        }, 6000);
      }
   
      render() {

    return (
        <header id='Header'>

            <nav className='nav1'>
            <img className='Logo' data-aos="fade-right" src={Logo} alt=''/>

            <ul>
            <li><NavLink  onClick={this.homePAge}
                  exact
                  activeClassName="main-nav-active"
                  to="/">الرئيسية
                  </NavLink>
            </li>
            <li>   <NavLink  onClick={this.Trans}  exact
                  activeClassName="main-nav-active"
                  to="/Trans"> نقل اثاث السعوديه
                  </NavLink></li>
            <li><NavLink  onClick={this.Who_We_Are}  exact
                  activeClassName="main-nav-active"
                  to="/Who_We">من نحن
                  </NavLink></li>

            </ul>
            <div className="dash" onClick={this.showdiv}><IoMdReorder size={50}/></div>
            </nav>
            
            <nav className='nav2'>
                <div>
                <div><span><AiFillMail size={20} /></span>mohab.hafez332@gmail.com</div>
                <div><span><BiPhoneCall size={20}/></span>01119548731</div>

                </div>


            <ul>
            <li><FaFacebookSquare size={30}/></li>
            <li><FaYoutube size={30}/></li>
            <li><FaTwitter size={30}/>  </li>
            <li><FaInstagram size={30}/> </li>
            </ul>
            </nav>
            {this.state.check? <nav data-aos="fade-down" className='nav3'>
               <ul >
                 <li ><NavLink  onClick={this.homePAge}
                  exact
                  activeClassName="main-nav-active"
                  to="/">الرئيسية
                  </NavLink></li><hr/>
                 <li>  <NavLink  onClick={this.Trans}  exact
                  activeClassName="main-nav-active"
                  to="/Trans"> نقل اثاث السعوديه
                  </NavLink></li><hr/>
                 <li><NavLink  onClick={this.Who_We_Are}  exact
                  activeClassName="main-nav-active"
                  to="/Who_We">من نحن
                  </NavLink> </li>

               </ul>
                <div style={{backgroundColor:'white'}}>
                    <span><FaFacebookSquare size={30} color='red' /></span> 
                    <span><FaYoutube size={30} color='red'/></span>
                    <span><FaTwitter size={30} color='red'/> </span>
                    <span><FaInstagram size={30} color='red'/></span>

                
                </div>


               

            </nav>:null}
           
        <div style={{position:'relative',display:'flex',alignItems:'center',textAlign:'center'}}>
          <img className='slider' src={this.state.image[this.state.index]} alt=''/>
<div className='description'>
مؤسسة النوران لنقل العفش والأثاث مع الفك والتركيب والتغليف وعمالة مدربة

    </div>

            </div>



        </header>
    )}
}

export default NAv
