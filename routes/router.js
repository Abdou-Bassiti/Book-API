const express = require('express');
const router = express.Router();
const Auteur = require('../models/Auteur');
const Livres = require('../models/Livres');

//CRUD des les livres
// Créer un livre
router.post('/', (req, res) => {
  const livre = new Livres(req.body);
  livre.save()
    .then(savedLivres => res.status(201).json(savedLivres))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Lire tous les livres
router.get('/', (req, res) => {
  Livres.find()
    .then(livres => res.json(livres))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Lire un livre par ID
router.get('/:id', (req, res) => {
  Livres.findById(req.params.id)
    .then(livre => {
      if (!livre) return res.status(404).json({ message: "Livre non trouvé" });
      res.json(livre);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Mettre à jour un livre
router.put('/:id', (req, res) => {
  Livres.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedLivres => {
      if (!updatedLivres) return res.status(404).json({ message: "Livre non trouvé" });
      res.json(updatedLivres) 
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Supprimer un livre
router.delete('/:id', (req, res) => {
  Livres.findByIdAndDelete(req.params.id)
    .then(deletedLivres => {
      if (!deletedLivres) return res.status(404).json({ message: "Livre non trouvé" });
      res.json({ message: 'Livre supprimé' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});


//CRUD des Auteurs
// Créer un auteur
router.post('/', (req, res) => {
  const auteur = new Author(req.body);
  auteur.save()
    .then(savedAuteur => res.status(201).json(savedAuteur))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Lire tous les auteurs
router.get('/', (req, res) => {
  Auteur.find()
    .then(auteurs => res.json(auteurs))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Lire un auteur par ID
router.get('/:id', (req, res) => {
  Autheur.findById(req.params.id)
    .then(auteur => {
      if (!auteur) return res.status(404).json({ message: "Auteur non trouvé" });
      res.json(auteur);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Mettre à jour un auteur
router.put('/:id', (req, res) => {
  Auteur.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedAuteur => {
      if (!updatedAueur) return res.status(404).json({ message: "Auteur non trouvé" });
      res.json(updatedAuteur);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Supprimer un auteur
router.delete('/:id', (req, res) => {
  Auteur.findByIdAndDelete(req.params.id)
    .then(deletedAuteur => {
      if (!deletedAuteur) return res.status(404).json({ message: "Auteur non trouvé" });
      res.json({ message: 'Auteur supprimé' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
