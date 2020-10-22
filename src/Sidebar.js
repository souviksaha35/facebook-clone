import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow src="https://avatars1.githubusercontent.com/u/49010980?s=60&v=4" title='souvik saha'/>
        <SidebarRow Icon={EmojiFlagsIcon} title="Covid-19 Information Center"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="More"/>
    </div>
  );
}