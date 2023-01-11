const { Router } = require('express');

const { DishesController } = require('../controllers/DishesController');

const dishesUserRoutes = Router();

const dishesController = new DishesController();

dishesUserRoutes.get('/:id', dishesController.showDishes);

dishesUserRoutes.get('/', dishesController.indexDishes);

dishesUserRoutes.get('/', dishesController.searchDish);

// dishesUserRoutes.get('/files', dishesController.showDishesImages);

module.exports = { dishesUserRoutes };