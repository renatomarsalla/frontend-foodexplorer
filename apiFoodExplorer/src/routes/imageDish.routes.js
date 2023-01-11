const { Router } = require('express');

const { ImagesDishesController } = require('../controllers/ImagesDishesController');

const imagesDishRoutes = Router();

const imagesDishesController = new ImagesDishesController();



imagesDishRoutes.get('/', imagesDishesController.showDishesImages);

module.exports = { imagesDishRoutes };