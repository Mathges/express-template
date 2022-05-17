//! Dans ce fichier on définit les routes relatives à l'entitée

// imports
const { Router } = require('express');
const entityController = require('../controllers/entityController');

// Instanciation du router
const router = new Router();

// Définition d'une route
router.get('/', entityController.method);

module.exports = router;