const express = require('express');
const routesContact = require('./routes/contact');
const morgan = require('morgan');
const notFound = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

// TODO, utiliser des Doubles dans les tests
// puis se connecter dans index.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const app = express();

app.use(morgan('dev'));
app.use('/api/contacts', routesContact);

app.use(notFound);
app.use(errorMiddleware);

module.exports = app;
