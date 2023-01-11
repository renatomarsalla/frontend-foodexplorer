const { Router } = require('express');

const { SearchDessertsController } = require('../controllers/SearchDiessertsController');

const searchDessertsUserRoutes = Router();

const searchDessertsController = new SearchDessertsController();



searchDessertsUserRoutes.get('/', searchDessertsController.searchDessert);



module.exports = { searchDessertsUserRoutes };