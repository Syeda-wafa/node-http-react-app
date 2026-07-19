# 🚀 Node.js Fundamentals - HTTP Server with React

A full-stack project built to learn **Node.js Fundamentals** by creating a basic HTTP server (without Express) and connecting it with a React frontend.

This project demonstrates how Node.js core modules work, including the **HTTP Module**, **File System**, **CommonJS Modules**, **Event Loop**, **Streams**, and **EventEmitter**.

---

## 📸 Project Preview

### Features Included

- 📄 Read File Data
- 💾 Save File Data
- ➕ CommonJS Module Demo
- ⚡ Event Loop Demo
- 🌊 Streams Demo
- 📢 EventEmitter Demo

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- React Icons
- CSS3

### Backend
- Node.js
- HTTP Module
- File System (fs)
- Events Module
- Streams
- CommonJS Modules

---

# 📂 Project Structure

```
node-http-react-app/

├── backend/
│   ├── server.js
│   ├── math.js
│   ├── eventLoop.js
│   ├── events.js
│   ├── data.txt
│   ├── largeFile.txt
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

# ✨ Features

## 📄 Read File

- Reads data from `data.txt`
- Uses `fs.readFileSync()`

---

## 💾 Save File

- Saves user input into `data.txt`
- Uses `fs.writeFileSync()`

---

## ➕ CommonJS Module

Demonstrates:

- `require()`
- `module.exports`

Example:

```javascript
const math = require("./math");
```

---

## ⚡ Event Loop

Demonstrates:

- process.nextTick()
- setTimeout()
- setImmediate()

Execution order is printed in the backend terminal.

---

## 🌊 Streams

Uses:

```javascript
fs.createReadStream()
```

Reads a large file efficiently without loading the entire file into memory.

---

## 📢 EventEmitter

Demonstrates custom events using Node.js Events Module.

Example:

```javascript
eventEmitter.emit("projectRun");
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Server Status |
| GET | `/read` | Read File |
| POST | `/save` | Save File |
| GET | `/math` | CommonJS Demo |
| GET | `/event-loop` | Event Loop Demo |
| GET | `/stream` | Streams Demo |
| GET | `/events` | EventEmitter Demo |

---

# ⚙️ Installation

## Go to Project

```bash
cd node-http-react-app
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run backend

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 🧪 Testing

### Read File

Click:

```
Read Data
```

Loads data from:

```
data.txt
```

---

### Save File

Enter text

↓

Click

```
Save Data
```

↓

Updates

```
data.txt
```

---

### CommonJS

Click

```
Run Module
```

Output

```
Addition : 30

Subtraction : 15
```

---

### Event Loop

Click

```
Run Event Loop
```

Backend Terminal

```
1. Start
5. End
4. process.nextTick
2. setTimeout
3. setImmediate
```

---

### Streams

Click

```
Read Large File
```

Displays contents of

```
largeFile.txt
```

using Streams.

---

### Events

Click

```
Trigger Event
```

Backend Terminal

```
📢 Custom Event Triggered Successfully!
```

---
