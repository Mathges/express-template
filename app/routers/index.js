//! Dans ce fichier on va regrouper tout nos routers dédiés aaux entitées
// imports

const { Router } = require('express');
const entityRouter = require('./entityRouter');

// Définiton du router principal
const mainRouter = new Router();

// Utilisation d'un sous-router
mainRouter.use(entityRouter);

//^ ici on pourra ajouter des middlewares utilisables par le mainRouter
//^ mainRouter.use(middlewareForMainRouter);

// export

module.exports = mainRouter;