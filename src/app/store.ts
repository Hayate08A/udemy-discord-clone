import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import channelReducer from '../features/channelSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

export type TAppDispatch = typeof store.dispatch;
export type TRoutState = ReturnType<typeof store.getState>;
