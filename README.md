<p align="center">
  <img src="assets/server.png" width="100%">
</p>

<h1 align="center">WebSocket Real-Time Chat Server</h1>

<h3 align="center">
Real-Time Communication using Node.js, Express.js and WebSockets
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-24.x-green">
  <img src="https://img.shields.io/badge/Express.js-5.x-blue">
  <img src="https://img.shields.io/badge/WebSocket-ws-orange">
  <img src="https://img.shields.io/badge/Protocol-WebSocket-purple">
  <img src="https://img.shields.io/badge/Communication-Real--Time-success">
</p>

---

## Screenshots

<h3 align="center">Server</h3>

<p align="center">
  <img src="assets/server.png" width="100%">
</p>

<h3 align="center">Clients</h3>

<p align="center">
  <img src="assets/dobby.png" width="49%">
  <img src="assets/hermione.png" width="49%">
</p>

**"Express provides the application layer, while Node's HTTP module creates the underlying HTTP server. I use the HTTP server because I need to attach the WebSocket server to it."**

**Convert message to string**

**const payload = message.toString();**

**The WebSocket library gives us the incoming message as data that may be represented as a Buffer.**

**We convert it into a string.**

**For production-scale systems, you'd typically introduce a shared messaging layer**

```text
**Client
   ↓
Load Balancer
   ↓
┌──────────┐
│ Server 1 │
└──────────┘
      ↕
 Redis Pub/Sub
      ↕
┌──────────┐
│ Server 2 │
└──────────┘**


