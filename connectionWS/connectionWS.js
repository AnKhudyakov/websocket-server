//import { aWss } from "../index.js";
import Message from "../models/Message.js";

export let clients = [];

const connectionWS = async (ws, req) => {
  ws.on("message", (msg) => {
    msg = JSON.parse(msg);
    switch (msg.event) {
      case "message":
        broadcastMessage(ws, msg);
        break;
      case "connection":
        broadcastConnection(ws, msg);
        break;
    }
  });
};

const broadcastMessage = async (ws, msg) => {
  await createNewMessage(msg);
  clients.forEach((client) => {
    if (client.name === msg.recipient) {
      client.socket.send(JSON.stringify(msg));
    }
  });
};

const createNewMessage = async (msg) => {
  const message = new Message(msg);
  await message.save();
};

const broadcastConnection = (ws, msg) => {
  if (!clients.filter((el) => el.name === msg.name).length) {
    clients.push({
      name: msg.name,
      socket: ws,
    });
  } else {
    clients = clients.map((el) =>
      el.name === msg.name ? { ...el, socket: ws } : el
    );
  }
};

export default connectionWS;
