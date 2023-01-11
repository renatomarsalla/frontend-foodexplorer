const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DessertsWithAvatarAdminController } = require('../controllers/DessertsAdminWithAvatarController');
// const { DishesAvatarController } = require('../controllers/DishesAvatarController');

const dessertsWithAvatarRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dessertsWithAvatarAdminController = new DessertsWithAvatarAdminController();
// const dishesAvatarController = new DishesAvatarController();

dessertsWithAvatarRoutes.post('/', upload.single("avatar"), dessertsWithAvatarAdminController.createDesserts);

// dessertsWithAvatarRoutes.post('/', dishesAdminWithAvatarController.createDishes);

module.exports = { dessertsWithAvatarRoutes }; 