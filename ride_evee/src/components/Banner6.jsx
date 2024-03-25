import React from 'react'
import Vector1 from "../assets/image/Vector1.png";
import Vector2 from "../assets/image/Vector2.png";
import Vector3 from "../assets/image/Vector3.png";
import Vector4 from "../assets/image/vector4.png";
import Vector5 from "../assets/image/vector5.png";


const Banner6 = () => {
  return (
    <div className='banner6 text-center'>
      <table>
  <thead>
    <tr>
      <th><img src={Vector1} alt='Vector1'/>Cab Type</th>
      <th><img src={Vector2} alt='Vector2'/>Models Include</th>
      <th><img src={Vector3} alt='Vector3'/>Passengers</th>
      <th><img src={Vector4} alt='Vector4'/>Ideal For</th>
      <th><img src={Vector5} alt='Vector5'/>Fare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AC Sedans</td>
      <td>Etios, Amaze, Dzire etc.</td>
      <td>4 Pax</td>
      <td>Comfortable trips with small families</td>
      <td>Rs.11/KM</td>
    </tr>
    <tr>
      <td>AC Hatchbacks</td>
      <td>Wagon R, Celerio, Micra etc.</td>
      <td>4 Pax</td>
      <td>Budget trips over short distances</td>
      <td>Rs.11/KM</td>
    </tr>
    <tr>
      <td>AC SUV </td>
      <td>Ertiga, Xylo etc. </td>
      <td>6-7 Pax</td>
      <td>Premium trips with large families</td>
      <td>Rs.13/KM</td>
    </tr>
    
  </tbody>
</table>
      </div>
  
  )
}

export default Banner6