import React from 'react';
import "./Header.css";
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Header() {
  return (
      <div className="header">
          <div className="header__left">
            <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png" alt=""/>

            <div className="header__input">
                <SearchIcon/>
                <input placeholder='Search Facebook' type="text"/>
            </div>

          </div>

          <div className="header__middle">
              <div className="header__option header__option--active">
                  <HomeIcon/>
              </div>

              <div className="header__option">
                  <FlagIcon/>
              </div>

              <div className="header__option">
                  <SubscriptionsOutlinedIcon/>
              </div>

              <div className="header__option">
                  <StorefrontOutlinedIcon/>
              </div>

              <div className="header__option">
                  <SupervisedUserCircleIcon/>
              </div>
          </div>

          <div className="header__right">
              <Avatar/>
              <h4>souvik saha</h4>
          </div>

          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
      </div>
  );
}
