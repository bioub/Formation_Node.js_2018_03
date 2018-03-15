const net = require('net');

const server = net.createServer();

server.on('listening', () => {
  console.log('Server started');
});

server.on('error', (err) => {
  console.log(err);
});

server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.on('data', () => {
    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-type: text/html\r\n');
    socket.write('\r\n');
    socket.write('<h2>Hello</h2>\r\n');
    socket.end();
  });
});

server.listen(8080);
