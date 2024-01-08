import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-header__left">
        <h3>
          <span className="chat-header__Hash">#</span>
          Udemy
        </h3>
      </div>
      <div className="chat-header__right">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="chat-header__search">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
