
import './navbar.css'
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { Dropdown } from '@mui/base/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsArrowBarRight } from 'react-icons/bs';


const Navbar = () => {

  const [open, setOpen] = useState(false);




  return (
    <div className="container">
    <div className='navcontainer'>
    <Link className="logo"  href="#">.Practo.</Link>
    <ul className='navlist'>
      <li className='navlistItem'>
        <Link className="custom-link" href="#">DESIGN</Link>
      </li>
      <li className='navlistItem'>
        <Link className="custom-link" href="#">DEVELOPMENT</Link>
      </li>
      <li className='navlistItem'>
        <Link className="custom-link" href="#">PRODUCTION</Link>
      </li>
      <li className='navlistItem'>
        <Link className="custom-link" href="#">PHOTOGRAPHY</Link>
      </li>
      <li className='navlistItem'>
        <Link className="custom-link" href="#">CONTACT</Link>
      </li>
    </ul>
  <div className="dropdown">

 
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
       <span>For Corporate </span> 
      <IoIosArrowDown/>
        </div>
        
        
        </MenuButton>
      <Menu className='menubar'>
        <MenuItem  className='menuitem'>Health </MenuItem>
        <MenuItem  className='menuitem'>Insurance</MenuItem>
      </Menu>
  
    </Dropdown>
    <Link style={{textDecoration:'none'}} to="/signup"> <button className='btn1'>Login/Signup </button></Link>
   
    </div>
    <div className='hamburger' onClick={() => setOpen(!open)}>
      <div className='hamburgerline' />
      <div className='hamburgerline' />
      <div className='hamburgerline' />
    </div>
    <ul onClick={()=>setOpen(false)} className='menu' style={{ left: open ? "0px" : "-80vw" }}>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">
          <div className="customItems">
           <div className="customItemsleft">
            <div className="pract">
              <span className='practHead'>Practo</span>
              <span className='practHeadcolor'>Plus</span>
            </div>
            <span>Health Plans For You and Your Family</span>
           </div>
           <div className="customItemsRight">
            <BsArrowBarRight/>
           </div>
          </div>
        </Link>
      </li>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">DESIGN</Link>
      </li>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">DEVELOPMENT</Link>
      </li>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">PRODUCTION</Link>
      </li>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">PHOTOGRAPHY</Link>
      </li>
      <li className='navmenuItem'>
        <Link className="custom-link" href="#">CONTACT</Link>
      </li>
      <Link style={{textDecoration:'none'}} to="/signup"> <button className='btn1'>Login/Signup </button></Link>
    </ul>
  </div>

  </div>

    
  )
}

export default Navbar