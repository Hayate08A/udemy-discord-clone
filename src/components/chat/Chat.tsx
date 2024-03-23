import React, { useState } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import './ChatHeader.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMassage from './ChatMassage';
import { useAppSelector } from '../../app/hooks';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

function Chat() {
  const [inputText, setInputText] = useState<string>('');
  const channelName = useAppSelector((state) => state.channel.channelName);
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const messages = useSubCollection({
    collectionName: 'channels',
    subCollectionName: 'messages',
  });

  const sendMassage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const collectionRef = collection(
      db,
      'channels',
      String(channelId),
      'messages'
    );
    await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInputText('');
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat__message">
        {messages.map((message, i) => (
          // TODO 固有のkey
          <ChatMassage
            key={`message_${i}`}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircleOutlineIcon />
        <form>
          <input
            type="text"
            placeholder="メッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
          />
          <button
            type="submit"
            className="chat__input__button"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMassage(e)
            }
          >
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
