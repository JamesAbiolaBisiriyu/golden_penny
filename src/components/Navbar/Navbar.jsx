// import React from 'react'
import './Navbar.css'
import { useContext, useState } from 'react';
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();


const logOut = ()=>{
  localStorage.removeItem("token");
  setToken(null);
  navigate("/")

}


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu ==="home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu ==="menu" ? "active" : ""}>Menu</a> 
        <a href='#app-download' onClick={()=>setMenu("mobile-apps")} className={menu ==="mobile-apps" ? "active" : ""}>Mobile-apps</a>
        <a href='#footer'  onClick={()=>setMenu("contact-us")} className={menu ==="contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        
        {!token? <button onClick={()=>setShowLogin(true)}>Sign In</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Log Out</p></li>
            </ul>
        </div>}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Ensure setShowLogin is a required function
};

export default Navbar;


