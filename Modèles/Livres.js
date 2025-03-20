const mongoose = require('mongoose');
const Auteur = require('./Auteur');

const livreSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  Auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  dateDePublication: Date,
  pages: Number,
  genre: String
});

module.exports = mongoose.model('Livre', livreSchema);
