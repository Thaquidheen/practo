import React from 'react'
import './navbar.css'
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import CssBaseline from '@mui/material/CssBaseline';
import { IoIosArrowDown } from 'react-icons/io';
const Navbar = () => {
  return (
   <div className="navbar">
    <img className='sticky-image' src="https://www.practostatic.com/scripts/images/img_app_download_bottom_sticky.png" alt="" />
        <CssBaseline />
     <div className="container navbar_container">
        <div className="left">
        <div className="logo">
          .practo.
        </div>
        {/* <ul className='ulnav'>
            <li className='navItems'>Find Doctors</li>
            <li className='navItems'>Video Consult</li>
            <li className='navItems'>Medicines</li>
            <li className='navItems'>Lab Tests</li>
            <li className='navItems'>Surgeries</li>
        </ul> */}
        <span className='navItems'>Find Doctors</span>
        <span className='navItems'>Video Consult</span>
        <span className='navItems'>medicines</span>
        <span className='navItems'>Lab tests</span>
        <span className='navItems'>Surgeries</span>
        </div>
        <div className="right">
            <div>
            <Dropdown className="drop">
      <MenuButton className='dropitem'>
        
      <div className="arrow">
       <span>For Corporate </span> 
      <IoIosArrowDown/>
        </div>
        
        
        </MenuButton>
      <Menu className='menubar'>
        <MenuItem  className='menuitem'>Health </MenuItem>
        <MenuItem  className='menuitem'>Insurance</MenuItem>
      </Menu>
  
    </Dropdown>

    <Dropdown className="drop">
      <MenuButton className='dropitem'>
      <div className="arrow">
       <span>For Providers</span> 
      <IoIosArrowDown/>
        </div>
        
        
        </MenuButton>
      <Menu className='menubar'>
        <MenuItem className='menuitem'>practo Prime</MenuItem>
        <MenuItem className='menuitem'>Notification preferences</MenuItem>
      </Menu>
  
    </Dropdown>

    <Dropdown className="drop">
      <MenuButton className='dropitem'>
        <div className="arrow">
       <span>Security&Help </span> 
      <IoIosArrowDown/>
        </div>
      

      </MenuButton>
      <Menu className='menubar'>
        <MenuItem className='menuitem'>Data Secuirty</MenuItem>
        <MenuItem className='menuitem'>Help</MenuItem>
      </Menu>
  
    </Dropdown>
            </div>
       <button className='btn1'>login/signup</button>
        </div>
        
     </div>
   </div>
  )
}

export default Navbar