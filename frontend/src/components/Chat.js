import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL); // Connect to the backend Socket.IO server

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup the event listener when the component unmounts
    return () => socket.off('message');
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user
      const chatMessage = {
        user: user.username,
        text: message,
        timestamp: new Date(),
      };

      // Emit the message to the server
      socket.emit('sendMessage', chatMessage);

      // Add the message locally for instant feedback
      setMessages((prevMessages) => [...prevMessages, chatMessage]);
      setMessage(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          height: '300px',
          overflowY: 'scroll',
          marginBottom: '10px',
        }}
      >
        {messages.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{msg.user}:</strong> <span>{msg.text}</span>
              <div style={{ fontSize: '0.8em', color: '#888' }}>{new Date(msg.timestamp).toLocaleString()}</div>
            </div>
          ))
        )}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: '80%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={handleSendMessage}
        style={{
          width: '18%',
          padding: '10px',
          marginLeft: '2%',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
