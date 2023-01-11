const { connectionKnex } = require('../database/knex/index');

class DrinksRepository {
  async showDrinks(id) {
    const drinks = await connectionKnex('drinks').where({ id }).first();
    // console.log(dishes);

    const ingredients = await connectionKnex('ingredientsDrink').where({ dish_id: id }).orderBy("ingredients");

    const drinkWithIngredients = { ...drinks, ingredients };
    console.log(drinkWithIngredients);

    // return ({ ...dishes, ingredients });
    // console.log('oi');
    return (drinkWithIngredients);
  }

  async indexDrinks() {

    const drinks = await connectionKnex('drinks').orderBy('name');

    console.log(drinks);

    return drinks;


  }





}

module.exports = { DrinksRepository };