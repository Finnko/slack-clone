import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { showModal } from '../../store/modal/modalSlice.js';
import { ModalType } from '../../const';
import Channel from '../Channel/Channel.jsx';

import PlusSvg from '../../../assets/img/icons/plus.svg';

const Channels = ({ channelsList, activeChannelId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
        {channelsList.map((channel) => (
          <Channel key={channel.id} channel={channel} isActive={channel.id === activeChannelId} />
        ))}
      </ul>
    </div>
  );
};

export default Channels;
