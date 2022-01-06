import withTimeout from './helper.js';

const DEFAULT_TIMEOUT = 5000;

export default (socketInstance, event, data) => (
  new Promise((resolve, reject) => {
    socketInstance.emit(event, data, withTimeout(
      (response) => {
        if (response?.status === 'ok') {
          resolve(response);
        } else {
          console.error(response.error);
          reject(response.error);
        }
      },
      () => reject(new Error('timeout!')),
      DEFAULT_TIMEOUT,
    ));
  })
);
