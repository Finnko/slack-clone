import React from 'react';

const Messages = ({ messages }) => (
  <div id="messages-box" className="chat-messages overflow-auto px-5 ">
    {messages.map(({ id, message }) => (
      <div className="text-break mb-2" key={id}>
        <b>123</b>
        :
        {' '}
        { message }
      </div>
    ))}
  </div>
);

export default Messages;
