import React from 'react';
import { useTranslation } from 'react-i18next';

import PlusSvg from '../../../assets/img/icons/plus.svg';

const Channels = ({ channelsList, activeChannel }) => {
  const { t } = useTranslation();

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
        <span>{t('ui.text.channels')}</span>
        <button className="p-0 text-primary btn btn-group-vertical" type="button">
          <PlusSvg />
          <span className="visually-hidden">+</span>
        </button>
      </div>

      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channelsList.map((channel) => (
          <li className="nav-item w-100" key={channel.id}>
            <button className="w-100 rounded-0 text-start btn" type="button">
              <span className="me-1">#</span>
              {channel.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
