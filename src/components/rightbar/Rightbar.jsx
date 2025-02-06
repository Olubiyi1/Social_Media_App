import React from 'react'
import "./rightbar.css"
import Gift from "../../../public/Posts/gift.jpg"
import Ads from "../../../public/Posts/ads.jpg"
import  Friend from "../../../public/assest/2.jpg"

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={Gift} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAds' src={Ads} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightProfileImg' src={Friend} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">
              John Carter
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
