import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MessageForm from '../MessageForm/MessageForm.jsx';
import Messages from '../Messages/Messages.jsx';
import { selectActiveChannel } from '../../store/channels/channelsSlice.js';
import { selectMessages } from '../../store/messages/messagesSlice.js';

const Chat = () => {
  const { t } = useTranslation();
  const activeChannel = useSelector(selectActiveChannel);
  const messages = useSelector(selectMessages);

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{`# ${activeChannel.name}`}</b>
          </p>

          <span className="text-muted">
            {t('plural.messageWithCount', { count: messages.length })}
          </span>
        </div>

        <Messages />

        <MessageForm />
      </div>
    </div>
  );
};

export default Chat;