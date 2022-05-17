// imports
require('dotenv').config();
const express = require('express');
const router = require('./app/routers');

//* création de l'instance express
const app = express();


// middlewares

//* pour les body de type x-www-form-url-encoded
app.use(express.urlencoded({ extended: true }));
//* définition du dossier static
app.use(express.static('public'));

//* utlilisation du router
app.use(router);

// Démarrage de l'App

//* récupération du port du .env
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});