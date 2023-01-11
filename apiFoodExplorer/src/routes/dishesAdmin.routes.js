const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DishesAdminController } = require('../controllers/DishesAdminController');
const { DishesAvatarController } = require('../controllers/DishesAvatarController');

const dishesRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dishesAdminController = new DishesAdminController();
const dishesAvatarController = new DishesAvatarController();

// dishesRoutes.post('/', dishesAdminController.createDishes);
dishesRoutes.put('/:id', dishesAdminController.updateDish);
dishesRoutes.delete('/:id', dishesAdminController.deleteDish);
dishesRoutes.patch('/avatar/:id', upload.single("avatar"), dishesAvatarController.update)
// dishesRoutes.post('/avatar', upload.single("avatar"), dishesAvatarController.create)

module.exports = { dishesRoutes };