import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useRollbar } from '@rollbar/react';
import { Spinner } from 'react-bootstrap';
import Channel from '../Channel/Channel.jsx';
import { showModal } from '../../store/modal/modalSlice.js';
import { FetchStatus, ModalType } from '../../const';
import { useAuth } from '../../contexts/AuthContext.jsx';
import {
  fetchData,
  selectChannels,
  selectChannelsError, selectChannelsStatus,
  selectCurrentChannelId,
} from '../../store/channels/channelsSlice.js';

import PlusSvg from '../../../assets/img/icons/plus.svg';

const Channels = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const rollbar = useRollbar();
  const channels = useSelector(selectChannels);
  const status = useSelector(selectChannelsStatus);
  const activeChannelId = useSelector(selectCurrentChannelId);
  const channelError = useSelector(selectChannelsError);
  const { getAuthHeaders } = useAuth();

  useEffect(() => {
    if (channelError) {
      toast.error(t('notifications.networkError'));
      rollbar.error(t('rollbar.data'), channelError);
    }
  }, [channelError]);

  useEffect(() => {
    const headers = getAuthHeaders();
    dispatch(fetchData(headers));
  }, []);

  if ([FetchStatus.PENDING, FetchStatus.IDLE].includes(status)) {
    return <Spinner animation="grow" variant="primary" />;
  }

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>{t('ui.text.channels')}</span>
        <button
          className="p-0 text-primary btn btn-group-vertical"
          type="button"
          onClick={() => dispatch(showModal({ type: ModalType.NEW_CHANNEL }))}
        >
          <PlusSvg />
          <span className="visually-hidden">+</span>
        </button>
      </div>

      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map((channel) => (
          <Channel key={channel.id} channel={channel} activeChannelId={activeChannelId} />
        ))}
      </ul>
    </div>
  );
};

export default Channels;
