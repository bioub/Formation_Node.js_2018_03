const net = require('net');

const socket = net.createConnection(80, 'www.google.fr');

socket.on('connect', () => {
  console.log('Connected to www.google.fr');

  socket.write('GET /search?q=node.js HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.write('User-agent: Romain Bot\r\n');
  socket.write('\r\n');
});

// Utiliser soit Request (callback async)
// soit axios (Promise) compatible node et browser

/*
socket.on('data', (data) => {
  console.log(data.toString());
  socket.end();
});
*/
socket.pipe(process.stdout);
