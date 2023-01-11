const { connectionKnex } = require('../database/knex/index');

const { DiskStorage } = require('../providers/DiskStorage')


class DishesWithAvatarAdminRepository {


  async searchByName(name) {
    const dishesName = await connectionKnex("dishes").where({ name });
    return dishesName;
  }

  async searchById(id) {
    const dishesId = await connectionKnex("dishes").where({ id });
    return dishesId;
  }




  async createDishes({ name, description, price, ingredients, dishFilename }) {

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(dishFilename);

    const dishesId = await connectionKnex("dishes").insert({
      name,
      description,
      price,
      image: filename,
    });


    const ingredientsId = await connectionKnex("ingredients").insert({ ingredients, dish_id: dishesId });


    return ({ id: dishesId, ingredientsId });

    // return ({ name, description, price, ingredients, dishFilename })

  }


}

module.exports = { DishesWithAvatarAdminRepository }