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


## Screenshots

### Server

![WebSocket Server](./assets/server.png)

### Clients

<p align="center">
  <img src="./assets/dobby.png" width="45%" />
  <img src="./assets/hermione.png" width="45%" />
</p>