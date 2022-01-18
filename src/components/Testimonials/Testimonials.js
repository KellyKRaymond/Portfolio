import React from 'react';
import './Testimonials.css'
import CissySays from '../../assets/CissySays.png'
import Barbquote from '../../assets/Barbquote.png'

export default function Testimonials() {
  return(
  <div>
    <div className='testimonials' id='Testimonials'>Testimonials</div>
    <div> <img className='Cissy' id='Cissy' src={CissySays}></img> </div>
    <div> <img className='Barb' id='Barb' src={Barbquote}></img> </div>
  </div>
  )
}
