//! Dans ce fichier on instancie une connexion à notre DB

// imports
const { Sequelize } = require('sequelize');

// instanciation de la connexion
const connexion = new Sequelize(process.env.PG_URL, {
    //* on peut changer ou passer des paramètres à notre instance
    define: {
        //^ paramètres ici
    }
});

module.exports = connexion;
