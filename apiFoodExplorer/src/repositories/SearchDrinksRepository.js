const { connectionKnex } = require('../database/knex/index');

class SearchDrinksRepository {



  async searchDrink(name, ingredients) {

    // const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy('name');

    // return dishes


    if (ingredients) {

      const dishes = await connectionKnex('ingredientsDrink')
        .select(["drinks.id", "drinks.name"])
        // .where("ingredients.dish_id", ingredients)
        .whereLike("ingredients", `%${ingredients}%`).innerJoin("drinks", "drinks.id", "ingredientsDrink.dish_id");

      return dishes;

    } else {

      const dishes = await connectionKnex('drinks').whereLike("name", `%${name}%`).orderBy('name');

      return dishes;
    }






  }
}


module.exports = { SearchDrinksRepository };