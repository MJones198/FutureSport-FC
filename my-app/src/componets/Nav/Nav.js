import React, { useState, useEffect } from 'react';
// import Logo from '/../../assets/images'; 
import Logo from 'C:/Users/Mason/Uni A2/my-app/src/assets/images/Logo.jpg';
import spon from 'C:/Users/Mason/Uni A2/my-app/src/assets/images/Sponser.jpg';

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

  const [modal, setModal] = useState(false);
  
  const toggleModal = () => {
    setModal(!modal)

  }

  if(modal){

    document.body.classList.add('active-modal')
  } else{
    document.body.classList.remove('active-modal')
  }

  

  


  return <div className={`navbar ${stickyClass}`}>
    
    <img className='Logo' src={Logo} alt='Logo' width={"100%"} height={"100%"}></img>

    {/* <br></br> */}

    <div className='Fixtures'>

    
    <colgroup/>
    <table border="1">
      <col width="10%"/>
      <col width="10%"/>
      <col width="10%"/>
      <col width="10%"/>
      <thead>
        <tr>
        <th>24/7/23</th>
        <th>29/7/23</th>
        <th>5/8/23</th>
        <th>12/8/23</th>
     
      </tr>
      </thead>
      <tbody/>
        <tr>
            <td>FSFC VS EEFC</td>
            <td>FSFC VS TBFC</td>
            <td>FSFC VS CFC</td>
            <td>FSFC VS EEFC</td>
        </tr>
      
  
  
  
  </table>
  <button className="UpcomingFix" onClick={toggleModal}> 
  -Upcoming Coming Fixtures-
   </button>

{modal &&(
  <div className="modal"> 

  <div className="overlay" onClick={toggleModal}> </div>
  <div className="modal-content">
    <h1> Up Coming Fixtures</h1>
    <h3> FSFC VS EEFC </h3>
    <p> FutureSport FC vs Echo Eagle FC </p>
    <p> 24/7/23 </p>
    <br></br>
    <h3>FSFC VS TBFC</h3>
    <p> FutureSport FC vs Thebahus FC </p>
    <p>29/7/23</p>
    <br></br>
    <h3>FSFC VS CFC</h3>
    <p> FutureSport FC vs Catholic FC </p>
    <p>5/8/23</p>
    <br></br>
    <h3>FSFC VS EEFC</h3>
    <p> FutureSport FC vs Echo Eagle FC </p>
    <p>12/8/23</p>
    <button className='close-modal' onClick={toggleModal} >X</button>
  </div>
  
  </div>


)}

 
   
  {/* <p> Upcoming Fixtures </p> */}



    </div>

      <div className='Links'>
      <a href="#Home">Home</a>
      <a href="#Store">Store</a>
      <a href="#Articles">Articles</a>
      <a href="#TeamRoster">Team Roster</a>
      <a href="#Youth">Youth Program</a>

      
      </div>
      <img class="Spon" src={spon} alt="sponser" width={"100%"} height={"100%"}></img>


  </div>
    
  

  
}


