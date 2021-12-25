import { combineReducers, configureStore } from '@reduxjs/toolkit';

import channelsSlice from './channels/channelsSlice.js';
import messagesSlice from './messages/messagesSlice.js';
import modalSlice from './modal/modalSlice.js';

const NameSpace = {
  Channels: 'channels',
  Messages: 'messages',
  Modal: 'modal',
};

const index = combineReducers({
  [NameSpace.Channels]: channelsSlice,
  [NameSpace.Messages]: messagesSlice,
  [NameSpace.Modal]: modalSlice,
});

export default configureStore({
  reducer: index,
});
