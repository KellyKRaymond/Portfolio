import React from 'react';
import './LandingPage.css';
import Filler from '../../assets/Filler.jpg'


export default function LandingPage() {

  return (
    <div className='page' id='landingPage'>
      <img className='filler' id= 'fillerImg' src={Filler}></img>
      <div> Hi, I'm Kelly! </div>
      <h1> success for me, is making others successful. </h1>
    </div>
  )
}

