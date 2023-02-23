import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';
import VideoSection from './Components/VideoSection/VideoSection';
import VideoDisplay from './Components/VideoDisplay/VideoDisplay';
import './App.css';
import Home from './Components/Home/Home';
import {Link,Route,Routes} from 'react-router-dom';
import Signin from './Components/Signin/Signin';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* <Signin /> */}
  <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/video' element={<VideoDisplay />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
        </Routes>
    </div>
  )
}

export default App