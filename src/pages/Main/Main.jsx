import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import Channels from '../../components/Channels/Channels.jsx';
import Chat from '../../components/Chat/Chat.jsx';
import {
  fetchChannels,
  selectChannels,
  selectChannelsStatus,
  selectCurrentChannelId,
} from '../../store/channels/channelsSlice.js';
import { FetchStatus } from '../../const.js';

const Main = () => {
  const channels = useSelector(selectChannels);
  const currentChannelId = useSelector(selectCurrentChannelId);
  const status = useSelector(selectChannelsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannels());
  }, []);

  if ([FetchStatus.PENDING, FetchStatus.IDLE].includes(status)) {
    return <Spinner animation="grow" variant="primary" />;
  }

  return (
    <MainLayout>
      <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
          <Channels channelsList={channels} activeChannelId={currentChannelId} />

          <Chat />
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
