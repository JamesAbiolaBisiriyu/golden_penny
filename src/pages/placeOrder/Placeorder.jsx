// import React from 'react'
import './Placeorder.css'

const Placeorder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>DELIVER INFO</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="text" />
        <input type="text" />
      </div>
      <div className="place-order-right"></div>
    </form>
  )
}

export default Placeorder