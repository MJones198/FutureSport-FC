import React from 'react'
import XtosL from '../../assets/images/C1.jpg'

export default function SeasonStatsbase() {
  return (
    <div className='SeasonStats'>
      <h2 className='SST'>Season Stats</h2>
    <div className='SSTable'>
    <table border="1"> 
    

  <tr>
    <th>Games</th>
    <th>Wins</th>
    <th>Draws</th>
    <th>Losses</th>
    <th>Points</th>
  </tr>
  <tr>
    <td>12</td>
    <td>8</td>
    <td>2</td>
    <td>2</td>
    <td>26</td>
  </tr>

</table>
</div>

<div className='TGCCon'/>
<p className='XtosLTitle'> Xtos L <br/> Future Star!</p>
<img className='XtosL' src={XtosL} alt='Wonderkid' width={"100%"} height={"100%"}></img>


<h2 className='TGCT'>Top Goal Contributions</h2>
<div class="TGC">

  <table border= "1" width="150%" >
    <thead>
        <tr>
            <th>Player</th>
            <th>Goals</th>
            <th>Assists</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Leigh G</td>
            <td>10</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Xtos L</td>
            <td>8</td>
            <td>4</td>
        </tr>
        <tr>
          <td>Simi S</td>
          <td>5</td>
          <td>2</td>
        </tr>
    </tbody>
</table>
</div>


    </div>
  )
}
