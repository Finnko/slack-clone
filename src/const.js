const FetchStatus = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCEED: 'succeed',
  FAILED: 'failed',
};

const ModalType = {
  NEW_CHANNEL: 'new_channel',
  REMOVE_CHANNEL: 'remove_channel',
  RENAME_CHANNEL: 'rename_channel',
};

const HttpCode = {
  Unauthorized: 401,
};

export { HttpCode, FetchStatus, ModalType };
