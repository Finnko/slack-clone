import React, {
  createContext, useCallback, useEffect, useMemo, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import socket from '../sockets';
import { addMessage } from '../store/messages/messagesSlice';

const SocketIoContext = createContext(null);
SocketIoContext.displayName = 'SocketIoContext';

const SocketIoProvider = ({ children }) => {
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = socket;

    socketRef.current.on('newMessage', (message) => {
      dispatch(addMessage(message));
    });
  }, []);

  const sendMessage = useCallback((message) => {
    socketRef.current.emit('newMessage', { message });
  }, []);

  const value = useMemo(() => ({
    sendMessage,
  }), []);

  return (
    <SocketIoContext.Provider value={value}>
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
