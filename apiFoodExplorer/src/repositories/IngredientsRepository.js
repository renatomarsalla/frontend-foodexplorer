const { connectionKnex } = require('../database/knex/index');

class IngredientsRepository {
  async indexIngredients(dish_id) {
    const id_dish = await connectionKnex('ingredients').where({ dish_id });

    // console.log(id_dish)

    return (id_dish);
  }

  async indexDessertIngredients(dish_id) {
    const id_dish = await connectionKnex('ingredientsDessert').where({ dish_id });

    console.log(id_dish)

    return (id_dish);
  }

  async indexDrinkIngredients(dish_id) {
    const id_dish = await connectionKnex('ingredientsDrink').where({ dish_id });

    console.log(id_dish)

    return (id_dish);
  }



  async createIngredient({ ingredients, image }) {
    const dishesId = await connectionKnex("listIngredients").insert({
      image,
      ingredients
    });

    return ({ id: dishesId });
  }

  async updateIngredients({ ingredients, dish_id }) {
    const updatedIngredientId = await connectionKnex("ingredients").where({ dish_id }).update({
      ingredients,
      dish_id
    });
    return ({ id: updatedIngredientId });
  }

  async updateDessertIngredients({ ingredients, dish_id }) {
    const updatedDessertIngredientId = await connectionKnex("ingredientsDessert").where({ dish_id }).update({
      ingredients,
      dish_id
    });
    return ({ id: updatedDessertIngredientId });
  }

  async updateDrinkIngredients({ ingredients, dish_id }) {
    const updatedDrinkIngredientId = await connectionKnex("ingredientsDrink").where({ dish_id }).update({
      ingredients,
      dish_id
    });
    return ({ id: updatedDrinkIngredientId });
  }
}

module.exports = { IngredientsRepository };