import React from 'react';
import './Testimonials.css'
import CissySays from '../../assets/CissySays.png'
import Barbquote from '../../assets/Barbquote.png'

export default function Testimonials() {
  return (
    <div className='page' id='Testimonials'>
      <div className='testimonial-page'>
        <h1>Testimonials</h1>
        <div>
          <img className='test-image' src={CissySays}></img>
          <img className='test-image' src={Barbquote}></img>
        </div>
      </div>
    </div>

  )
}
