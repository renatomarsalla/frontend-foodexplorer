const { connectionKnex } = require('../database/knex/index');


class DrinksAdminRepository {

  async searchByName(name) {
    const drinksName = await connectionKnex("drinks").where({ name });
    return drinksName;
  }

  async searchById(id) {
    const drinksId = await connectionKnex("drinks").where({ id });
    return drinksId;
  }

  async createDrink({ name, description, price, image, ingredients }) {
    const drinksId = await connectionKnex("drinks").insert({
      name,
      description,
      price,
      image,
    });


    const ingredientsId = await connectionKnex("ingredientsDrink").insert({ ingredients, dish_id: drinksId });

    return ({ id: drinksId, id: ingredientsId });

  }

  async updateDrink({ name, description, price, image, id, ingredients }) {
    const updatedDrinksId = await connectionKnex("drinks").where({ id }).update({
      name,
      description,
      price,
      image,
      id,
      ingredients,

    });

    // const updatedIngredientsDrinksId = await connectionKnex("ingredientsDrink").where({ dish_id: id }).update({
    //   ingredients

    // });

    return ({ id: updatedDrinksId });


  }

  async deleteDrink(id) {
    const deleteDrink = await connectionKnex("drinks").where({ id }).delete({ id });
    return deleteDrink;
  }
}

module.exports = { DrinksAdminRepository }