import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../layouts/MainLayout/MainLayout.jsx';
import {
  fetchChannels,
  selectChannels,
  selectChannelsStatus,
  selectCurrentChannel,
} from '../../store/channels/channelsSlice.js';
import Channels from '../../components/Channels/Channels.jsx';
import { FetchStatus } from '../../const.js';

const Main = () => {
  const channels = useSelector(selectChannels);
  const currentChannel = useSelector(selectCurrentChannel);
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
          <Channels channelsList={channels} activeChannel={currentChannel} />

          <div className="col p-0 h-100">
            <div className="d-flex flex-column h-100">
              <div className="bg-light mb-4 p-3 shadow-sm small">
                <p className="m-0"><b># general</b></p>
                <span
                  className="text-muted"
                >
                  0 сообщений
                </span>
              </div>
              <div id="messages-box" className="chat-messages overflow-auto px-5 " />
              <div className="mt-auto px-5 py-3">
                <form noValidate="" className="py-1 border rounded-2">
                  <div className="input-group has-validation">
                    <input
                      name="body"
                      aria-label="Новое сообщение"
                      placeholder="Введите сообщение..."
                      className="border-0 p-0 ps-2 form-control"
                      value=""
                    />
                    <div className="input-group-append">
                      <button disabled="" type="submit" className="btn btn-group-vertical">
                        <span className="visually-hidden">Отправить</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
