/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchChannels, selectCurrentChannelId } from '../channels/channelsSlice.js';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChannels.fulfilled, (state, { payload }) => {
        state.messages = payload.messages;
      });
  },
});

export const {
  addMessage,
} = messagesSlice.actions;

export default messagesSlice.reducer;

const selectMessages = (state) => state.messages.messages;

export const selectChannelMessages = createSelector(
  [selectMessages, selectCurrentChannelId],
  (messages, id) => messages.filter((message) => message.channelId === id),
);
