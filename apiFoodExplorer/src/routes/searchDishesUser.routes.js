const { Router } = require('express');

const { SearchDishesController } = require('../controllers/SearchDishesController');

const searchDishesUserRoutes = Router();

const searchDishesController = new SearchDishesController();



searchDishesUserRoutes.get('/', searchDishesController.searchDish);



module.exports = { searchDishesUserRoutes };