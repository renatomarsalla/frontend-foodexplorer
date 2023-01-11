const { connectionKnex } = require('../database/knex/index');


class DessertsAdminRepository {

  async searchByName(name) {
    const dessertsName = await connectionKnex("desserts").where({ name });
    return dessertsName;
  }

  async searchById(id) {
    const dessertsId = await connectionKnex("desserts").where({ id });
    return dessertsId;
  }

  async createDessert({ name, description, price, image, ingredients }) {
    const dessertsId = await connectionKnex("desserts").insert({
      name,
      description,
      price,
      image,
    });


    const ingredientsId = await connectionKnex("ingredientsDessert").insert({ ingredients, dish_id: dessertsId });

    return ({ id: dessertsId, ingredientsId });

  }

  async updateDessert({ name, description, price, image, id, ingredients }) {
    const updatedDessertsId = await connectionKnex("desserts").where({ id }).update({
      name,
      description,
      price,
      image,
      id,
      ingredients,

    });

    // const updatedIngredientDessertsId = await connectionKnex("ingredientsDessert").where({ dish_id: id }).update({
    //   ingredients

    // });

    return ({ id: updatedDessertsId });

  }

  async deleteDessert(id) {
    const deleteDessert = await connectionKnex("desserts").where({ id }).delete({ id });
    return deleteDessert;
  }
}

module.exports = { DessertsAdminRepository }