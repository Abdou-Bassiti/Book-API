//intitalisation 
const express = require('express')
const mongoose = require('mongoose')
const server = express()
//activer la lecture en JSON
server.use(express.json())

const mongoose = require('mongoose')
const port = 8000;




  server.listen(port, () => {
    console.log(`Server est lancer sur le port ${port}`)
})



mongoose.connect('mongodb+srv://Abdoul:bassiti97@abdou-bassiti.semza.mongodb.net/?retryWrites=true&w=majority&appName=Abdou-Bassiti')
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion", err));

