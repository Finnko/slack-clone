import { io } from 'socket.io-client';

const SERVER_URL = 'http://localhost:5000';
const socket = io(SERVER_URL);

export default socket;
