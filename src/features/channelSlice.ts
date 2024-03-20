import { createSlice } from '@reduxjs/toolkit';
import { TInitialChannelState, TInitialUserState } from '../Types';

const initialState: TInitialChannelState = {
  channelId: undefined,
  channelName: undefined,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
