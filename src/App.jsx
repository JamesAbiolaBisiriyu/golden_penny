// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/placeOrder/Placeorder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { useState } from 'react'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />

      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App