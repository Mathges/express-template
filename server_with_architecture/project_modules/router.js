// importation du module express pour pouvoir utliser la classe Router
const express = require('express');
const router = express.Router();

// définition d'une route
router.get('/', (req, res) => {
    // la fonction render permet d'envoyer un fichier (ici celui de notre page d'accueil) ejs
    res.render('index.ejs')
})

// export du module router
module.exports = router;