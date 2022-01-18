import React from 'react';
import './LandingPage.css';
import Filler from '../../assets/Filler.jpg'

export default function LandingPage() {

  return (
    <div className='page' id='landingPage'>
      <img className='filler' id='fillerImg' src={Filler}></img>
      <div className='text' id='text'>
        <h1> Hi, I'm Kelly! </h1>
        <h1> Success for me, is making <i>others</i> successful. </h1>
      </div>
    </div>
  )
}

