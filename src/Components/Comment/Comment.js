import axios from 'axios';
import React from 'react'
import './Comment.css';
const Comment = ({desc,commentID}) => {


    const deleteComment=async()=>{
        try{
       await axios.delete(`http://localhost:8000/api/comments/delete/${commentID}`,{withCredentials:true})
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div className='comment'>
        <div className="first">
            <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/14054/huracan-evo-exterior-right-front-three-quarter-2.jpeg" alt="" className="userImage" />
        </div>
        <div className="second">
            <div className="userinfo">
                <span className="usernme">Umair Khan</span>
                <span className="time">2 days ago</span>
            </div>
            <div className="commentvalue">
               {desc}
            </div>
            <div className="delete" onClick={deleteComment}>
                Delete
            </div>
        </div>
    </div>
  )
}

export default Comment