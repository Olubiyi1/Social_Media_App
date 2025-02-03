import "./share.css"
import One from "../../../public/assest/1.jpg"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Label from '@mui/icons-material/Label';
import Room from '@mui/icons-material/Room';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';


export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapp">
            <div className="shareTop">
                <img className="shareProfilePic" src={One} alt="" />
                <input placeholder="What's in your mind ?" className="shareInput" />
            </div>

            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
                <button className="shareButton">Share</button>
            </div>
            
        </div>
    </div>
  )
}
