import React from "react";
import clip1 from 'C:/Users/Mason/Uni A2/my-app/src/assets/vid/clip1.mp4';
import clip2 from 'C:/Users/Mason/Uni A2/my-app/src/assets/vid/clip2.mp4';
import clip3 from 'C:/Users/Mason/Uni A2/my-app/src/assets/vid/clip3.mp4';

export default function Videos() {
  return (
      <>
 <section id="Home"/>
<div className="Videos">


  <div className="Clip1">
        <video src= {clip1} width="100%" height="100%" controls>
         Your browser does not support the video tag.
        </video>
        <h2> Pre-Season Training</h2>
        </div>

  <div className="Clip2">
        <video src= {clip2} width="100%" height="100%" controls>
         Your browser does not support the video tag.
        </video>
        <h2> Local Fun at Training Camp</h2>
        </div>

  <div className="Clip3">
        <video src= {clip3} width="100%" height="100%" controls>
         Your browser does not support the video tag.
        </video>
        <h2> Karrick and Son Enjoying a Live Match</h2>
        </div>


  </div>
  </>
  );
} 