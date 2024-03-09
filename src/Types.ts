export type TInitialUserState = {
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  } | null;
};
