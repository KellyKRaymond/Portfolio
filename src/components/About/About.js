import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaShopify} from 'react-icons/fa';
import { SiAdobepremierepro} from 'react-icons/si';
import { SiJavascript} from 'react-icons/si';
import { ImYoutube2} from 'react-icons/im';
import './About.css';

function About(){
  return (
     <div className='page' id='AboutIcons'> 
    
      <div> <FaGithub/> </div>
      <div> <FaShopify/> </div>
      <div> <SiAdobepremierepro/></div>
      <div> <SiJavascript/> </div>
      <div> <ImYoutube2/></div>
     </div> 
  )
}
export default About