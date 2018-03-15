const express = require('express');
const routesContact = require('./routes/contact');

const app = express();

app.use('/api/contacts', routesContact);

module.exports = app;
