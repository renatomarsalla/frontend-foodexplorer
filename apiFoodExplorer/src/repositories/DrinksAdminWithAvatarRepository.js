const { connectionKnex } = require('../database/knex/index');

const { DiskStorage } = require('../providers/DiskStorage')


class DrinksWithAvatarAdminRepository {


  async searchByName(name) {
    const dishesName = await connectionKnex("drinks").where({ name });
    return dishesName;
  }

  async searchById(id) {
    const dishesId = await connectionKnex("drinks").where({ id });
    return dishesId;
  }




  async createDrinks({ name, description, price, ingredients, dishFilename }) {

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(dishFilename);

    const dishesId = await connectionKnex("drinks").insert({
      name,
      description,
      price,
      image: filename,
    });


    const ingredientsId = await connectionKnex("ingredientsDrink").insert({ ingredients, dish_id: dishesId });


    return ({ id: dishesId, ingredientsId });

    // return ({ name, description, price, ingredients, dishFilename })

  }


}

module.exports = { DrinksWithAvatarAdminRepository }