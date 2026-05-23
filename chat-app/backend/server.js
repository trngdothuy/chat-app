const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let messages = [
  {
    id: 1,
    username: "System",
    text: "Welcome to the server chat",
    createdAt: new Date().toISOString(),
  },
];

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const { username, text } = req.body;

  if (!username || !text) {
    return res.status(400).json({
      error: "Username and text are required",
    });
  }

  const newMessage = {
    id: Date.now(),
    username,
    text,
    createdAt: new Date().toISOString(),
  };

  console.log(newMessage)

  messages.push(newMessage);

  res.status(201).json(newMessage);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});