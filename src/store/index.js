import { combineReducers, configureStore } from '@reduxjs/toolkit';

import channelsSlice from './channels/channelsSlice.js';
import messagesSlice from './messages/messagesSlice.js';

const NameSpace = {
  Channels: 'channels',
  Messages: 'messages',
};

const index = combineReducers({
  [NameSpace.Channels]: channelsSlice,
  [NameSpace.Messages]: messagesSlice,
});

export default configureStore({
  reducer: index,
});
