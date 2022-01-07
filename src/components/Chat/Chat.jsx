import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import MessageForm from '../MessageForm/MessageForm.jsx';
import Messages from '../Messages/Messages.jsx';
import { selectActiveChannel, selectChannelsError } from '../../store/channels/channelsSlice.js';
import { selectChannelMessages } from '../../store/messages/messagesSlice.js';

const Chat = () => {
  const { t } = useTranslation();
  const activeChannel = useSelector(selectActiveChannel);
  const channelMessages = useSelector(selectChannelMessages);
  const channelError = useSelector(selectChannelsError);

  useEffect(() => {
    if (channelError) {
      toast.error(t('notifications.networkError'));
    }
  }, [channelError]);

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{`# ${activeChannel.name}`}</b>
          </p>

          <span className="text-muted">
            {t('plural.messageWithCount', { count: channelMessages.length })}
          </span>
        </div>

        <Messages messages={channelMessages} />

        <MessageForm activeChannel={activeChannel} />
      </div>
    </div>
  );
};

export default Chat;
