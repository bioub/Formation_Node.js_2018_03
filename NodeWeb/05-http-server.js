const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  switch (req.url) {
    case '/':
      res.write('<h2>Hello</h2>');
      break;
    case '/pause':
      res.write('<h2>Pause</h2>');
      break;
    default:
      res.statusCode = 404;

      res.write('<h2>Not Found</h2>');
  }

  res.end();
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('Server started');
});
