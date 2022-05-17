//! Dans ce fichier on définit le Modèle d'une Classe

// imports
const { Model, DataTypes } = require('sequelize');
const connexion = require('../database');

// héritage de la Super-Classe de Sequelize
class Entity extends Model {}

// définition de la classe
//* init des propriétés
Entity.init({
    //* on met ensuite les attributs qu'on type (en accord avec la DB) 
    //* auxquels on peut ajouter diverses propriétés
    attribut: {
        type: DataTypes.TEXT,
    }
}, {
    //* on passe l'instance de connexion
    sequelize: connexion,
    //* on identifie à quelle table raccorder la classe
    tableName: "entity"
});

// export
module.exports = Entity;
