import React, { useState } from 'react'
import './Signin.css'
import Logo from '../../assets/Youtube-logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [err,seterr]=useState();
    const [email,setemail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();
    const login=async()=>{
        try{
        const userData=await axios.post("http://localhost:8000/api/auth/login",{
            email:email,
            password:password
        }, {withCredentials: true})
        console.log(userData.data);
        }
        catch(error){
            console.log(error.response.data)
        }
  }
  return (
    <div className='Sbox'>
    <div className='Scontainer'>
     <div className="Slogo">
        <img src={Logo} alt="youtube logo" />
        <span>U-TUBE</span>
        </div>   
        <div className="Sinputs">
            <div className="enter">
            <span>email</span>
                <input type="email" placeholder='Your email' onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="enter">
            <span>Password</span>
                <input type="password" placeholder='Your password' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="loginBTN" onClick={login}>LOGIN</div>
        </div>
    </div>
    </div>
  )
}

export default Signin