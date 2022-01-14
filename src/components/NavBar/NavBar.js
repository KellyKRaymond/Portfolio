import React, { useState } from 'react';
import './NavBar.css';
import { Link } from "react-scroll";
import reactLogo from '../../assets/reactLogo.png'
import { AiOutlineMenu, AiOutlineMenuUnfold } from 'react-icons/ai';


export default function NavBar() {

    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <>
        <nav className='navBar'>
            <Link className='navLogo navBarLi' to='landingPage' smooth={true}>
                <img className='logo' src={reactLogo}></img>
            </Link>
            <div className='navBarText'>
                <ul>
                    <Link className='navBarLi' to='landingPage' smooth={true}>
                        Landing Page
                    </Link>
                    <Link className='navBarLi' to='About' smooth={true}>
                        About
                    </Link>
                    <Link className='navBarLi' to='Projects' smooth={true}>
                        Projects
                    </Link>
                    <Link className='navBarLi' to='Testimonials' smooth={true}>
                        Testimonials
                    </Link>
                    <Link className='navBarLi' to='contact' smooth={true}>
                        Contact
                    </Link>
                    <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
                        Resume
                    </a>
                </ul>

            </div>
                <div
                    className='navHamburger'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className='navHamburger' onClick={() => setClick(!click)}>
                    {!hover && !click ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />}
                </div>
        </nav>
  {
        click ? <ul className='hamburgerText'>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='landingPage' smooth={true}>
                Landing Page
            </Link>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='about' smooth={true}>
                About
            </Link>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='projects' smooth={true}>
                Projects
            </Link>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='testimonials' smooth={true}>
                Testimonials
            </Link>
            <Link className='navBarLi' onClick={() => setClick(!click)} to='contact' smooth={true}>
                Contact
            </Link>
            <a className='navBarLi resume' target='_blank' href='https://docs.google.com/document/d/1k7qVUuoE1_k2VHOObTzjq3KAvE3w9DsoCyovAu-NLd8/edit?usp=sharing'>
                Resume
            </a>
        </ul> : null}
        </>
    )
}