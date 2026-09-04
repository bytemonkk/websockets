import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8080");

const name = process.argv[2];

ws.on("open", () => {
  console.log(`${name} connected!`);
  ws.send(`Hello from ${name}!`);
});

ws.on("message", (message) => {
  console.log(`${name} received:`, message.toString());
});

ws.on("error", (error) => {
  console.log("Error:", error.message);
});