import React from 'react'
import './VideoCard.css'

const VideoCard = ({thumbnail,title,userImg,username,views,time}) => {
  return (
    <div className='videocard'>
        <img src={thumbnail} alt="" className='thumbnail'/>
        <div className="videoInfo">
        <div className="second">
            <img src={userImg} alt="" className='userImage'/>
        </div>

        <div className="third">
        <span className="title">{title}</span>
        <span className='username'>{username}</span>
        <div className="fourth">
            <span className="views">{views}</span>
            <span className="time">{time}</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default VideoCard