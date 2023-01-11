const { connectionKnex } = require('../database/knex/index');

class SearchDishesRepository {



  async searchDish(name, ingredients) {

    // const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy('name');

    // return dishes


    if (ingredients) {

      const dishes = await connectionKnex('ingredients')
        .select(["dishes.id", "dishes.name"])
        // .where("ingredients.dish_id", ingredients)
        .whereLike("ingredients", `%${ingredients}%`).innerJoin("dishes", "dishes.id", "ingredients.dish_id");

      return dishes;

    } else {

      const dishes = await connectionKnex('dishes').whereLike("name", `%${name}%`).orderBy('name');

      return dishes;
    }






  }
}


module.exports = { SearchDishesRepository };