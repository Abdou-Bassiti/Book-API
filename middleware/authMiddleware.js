//chargement des modules
const express = require('express')
const jwt = require('jsonwebtoken')


const port = 8000
// initialisation de express
const server = express()

//activer la lecture en JSON
server.use(express.json())

const generateToken = (user) => {

    return jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });

};


server.listen(port, ()=>{
    console.log("Hello les gens")
})