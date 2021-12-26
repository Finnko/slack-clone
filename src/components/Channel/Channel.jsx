import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonGroup, Dropdown,
} from 'react-bootstrap';
import { setCurrentChannel } from '../../store/channels/channelsSlice.js';

const Channels = ({ channel, activeChannelId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (id === activeChannelId) {
      return;
    }

    dispatch(setCurrentChannel(id));
  };

  const isActive = activeChannelId === channel.id;

  return (
    <li className="nav-item w-100" key={channel.id}>
      <Dropdown role="group" className="d-flex" as={ButtonGroup}>
        <Button
          variant={isActive ? 'secondary' : 'light'}
          className="w-100 rounded-0 text-start"
          type="button"
          onClick={() => handleClick(channel.id)}
        >
          <span className="me-1">#</span>
          {channel.name}
        </Button>

        {channel.removable && (
          <>
            <Dropdown.Toggle
              split
              variant={isActive ? 'secondary' : 'light'}
            />
            <Dropdown.Menu>
              <Dropdown.Item href="/#">
                {t('ui.button.remove')}
              </Dropdown.Item>
              <Dropdown.Item href="/#">
                {t('ui.button.rename')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </>
        )}
      </Dropdown>
    </li>
  );
};

export default Channels;
