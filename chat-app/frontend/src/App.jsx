import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [savedUsername, setSavedUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;

    setSavedUsername(username);
  }

  if (!savedUsername) {
    return (
      <div>
        <h1>Join Chat</h1>

        <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default App;