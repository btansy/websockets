const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});