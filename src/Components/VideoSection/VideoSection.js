import React, { useEffect, useState } from 'react'
import './VideoSection.css';
import VideoCard from '../VideoCard/VideoCard';
import {Link,Route,Routes, useLocation} from 'react-router-dom';
import VideoDisplay from '../VideoDisplay/VideoDisplay';
import axios from "axios";

const VideoSection = ({tags,tagClicked}) => {
    const [data,setData]=useState([])
    const [tagVideos,setTagVideos]=useState("h")
    let tagArray=[];
    tagArray.push(tags);
    async function fetchvideo(){
        await axios.get('http://localhost:8000/api/video/random').then((res)=>{
            // console.log(res.data)
            setData(res.data);
        })
        }
    async function fetchByTag(){
        await axios.post("http://localhost:8000/api/video/tags",{tags:tagArray}).then((res)=>{setTagVideos(res.data)}).catch((err)=>{console.log(err)})  
    }
    useEffect(()=>{
        fetchvideo();
    },[])
    useEffect(()=>{
        fetchByTag();
    },tagArray)
console.log(tagVideos)
console.log(data)
// async function fetchByTag(){
//     await axios.post("http://localhost:8000/api/video/tags",{tags:tagArray}).then((res)=>{setTagVideos(res.data)}).catch((err)=>{console.log(err)})  
// }

if(tagClicked==="false"){
  return (
    <div className='videosection'>
        {data.map((val)=>{   
            return(
                <Link to="/video" state={val} style={{textDecoration:"none"}}>
            <div className='videoCard' key={val.id}>
            <VideoCard thumbnail={val.imgURL} title={val.title} userImg={val.user_pic} username={val.username}
            views={val.views} time={val.time}
            />
        </div>
        </Link>
        )
        })}
    </div>
  )
    }
    else if(tagClicked==="true"){
        if(tagVideos==="h"){
            return(<div style={{color:"black"}}>Loading....</div>)
        }
        else if(tagVideos!=="h"){
        return (
            <div className='videosection'>sports
                {tagVideos.map((val)=>{   
                    return(
                        <Link to="/video" state={val} style={{textDecoration:"none"}}>
                    <div className='videoCard' key={val.id}>
                    <VideoCard thumbnail={val.imgURL} title={val.title} userImg={val.user_pic} username={val.username}
                    views={val.views} time={val.time}
                    />
                </div>
                </Link>
                )
                })}
            </div>
          )
            }
    }
}

export default VideoSection