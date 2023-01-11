const { Router } = require('express');

const { IngredientsController } = require('../controllers/IngredientsController');

const ingredientsDessertRoutes = Router();

const ingredientsController = new IngredientsController();

// ingredientsDessertRoutes.get('/:dish_id', ingredientsController.indexIngredients);
// ingredientsDessertRoutes.put('/:dish_id', ingredientsController.updateIngredients);
ingredientsDessertRoutes.put('/:dish_id', ingredientsController.updateDessertIngredients);
// ingredientsDessertRoutes.post('/', ingredientsController.createIngredient);

module.exports = { ingredientsDessertRoutes };