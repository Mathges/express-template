// import des modules nécéssaires
const express = require('express');
const router = require('./router');

// création du server
const server = express();

// paramétrage du server
server.set('port', 3000);
server.set('baseUrl', 'http://localhost:');

// on notifie à au server qu'on va utiliser notre router
server.use(router);

// définition d'EJS comme moteur de rendu de notre server
server.set('view engine', 'ejs');
server.set('views', 'views');

// on indique à express qu'on va utiliser des méthodes permettant de traiter des fochiers statics dans le dossier correspondant
server.use(express.static('static'));

// définition de l'écoute sur le port 3000
server.listen(server.get('port'), () => {
    console.log(`listening to ${server.get('baseUrl')}${server.get('port')}`)
})

//export du server
module.exports = server;