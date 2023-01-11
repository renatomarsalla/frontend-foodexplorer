const { connectionKnex } = require('../database/knex/index');

const { DiskStorage } = require('../providers/DiskStorage')


class DessertWithAvatarAdminRepository {


  async searchByName(name) {
    const dishesName = await connectionKnex("desserts").where({ name });
    return dishesName;
  }

  async searchById(id) {
    const dishesId = await connectionKnex("desserts").where({ id });
    return dishesId;
  }




  async createDesserts({ name, description, price, ingredients, dishFilename }) {

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(dishFilename);

    const dishesId = await connectionKnex("desserts").insert({
      name,
      description,
      price,
      image: filename,
    });


    const ingredientsId = await connectionKnex("ingredientsDessert").insert({ ingredients, dish_id: dishesId });


    return ({ id: dishesId, ingredientsId });

    // return ({ name, description, price, ingredients, dishFilename })

  }


}

module.exports = { DessertWithAvatarAdminRepository }