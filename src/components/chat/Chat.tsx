import React from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import './ChatHeader.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Chat() {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage"></div>
      {/* chatInput */}
      <div className="chat__input">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="メッセージを送信" />
          <button type="submit" className="chat__input__button">
            送信
          </button>
        </form>
        <div className="chat__input__icons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
