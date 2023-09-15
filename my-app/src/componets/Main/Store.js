import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import J1 from '../../assets/images/J1.jpg'
import J2 from '../../assets/images/J2.jpg'
import J3 from '../../assets/images/J3.jpg'

export default function Store() {

    const OutOfStock = () => toast.warn('Store Currently Down!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    
  return (
<section id="Store">
<div class="MerchStore">
<h2 class="MTitle">Current Items On Sale</h2>

  <div class="merch1">
  <img src={J1} alt="Home Kit" width="100%" height="100%"/>
 </div>

 <h3 className='HK'>Home Kit</h3>

<div class="merch2">
  <img src={J2} alt="Away Kit" width="100%" height="100%"/>
</div>

<h3 class="AK">Away Kit</h3>

<div class="merch3">
  <img src={J3} alt="Training Kit" width="100%" height="100%"/>
</div>

    <h3 className='TK'>Training Kit</h3>

<button class="FS" onClick={OutOfStock}> <h2>Click to See Full Store</h2></button>
<ToastContainer/>


</div>
</section>
  )



  
}
