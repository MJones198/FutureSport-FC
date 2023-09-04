import React, { useState, useEffect } from 'react';
// import Logo from '/../../assets/images'; 
import Logo from 'C:/Users/Mason/Uni A2/my-app/src/assets/images/Logo.jpg';

export default function Navbar() {
 
  const [stickyClass, setStickyClass] = useState('');

 

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };


  return <div className={`navbar ${stickyClass}`}>
    
    <img className='Logo' src={Logo} alt='Logo' width={"100%"} height={"100%"}></img>

    <br></br>

      <div className='Links'>
      <a href="#Home">Home</a>
      <a href="#Store">Store</a>
      <a href="#Articles">Articles</a>
      <a href="#TeamRoster">Team Roster</a>
      <a href="#Youth">Youth Program</a>
      </div>

  </div>
    
  

  
}


