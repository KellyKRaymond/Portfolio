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
import { SiReact} from 'react-icons/si'
import './About.css';

function About() {
  return (
    <div className='page' id='AboutIcons'>
      <h1> Programs I am familar with </h1>
      <div> <SiAdobepremierepro /></div>
      <div> <SiAdobephotoshop /></div>
      <div> <SiCanva /></div>
      <div> <SiCss3 /> </div>
      <div> <FaGithub /> </div>
      <div> <SiHtml5 /> </div>
      <div> <SiJavascript /> </div>
      <div> <SiReact/> </div>
      <div> <FaShopify /> </div>
      <div> <ImYoutube2 /></div>
    </div>
  )
}
export default About