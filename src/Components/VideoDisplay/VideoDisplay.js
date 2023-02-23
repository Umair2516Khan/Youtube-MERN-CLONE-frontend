import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import './VideoDisplay.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import Comment from '../Comment/Comment';
import Related from '../Related/Related';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const VideoDisplay = () => {
    const location=useLocation();
    const videodata=location.state;
    const videoref=useRef();
    const relatedref=useRef();
    const [relatedVideo,setRelatedVideo]=useState("h");
    const [comments,setComments]=useState("h");
    const [commentDesc,setCommentDesc]=useState();
    const [error,setError]=useState();
    // console.log(commentDesc)
    // console.log(videodata);
    
    const videotags=videodata.tags;
    // console.log(videotags);
    const title=videodata.title;
    const user_img=videodata.user_pic;
    const vid_thumbnail=videodata.imgURL;
    const videoDescription=videodata.desc;
    const vid_id=videodata._id;
    const videoViews=videodata.views;
    let no_of_likes=videodata.no_of_likes;
    
    const [likes,setLikes]=useState(no_of_likes);
    // const no_of_dislikes=videodata.no_of_dislikes;
    // console.log(no_of_likes);
    // console.log(vid_id);
    
   
    const fetchRelatedVideo=async()=>{
        await axios.post('http://localhost:8000/api/video/tags',{
            tags:videotags
        }).then((res)=>{ setRelatedVideo(res.data)})
    }

    const fetchComments=async()=>{
       await axios.get(`http://localhost:8000/api/comments/allcomments/${vid_id}`).then((res)=>{setComments(res.data)},{withCredentials:true});
    }

    useEffect(()=>{
        fetchRelatedVideo()
        fetchComments()
    },[])
    useEffect(()=>{
        fetchComments()
    },[comments])

   
    // if (relatedVideo!=="h") {console.log(relatedVideo)}
    
const work1=()=>{
    relatedref.current.style.display="flex";
    videoref.current.style.position="fixed";
   setTimeout(()=>{
    relatedref.current.style.marginRight="2px";
    relatedref.current.style.transition="2s";

   },0.1)
}
const work2=()=>{
    relatedref.current.style.marginRight="-600px";
    videoref.current.style.position="relative";
    relatedref.current.style.transition="2s";
    setTimeout(()=>{
        relatedref.current.style.display="none";
    },900)
}

const addComment = async()=>{
    try{
    const response=await axios.post(`http://localhost:8000/api/comments/add/${vid_id}`,{
        desc:commentDesc,
    },{withCredentials:true})
    // console.log(response)
    }
    catch(error){
        console.log(error)
    }
    setCommentDesc("");
    fetchComments();
}

const likeVideo=async()=>{
    try{
     await axios.put(`http://localhost:8000/api/video/likevideo/${vid_id}`,{},{withCredentials:true})
     const res=await axios.get(`http://localhost:8000/api/video/find/${vid_id}`);
    //  console.log(res.data.no_of_likes);
     setLikes(res.data.no_of_likes);
    }
    catch(error){
        console.log(error)
    }
}

// const fetch_no_of_likes=async()=>{
//     try{
//         const res=await axios.get(`http://localhost:8000/api/video/find/${vid_id}`);
//         no_of_likes=res.no_of_likes;
//     }
//     catch(error){
//         console.log(error);
//     }
// }

if(relatedVideo!=="h" && comments!=="h"){
  return (
    <>
    <div className="display">
        <div className='video' ref={videoref}>
            <div className="button">
                <span onClick={work1}>click</span>
                <span onClick={work2}>unclick</span>
            </div>
            <div className="videoPlayer">
                <img src={vid_thumbnail} alt="" />
            </div>
            <span className="videotitle">{title}</span>
            <div className="videoinfo">
                <div className="vi1">
                <img src={user_img} alt="" className="userImage" />
                <div className="user-Info">
                    <span className="username">Fireship</span>
                    <span className="subscribers-no">122 subscribers</span>
                </div>
                </div>
                <div className="vi2">
                <div className="review">
                    <div className="like" onClick={likeVideo}>
                        <ThumbUpOutlinedIcon/> 
                        <span>{likes}</span>
                        {/* <span>100</span> */}
                    </div>
                    <span>|</span>
                    <div className="dislike">
                    <ThumbDownOutlinedIcon/>
                    {/* <span>{no_of_dislikes}</span>  */}
                    <span>200</span>
                    </div>
                </div>
                <div className="subscribeBTN">Subscibe</div>
                </div>
            </div>
            <div className="description">
                <div className="desc1">
                    <span>{videoViews} views </span>
                    <span>20 days</span>
                </div>
                <div className="desc2">
                    <span>{videoDescription}</span>
                </div>
            </div>
            <div className="commentSection">
                <span className="commenttitile">129 Comments</span>
                <div className="usercomment">
                    <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/14054/huracan-evo-exterior-right-front-three-quarter-2.jpeg" alt="" className="userImage" />
                    <div className="commentinput">
                        <input type="text" placeholder='Add a comment' value={commentDesc} onChange={(e)=>{setCommentDesc(e.target.value)}}/>
                    </div>
                    <div className="CSubmit" onClick={addComment}>Submit</div>
                </div>
                <div className="commentbox">
                  {comments.map((val)=>{
                    return(
                        <div>
                            <Comment desc={val.desc} commentID={val._id}/>
                        </div>
                    )
                  })}
                </div>
            </div>
        </div>

<div className="related" ref={relatedref} >

{relatedVideo.map((val)=>{ 
        return (
            <Link to="/video" state={val} style={{textDecoration:"none"}}>
        <div>
        <Related image={val.imgURL} title={val.title} views={val.views} />
        </div>
        </Link>)
})
}
        </div>
        </div>
        </>
  )}
  else if(relatedVideo==="h" && comments==="h"){
    return (
        <div style={{color:"black"}}>Loading....</div>
    )
  }
}

export default VideoDisplay