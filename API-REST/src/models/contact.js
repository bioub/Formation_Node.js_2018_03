const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
  },
  email: String,
  telephone: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
