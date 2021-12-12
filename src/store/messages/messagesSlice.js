/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchChannels } from '../channels/channelsSlice.js';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChannels.fulfilled, (state, { payload }) => {
        state.messages = payload.messages;
      });
  },
});

// export const { } = channelsSlice.actions;

export default messagesSlice.reducer;

export const selectMessages = (state) => state.messages.messages;
