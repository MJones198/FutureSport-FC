import React from 'react'
import { useState } from 'react'
import {saveFunc} from '../../assets/scripts/SaveToTXT'

const Form = () => {

const [data, SetData] = useState({FirstName:"", LastName:"", Email:"", Msg:""})

const handleChange =(e) => {

const name = e.target.name;
const value = e.target.value;
SetData({...data, [name]: value})



}


const handleSubmit = (e) => {
 e.preventDefault()
 


}
  return (
    
    <form method='post' onSubmit={handleSubmit}>
      <div className="ContactUs">
      <h1 className='ContactTitle'>Contact Us</h1>
        <div className="inputs">
          <input type="text" name="FirstName" id="FirstName" onChange={handleChange} value={data.FirstName} placeholder='First Name'/>
          <br />
          <input type="text" name="LastName" id="LastName" onChange={handleChange} value={data.LastName} placeholder='Last Name'/>
          <br />
          <input type="text" name="Email" id="Email" onChange={handleChange} value={data.Email} placeholder='Email'/>
          <br />
        </div>
      <textarea className='Msgg' placeholder= "Message or Querey" onChange={handleChange} value={data.Msg} name="Msg" id="Msg" cols="30" rows="15" />
    <button type='submit' onClick={saveFunc} className='btn'>Send</button>


    {/* Check data inputs */}
    {/* <p>{data.FirstName},{data.LastName},{data.Email}, {data.Msg}</p> */}
    </div>
    </form>
   
  )
}
export default Form