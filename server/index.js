const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
var cors = require('cors');
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log('Listening on port: ' + PORT));

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log('SENDING');
        client.send(data);
      }
    });
  });
});