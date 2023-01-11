const { connectionKnex } = require('../database/knex/index');

class SearchDessertsRepository {



  async searchDessert(name, ingredients) {

    // const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy('name');

    // return dishes


    if (ingredients) {

      const dishes = await connectionKnex('ingredientsDessert')
        .select(["desserts.id", "desserts.name"])
        // .where("ingredients.dish_id", ingredients)
        .whereLike("ingredients", `%${ingredients}%`).innerJoin("desserts", "desserts.id", "ingredientsDessert.dish_id");

      return dishes;

    } else {

      const dishes = await connectionKnex('desserts').whereLike("name", `%${name}%`).orderBy('name');

      return dishes;
    }






  }
}


module.exports = { SearchDessertsRepository };