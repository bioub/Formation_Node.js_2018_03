const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
  prenom: { type: String, required: true },
  nom: { type: String }
})

module.exports = contactSchema
