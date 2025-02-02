import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feeds from '../../components/feeds/Feeds'
import "./homepage.css"


export default function Homepage() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feeds/>
    <Rightbar/>
    
    </div>
    
    </>
  )
}
