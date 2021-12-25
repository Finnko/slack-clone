import React, {
  createContext, useCallback, useEffect, useMemo, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import socket, { emitWithAcknowledgement } from '../socket';
import { addMessage } from '../store/messages/messagesSlice';

const SocketIoContext = createContext(null);
SocketIoContext.displayName = 'SocketIoContext';

const SocketIoProvider = ({ children }) => {
  const dispatch = useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = socket;

    socketRef.current.on('newMessage', (data) => {
      dispatch(addMessage(data));
    });
  }, []);

  const sendMessage = useCallback((messageData) => {
    emitWithAcknowledgement('newMessage', messageData);
  }, []);

  const createChannel = useCallback((channelData) => {
    emitWithAcknowledgement('newChannel', channelData);
  }, []);

  const addChannel = useCallback((channelData) => {
    emitWithAcknowledgement('newMessage', channelData);
  }, []);

  const removeChannel = useCallback((channelData) => {
    emitWithAcknowledgement('newMessage', channelData);
  }, []);

  const renameChannel = useCallback((channelData) => {
    emitWithAcknowledgement('newMessage', channelData);
  }, []);

  const value = useMemo(() => ({
    sendMessage,
    createChannel,
    addChannel,
    removeChannel,
    renameChannel,
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
