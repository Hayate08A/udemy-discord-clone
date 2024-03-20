import React from 'react';
import './ChatMassage.scss';
import { Avatar } from '@mui/material';
import { TMessages } from '../../Types';

const ChatMassage = (props: TMessages) => {
  const { message, timestamp, user } = props;

  return (
    <div className="message">
      <Avatar src={user?.photo} />
      <div className="message__info">
        <h4>
          {user?.displayName}
          <span className="message__info__time-stamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMassage;
