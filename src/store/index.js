import { combineReducers, configureStore } from '@reduxjs/toolkit';

import channelsSlice from './channels/channelsSlice.js';

const NameSpace = {
  Channels: 'channels',
};

const index = combineReducers({
  [NameSpace.Channels]: channelsSlice,
});

export default configureStore({
  reducer: index,
});
