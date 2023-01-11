const { connectionKnex } = require('../database/knex/index');


class DishesAdminRepository {
  // async checkIfIsAdmin(admin) {
  //   const isAdmin = await connectionKnex("users").where({ admin });
  //   return isAdmin;
  // }

  async searchByName(name) {
    const dishesName = await connectionKnex("dishes").where({ name });
    return dishesName;
  }

  async searchById(id) {
    const dishesId = await connectionKnex("dishes").where({ id });
    return dishesId;
  }

  // async createDishes({ name, description, price, image, ingredients }) {
  //   const dishesId = await connectionKnex("dishes").insert({
  //     name,
  //     description,
  //     price,
  //     image,
  //   });


  //   const ingredientsId = await connectionKnex("ingredients").insert({ ingredients, dish_id: dishesId });


  //   return ({ id: dishesId, ingredientsId });

  // }

  async updateDishes({ name, description, price, image, id, ingredients }) {
    const updatedDishesId = await connectionKnex("dishes").where({ id }).update({
      name,
      description,
      price,
      image,
      id,
      ingredients,

    });
    // const updatedIngredientsDishesId = await connectionKnex("ingredients").where({ dish_id: id }).update({
    //   ingredients

    // });



    return ({ id: updatedDishesId });

  }

  async deleteDish(id) {
    const deleteDish = await connectionKnex("dishes").where({ id }).delete({ id });
    return deleteDish;
  }
}

module.exports = { DishesAdminRepository }