import React from 'react';
import './Testimonials.css'
import CissySays from '../../assets/CissySays.png'

export default function Testimonials() {
  return(
  <div>
    <div className='page' id='Testimonials'>Testimonials</div>
    <img className='Cissy' id='Cissy' src={CissySays}></img>
  </div>
  )
}
