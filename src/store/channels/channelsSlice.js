/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const.js';
import { loadChannels } from '../../api/api.js';

const initialState = {
  channels: [],
  status: FetchStatus.IDLE,
  error: false,
  currentChannelId: -1,
};

export const fetchChannels = createAsyncThunk('channels/fetchChannels', async () => {
  const response = await loadChannels();
  return response;
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannel(state, action) {
      state.currentChannelId = action.payload;
    },
    addChannel(state, action) {
      state.channels.push(action.payload);
    },
    deleteChannel(state, action) {
      state.channels = state.channels.filter((ch) => ch.id !== action.payload);
      state.currentChannelId = state.channels[0].id;
    },
    updateChannel(state, action) {
      const index = state.channels.findIndex((ch) => ch.id === action.payload.id);
      if (index !== -1) {
        state.channels[index] = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.status = FetchStatus.PENDING;
        state.error = false;
      })
      .addCase(fetchChannels.fulfilled, (state, { payload }) => {
        state.status = FetchStatus.SUCCEED;
        state.channels = payload.channels;
        state.currentChannelId = payload.currentChannelId;
      })
      .addCase(fetchChannels.rejected, (state) => {
        state.status = FetchStatus.FAILED;
        state.error = true;
      });
  },
});

export const {
  setCurrentChannel,
  addChannel,
  deleteChannel,
  updateChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;

export const selectChannels = (state) => state.channels.channels;
export const selectChannelsStatus = (state) => state.channels.status;
export const selectChannelsError = (state) => state.channels.error;
export const selectCurrentChannelId = (state) => state.channels.currentChannelId;

export const selectActiveChannel = createSelector(
  [selectChannels, selectCurrentChannelId],
  (channels, id) => channels.find((channel) => channel.id === id),
);

export const selectChannelNames = createSelector(
  [selectChannels],
  (channels) => channels.map((channel) => channel.name),
);
