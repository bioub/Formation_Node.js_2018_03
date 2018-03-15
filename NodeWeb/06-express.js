const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h2>Hello</h2>');
});

app.get('/hello/:prenom', (req, res, next) => {
  res.send(`<h2>Bonjour ${req.params.prenom}</h2>`);
});

app.get('/redirect', (req, res, next) => {
  res.redirect('/');
});

app.get('/api/contacts/12', (req, res, next) => {
  res.json({prenom: 'Romain'});
});

/*
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
*/

app.listen(8080, () => {
  console.log('Server started');
});
