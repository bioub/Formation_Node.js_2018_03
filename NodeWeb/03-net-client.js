const net = require('net');

const socket = net.createConnection(80, 'www.google.fr');

socket.on('connect', () => {
  console.log('Connected to www.google.fr');

  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: www.google.fr\r\n');
  socket.write('\r\n');
});

socket.on('data', (data) => {
  console.log(data.toString());
  socket.end();
});
