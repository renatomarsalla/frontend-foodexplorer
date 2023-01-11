const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { MyOrderController } = require('../controllers/MyOrderController');
// const { DishesAvatarController } = require('../controllers/DishesAvatarController');

const orderRoutes = Router();

// const upload = multer(uploadConfig.MULTER);

const myOrderController = new MyOrderController();
// const dishesAvatarController = new DishesAvatarController();

// orderRoutes.post('/', upload.single("avatar"), dessertsWithAvatarAdminController.createDesserts);

orderRoutes.post('/:id', myOrderController.createOrder);
orderRoutes.get('/:user_id', myOrderController.getOrder);
orderRoutes.delete('/:user_id/:id', myOrderController.deleteItem);

module.exports = { orderRoutes }; 