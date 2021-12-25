import { io } from 'socket.io-client';
import withTimeout from './helper.js';

const SERVER_URL = 'http://localhost:5000';
const DEFAULT_TIMEOUT = 5000;

const socket = io(SERVER_URL);

socket.on('connect', () => {
  socket.sendBuffer = [];
});

export const emitWithAcknowledgement = (event, data) => (
  new Promise((resolve, reject) => {
    socket.emit(event, data, withTimeout(
      (response) => {
        if (response?.status === 'ok') {
          resolve(response);
        } else {
          console.error(response.error);
          reject(response.error);
        }
      },
      () => console.log('timeout!'),
      DEFAULT_TIMEOUT,
    ));
  })
);

export default socket;
