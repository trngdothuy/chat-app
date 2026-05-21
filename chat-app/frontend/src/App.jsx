import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [savedUsername, setSavedUsername] = useState("");

  const [messageInput, setMessageInput] = useState("");

  const [messages, setMessages] = useState([]);

  async function fetchMessages() {
    try {
      const response = await fetch("http://localhost:3000/messages");

      const data = await response.json();

      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  function handleUserNameSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    setSavedUsername(username);
  }

  async function handleMessageSubmit(e) {
    e.preventDefault();

    if (!messageInput.trim()) return;

    const newMessage = {
      userName: savedUsername,
      text: messageInput,
    };

    try {
      await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      setMessageInput("");

      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
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

            <small>{new Date(message.createdAt).toLocaleTimeString()}</small>
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