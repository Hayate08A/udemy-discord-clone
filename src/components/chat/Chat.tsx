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
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { TMessages } from '../../Types';

function Chat() {
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<TMessages[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  console.log(`🚀 ~ inputText:`, inputText);

  useEffect(() => {
    const collectionRef = collection(
      db,
      'channels',
      String(channelId),
      'messages'
    );

    onSnapshot(collectionRef, (snapshot) => {
      const results: TMessages[] = snapshot.docs.map((doc) => {
        const docData = doc.data();
        console.log(`🚀 ~ docData:`, docData);
        return {
          timestamp: docData.timestamp,
          message: docData.message,
          user: docData.user,
        };
      });
      setMessages(results);
      console.log(`🚀 ~ messages:`, messages);
    });
  }, [channelId]);

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
    console.log(`🚀 ~ docRef:`, docRef);
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
