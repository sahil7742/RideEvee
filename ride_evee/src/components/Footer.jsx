import React from 'react'
import logo from "../assets/image/logo.png";
import vector from "../assets/image/Vector.png";
const Footer = () => {
  return (
    <div className='footer'>
    <div className="logo1">
        <img src={logo} alt="logo1" />
      </div>
      <div className='menu'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Service</h4>
        <h4>News</h4>
        <h4>Contact</h4>
        <h4>Privacy Poacy</h4>
      </div>
      <div className='NewsLetter'>
        <input type='text' placeholder='Email'/>
        <button type='submit'><span><img src={vector} alt='arrow'/></span></button>
      </div>
      <h6>All Copyrights are reserved by RIDE EVEE</h6>
    </div>
  )
}

export default Footer