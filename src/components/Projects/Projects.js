import React from 'react';
import './Projects.css';
import Calculator from '../../assets/Calculator.png'
import Game from '../../assets/Game.png'

export default function Projects() {

  return (
    <div className='page' id="Projects">
      <h1 id="project-header"> Projects </h1>
      <div className='projects'>
        <div className='project'>
          <div className='project-textbox'>
            <h1> Monopoly Board Calculator</h1>
            <h2> A fun twist on a simple task. I wanted to put a unique spin on a basic calculator. In a way that no one else has done before. This project was created using Javascript, HTML and CSS. </h2>
          </div>
            <a target='_blank' href='https://kellykraymond.github.io/Calculator/'><img className='Calculator' src={Calculator}></img></a>
        </div>
        <div className='project'>
          <div className='project-textbox'>
            <h1> Cookie Crumble</h1>
            <h2> A child trying to escape their mother, collect as many cookies as possible, while avoiding all the toys you left scattered around on the floor. This game was created using Javascript, HTML, and CSS</h2>
          </div>
          <a target='_blank' href='https://kellykraymond.github.io/Game-Project/'><img className='Game' src={Game}></img></a>
        </div>
      </div>
    </div>
  )
}





