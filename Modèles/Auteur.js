const mongoose = require('mongoose');

const auteurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  birthdate: Date
});

module.exports = mongoose.model('Auteur', auteurSchema);
