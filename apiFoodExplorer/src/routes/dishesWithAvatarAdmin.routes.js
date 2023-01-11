const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DishesWithAvatarAdminController } = require('../controllers/DishesAdminWithAvatarController');
// const { DishesAvatarController } = require('../controllers/DishesAvatarController');

const dishesWithAvatarRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dishesAdminWithAvatarController = new DishesWithAvatarAdminController();
// const dishesAvatarController = new DishesAvatarController();

dishesWithAvatarRoutes.post('/', upload.single("avatar"), dishesAdminWithAvatarController.createDishes);

// dishesWithAvatarRoutes.post('/', dishesAdminWithAvatarController.createDishes);

module.exports = { dishesWithAvatarRoutes }; 