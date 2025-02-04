import React from 'react'
import "./post.css"
import One from "../../../public/Posts/4.jpg"
import Heart from "../../../public/Posts/heart.png"
import Like from "../../../public/Posts/Like.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImage" src={One} alt="" />
                    <span className="postUserName">Tom Bradson</span>
                    <span className="postDate">5mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCentre">
                <span className="postText">Hey it's my first post</span>
                <img className="postImage" src={One} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={Like} alt="" />
                    <img className="likeIcon" src={Heart} alt="" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
