// import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = (setShowLogin) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu ==="home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu ==="menu" ? "active" : ""}>Menu</a> 
        <a href='#app-download' onClick={()=>setMenu("mobile-apps")} className={menu ==="mobile-apps" ? "active" : ""}>Mobile-apps</a>
        <a href='#footer'  onClick={()=>setMenu("contact-us")} className={menu ==="contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowlogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;


