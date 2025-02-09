import "./sidebar.css"
import { RssFeed} from "@mui/icons-material"
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import Two from "../../../public/assest/2.jpg"

export default function Sidebar() {
  return (
    <div className="sideBar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItems">
                    <RssFeed htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed </span>
                </li>
                <li className="sidebarListItems">
                    <ChatIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat </span>
                </li>
                <li className="sidebarListItems">
                    <PlayCircleIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos </span>
                </li>
                <li className="sidebarListItems">
                    <GroupIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups </span>
                </li>
                <li className="sidebarListItems">
                    <BookmarkIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks </span>
                </li>
                <li className="sidebarListItems">
                    <HelpOutlineIcon htmlColor="#1877f2"  className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions </span>
                </li>
                <li className="sidebarListItems">
                    <WorkOutlineIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs </span>
                </li>
                <li className="sidebarListItems">
                    <EventIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events </span>
                </li>
                <li className="sidebarListItems">
                    <SchoolIcon htmlColor="#1877f2" className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses </span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>

            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={Two} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Don Ronald</span>

                </li>
            </ul>
        </div>
    </div>
  )
}
