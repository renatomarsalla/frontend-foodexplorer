const { connectionKnex } = require('../database/knex/index');

class IngredientsAvatarRepository {

  async getIdDish(id) {
    const dish = await connectionKnex("dishes").where({ id }).first();

    return dish;
  }

  async saveAvatar(avatar, id) {
    const dishAvatar = await connectionKnex('dishes').where({ id }).update({
      image: avatar
    });

    return dishAvatar;
  }
}

module.exports = { IngredientsAvatarRepository }