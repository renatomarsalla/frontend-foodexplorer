const { connectionKnex } = require('../database/knex/index');

class DessertsRepository {
  async showDesserts(id) {
    const desserts = await connectionKnex('desserts').where({ id }).first();
    // console.log(dishes);

    const ingredients = await connectionKnex('ingredientsDessert').where({ dish_id: id }).orderBy("ingredients");

    const dessertsWithIngredients = { ...desserts, ingredients };
    console.log(dessertsWithIngredients);


    return (dessertsWithIngredients);
  }

  async indexDesserts() {

    const desserts = await connectionKnex('desserts').orderBy('name');

    console.log(desserts);

    return desserts;


  }





}

module.exports = { DessertsRepository };