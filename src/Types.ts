import { Timestamp } from 'firebase/firestore';

export type TInitialUserState = {
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  } | null;
};

export type TInitialChannelState = {
  channelId?: string;
  channelName?: string;
};

export type TMessages = {
  timestamp: Timestamp;
  message: string;
} & TInitialUserState;
