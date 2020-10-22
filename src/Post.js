import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

export default function Post({ profilePic, image, message, timestamp, username}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>
                        {username}
                    </h3>
                    <p>
                        {timestamp}
                    </p>
                </div>
            </div>

            <div class="post__bottom">
                <p>
                    {message}
                </p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>
        </div>
    )
}