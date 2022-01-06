import React, {
  createContext, useCallback, useEffect, useMemo, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import emitWithAcknowledgement from '../socket';
import { addMessage } from '../store/messages/messagesSlice';
import {
  setCurrentChannel,
  addChannel,
  deleteChannel,
  updateChannel,
} from '../store/channels/channelsSlice';

const SocketIoContext = createContext(null);
SocketIoContext.displayName = 'SocketIoContext';

const SocketIoProvider = ({ socket, children }) => {
  const dispatch = useDispatch();
  const socketRef = useRef(socket);

  useEffect(() => {
    socketRef.current.on('connect', () => {
      socketRef.current.sendBuffer = [];
    });

    socketRef.current.on('newMessage', (data) => {
      dispatch(addMessage(data));
    });

    socketRef.current.on('newChannel', (channelData) => {
      dispatch(addChannel(channelData));
      dispatch(setCurrentChannel(channelData.id));
    });

    socketRef.current.on('removeChannel', ({ id }) => {
      dispatch(deleteChannel(id));
    });

    socketRef.current.on('renameChannel', (channelData) => {
      dispatch(updateChannel(channelData));
    });
  }, []);

  const sendMessage = useCallback((messageData) => emitWithAcknowledgement(socketRef.current, 'newMessage', messageData), []);

  const createChannel = useCallback((channelData) => emitWithAcknowledgement(socketRef.current, 'newChannel', channelData), []);

  const removeChannel = useCallback((channelData) => emitWithAcknowledgement(socketRef.current, 'removeChannel', channelData), []);

  const renameChannel = useCallback((channelData) => emitWithAcknowledgement(socketRef.current, 'renameChannel', channelData), []);

  const value = useMemo(() => ({
    sendMessage,
    createChannel,
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
