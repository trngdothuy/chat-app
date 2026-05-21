import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [savedUsername, setSavedUsername] = useState("");

  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      username: "System",
      text: "Welcome to the chat",
      createdAt: new Date().toLocaleTimeString(),
    },
  ]);

  function handleUserNameSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    setSavedUsername(username);
  }

  function handleMessageSubmit(e) {
    e.preventDefault();

    if (!messageInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      userName: savedUsername,
      text: messageInput,
      createdAt: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);

    setMessageInput("");
  }

  if (!savedUsername) {
    return (
      <div>
        <h1>Join Chat</h1>

        <form onSubmit={handleUserNameSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button type="submit">Join</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Chat App</h1>
      <p>Welcome {savedUsername}!</p>

      <div className="message-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <strong>{message.username}</strong>

            <p>{message.text}</p>

            <small>{message.createdAt}</small>
          </div>
        ))}
      </div>

      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;