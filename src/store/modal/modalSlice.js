/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  type: null,
  extra: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.isOpened = true;
      state.type = action.payload?.type;
      state.extra = action.payload?.extra;
    },
    hideModal(state) {
      state.isOpened = false;
      state.type = null;
      state.extra = {};
    },
  },
});

export const {
  showModal,
  hideModal,
} = modalSlice.actions;

export default modalSlice.reducer;

export const selectModalState = createSelector(
  [(state) => state.modal],
  ({ isOpened, type, extra }) => ({ isOpened, type, extra }),
);
