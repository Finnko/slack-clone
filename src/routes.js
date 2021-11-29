// @ts-check

const host = '';
const prefix = 'api/v1';

export default {
  root: () => [host].join('/'),
  login: () => [host, 'login'].join('/'),
  channelsPath: () => [host, prefix, 'channels'].join('/'),
  channelPath: (id) => [host, prefix, 'channels', id].join('/'),
  channelMessagesPath: (id) => [host, prefix, 'channels', id, 'messages'].join('/'),
};
