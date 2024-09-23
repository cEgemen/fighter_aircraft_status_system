const express = require("express");
const WebSocket = require("ws");

const { startBroadcasting, stopBroadcasting } = require("./broadcast-manager.js");

const app = express();
const port = 5175;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("connection ...")
  ws.on("message", (message) => {
    const data = JSON.parse(message)
    console.log("on(message) : ",data)
    console.log("message === START : ",data === "START")
    if(data === "START") {
      console.log("Received START message");
      stopBroadcasting();
      startBroadcasting(ws);
    }
    else if(data === "STOP") {
      console.log("Received STOP message");
      stopBroadcasting();
    }

  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});
