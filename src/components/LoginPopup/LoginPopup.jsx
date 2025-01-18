import React from 'react'
import { useState } from 'react';
import './LoginPopup.css'
import {assets} from '../../assets/assets'


const LoginPopup = () => {

const [currState,setCurrState] = useState("Sign Up");


  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>{setShowLogin}} src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  )
}

export default LoginPopup