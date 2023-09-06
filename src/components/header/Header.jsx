import React from 'react'
import './header.css';
import { SlLocationPin } from 'react-icons/sl';
import {MdKeyboardArrowRight} from 'react-icons/md'
const Header = () => {
  return (
    <div className="header">
    <div className="container wrapper_header">
    <div className="left_header">
        <div className="inputs">
            <div className="border1">
                <SlLocationPin/>
            <input type="text" placeholder='Search Location' className='inputstyle' />
            </div>
            <div className="border1">
            <input type="text" placeholder='Search doctors,clinics,hospitals etc..' className='inputstyle2'/>
            </div>
            
        </div>
   
        
    </div>
    
    <div className="right_header">
        <div className="adbox">
            <div className="adleft1">
                <span className='para1'>Try</span>
                <span className="box">PLUS</span>
            </div>
            <div className="adright">
                <span className='para'>save upto <b>60%</b> on your healthcare expenses</span>
                <MdKeyboardArrowRight className='adicon'/>
            </div>
        </div>
    </div>
    </div>
    </div>
 
  )
}

export default Header