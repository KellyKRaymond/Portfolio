import React from 'react';
import './Projects.css';
import Calculator from '../../assets/Calculator.png'
import Game from '../../assets/Game.png'

export default function Projects() {

  return (
    <div>
      <h1>Projects</h1>
      <div className='page' id='Projects'>
      <a target='_blank' href='https://kellykraymond.github.io/Calculator/'><img className='Calculator' id='calculator' src={Calculator}></img></a>
      <a target='_blank' href='https://kellykraymond.github.io/Game-Project/'><img className='Game' id='game' src={Game}></img></a>

      </div>
    </div>
  )
}





