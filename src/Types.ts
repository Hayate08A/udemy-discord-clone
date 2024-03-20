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
