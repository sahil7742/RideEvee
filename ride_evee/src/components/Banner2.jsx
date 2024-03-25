import React from 'react'
import car from "../assets/image/car.png";
import img2 from "../assets/image/img2.png";
import driving from "../assets/image/driving.png";
const Banner2 = () => {
  return (
    <div className='banner2'>
    <div className='img1'><img src={car}/></div>
    <div className='img2'><img src={img2}/>
    <h3>Return Fare, Not Fair!</h3>
    <p>WHY PAY FOR RETURN JOURNEY WHEN YOU ARE TRAVELLING ONE-WAY? NOW GET DISCOUNTED AC TAXI AT JUST HALF OF THE ROUND TRIP COST FOR YOUR ONE-WAY</p>
    </div>
    <div className='img3'><img SRC={driving}/>
    <h3>Now available routes are!</h3>
    <p>Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly</p>
    </div>
  
    </div>
  )
}

export default Banner2