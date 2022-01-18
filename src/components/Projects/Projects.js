import React from 'react';
import './Projects.css';
import Calculator from '../../assets/Calculator.png'
import Game from '../../assets/Game.png'

export default function Projects() {

  return (
    <div>
      <div className='page' id='Projects'>Projects</div>
      <img className='Calculator' id='calculator' src={Calculator}></img>
      <img className='Game' id='game' src={Game}></img>

      


    </div>
  )
}





