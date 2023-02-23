import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MemoryOutlinedIcon from '@material-ui/icons/MemoryOutlined';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
   <div className='sidebar'>
   <div className="Sfirst" id='box' >
     <div className="Shome" id='level'>
      <HomeIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Home</span>
     </div>
     <div className="yourVideo" id='level'>
      <SlideshowIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Your Videos</span>
     </div>
   </div>
   <div className="Ssecond" id='box'>
   <div className="subscriptions" id='level'>
      <SubscriptionsIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Subscriptions</span>
     </div>
     <div className="liked" id='level'>
      <ThumbUpAltIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Liked Videos</span>
     </div>
   </div>
   <div className="Sthird" id='box'>
   <div className="top" id='level'>
      <WhatshotIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Top Videos</span>
     </div>
     <Link to="/" state={{tags:"civic",isClicked:"true"}} style={{textDecoration:"none",color:"white"}}>
   <div className="gaming" id='level'>
      <EmojiEventsIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Gaming</span>
     </div>
     </Link>
     <Link to="/" state={{tags:"sports",isClicked:"true"}} style={{textDecoration:"none",color:"white"}}>
     <div className="sports" id='level' >
      <SportsEsportsIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Sports</span>
     </div>
     </Link>
     <div className="education" id='level'>
      <SchoolIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Education</span>
     </div>
     <div className="technology" id='level'>
      <MemoryOutlinedIcon sx={{"color":"white","fontSize":"2.2rem"}}/>
      <span>Technology</span>
     </div>

   </div>

   </div>
  )
}

export default Sidebar