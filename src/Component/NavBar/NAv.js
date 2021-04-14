import React,{useState} from 'react'
import './Nav.css'
import {FaFacebookSquare,FaYoutube,FaTwitter,FaInstagram} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {IoMdReorder} from 'react-icons/io'
import Logo from '../../assest/img/LOGO.png'
function NAv() {
    const [state,setState]=useState(false)
    const showdiv=()=>{
        setState(!state)
    }
    return (
        <header id='Header'>

            <nav className='nav1'>
            <img className='Logo' src={Logo} alt=''/>

            <ul>
            <li>الرئيسية</li>
            <li>الخدمات</li>
            <li>نقل اثاث مصر</li>
            <li>من نحن</li>
            {/* <li className="dash"> </li> */}

            </ul>
            <div className="dash" onClick={showdiv}><IoMdReorder size={50}/></div>
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
            {state? <nav className='nav3'>
                
                <div>الرئيسية</div><hr/>
                <div>الخدمات</div><hr/>
                <div>نقل اثاث مصر</div><hr/>
                <div>من نحن</div>



               

            </nav>:null}
           
            


        </header>
    )
}

export default NAv
