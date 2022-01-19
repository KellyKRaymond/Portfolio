import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact'>Let's Chat!

        <a href="mailto: Kellyraymondis@gmail.com">Send Me An Email </a>
        <div> Kellyraymondis@gmail.com </div>
        <div> 518.937.0739  </div>
        <div className='icons'>
          <div className='linkedin'>
            <a target='_blank' href='https://www.linkedin.com/in/kellykraymond/'> <SiLinkedin /></a>
          </div>
          <div className='github'>
            <a target='_blank' href="https://github.com/KellyKRaymond"> <FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}