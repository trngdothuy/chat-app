# Chat Application

A full-stack chat application built with React and Express.

Users can:
- join the chat with a username
- send messages
- see messages from all users
- receive new messages automatically
- see timestamps for messages

Ticket: https://github.com/trngdothuy/My-Coursework-Planner/issues/163

---

# Technologies Used

## Frontend
- React
- Vite
- CSS
- Fetch API

## Backend
- Node.js
- Express
- CORS

---

# Features

- Username selection
- Send messages
- Display all chat messages
- Automatic message updates with polling
- Additional Feature: Timestamps on messages

---

# Project Structure

```txt
chat-app/
├── frontend/
└── backend/
```

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/trngdothuy/chat-app
```

---

## 2. Install frontend dependencies

```bash
cd frontend
npm install
```

---

## 3. Install backend dependencies

Open a second terminal:

```bash
cd backend
npm install
```

---

# Running the Application

## Start the backend server

Inside `backend/`:

```bash
node server.js
```

The backend runs on:

```txt
http://localhost:3000
```

---

## Start the frontend

Inside `frontend/`:

```bash
npm run dev
```

The frontend runs on:

```txt
http://localhost:5173
```

---

# API Endpoints

## GET /messages

Returns all chat messages.

Example response:

```json
[
  {
    "id": 1,
    "username": "System",
    "text": "Welcome!",
    "createdAt": "2026-05-21T20:00:00.000Z"
  }
]
```

---

## POST /messages

Creates a new message.

Example request body:

```json
{
  "username": "ABC",
  "text": "Hello everyone"
}
```

---

# Deployment

## Frontend Deployment
Deploy using:
- Coolify

## Backend Deployment
Deploy using:
- Coolify

---

# Future Improvements

- Authentication
- Database storage
- WebSockets for real-time updates
- Message editing/deleting
- Improved styling

---

# Author

**Trang Do Thuy** - Created as part of Migracode coursework.