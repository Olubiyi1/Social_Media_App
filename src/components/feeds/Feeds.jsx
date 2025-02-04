import React from 'react'
import "./feeds.css"
import Share from "../share/Share"
import Post from "../post/Post"

export default function Feeds() {
  return (
    <div className='feeds'>
      <div className="feedwrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>


    </div>
  )
}
