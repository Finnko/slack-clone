/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const.js';
import { loadChannels } from '../../api/api.js';

const initialState = {
  channels: [],
  status: FetchStatus.IDLE,
  error: null,
};

export const fetchChannels = createAsyncThunk('channels/fetchChannels', async () => {
  const response = await loadChannels();
  return response.data;
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChannels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.channels = state.channels.concat(action.payload);
      })
      .addCase(fetchChannels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const { } = postsSlice.actions;

export default channelsSlice.reducer;

export const selectChannels = (state) => state.channels.channels;
