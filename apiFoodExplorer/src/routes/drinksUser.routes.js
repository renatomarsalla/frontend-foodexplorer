const { Router } = require('express');

const { DrinksController } = require('../controllers/DrinksController');

const drinksUserRoutes = Router();

const drinksController = new DrinksController();

drinksUserRoutes.get('/:id', drinksController.showDrinks);

drinksUserRoutes.get('/', drinksController.indexDrinks);

module.exports = { drinksUserRoutes };