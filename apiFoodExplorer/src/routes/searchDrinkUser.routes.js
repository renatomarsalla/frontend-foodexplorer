const { Router } = require('express');

const { SearchDrinksController } = require('../controllers/SearchDrinksController');

const searchDrinksUserRoutes = Router();

const searchDrinksController = new SearchDrinksController();



searchDrinksUserRoutes.get('/', searchDrinksController.searchDrinks);



module.exports = { searchDrinksUserRoutes };