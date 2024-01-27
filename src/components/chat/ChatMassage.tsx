import React from 'react';
import './ChatMassage.scss';
import { Avatar } from '@mui/material';

function ChatMassage() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          code
          <span className="message__info__time-stamp">20XX/12/08</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
}

export default ChatMassage;
