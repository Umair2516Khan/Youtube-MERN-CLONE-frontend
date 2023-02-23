import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import VideoSection from '../VideoSection/VideoSection';
import './Home.css';

const Home = () => {
  const location=useLocation();
  const stateData=location.state;
  if(stateData!==null){
    const tags=stateData.tags;
    const isClicked=stateData.isClicked;
  }

  return (
    <>
        {/* <Navbar /> */}
         <div className="Bodyy">
          <div className="sidebar"><Sidebar/></div>
          {
            stateData?(<div className="videoSection"><VideoSection tags={stateData.tags} tagClicked={stateData.isClicked}/></div>):(
              <div className="videoSection"><VideoSection tags="" tagClicked="false"/></div>
            )
          }
          </div>
    </> 
  )
}

export default Home