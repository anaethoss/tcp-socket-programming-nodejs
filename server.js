const net = require('net');
const HOST = '127.0.0.1';
const PORT = 6969;

// Creating Socket Server
const server = net.createServer(sock => {
  console.log(`CONNECTED: ${sock.remoteAddress} : ${sock.remotePort}`);
  // Data event
  sock.on('data', data => {
    console.log(`DATA ${sock.remoteAddress} : ${data}`);
    sock.write(`You Said: " ${data} "`);
  });

  // Close Event
  sock.on('close', data => {
    console.log(`CLOSED: ${sock.remoteAddress} ${sock.remotePort}`);
  });

});

// Server listening Port
server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT} `);
});

