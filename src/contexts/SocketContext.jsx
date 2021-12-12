import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../sockets';

const SocketIoContext = createContext(null);
SocketIoContext.displayName = 'SocketIoContext';

const SocketIoProvider = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <SocketIoContext.Provider value="socket">
      {children}
    </SocketIoContext.Provider>
  );
};

const useSocket = () => {
  const context = React.useContext(SocketIoContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketIoProvider');
  }

  return context;
};

export { SocketIoProvider, useSocket };
