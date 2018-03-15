const app = require('./app');
const http = require('http');
// const https = require('https');

const server = http.createServer(app);
// const sercureServer = https.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(8080, () => {
  console.log('Server started');
});
