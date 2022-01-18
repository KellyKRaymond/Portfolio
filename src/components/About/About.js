import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import { SiAdobepremierepro } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiCanva } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si';
import { ImYoutube2 } from 'react-icons/im';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiReact } from 'react-icons/si'
import './About.css';

function About() {
  return (
    <div className='about' id='About'>
      <div className='textbox'>
        <h1> I dipped my toes into web design with a generic </h1>
        <h1> Shopify account layout. I fell in love with problem solving and coming up with answers on my own. I had never felt such a sense of pride like that before. That's when I knew I wanted to take it one step further, and become a full stack software engineer</h1>
      </div>
      <h1> Programs I am familar with </h1>
      <div id='AboutIcons'>
        <div className='premierepro'> <SiAdobepremierepro /></div>
        <div className='photoshop'> <SiAdobephotoshop /></div>
        <div className='canva'> <SiCanva /></div>
        <div className='css'> <SiCss3 /> </div>
        <div className='github'> <FaGithub /> </div>
        <div className='html'> <SiHtml5 /> </div>
        <div className='javascript'> <SiJavascript /> </div>
        <div className='react'> <SiReact /> </div>
        <div className='shopify'> <FaShopify /> </div>
        <div className='youtube'> <ImYoutube2 /></div>
      </div>

    </div>

  )
}
export default About

// <div className='linkedin' id='linkedin'> <SiLinkedin />