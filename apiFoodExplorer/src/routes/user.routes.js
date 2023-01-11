const { Router } = require('express');

const { UserController } = require('../controllers/UserController.js');
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated.js');

const usersRoutes = Router();

const userController = new UserController();

usersRoutes.post('/', userController.create);
usersRoutes.put('/', ensureAuthenticated, userController.updateUser);
// usersRoutes.put('/:id', userController.updateUser);

module.exports = { usersRoutes };