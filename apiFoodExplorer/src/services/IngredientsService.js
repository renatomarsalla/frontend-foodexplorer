const { AppError } = require('../utils/AppError')


class IngredientsService {
  constructor(ingredientsRepository) {
    this.ingredientsRepository = ingredientsRepository;
  }
  async executeIndex(dish_id) {
    const showIngredients = await this.ingredientsRepository.indexIngredients(dish_id);

    return showIngredients;
  }

  async execute({ ingredients, image }) {
    const ingredient = await this.ingredientsRepository.createIngredient({ ingredients, image });

    return ingredient;

  }

  async updateIngredients({ dish_id, ingredients }) {
    const dish = await this.ingredientsRepository.indexIngredients(dish_id);
    if (dish.length === 0) {
      throw new AppError("Dish does not exist");
    }

    console.log(dish);

    // return dish;

    dish[0].ingredients = ingredients ?? dish[0].ingredients;
    dish[0].dish_id = dish_id ?? dish[0].dish_id;
    // console.log(dish[0].Ingredients);

    const ingredientsUpdated = await this.ingredientsRepository.updateIngredients({
      dish_id: dish[0].dish_id,
      ingredients: dish[0].ingredients
    });

    return ingredientsUpdated;

  }
  async updateDessertIngredients({ dish_id, ingredients }) {
    const dish = await this.ingredientsRepository.indexDessertIngredients(dish_id);
    if (dish.length === 0) {
      throw new AppError("Dish does not exist");
    }

    console.log(dish);

    // return dish;

    dish[0].ingredients = ingredients ?? dish[0].ingredients;
    dish[0].dish_id = dish_id ?? dish[0].dish_id;
    // console.log(dish[0].Ingredients);

    const ingredientsUpdated = await this.ingredientsRepository.updateDessertIngredients({
      dish_id: dish[0].dish_id,
      ingredients: dish[0].ingredients
    });

    return ingredientsUpdated;

  }
  async updateDrinkIngredients({ dish_id, ingredients }) {
    const dish = await this.ingredientsRepository.indexDrinkIngredients(dish_id);
    if (dish.length === 0) {
      throw new AppError("Dish does not exist");
    }

    console.log(dish);

    // return dish;

    dish[0].ingredients = ingredients ?? dish[0].ingredients;
    dish[0].dish_id = dish_id ?? dish[0].dish_id;
    // console.log(dish[0].Ingredients);

    const ingredientsUpdated = await this.ingredientsRepository.updateDrinkIngredients({
      dish_id: dish[0].dish_id,
      ingredients: dish[0].ingredients
    });

    return ingredientsUpdated;

  }
}

module.exports = { IngredientsService }