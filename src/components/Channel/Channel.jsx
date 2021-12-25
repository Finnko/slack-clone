import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setCurrentChannel } from '../../store/channels/channelsSlice.js';

const Channels = ({ channel, isActive }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(setCurrentChannel(id));
  };

  return (
    <li className="nav-item w-100" key={channel.id}>
      <div role="group" className="d-flex show dropdown btn-group">
        <button
          className={cn('w-100 rounded-0 text-start btn', { 'btn-secondary': isActive })}
          type="button"
          onClick={() => handleClick(channel.id)}
        >
          <span className="me-1">#</span>
          {channel.name}
        </button>

        {channel.removable && (
          <>
            <button
              aria-haspopup="true"
              aria-expanded="true"
              type="button"
              className="flex-grow-0 dropdown-toggle dropdown-toggle-split btn"
              onClick={() => setOpen(!open)}
            >
              <span className="visually-hidden">Управление каналом</span>
            </button>
            <div
              x-placement="bottom-end"
              aria-labelledby=""
              className={cn('dropdown-menu', { show: open })}
              data-popper-reference-hidden="false"
              data-popper-escaped="false"
              data-popper-placement="bottom-start"
            >
              <a href="/#" className="dropdown-item" role="button">
                Удалить
              </a>
              <a href="/#" className="dropdown-item" role="button">
                Переименовать
              </a>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default Channels;
