import React from 'react'
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
const css = require('/Users/eleanaortega/Desktop/DojoGroupProject/client/src/chat.css')


const App = () => {

  const [socket] = useState(() => io(':8000'));


    const handleSubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('input');
      if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
      
      socket.on('chat message', function(msg) {
        const messages = document.getElementById('messages');
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);

      })
    }
        return (
    <div>
      <body>
        <ul id="messages"></ul>
          <form id="form" onSubmit={handleSubmit}>
            <input id="input" autoComplete="off" />
            <button type="submit">Send</button>
          </form>
          
      </body>
    </div>
  )
}

export default App