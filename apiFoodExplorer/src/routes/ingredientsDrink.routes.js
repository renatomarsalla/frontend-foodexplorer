const { Router } = require('express');

const { IngredientsController } = require('../controllers/IngredientsController');

const ingredientsDrinkRoutes = Router();

const ingredientsController = new IngredientsController();

// ingredientsDrinkRoutes.get('/:dish_id', ingredientsController.indexIngredients);
// ingredientsDrinkRoutes.put('/:dish_id', ingredientsController.updateIngredients);
ingredientsDrinkRoutes.put('/:dish_id', ingredientsController.updateDrinkIngredients);
// ingredientsDrinkRoutes.post('/', ingredientsController.createIngredient);

module.exports = { ingredientsDrinkRoutes };