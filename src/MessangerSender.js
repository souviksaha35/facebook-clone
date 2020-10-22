import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


export default function MessageSender() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
  };


  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar/>
            <form>
                <input className="messageSender_input" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={"What's on your mind"}/>
                <input placeholder="image URL(Optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>

                <button onClick={handleSubmit}>
                    handle submit
                </button>
            </form>
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{color: "red"}}/>
                <h3>Live video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{ color: "green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{ color: "orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  );
}
