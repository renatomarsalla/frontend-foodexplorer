const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DrinksAdminController } = require('../controllers/DrinksAdminController');
const { DrinksAvatarController } = require('../controllers/DrinksAvatarController');

const drinksRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const drinksAdminController = new DrinksAdminController();
const drinksAvatarController = new DrinksAvatarController();

drinksRoutes.post('/', drinksAdminController.createDrinks);
drinksRoutes.put('/:id', drinksAdminController.updateDrink);
drinksRoutes.delete('/:id', drinksAdminController.deleteDrink);
drinksRoutes.patch('/avatar/:id', upload.single("avatar"), drinksAvatarController.update)

module.exports = { drinksRoutes };