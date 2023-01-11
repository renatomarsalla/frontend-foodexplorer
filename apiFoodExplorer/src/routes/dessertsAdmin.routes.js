const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload')

const { DessertsAdminController } = require('../controllers/DessertsAdminController');
const { DessertsAvatarController } = require('../controllers/DessertsAvatarController');

const dessertsRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dessertsAdminController = new DessertsAdminController();
const dessertsAvatarController = new DessertsAvatarController();

dessertsRoutes.post('/', dessertsAdminController.createDessert);
dessertsRoutes.put('/:id', dessertsAdminController.updateDessert);
dessertsRoutes.delete('/:id', dessertsAdminController.deleteDessert);
dessertsRoutes.patch('/avatar/:id', upload.single("avatar"), dessertsAvatarController.update)
// dessertsRoutes.post('/avatar', upload.single("avatar"), dessertsAvatarController.update)

module.exports = { dessertsRoutes };