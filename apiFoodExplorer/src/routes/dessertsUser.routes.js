const { Router } = require('express');

const { DessertsController } = require('../controllers/DessertsController');

const dessertsUserRoutes = Router();

const dishesController = new DessertsController();

dessertsUserRoutes.get('/:id', dishesController.showDesserts);

dessertsUserRoutes.get('/', dishesController.indexDesserts);

module.exports = { dessertsUserRoutes };