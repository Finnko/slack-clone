import React from 'react';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import Channels from '../../components/Channels/Channels.jsx';
import Chat from '../../components/Chat/Chat.jsx';

const Main = () => (
  <MainLayout>
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />

        <Chat />
      </div>
    </div>
  </MainLayout>
);

export default Main;
