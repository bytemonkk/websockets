import express from "express";
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Active socket connections store
const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);
  console.log("New player connected to live chat.");

  ws.on("message", (message) => {
    const payload = message.toString();
    
    // Broadcast chat message to all connected player clients
    for (const client of clients) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
    console.log("Player disconnected.");
  });
});

server.listen(8080, () => console.log("Chat server running on port 8080"));