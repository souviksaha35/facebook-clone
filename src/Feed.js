import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import Post from "./Post";
import MessageSender from './MessangerSender';

export default function Feed() {
  return (
    <div className="Feed">
        <StoryReel/>
        <MessageSender/>

        <Post profilePic="https://scontent.fccu7-1.fna.fbcdn.net/v/t1.0-9/39999735_101948864092808_1474847509808414720_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=GD1P-f__DAAAX8YB3hn&_nc_ht=scontent.fccu7-1.fna&oh=cb452ee69bddffc2794b20d6b8bc1f7c&oe=5F7D238F" message="wOW this is awesome" timestamp="This is a timestamp" username="souvik saha" image="https://external.fccu7-1.fna.fbcdn.net/safe_image.php?d=AQDls5rOH0H5nar4&w=500&h=261&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F42JkCC2m7No%2Fmaxresdefault.jpg&cfs=1&ext=jpg&_nc_cb=1&_nc_hash=AQArbLhM1QchHLlI"/>
        <Post/>
    </div>
  );
}
