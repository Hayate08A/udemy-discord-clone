import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({ reducer: userReducer });

export type TAppDispatch = typeof store.dispatch;
export type TRoutState = ReturnType<typeof store.getState>;
