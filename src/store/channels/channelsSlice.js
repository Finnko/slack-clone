/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const.js';
import { loadChannels } from '../../api/api.js';

const initialState = {
  channels: [],
  status: FetchStatus.IDLE,
  error: null,
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.status = FetchStatus.PENDING;
      })
      .addCase(fetchChannels.fulfilled, (state, { payload }) => {
        console.log({ payload });
        state.status = FetchStatus.SUCCEED;
        state.channels = payload.channels;
        state.currentChannelId = payload.currentChannelId;
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.status = FetchStatus.FAILED;
        state.error = action.error.message;
      });
  },
});

// export const { } = channelsSlice.actions;

export default channelsSlice.reducer;

export const selectChannels = (state) => state.channels.channels;
export const selectChannelsStatus = (state) => state.channels.status;
export const selectCurrentChannel = (state) => state.channels.currentChannelId;
