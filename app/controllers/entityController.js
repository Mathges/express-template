//! Dans ce fichier on va créer nos méthodes nécéssaires pour le router relatif à notre entitée

// imports
//! si associations avec Sequelize
//! appeler le fichier dans lequel les associations sont définies

const { Entity } = require('../models');

// Déclaration du controller
const entityController = {
    //! méthode totalement arbitraire
    //! penser à mettre en async/await si on contact la db
    method(req, res) {
        res.send("OK");
    }

    //^ on remplit notre controller des méthodes dont on a besoin
};

// export
module.exports = entityController;