import ReactDOM from 'react-dom';
import { io } from 'socket.io-client';

import init from './init.jsx';

const runApp = () => {
  const socketInstance = io();
  const root = document.getElementById('chat');

  init(socketInstance)
    .then((vdom) => {
      ReactDOM.render(vdom, root);
    });
};

runApp();
