const mongoose = require('mongoose')
const Schema = mongoose.Schema

const societeSchema = new Schema({
  nom: { type: String, required: true },
  ville: { type: String }
})

module.exports = societeSchema
