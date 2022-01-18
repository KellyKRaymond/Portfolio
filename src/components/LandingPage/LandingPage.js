import React from 'react';
import './LandingPage.css';
import Filler from '../../assets/Filler.jpg'

export default function LandingPage() {

  return (
    <div className='page' id='landingPage'>
      <img className='filler' id= 'fillerImg' src={Filler}></img>
      <h1> Hi, I'm Kelly! </h1>
      <h1> Success for me, is making others successful. </h1>
    </div>
  )
}

