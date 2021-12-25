import React from 'react';

const Messages = ({ messages }) => (
  <div id="messages-box" className="chat-messages overflow-auto px-5 ">
    {messages.map(({ id, body, user }) => (
      <div className="text-break mb-2" key={id}>
        <b>{user}</b>
        :
        {' '}
        { body }
      </div>
    ))}
  </div>
);

export default Messages;
