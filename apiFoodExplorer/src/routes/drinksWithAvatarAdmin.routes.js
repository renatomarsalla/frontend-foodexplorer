const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DrinksWithAvatarAdminController } = require('../controllers/DrinksAdminWithAvatarController');
// const { DishesAvatarController } = require('../controllers/DishesAvatarController');

const drinksWithAvatarRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const drinksWithAvatarAdminController = new DrinksWithAvatarAdminController();
// const dishesAvatarController = new DishesAvatarController();

drinksWithAvatarRoutes.post('/', upload.single("avatar"), drinksWithAvatarAdminController.createDrinks);

// drinksWithAvatarRoutes.post('/', dishesAdminWithAvatarController.createDishes);

module.exports = { drinksWithAvatarRoutes }; 