import React, { useEffect, useState } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader';
import './ChatHeader.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMassage from './ChatMassage';
import { useAppSelector } from '../../app/hooks';
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { TMessages } from '../../Types';
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
    console.log('sendMassage');
    const collectionRef = collection(
      db,
      'channels',
      String(channelId),
      'messages'
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      }
    );
    // console.log(`🚀 ~ docRef:`, docRef);
    setInputText('');
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
      {/* chatMessage */}
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
      {/* chatInput */}
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
