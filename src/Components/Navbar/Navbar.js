import React, { useRef, useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/Youtube-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [btnClicked,setbtnClicked]=useState(false);
  const refer=useRef();
  const signInref=useRef();
  const navRef=useRef();
  // console.log(refer);
  return (
    <>
    <div className='Navbar' ref={navRef}>
      <div className='LogoName'>
         <div className='logo'>
             <img src={Logo} alt="youtube logo" />
           </div>
       <div className='name'>U-Tube</div>
     </div>
     <div className="search">
      <div className="container" ref={refer}>
        <div className='emptyCTR'></div>
      <input type="text" placeholder='search' onClick={()=>{refer.current.style=""}}/>
      <SearchIcon sx={{"color":"white"}}/>
     </div>
     </div>
     <div className="sign-in" onClick={()=>{setbtnClicked(true);navRef.current.style.display="none"}}>SIGN IN</div>
      
    </div>
    </>
  )
}

export default Navbar